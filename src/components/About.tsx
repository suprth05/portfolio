import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import profilePhoto from '../../supreeth.jpeg';
import { useRef } from 'react';
import { Code, Lightbulb, Brain } from 'lucide-react';

interface AboutProps {
  darkMode: boolean;
}

const About = ({ darkMode }: AboutProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="about"
      ref={ref}
      className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-brand-gradient bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-brand-gradient mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-brand-gradient rounded-full blur-3xl opacity-20"></div>
              <div className={`relative rounded-2xl p-1 bg-brand-gradient`}>
                <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-8`}>
                  <div className="w-80 sm:w-96 rounded-2xl border-4 border-orange-500/30 bg-black/5">
                    <img
                      src={profilePhoto}
                      alt="Profile"
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className={`rounded-2xl p-8 glass-card`}>
              <h3 className={`text-2xl sm:text-3xl font-bold mb-6 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                About Me
              </h3>

              <p className={`text-lg mb-4 leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                I'm Supreeth S — a Computer Science undergraduate at RV College of Engineering (CGPA 9.26 up to 4th sem),
                focused on building reliable software and applying AI/ML to practical problems.
              </p>

              <p className={`text-lg mb-4 leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                I’ve delivered hands-on projects spanning a peer‑to‑peer encrypted chat system, medical image segmentation with MONAI,
                rice grain quality grading with YOLO/OpenCV, a PDF summarization tool using transformers, and an interactive algorithm visualizer.
              </p>

              <p className={`text-lg mb-8 leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                I’m detail‑oriented, curious, and pragmatic. I like working end‑to‑end—from shaping requirements to shipping, instrumentation, and iteration.
                I value clear communication, clean abstractions, and thoughtful UX. Day‑to‑day, I’m comfortable with React, Node/Express, Python, PyTorch, and OpenCV.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className={`p-4 rounded-xl border-2 transition-all duration-300 hover:scale-105 ${
                  darkMode ? 'bg-gray-900/50 border-brand-500/30' : 'bg-white border-brand-500/20'
                }`}>
                  <Code className="w-8 h-8 text-brand-500 mb-2" />
                  <h4 className={`font-semibold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Full Stack
                  </h4>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    MERN Stack Development
                  </p>
                </div>

                <div className={`p-4 rounded-xl border-2 transition-all duration-300 hover:scale-105 ${
                  darkMode ? 'bg-gray-900/50 border-brand-500/30' : 'bg-white border-brand-500/20'
                }`}>
                  <Lightbulb className="w-8 h-8 text-brand-500 mb-2" />
                  <h4 className={`font-semibold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    AI/ML
                  </h4>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Computer Vision & ML
                  </p>
                </div>

                <div className={`p-4 rounded-xl border-2 transition-all duration-300 hover:scale-105 ${
                  darkMode ? 'bg-gray-900/50 border-brand-500/30' : 'bg-white border-brand-500/20'
                }`}>
                  <Brain className="w-8 h-8 text-brand-500 mb-2" />
                  <h4 className={`font-semibold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Problem‑Solving
                  </h4>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Pragmatic, end‑to‑end builder mindset
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
