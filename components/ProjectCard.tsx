"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.a
      href={project.githubUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      className="group relative bg-slate-800/50 backdrop-blur-sm border border-amber-600/20 rounded-xl overflow-hidden hover:border-amber-500/50 transition-all duration-300 cursor-pointer block"
    >
      {/* Project Image */}
      <div className="relative h-48 bg-slate-700 overflow-hidden">
        {/* GitHub placeholder background */}
        <div className="absolute inset-0 flex items-center justify-center text-slate-600 bg-slate-700">
          <FaGithub size={48} />
        </div>
        {project.imageUrl && (
          <Image 
            src={project.imageUrl} 
            alt={project.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
      </div>

      {/* Content */}
      <div className="px-6 py-3">
        <h3 className="text-2xl font-array font-bold text-amber-500 mb-2">
          {project.title}
        </h3>
        <p className="text-slate-300 text-sm mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs bg-amber-950/50 text-amber-400 rounded-md border border-amber-600/30"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1 text-slate-400 group-hover:text-amber-500 transition-colors text-sm">
            <FaGithub />
            <span>View on GitHub</span>
          </div>
          {project.liveUrl && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                window.open(project.liveUrl, '_blank', 'noopener,noreferrer');
              }}
              className="flex items-center space-x-1 text-slate-400 hover:text-amber-500 transition-colors text-sm bg-transparent border-none cursor-pointer"
            >
              <FaExternalLinkAlt />
              <span>Live Demo</span>
            </button>
          )}
        </div>
      </div>

      {/* Featured badge */}
      {project.featured && (
        <div className="absolute top-4 right-4 px-3 py-1 bg-amber-600 text-white text-xs font-semibold rounded-full">
          Featured
        </div>
      )}
    </motion.a>
  );
}

