"use client";

import { motion } from "framer-motion";
import { FaDownload, FaBriefcase, FaGraduationCap, FaCode, FaTrophy } from "react-icons/fa";

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-slate-900 pt-24 pb-20">
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-6xl font-array font-bold text-amber-500 mb-4">
            Resume
          </h1>
          <div className="h-1 w-24 bg-amber-500 mx-auto mb-6" />
          <div className="text-slate-300 mb-2">
            <p className="text-lg">East Greenwich, RI 02818</p>
            <p className="text-lg">(401) 338-5485 | brandon_sun1@brown.edu</p>
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
            <h2 className="text-4xl font-array font-bold text-amber-500">
              Education
            </h2>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm border border-amber-600/20 rounded-xl p-6">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
              <div>
                <h3 className="text-xl font-semibold text-amber-400">
                  Sc.B. in Applied Mathematics & Computer Science
                </h3>
                <p className="text-slate-300">Brown University</p>
              </div>
              <div className="text-slate-500 text-sm mt-1 md:mt-0 md:text-right">
                <p>Providence, RI</p>
                <p>Expected May 2028</p>
              </div>
            </div>
            <div className="mb-3">
              <p className="text-amber-400 font-semibold mb-1">GPA: 4.0/4.0 | SAT: 1560</p>
            </div>
            <div>
              <p className="text-slate-400 font-semibold mb-2">Relevant Coursework:</p>
              <p className="text-slate-300">
                Accelerated Intro to Computer Science, Statistical Inference I, Intro to Software Engineering, 
                Multivariable Calculus, Linear Algebra, Computer Systems, Data Structures, Algorithms, & Intractability
              </p>
            </div>
          </div>
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
            <h2 className="text-4xl font-array font-bold text-amber-500">
              Work Experience
            </h2>
          </div>

          <div className="space-y-6">
            {/* Brown CNTR AISLE */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-amber-600/20 rounded-xl p-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                <div>
                  <h3 className="text-xl font-semibold text-amber-400">
                    Product Developer
                  </h3>
                  <p className="text-slate-300">Brown CNTR AISLE</p>
                </div>
                <div className="text-slate-500 text-sm mt-1 md:mt-0 md:text-right">
                  <p>Providence, RI</p>
                  <p>September 2025 – Present</p>
                </div>
              </div>
              <ul className="list-disc list-inside text-slate-300 space-y-2">
                <li>Contribute to the design and development of a platform that scores AI-related legislation, integrating technical tools with policy research</li>
                <li>Build and revise backend systems to improve data collection, sustainability, and maintainability</li>
                <li>Support UI/UX design efforts to make complex policy analysis accessible and intuitive for stakeholders</li>
              </ul>
            </div>

            {/* VoltServer 2024 */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-amber-600/20 rounded-xl p-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                <div>
                  <h3 className="text-xl font-semibold text-amber-400">
                    Software Engineering Intern
                  </h3>
                  <p className="text-slate-300">VoltServer</p>
                </div>
                <div className="text-slate-500 text-sm mt-1 md:mt-0 md:text-right">
                  <p>East Greenwich, RI</p>
                  <p>June 2024 – August 2024</p>
                </div>
              </div>
              <ul className="list-disc list-inside text-slate-300 space-y-2">
                <li>Increased Cypress end-to-end testing suite size by over 200%</li>
                <li>Wrote 75+ individual component tests for client-side software as well as backend API testing</li>
                <li>Created and documented over 10 new API queries to support new product functionality</li>
                <li>Collaborated with cross-functional teams to implement React-based support for a newly launched hardware product within internal client tool</li>
              </ul>
            </div>

            {/* TechForTeachers */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-amber-600/20 rounded-xl p-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                <div>
                  <h3 className="text-xl font-semibold text-amber-400">
                    Founder
                  </h3>
                  <p className="text-slate-300">TechForTeachers</p>
                </div>
                <div className="text-slate-500 text-sm mt-1 md:mt-0 md:text-right">
                  <p>East Greenwich, RI</p>
                  <p>September 2022 – June 2024</p>
                </div>
              </div>
              <ul className="list-disc list-inside text-slate-300 space-y-2">
                <li>Founded TechForTeachers to create free and accessible software for teachers while allowing students to apply their coding skills as part of a software development team</li>
                <li>Recruited 10 software developers with skills ranging from beginner to experienced programmers</li>
                <li>Built and maintained company website to display mission, staff, and completed applications using React</li>
              </ul>
            </div>

            {/* VoltServer 2023 */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-amber-600/20 rounded-xl p-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                <div>
                  <h3 className="text-xl font-semibold text-amber-400">
                    Software Engineering Intern
                  </h3>
                  <p className="text-slate-300">VoltServer – Received return offer</p>
                </div>
                <div className="text-slate-500 text-sm mt-1 md:mt-0 md:text-right">
                  <p>East Greenwich, RI</p>
                  <p>June 2023 – August 2023</p>
                </div>
              </div>
              <ul className="list-disc list-inside text-slate-300 space-y-2">
                <li>Prepared integrated software for CI pipeline with the Cypress framework for automated testing</li>
                <li>Wrote 100+ end-to-end software tests to ensure product stability</li>
                <li>Documented over 30 API REST protocols in the user API guide using Swagger</li>
                <li>Identified and fixed 10 errors in API documentation to align with current software versions</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Leadership Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center mb-6">
            <FaTrophy className="text-amber-500 text-2xl mr-3" />
            <h2 className="text-4xl font-array font-bold text-amber-500">
              Leadership & Professional Development
            </h2>
          </div>

          <div className="space-y-6">
            {/* Brown Formula Racing */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-amber-600/20 rounded-xl p-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                <div>
                  <h3 className="text-xl font-semibold text-amber-400">
                    Dashboard Engineer
                  </h3>
                  <p className="text-slate-300">Brown Formula Racing Team</p>
                </div>
                <div className="text-slate-500 text-sm mt-1 md:mt-0 md:text-right">
                  <p>Providence, RI</p>
                  <p>October 2024 – Present</p>
                </div>
              </div>
              <ul className="list-disc list-inside text-slate-300 space-y-2">
                <li>Design a dashboard display to show real-time data using Figma</li>
                <li>Use Nextion editor to connect display variables to data from the ECU</li>
                <li>Test multiple dashboard designs and revise accordingly, depending on driver feedback in various conditions</li>
              </ul>
            </div>

            {/* TechForTeachers Team Lead */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-amber-600/20 rounded-xl p-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                <div>
                  <h3 className="text-xl font-semibold text-amber-400">
                    Software Team Lead
                  </h3>
                  <p className="text-slate-300">TechForTeachers</p>
                </div>
                <div className="text-slate-500 text-sm mt-1 md:mt-0 md:text-right">
                  <p>East Greenwich, RI</p>
                  <p>September 2022 – June 2024</p>
                </div>
              </div>
              <ul className="list-disc list-inside text-slate-300 space-y-2">
                <li>Developed a web application, SmartGrouper, to help teachers group students based on desired parameters such as number of groups, group stations, and class size</li>
                <li>Managed a team of 12 student developers with various roles, including front-end, interface, and back-end</li>
                <li>Taught students how to code in Python and JavaScript using modern frameworks such as AWS and React</li>
                <li>Collaborated with other team members using management tools such as ClickUp and GitHub</li>
              </ul>
            </div>

            {/* Chinese Family Camp */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-amber-600/20 rounded-xl p-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                <div>
                  <h3 className="text-xl font-semibold text-amber-400">
                    Website Developer
                  </h3>
                  <p className="text-slate-300">Chinese Family Camp</p>
                </div>
                <div className="text-slate-500 text-sm mt-1 md:mt-0 md:text-right">
                  <p>Providence, RI</p>
                  <p>June 2018 – Present</p>
                </div>
              </div>
              <ul className="list-disc list-inside text-slate-300 space-y-2">
                <li>Developed summer camp website with over 21,000 total visits to support over 230 campers yearly, featuring account management, camper registration, important information, member blog posts, and archives using WordPress</li>
                <li>Maintained website by updating dates and registration information</li>
                <li>Catalogued important camp documents for committee use</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center mb-6">
            <FaCode className="text-amber-500 text-2xl mr-3" />
            <h2 className="text-4xl font-array font-bold text-amber-500">
              Skills & Technologies
            </h2>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm border border-amber-600/20 rounded-xl p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-amber-400 font-semibold mb-3">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {["Python", "Java", "JavaScript", "TypeScript"].map((lang) => (
                    <span
                      key={lang}
                      className="px-3 py-1 bg-amber-950/50 text-amber-400 rounded-md border border-amber-600/30"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-amber-400 font-semibold mb-3">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {["React", "Git", "AWS", "Cypress", "Blender", "Figma", "Matplotlib"].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-amber-950/50 text-amber-400 rounded-md border border-amber-600/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
