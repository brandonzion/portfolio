"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { usePianoSound } from "@/hooks/usePianoSound";

export default function InteractiveName() {
  const [showKeyboard, setShowKeyboard] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const { playChord } = usePianoSound();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!showKeyboard) {
        setShowTooltip(true);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [showKeyboard]);

  const handleNameClick = () => {
    setShowKeyboard(!showKeyboard);
    setShowTooltip(false);
  };

  return (
    <div className="relative inline-block">
      {showKeyboard ? (
        <motion.h1
          onClick={handleNameClick}
          className="text-6xl md:text-8xl font-array font-bold mb-4 drop-shadow-2xl cursor-pointer"
          animate={{
            textShadow: [
              "0 0 20px rgba(245, 158, 11, 0.5)",
              "0 0 30px rgba(245, 158, 11, 0.8)",
              "0 0 20px rgba(245, 158, 11, 0.5)",
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {["B", "r", "a", "n", "d", "o", "n", " ", "S"].map((letter, index) => {
            let chord = "";
            
            if (index === 0) chord = "Cmaj7";
            else if (index === 1) chord = "Dmin7";
            else if (index === 2) chord = "Emin7";
            else if (index === 3) chord = "Fmaj7";
            else if (index === 4) chord = "G7";
            else if (index === 5) chord = "Amin7";
            else if (index === 6) chord = "Bmin7b5";
            else if (index === 8) chord = "C";
            
            const isPlayable = !!chord;
            
            return (
              <span
                key={index}
                onMouseEnter={() => isPlayable && playChord(chord)}
                className={`${isPlayable ? "text-amber-400 hover:text-amber-300 hover:scale-110" : "text-amber-400"} inline-block transition-all`}
              >
                {letter}
              </span>
            );
          })}
        </motion.h1>
      ) : (
        <motion.h1
          onClick={handleNameClick}
          className="text-6xl md:text-8xl font-array font-bold text-amber-400 mb-4 drop-shadow-2xl cursor-pointer hover:scale-105 transition-transform"
          animate={{
            textShadow: [
              "0 0 20px rgba(245, 158, 11, 0.5)",
              "0 0 30px rgba(245, 158, 11, 0.8)",
              "0 0 20px rgba(245, 158, 11, 0.5)",
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          Brandon Sun
        </motion.h1>
      )}

      {/* Tooltip */}
      <AnimatePresence>
        {showTooltip && !showKeyboard && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              rotate: 2,
              y: [0, -3, 0],
            }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{
              duration: 0.5,
              y: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
            className="absolute -top-20 -right-12 bg-amber-600 text-white px-6 py-3 rounded-2xl text-base whitespace-nowrap shadow-2xl border-2 border-amber-500"
            style={{
              transform: "rotate(2deg)",
            }}
          >
            Click me to play some music!
            {/* Hand-drawn arrow */}
            <svg 
              className="absolute -bottom-8 left-4 w-12 h-12 text-amber-600" 
              viewBox="0 0 100 100"
              fill="currentColor"
            >
              <path d="M20,10 Q30,5 40,15 T50,30 Q55,45 45,60 L40,70" 
                stroke="currentColor" 
                strokeWidth="4" 
                fill="none" 
                strokeLinecap="round"
              />
              <path d="M40,70 L35,65 M40,70 L45,68" 
                stroke="currentColor" 
                strokeWidth="4" 
                strokeLinecap="round"
              />
            </svg>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

