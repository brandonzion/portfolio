"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaSpotify } from "react-icons/fa";

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Moody jazz club spotlight effects */}
      <div className="absolute inset-0 z-15">
        {/* Main stage spotlight - warm and focused */}
        <motion.div
          className="absolute top-1/3 left-1/4 w-[600px] h-[400px] bg-gradient-radial from-amber-400/60 via-amber-500/30 to-transparent rounded-full blur-2xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Secondary warm spotlight */}
        <motion.div
          className="absolute top-1/2 left-1/6 w-[300px] h-[200px] bg-amber-300/40 rounded-full blur-3xl opacity-60"
          animate={{
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Cool blue mood lighting */}
        <motion.div
          className="absolute bottom-1/3 right-1/5 w-[400px] h-[300px] bg-blue-600/25 rounded-full blur-3xl"
          animate={{
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Golden hour lighting */}
        <motion.div
          className="absolute top-1/5 right-1/4 w-[250px] h-[350px] bg-gradient-to-b from-yellow-400/20 via-orange-500/15 to-transparent rounded-full blur-2xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Dramatic side lighting */}
        <div className="absolute top-1/4 right-1/3 w-[200px] h-[500px] bg-gradient-to-b from-purple-900/20 via-transparent to-blue-900/20 blur-2xl opacity-40" />

        {/* Central spotlight pool */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-radial from-amber-200/10 via-transparent to-transparent rounded-full blur-3xl" />

        {/* Vignette effect for mood */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-slate-950/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-transparent to-slate-950/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/30 via-transparent to-slate-950/30" />
      </div>

      {/* Animated spotlight effect */}
      <motion.div
        className="absolute top-0 left-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ transform: "translateX(-50%)" }}
      />

      <div className="relative z-30 w-full px-4 sm:px-6 lg:px-8 py-32">
        <div className="flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-5xl md:text-7xl font-serif font-bold text-amber-400 mb-4 drop-shadow-2xl"
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
            <div className="flex items-center justify-center space-x-3 mb-6">
              <motion.div
                className="h-px w-12 bg-amber-500"
                initial={{ width: 0 }}
                animate={{ width: 48 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
              <h2 className="text-2xl md:text-3xl text-slate-300 font-light">
                APMA & CS @{" "}
                <a
                  href="https://www.brown.edu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-amber-400 hover:text-amber-300 transition-colors duration-300"
                >
                  Brown University
                </a>
              </h2>
              <motion.div
                className="h-px w-12 bg-amber-500"
                initial={{ width: 0 }}
                animate={{ width: 48 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-xl text-slate-400 max-w-2xl mb-8 leading-relaxed text-center"
          >
            Full-Stack Developer | Software Engineer | Jazz Pianist
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8"
          >
            <Link
              href="/projects"
              className="inline-block px-5 py-3 bg-amber-600 hover:bg-amber-500 text-white font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-amber-500/50 hover:scale-105"
            >
              View My Work
            </Link>
            <Link
              href="/contact"
              className="inline-block px-5 py-3 border-2 border-amber-600 hover:bg-amber-600/10 text-amber-500 font-medium rounded-lg transition-all duration-300"
            >
              Get In Touch
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex items-center justify-center space-x-8"
          >
            <a
              href="https://github.com/brandonzion"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-amber-500 transition-colors duration-300"
              aria-label="GitHub"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="http://www.linkedin.com/in/brandon-sun-46b391241"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-amber-500 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://open.spotify.com/user/sunnyboi576?si=4444f39647964476"
              className="text-slate-400 hover:text-amber-500 transition-colors duration-300"
              aria-label="Email"
            >
              <FaSpotify size={24} />
            </a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-amber-500"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

