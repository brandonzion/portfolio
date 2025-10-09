"use client";

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { FaSpotify, FaCheck, FaExclamationTriangle } from 'react-icons/fa';

export default function SpotifyAuthPage() {
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const error = searchParams.get('error');
    const spotifyConnected = searchParams.get('spotify_connected');
    const refreshToken = searchParams.get('refresh_token');

    if (error) {
      setStatus('error');
      switch (error) {
        case 'access_denied':
          setMessage('You denied access to your Spotify account.');
          break;
        case 'missing_authorization_code':
          setMessage('Authorization code is missing.');
          break;
        case 'missing_spotify_credentials':
          setMessage('Spotify app credentials are not configured.');
          break;
        case 'authorization_failed':
          setMessage('Failed to complete authorization with Spotify.');
          break;
        default:
          setMessage(`Authorization error: ${error}`);
      }
    } else if (spotifyConnected && refreshToken) {
      setStatus('success');
      setMessage('Successfully connected to Spotify! You can now see your currently playing tracks.');
      
      // Store the refresh token (in a real app, you'd send this to your backend)
      localStorage.setItem('spotify_refresh_token', refreshToken);
    } else {
      setStatus('error');
      setMessage('Unknown authorization state.');
    }
  }, [searchParams]);

  const handleRetry = () => {
    // Redirect back to Spotify authorization
    const clientId = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
    const redirectUri = encodeURIComponent('http://127.0.0.1:3000/api/auth/spotify/callback');
    const scope = encodeURIComponent('user-read-currently-playing');
    
    const authUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}&scope=${scope}`;
    window.location.href = authUrl;
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-slate-800/50 backdrop-blur-sm border border-amber-600/20 rounded-xl p-8 text-center">
        <div className="mb-6">
          {status === 'loading' && (
            <div className="mx-auto w-16 h-16 border-4 border-amber-500 border-t-transparent rounded-full animate-spin"></div>
          )}
          {status === 'success' && (
            <FaCheck className="mx-auto text-green-500 text-4xl mb-4" />
          )}
          {status === 'error' && (
            <FaExclamationTriangle className="mx-auto text-red-500 text-4xl mb-4" />
          )}
        </div>

        <h1 className="text-3xl font-array font-bold text-amber-500 mb-4">
          {status === 'loading' && 'Connecting to Spotify...'}
          {status === 'success' && 'Spotify Connected!'}
          {status === 'error' && 'Authorization Failed'}
        </h1>

        <p className="text-slate-300 mb-6">
          {message}
        </p>

        <div className="flex flex-col space-y-3">
          {status === 'success' && (
            <Link
              href="/"
              className="inline-block px-6 py-3 bg-amber-600 hover:bg-amber-500 text-white font-medium rounded-lg transition-colors"
            >
              Return to Portfolio
            </Link>
          )}
          
          {status === 'error' && (
            <button
              onClick={handleRetry}
              className="inline-flex items-center justify-center px-6 py-3 bg-green-600 hover:bg-green-500 text-white font-medium rounded-lg transition-colors"
            >
              <FaSpotify className="mr-2" />
              Try Again
            </button>
          )}
          
          <Link
            href="/"
            className="inline-block px-6 py-3 border border-slate-600 hover:border-slate-500 text-slate-300 font-medium rounded-lg transition-colors"
          >
            Return to Portfolio
          </Link>
        </div>

        {status === 'success' && (
          <div className="mt-6 p-4 bg-slate-700/50 rounded-lg">
            <p className="text-slate-400 text-sm">
              Your Spotify account is now connected! The widget in the footer will show your currently playing tracks.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
