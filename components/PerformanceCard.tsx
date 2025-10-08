"use client";

import { motion } from "framer-motion";
import { FaMusic, FaMapMarkerAlt, FaCalendarAlt, FaPlay } from "react-icons/fa";
import { Performance } from "@/data/performances";

interface PerformanceCardProps {
  performance: Performance;
  index: number;
}

export default function PerformanceCard({
  performance,
  index,
}: PerformanceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      className="group bg-slate-800/50 backdrop-blur-sm border border-amber-600/20 rounded-xl overflow-hidden hover:border-amber-500/50 transition-all duration-300"
    >
      {/* Performance Image */}
      <div className="relative h-56 bg-slate-700 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center text-slate-600">
          <FaMusic size={48} />
        </div>
        {performance.videoUrl && (
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/50">
            <a
              href={performance.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-600 hover:bg-amber-500 text-white p-4 rounded-full transition-colors"
            >
              <FaPlay size={24} />
            </a>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-serif font-bold text-amber-500 mb-3">
          {performance.title}
        </h3>

        <div className="space-y-2 mb-4">
          <div className="flex items-center text-slate-400 text-sm">
            <FaMapMarkerAlt className="mr-2 text-amber-500" />
            {performance.venue}
          </div>
          <div className="flex items-center text-slate-400 text-sm">
            <FaCalendarAlt className="mr-2 text-amber-500" />
            {performance.date}
          </div>
          <div className="flex items-center text-slate-400 text-sm">
            <FaMusic className="mr-2 text-amber-500" />
            {performance.role}
          </div>
        </div>

        <p className="text-slate-300 text-sm mb-4">{performance.description}</p>

        {performance.setlist && performance.setlist.length > 0 && (
          <div className="pt-4 border-t border-amber-600/20">
            <h4 className="text-amber-400 text-xs font-semibold mb-2 uppercase">
              Setlist
            </h4>
            <ul className="space-y-1">
              {performance.setlist.map((song, idx) => (
                <li key={idx} className="text-slate-400 text-xs">
                  {idx + 1}. {song}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </motion.div>
  );
}

