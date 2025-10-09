"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactPage() {
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
          <h1 className="text-6xl font-array font-bold text-amber-500 mb-4">
            Get In Touch
          </h1>
          <div className="h-1 w-24 bg-amber-500 mx-auto mb-6" />
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            Whether you&apos;re looking for a developer, a jazz pianist, or just looking to chat,
            I&apos;d love to hear from you!
          </p>
        </motion.div>

        {/* Contact Info Cards */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-slate-800/50 backdrop-blur-sm border border-amber-600/20 rounded-xl p-8"
            >
              <h3 className="text-2xl font-array font-bold text-amber-500 mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <FaEnvelope className="text-amber-500 text-2xl flex-shrink-0" />
                  <div>
                    <a
                      href="mailto:brandon_sun1@brown.edu"
                      className="text-slate-200 text-lg hover:text-amber-400 transition-colors"
                    >
                      brandon_sun1@brown.edu
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <FaMapMarkerAlt className="text-amber-500 text-2xl flex-shrink-0" />
                  <div>
                    <p className="text-slate-200 text-lg">Providence, RI</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-slate-800/50 backdrop-blur-sm border border-amber-600/20 rounded-xl p-8"
            >
              <h3 className="text-2xl font-array font-bold text-amber-500 mb-6">
                Connect With Me
              </h3>
              <div className="space-y-4">
                <a
                  href="https://github.com/brandonzion"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-slate-300 hover:text-amber-400 transition-colors text-lg"
                >
                  <FaGithub className="text-2xl flex-shrink-0" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://linkedin.com/in/brandon-sun-46b391241"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-slate-300 hover:text-amber-400 transition-colors text-lg"
                >
                  <FaLinkedin className="text-2xl flex-shrink-0" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

