"use client";

import Hero from "@/components/Hero";
import { motion } from "framer-motion";
import Link from "next/link";
import { projects } from "@/data/projects";
import { performances } from "@/data/performances";
import ProjectCard from "@/components/ProjectCard";
import PerformanceCard from "@/components/PerformanceCard";

export default function Home() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 2);
  const recentPerformances = performances.slice(0, 2);

  return (
    <div className="jazz-club-bg">
      <Hero />

      {/* Featured Projects Section */}
      <section className="py-24 bg-slate-900/95">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-serif font-bold text-amber-500 mb-4">
              Featured Projects
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/projects"
              className="inline-block px-12 py-5 border-2 border-amber-600 hover:bg-amber-600/10 text-amber-500 font-medium rounded-lg transition-all duration-300"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Recent Performances Section */}
      <section className="py-24 bg-slate-950/95">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-serif font-bold text-amber-500 mb-4">
              Recent Performances
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Experience the harmony of live jazz through my recent performances
              at renowned venues.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
            {recentPerformances.map((performance, index) => (
              <PerformanceCard
                key={performance.id}
                performance={performance}
                index={index}
              />
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/music"
              className="inline-block px-12 py-5 border-2 border-amber-600 hover:bg-amber-600/10 text-amber-500 font-medium rounded-lg transition-all duration-300"
            >
              View All Performances
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 bg-slate-900/95">
        <div className="w-full px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif font-bold text-amber-500 mb-4">
              Let&apos;s Create Something Beautiful
            </h2>
            <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
              Whether you need a developer who thinks creatively or a musician
              who codes, I&apos;m here to bring your vision to life.
            </p>
            <Link
              href="/contact"
              className="inline-block px-12 py-5 bg-amber-600 hover:bg-amber-500 text-white font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-amber-500/50"
            >
              Get In Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
