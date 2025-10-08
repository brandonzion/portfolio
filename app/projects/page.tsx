"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectsPage() {
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
            Projects
          </h1>
          <div className="h-1 w-24 bg-amber-500 mx-auto mb-6" />
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            A collection of my work in software development, where innovation
            meets implementation
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Empty state if no projects */}
        {projects.length === 0 && (
          <div className="text-center py-24">
            <p className="text-slate-500 text-lg">
              More projects coming soon...
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

