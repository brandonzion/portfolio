"use client";

import { motion } from "framer-motion";
import { performances } from "@/data/performances";
import PerformanceCard from "@/components/PerformanceCard";

export default function MusicPage() {
  return (
    <div className="min-h-screen bg-slate-900 pt-24 pb-20">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-serif font-bold text-amber-500 mb-4">
            Music & Performances
          </h1>
          <div className="h-1 w-24 bg-amber-500 mx-auto mb-6" />
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            Experience the soul of jazz through my performances at renowned venues
            and intimate sessions
          </p>
        </motion.div>

        {/* Bio Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-slate-800/50 backdrop-blur-sm border border-amber-600/20 rounded-xl p-8 max-w-4xl mx-auto">
            <h2 className="text-2xl font-serif font-bold text-amber-500 mb-4">
              My Musical Journey
            </h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              Jazz has been my passion for over a decade. From the smoky clubs of
              New York to intimate venue sessions, I&apos;ve had the privilege of
              sharing my love for jazz piano with audiences around the world.
            </p>
            <p className="text-slate-300 leading-relaxed">
              My style draws inspiration from bebop pioneers and modern jazz
              innovators, creating a unique blend that honors tradition while
              embracing contemporary expression. Whether performing standards or
              original compositions, my goal is to connect with listeners through
              the universal language of music.
            </p>
          </div>
        </motion.div>

        {/* Performances Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {performances.map((performance, index) => (
            <PerformanceCard
              key={performance.id}
              performance={performance}
              index={index}
            />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-br from-amber-950/50 to-slate-800/50 backdrop-blur-sm border border-amber-600/20 rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-serif font-bold text-amber-500 mb-4">
              Book a Performance
            </h3>
            <p className="text-slate-300 mb-6">
              Interested in having me perform at your venue or event? Let&apos;s make
              some music together.
            </p>
            <a
              href="/contact"
              className="inline-block px-12 py-5 bg-amber-600 hover:bg-amber-500 text-white font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-amber-500/50"
            >
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

