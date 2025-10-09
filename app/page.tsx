"use client";

import Hero from "@/components/Hero";
import About from "@/components/About";
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
      <About />

      {/* Featured Projects Section */}
      <section className="py-12 bg-slate-950/95">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-array font-bold text-amber-500 mb-4">
              Featured Projects
            </h2>
            <div className="h-1 w-24 bg-amber-500 mx-auto mb-6" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/projects"
              className="inline-block px-8 py-4 border-2 border-amber-600 hover:bg-amber-600/10 text-amber-500 font-medium rounded-lg transition-all duration-300"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Recent Performances Section */}
      <section className="py-12 bg-slate-950/95">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-array font-bold text-amber-500 mb-4">
              Recent Performances
            </h2>
            <div className="h-1 w-24 bg-amber-500 mx-auto mb-6" />
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
    </div>
  );
}
