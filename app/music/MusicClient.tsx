"use client";

import { motion } from "framer-motion";
import { Performance } from "@/data/performances";
import PerformanceCard from "@/components/PerformanceCard";

interface MusicClientProps {
  performances: Performance[];
}

export default function MusicClient({ performances }: MusicClientProps) {
  return (
    <div className="min-h-screen bg-slate-900 pt-24 pb-20">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
          key="music-header"
        >
          <h1 className="text-6xl font-array font-bold text-amber-500 mb-4">
            Music
          </h1>
          <div className="h-1 w-24 bg-amber-500 mx-auto mb-6" />
        </motion.div>

        {/* Bio Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
          key="music-bio"
        >
          <div className="bg-slate-800/50 backdrop-blur-sm border border-amber-600/20 rounded-xl p-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-array font-bold text-amber-500 mb-4">
              My Musical Journey
            </h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              Jazz has been my passion for over 7 years. I started playing the piano when I was 6 years old and I 
              started learning the art of jazz in 8th grade. Since then, I have played for my high school jazz ensemble, 
              the All-State jazz ensemble, local bands, jam sessions, and most recently, Brown Jazz Combos. I performed
              at the famed Newport Jazz Festival in 2023 and that experience shaped my love for jazz even more. 
            </p>
            <p className="text-slate-300 leading-relaxed">
              My style draws inspiration from jazz piano virtuosos such as Oscar Peterson and Herbie Hancock. 
              I also love listening to modern innovators such as Brad Mehldau and artists who bring jazz to 
              the mainstream such as Laufey. My goal is to connect with musicians and listeners through our 
              shared love for music as a whole.
            </p>
          </div>
        </motion.div>

        {/* Performances Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          key="music-performances"
        >
          {performances.map((performance, index) => (
            <PerformanceCard
              key={performance.id}
              performance={performance}
              index={index}
            />
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
          key="music-cta"
        >
          <div className="bg-gradient-to-br from-amber-950/50 to-slate-800/50 backdrop-blur-sm border border-amber-600/20 rounded-xl p-6 max-w-2xl mx-auto">
            <h3 className="text-3xl font-array font-bold text-amber-500 mb-4">
              Let&apos;s make some music together!
            </h3>
            <p className="text-slate-300 mb-6">
              Interested in jamming? You can contact me
              <a href="/contact" className="text-amber-500 hover:text-amber-400 transition-colors"> here</a>.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
