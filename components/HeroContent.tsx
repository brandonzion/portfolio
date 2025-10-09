"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaSpotify } from "react-icons/fa";
import InteractiveName from "./InteractiveName";

export default function HeroContent() {
  return (
    <div className="relative z-30 w-full px-4 sm:px-6 lg:px-8 py-32">
      <div className="flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <InteractiveName />

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
                href="https://cntr.brown.edu/cntr-aisle"
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
          Full-Stack Developer | Jazz Pianist
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8"
        >
          <Link
            href="/projects"
            className="px-8 py-4 bg-amber-600 hover:bg-amber-500 text-white font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-amber-500/50"
          >
            View My Work
          </Link>
          <Link
            href="/contact"
            className="px-8 py-4 border-2 border-amber-600 hover:bg-amber-600/10 text-amber-500 font-medium rounded-lg transition-all duration-300"
          >
            Get In Touch
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex items-center justify-center gap-6"
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
            href="https://open.spotify.com/user/sunnyboi576?si=d564e005bf284392"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-amber-500 transition-colors duration-300"
            aria-label="Spotify"
          >
            <FaSpotify size={24} />
          </a>
        </motion.div>
      </div>
    </div>
  );
}

