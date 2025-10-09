"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section className="py-24 bg-slate-900/95">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="bg-slate-800/50 backdrop-blur-sm border border-amber-600/20 rounded-xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
              {/* Image Section */}
              <div className="md:col-span-2 relative h-64 md:h-auto">
                <Image
                  src="/images/piano.jpg"
                  alt="Brandon Sun"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-slate-800/50" />
              </div>

              {/* Text Section */}
              <div className="md:col-span-3 p-8 md:p-12">
                <h2 className="text-4xl md:text-5xl font-array font-bold text-amber-500 mb-6">
                  Hey There!
                </h2>

                <div className="text-slate-300 text-m leading-relaxed space-y-4">
                  <p>
                    My name is Brandon Sun, and I am a full-stack developer and
                    jazz pianist. I am currently an undergrad at Brown
                    University pursuing an Sc.B. in Applied Mathematics &
                    Computer Science. I have experience working in startups,
                    small businesses, and software development teams. I am
                    currently working at{" "}
                    <a
                      href="https://cntr.brown.edu/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-400 hover:text-amber-300 transition-colors"
                    >
                      Brown CNTR AISLE
                    </a>{" "}
                    as a Product Developer where I am responsible for the design
                    and development of a platform that scores AI-related
                    legislation.
                  </p>

                  <p>
                    At school, I am on the web development team for{" "}
                    <a
                      href="https://hackatbrown.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-400 hover:text-amber-300 transition-colors"
                    >
                      Hack@Brown
                    </a>
                    , a 24-hour hackathon. Previously, I was on the Brown
                    Formula Racing Team as a Dashboard Engineer, where I
                    designed a dashboard to display real-time data from the ECU.
                  </p>

                  <p>
                    Outside of work, I am a huge music nerd. Most of all, I love
                    jazz. I play piano for a jazz combo at Brown and I love
                    going to local jam sessions to bond over my favorite tunes.
                    You can check out what I&apos;m listening to at the bottom
                    of this page (hopefully I put you on!) or look through my{" "}
                    <a
                      href="https://open.spotify.com/playlist/31SEKEzI8ci2G38E2YU1Oh?si=e36ee23c6b264c66"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-400 hover:text-amber-300 transition-colors"
                    >
                      jazz playlist
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

