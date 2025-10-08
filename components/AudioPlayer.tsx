"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute } from "react-icons/fa";

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.3);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Note: In a real implementation, you would have actual audio files
    // For now, this sets up the audio element structure
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="fixed bottom-6 right-6 z-40 bg-slate-900/90 backdrop-blur-md border border-amber-600/30 rounded-lg p-4 shadow-xl"
    >
      <audio
        ref={audioRef}
        loop
        src="/audio/jazz-ambient.mp3"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />

      <div className="flex items-center space-x-3">
        <button
          onClick={togglePlay}
          className="bg-amber-600 hover:bg-amber-500 text-white p-2 rounded-full transition-colors duration-200"
          aria-label={isPlaying ? "Pause music" : "Play music"}
        >
          {isPlaying ? <FaPause size={16} /> : <FaPlay size={16} />}
        </button>

        <div className="flex items-center space-x-2">
          <button
            onClick={toggleMute}
            className="text-amber-500 hover:text-amber-400 transition-colors"
            aria-label={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted ? <FaVolumeMute size={18} /> : <FaVolumeUp size={18} />}
          </button>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
            className="w-20 accent-amber-500"
            aria-label="Volume control"
          />
        </div>

        <span className="text-amber-500 text-xs font-medium">
          Jazz Ambience
        </span>
      </div>
    </motion.div>
  );
}

