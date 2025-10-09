"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaSpotify } from "react-icons/fa";
import Image from "next/image";

interface SpotifyTrack {
  name: string;
  artist: string;
  album: string;
  albumImageUrl: string | null;
  songUrl: string;
  previewUrl: string | null;
  isPlaying: boolean;
  lastPlayed?: boolean;
  duration: number;
  progress: number;
  explicit: boolean;
}

export default function SpotifyWidget() {
  const [track, setTrack] = useState<SpotifyTrack | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const fetchCurrentTrack = async () => {
      try {
        const response = await fetch('/api/spotify/now-playing');
        const data = await response.json();
        
        if (data.name && !data.error) {
          setTrack({
            name: data.name,
            artist: data.artist,
            album: data.album,
            albumImageUrl: data.albumImageUrl,
            songUrl: data.songUrl,
            previewUrl: data.previewUrl,
            isPlaying: data.isPlaying,
            lastPlayed: data.lastPlayed,
            duration: data.duration,
            progress: data.progress,
            explicit: data.explicit,
          });
          setError(null);
        } else {
          setTrack(null);
          if (data.error) {
            setError(data.error);
          }
        }
      } catch {
        setError("Unable to fetch track");
        setTrack(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCurrentTrack();
    
    const interval = setInterval(fetchCurrentTrack, 10000);
    
    return () => clearInterval(interval);
  }, []);

  const progressPercentage = track 
    ? Math.min((track.progress / track.duration) * 100, 100)
    : 0;

  if (isLoading) {
    return (
      <div className="flex items-center gap-2 text-slate-400">
        <FaSpotify className="text-amber-500 animate-pulse" size={18} />
        <span className="text-sm hidden sm:inline">Loading...</span>
      </div>
    );
  }

  if (error || !track) {
    return (
      <div className="flex items-center gap-2 text-slate-500">
        <FaSpotify className="text-amber-500/50" size={18} />
        <span className="text-sm hidden sm:inline">Not playing</span>
      </div>
    );
  }

  return (
    <div className="relative">
      <motion.div
        className="flex items-center gap-3 cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        {/* Album Art */}
        {track.albumImageUrl && (
          <div className="relative w-10 h-10 rounded-lg overflow-hidden flex-shrink-0 border border-amber-500/30">
            <Image
              src={track.albumImageUrl}
              alt={track.album}
              fill
              className="object-cover"
              unoptimized
            />
            {track.isPlaying && !track.lastPlayed && (
              <motion.div
                className="absolute inset-0 bg-amber-500/20"
                animate={{ opacity: [0.2, 0.5, 0.2] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            )}
          </div>
        )}

        {/* Spotify Icon (when no album art) */}
        {!track.albumImageUrl && (
          <div className="relative">
            <FaSpotify 
              className={`text-amber-500 ${track.isPlaying && !track.lastPlayed ? 'animate-pulse' : ''}`} 
              size={18} 
            />
            {track.isPlaying && !track.lastPlayed && (
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-amber-500 rounded-full animate-ping" />
            )}
          </div>
        )}
        
        {/* Track Info - Clickable Link */}
        <a
          href={track.songUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 min-w-0 hidden md:block group"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center gap-2">
            <p className="text-sm text-slate-200 group-hover:text-amber-400 truncate font-medium max-w-[200px] transition-colors">
              {track.name}
            </p>
            {track.explicit && (
              <span className="text-[10px] px-1 py-0.5 bg-slate-700 text-slate-400 rounded">
                E
              </span>
            )}
          </div>
          <p className="text-xs text-slate-400 group-hover:text-amber-500/70 truncate max-w-[200px] transition-colors">
            {track.artist}
          </p>
        </a>

        {/* Visualizer */}
        {track.isPlaying && (
          <div className="flex items-end gap-1 h-6">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-1 bg-amber-500 rounded-full"
                animate={{
                  height: ['8px', '20px', '8px'],
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  delay: i * 0.15,
                }}
              />
            ))}
          </div>
        )}

        {/* Open on Spotify Button */}
        <a
          href={track.songUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-400 hover:text-amber-500 transition-colors p-1.5 hover:bg-slate-800 rounded-lg"
          title="Open in Spotify"
          onClick={(e) => e.stopPropagation()}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z"/>
          </svg>
        </a>
      </motion.div>

      {/* Progress Bar - only show when actively playing */}
      {track.isPlaying && !track.lastPlayed && (
        <motion.div 
          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-slate-700 rounded-full overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-amber-500 to-amber-400"
            style={{ width: `${progressPercentage}%` }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      )}

      {/* Expanded View */}
      <AnimatePresence>
        {isExpanded && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              onClick={() => setIsExpanded(false)}
            />

            {/* Expanded Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 10 }}
              className="fixed bottom-20 right-4 sm:right-8 w-80 bg-slate-800 border border-amber-500/30 rounded-2xl p-6 shadow-2xl shadow-amber-500/10 z-50"
            >
              {/* Album Art Large */}
              {track.albumImageUrl && (
                <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-4 border border-amber-500/20">
                  <Image
                    src={track.albumImageUrl}
                    alt={track.album}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
              )}

              {/* Track Details */}
              <div className="space-y-2 mb-4">
                <div className="flex items-start gap-2">
                  <a
                    href={track.songUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-semibold text-slate-100 hover:text-amber-400 transition-colors flex-1"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {track.name}
                  </a>
                  {track.explicit && (
                    <span className="text-xs px-2 py-0.5 bg-slate-700 text-slate-400 rounded">
                      EXPLICIT
                    </span>
                  )}
                </div>
                <p className="text-slate-300 text-sm">{track.artist}</p>
                <p className="text-slate-500 text-xs">{track.album}</p>
              </div>

              {/* Progress Bar with Time */}
              <div className="space-y-2 mb-4">
                <div className="w-full h-1.5 bg-slate-700 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-amber-500 to-amber-400"
                    style={{ width: `${progressPercentage}%` }}
                  />
                </div>
                <div className="flex justify-between text-xs text-slate-500">
                  <span>{formatTime(track.progress)}</span>
                  <span>{formatTime(track.duration)}</span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-2">
                <a
                  href={track.songUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-amber-600 hover:bg-amber-500 text-white font-medium rounded-lg transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <FaSpotify size={16} />
                  <span>Open in Spotify</span>
                </a>
              </div>

              {/* Now Playing / Last Played Badge */}
              {track.isPlaying && !track.lastPlayed ? (
                <div className="mt-4 flex items-center justify-center gap-2 text-amber-500 text-sm">
                  <div className="flex gap-1">
                    {[0, 1, 2].map((i) => (
                      <motion.div
                        key={i}
                        className="w-1 bg-amber-500 rounded-full"
                        animate={{
                          height: ['4px', '12px', '4px'],
                        }}
                        transition={{
                          duration: 0.8,
                          repeat: Infinity,
                          delay: i * 0.15,
                        }}
                      />
                    ))}
                  </div>
                  <span className="font-medium">Now Playing</span>
                </div>
              ) : track.lastPlayed ? (
                <div className="mt-4 text-center text-slate-400 text-sm">
                  <span className="font-medium">Last Played</span>
                </div>
              ) : null}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

function formatTime(ms: number): string {
  const seconds = Math.floor(ms / 1000);
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}
