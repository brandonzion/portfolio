"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaMusic } from "react-icons/fa";
import { Performance } from "@/data/performances";

interface PerformanceCardProps {
  performance: Performance;
  index: number;
}

export default function PerformanceCard({
  performance,
  index,
}: PerformanceCardProps) {
  const Component = performance.videoUrl ? motion.a : motion.div;
  const linkProps = performance.videoUrl
    ? {
        href: performance.videoUrl,
        target: "_blank" as const,
        rel: "noopener noreferrer",
      }
    : {};

  return (
    <Component
      {...linkProps}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      className="block group bg-slate-800/50 backdrop-blur-sm border border-amber-600/20 rounded-xl overflow-hidden hover:border-amber-500/50 transition-all duration-300 cursor-pointer"
    >
      {/* Performance Image */}
      <div className="relative h-56 bg-slate-700 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center text-slate-600">
          <FaMusic size={48} />
        </div>
        {performance.imageUrl && (
          <Image
            src={performance.imageUrl}
            alt={performance.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-array font-bold text-amber-500 mb-3">
          {performance.title}
        </h3>

        {performance.setlist && performance.setlist.length > 0 && (
          <div className="pt-4 border-t border-amber-600/20">
            <h4 className="text-amber-400 text-xs font-semibold mb-2 uppercase">
              Setlist
            </h4>
            <ul className="space-y-1">
              {performance.setlist.map((song, idx) => (
                <li key={idx} className="text-slate-400 text-sm">
                  {idx + 1}. {song}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </Component>
  );
}
