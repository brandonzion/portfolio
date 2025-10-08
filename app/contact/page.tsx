"use client";

import { motion } from "framer-motion";
import ContactForm from "@/components/ContactForm";
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
          <h1 className="text-5xl font-serif font-bold text-amber-500 mb-4">
            Get In Touch
          </h1>
          <div className="h-1 w-24 bg-amber-500 mx-auto mb-6" />
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            Whether you&apos;re looking for a developer, a jazz pianist, or both,
            I&apos;d love to hear from you
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-amber-600/20 rounded-xl p-8">
              <h2 className="text-2xl font-serif font-bold text-amber-500 mb-6">
                Send a Message
              </h2>
              <ContactForm />
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {/* Contact Details */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-slate-800/50 backdrop-blur-sm border border-amber-600/20 rounded-xl p-6"
            >
              <h3 className="text-xl font-serif font-bold text-amber-500 mb-4">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <FaEnvelope className="text-amber-500 mt-1 mr-3" />
                  <div>
                    <p className="text-slate-400 text-sm">Email</p>
                    <a
                      href="mailto:your.email@example.com"
                      className="text-slate-200 hover:text-amber-400 transition-colors"
                    >
                      your.email@example.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <FaMapMarkerAlt className="text-amber-500 mt-1 mr-3" />
                  <div>
                    <p className="text-slate-400 text-sm">Location</p>
                    <p className="text-slate-200">New York, NY</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-slate-800/50 backdrop-blur-sm border border-amber-600/20 rounded-xl p-6"
            >
              <h3 className="text-xl font-serif font-bold text-amber-500 mb-4">
                Connect With Me
              </h3>
              <div className="space-y-3">
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-slate-300 hover:text-amber-400 transition-colors"
                >
                  <FaGithub className="mr-3 text-xl" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-slate-300 hover:text-amber-400 transition-colors"
                >
                  <FaLinkedin className="mr-3 text-xl" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </motion.div>

            {/* Availability */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-br from-amber-950/50 to-slate-800/50 backdrop-blur-sm border border-amber-600/20 rounded-xl p-6"
            >
              <h3 className="text-xl font-serif font-bold text-amber-500 mb-3">
                Availability
              </h3>
              <p className="text-slate-300 text-sm mb-2">
                I&apos;m currently available for:
              </p>
              <ul className="text-slate-400 text-sm space-y-1">
                <li>✓ Freelance projects</li>
                <li>✓ Full-time opportunities</li>
                <li>✓ Musical collaborations</li>
                <li>✓ Performance bookings</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

