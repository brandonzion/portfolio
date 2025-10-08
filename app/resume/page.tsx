"use client";

import { motion } from "framer-motion";
import { FaDownload, FaBriefcase, FaGraduationCap, FaAward } from "react-icons/fa";

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-slate-900 pt-24 pb-20">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-serif font-bold text-amber-500 mb-4">
            Resume
          </h1>
          <div className="h-1 w-24 bg-amber-500 mx-auto mb-6" />
          <p className="text-slate-400 text-lg mb-8">
            A comprehensive view of my professional journey
          </p>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center justify-center space-x-2 px-12 py-5 bg-amber-600 hover:bg-amber-500 text-white font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-amber-500/50"
          >
            <FaDownload />
            <span>Download PDF</span>
          </a>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center mb-6">
            <FaBriefcase className="text-amber-500 text-2xl mr-3" />
            <h2 className="text-3xl font-serif font-bold text-amber-500">
              Experience
            </h2>
          </div>

          <div className="space-y-6">
            {/* Experience Item 1 */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-amber-600/20 rounded-xl p-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                <div>
                  <h3 className="text-xl font-semibold text-amber-400">
                    Senior Full-Stack Developer
                  </h3>
                  <p className="text-slate-300">Tech Company Name</p>
                </div>
                <span className="text-slate-500 text-sm mt-1 md:mt-0">
                  2022 - Present
                </span>
              </div>
              <ul className="list-disc list-inside text-slate-300 space-y-2">
                <li>Led development of scalable web applications using React and Node.js</li>
                <li>Architected and implemented RESTful APIs serving 100K+ users</li>
                <li>Mentored junior developers and conducted code reviews</li>
              </ul>
            </div>

            {/* Experience Item 2 */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-amber-600/20 rounded-xl p-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                <div>
                  <h3 className="text-xl font-semibold text-amber-400">
                    Full-Stack Developer
                  </h3>
                  <p className="text-slate-300">Startup Company</p>
                </div>
                <span className="text-slate-500 text-sm mt-1 md:mt-0">
                  2020 - 2022
                </span>
              </div>
              <ul className="list-disc list-inside text-slate-300 space-y-2">
                <li>Built responsive web applications with modern JavaScript frameworks</li>
                <li>Collaborated with designers to create intuitive user experiences</li>
                <li>Implemented CI/CD pipelines and automated testing workflows</li>
              </ul>
            </div>

            {/* Musical Experience */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-amber-600/20 rounded-xl p-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                <div>
                  <h3 className="text-xl font-semibold text-amber-400">
                    Professional Jazz Pianist
                  </h3>
                  <p className="text-slate-300">Various Venues</p>
                </div>
                <span className="text-slate-500 text-sm mt-1 md:mt-0">
                  2015 - Present
                </span>
              </div>
              <ul className="list-disc list-inside text-slate-300 space-y-2">
                <li>Performed at renowned jazz clubs including Blue Note and Village Vanguard</li>
                <li>Composed and arranged original jazz pieces for ensemble</li>
                <li>Collaborated with established musicians on recordings and live performances</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center mb-6">
            <FaGraduationCap className="text-amber-500 text-2xl mr-3" />
            <h2 className="text-3xl font-serif font-bold text-amber-500">
              Education
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-amber-600/20 rounded-xl p-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                <div>
                  <h3 className="text-xl font-semibold text-amber-400">
                    Bachelor of Science in Computer Science
                  </h3>
                  <p className="text-slate-300">University Name</p>
                </div>
                <span className="text-slate-500 text-sm mt-1 md:mt-0">
                  2016 - 2020
                </span>
              </div>
              <p className="text-slate-300">
                Focus on Software Engineering and Web Development
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-amber-600/20 rounded-xl p-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                <div>
                  <h3 className="text-xl font-semibold text-amber-400">
                    Jazz Performance Certificate
                  </h3>
                  <p className="text-slate-300">Music Conservatory</p>
                </div>
                <span className="text-slate-500 text-sm mt-1 md:mt-0">
                  2014 - 2016
                </span>
              </div>
              <p className="text-slate-300">
                Specialized in Jazz Piano Performance and Improvisation
              </p>
            </div>
          </div>
        </motion.div>

        {/* Awards Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center mb-6">
            <FaAward className="text-amber-500 text-2xl mr-3" />
            <h2 className="text-3xl font-serif font-bold text-amber-500">
              Awards & Recognition
            </h2>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm border border-amber-600/20 rounded-xl p-6">
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-amber-500 mr-3">🏆</span>
                <div>
                  <h3 className="text-amber-400 font-semibold">
                    Outstanding Jazz Performance Award
                  </h3>
                  <p className="text-slate-400 text-sm">
                    National Jazz Competition, 2023
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-3">🏆</span>
                <div>
                  <h3 className="text-amber-400 font-semibold">
                    Innovation in Web Development
                  </h3>
                  <p className="text-slate-400 text-sm">Tech Conference, 2022</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 mr-3">🏆</span>
                <div>
                  <h3 className="text-amber-400 font-semibold">
                    Best Original Composition
                  </h3>
                  <p className="text-slate-400 text-sm">
                    Jazz Composers Workshop, 2021
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

