import { NextResponse } from 'next/server';

const SPOTIFY_TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token';
const SPOTIFY_NOW_PLAYING_ENDPOINT = 'https://api.spotify.com/v1/me/player/currently-playing';
const SPOTIFY_RECENTLY_PLAYED_ENDPOINT = 'https://api.spotify.com/v1/me/player/recently-played?limit=1';

export const runtime = 'edge';
export const revalidate = 0;

async function getAccessToken() {
  const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN;
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;

  if (!refreshToken || !clientId || !clientSecret) {
    throw new Error('Missing Spotify credentials');
  }

  const basic = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');

  const response = await fetch(SPOTIFY_TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      'Authorization': `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: refreshToken,
    }),
  });

  if (!response.ok) {
    throw new Error('Failed to get access token');
  }

  return response.json();
}

async function getNowPlaying(accessToken: string) {
  const response = await fetch(SPOTIFY_NOW_PLAYING_ENDPOINT, {
    headers: {
      'Authorization': `Bearer ${accessToken}`,
    },
  });

  if (response.status === 204) {
    return null; // Nothing is playing
  }

  if (!response.ok) {
    throw new Error('Failed to get now playing');
  }

  return response.json();
}

async function getRecentlyPlayed(accessToken: string) {
  const response = await fetch(SPOTIFY_RECENTLY_PLAYED_ENDPOINT, {
    headers: {
      'Authorization': `Bearer ${accessToken}`,
    },
  });

  if (!response.ok) {
    throw new Error('Failed to get recently played');
  }

  return response.json();
}

export async function GET() {
  try {
    const { access_token } = await getAccessToken();
    const data = await getNowPlaying(access_token);

    // If something is currently playing
    if (data && data.item) {
      const track = data.item;
      const isPlaying = data.is_playing;

      return NextResponse.json({
        isPlaying,
        name: track.name,
        artist: track.artists.map((artist: { name: string }) => artist.name).join(", "),
        album: track.album.name,
        albumImageUrl: track.album.images[0]?.url || null,
        songUrl: track.external_urls.spotify,
        previewUrl: track.preview_url,
        duration: track.duration_ms,
        progress: data.progress_ms,
        explicit: track.explicit,
      });
    }

    // Nothing playing - get recently played instead
    const recentlyPlayedData = await getRecentlyPlayed(access_token);
    
    if (recentlyPlayedData && recentlyPlayedData.items && recentlyPlayedData.items.length > 0) {
      const track = recentlyPlayedData.items[0].track;
      
      return NextResponse.json({
        isPlaying: false,
        lastPlayed: true,
        name: track.name,
        artist: track.artists.map((artist: { name: string }) => artist.name).join(", "),
        album: track.album.name,
        albumImageUrl: track.album.images[0]?.url || null,
        songUrl: track.external_urls.spotify,
        previewUrl: track.preview_url,
        duration: track.duration_ms,
        progress: 0,
        explicit: track.explicit,
      });
    }

    return NextResponse.json({
      isPlaying: false,
    });
  } catch (error) {
    console.error("Error fetching now playing:", error);
    
    const errorMessage = error instanceof Error ? error.message : "Failed to fetch now playing";
    
    return NextResponse.json(
      {
        isPlaying: false,
        error: errorMessage,
      },
      { status: 500 }
    );
  }
}

