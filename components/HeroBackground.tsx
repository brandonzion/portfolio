"use client";

import { motion } from "framer-motion";

export default function HeroBackground() {
  return (
    <>
      <div className="absolute inset-0 z-15">
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

        <div className="absolute top-1/4 right-1/3 w-[200px] h-[500px] bg-gradient-to-b from-purple-900/20 via-transparent to-blue-900/20 blur-2xl opacity-40" />

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-radial from-amber-200/10 via-transparent to-transparent rounded-full blur-3xl" />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-slate-950/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-transparent to-slate-950/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/30 via-transparent to-slate-950/30" />
      </div>

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
    </>
  );
}

