import { motion } from 'framer-motion';
const profilePhoto = '/supreeth.jpeg';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';

interface HeroProps {
  darkMode: boolean;
}

const Hero = ({ darkMode }: HeroProps) => {
  return (
    <section
      id="home"
      className={`min-h-screen flex items-center justify-center relative overflow-hidden ${
        darkMode ? 'bg-gray-950' : 'bg-gray-50'
      }`}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 -top-48 -left-48 bg-indigo-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center space-x-2 mb-6 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20"
            >
              <MapPin className="w-4 h-4 text-orange-500" />
              <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Bengaluru, Karnataka
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}
            >
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-indigo-500 to-blue-400 bg-clip-text text-transparent">
                Supreeth S
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className={`text-xl sm:text-2xl mb-8 ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}
            >
              Computer Science Student
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className={`text-lg mb-8 max-w-2xl ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}
            >
              Building innovative solutions across the stack with a passion for ML and Computer Vision
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <a
                href="#contact"
                className="group px-8 py-4 bg-gradient-to-r from-indigo-500 to-blue-400 text-white rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/40"
              >
                Get In Touch
              </a>
              <a
                href="#projects"
                className={`px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 glass-card ${
                  darkMode ? 'text-indigo-300' : 'text-indigo-600'
                }`}
              >
                View Projects
              </a>
              <a
                href="/Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 bg-brand-gradient text-white"
              >
                View Resume
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex gap-4 mt-8 justify-center lg:justify-start"
            >
              <a
                href="https://github.com/suprth05"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${
                  darkMode
                    ? 'bg-gray-800 text-gray-300 hover:bg-indigo-500 hover:text-white'
                    : 'bg-white text-gray-700 hover:bg-indigo-500 hover:text-white shadow-md'
                }`}
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/supreeth-s-a50841302"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${
                  darkMode
                    ? 'bg-gray-800 text-gray-300 hover:bg-indigo-500 hover:text-white'
                    : 'bg-white text-gray-700 hover:bg-indigo-500 hover:text-white shadow-md'
                }`}
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:supreeths.cs23@rvce.edu.in"
                className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${
                  darkMode
                    ? 'bg-gray-800 text-gray-300 hover:bg-indigo-500 hover:text-white'
                    : 'bg-white text-gray-700 hover:bg-indigo-500 hover:text-white shadow-md'
                }`}
              >
                <Mail size={24} />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-blue-400 rounded-full blur-2xl opacity-20 animate-pulse"></div>
              <div className="relative w-80 sm:w-96 lg:w-[28rem] rounded-2xl overflow-hidden border-4 border-indigo-500/40 shadow-2xl bg-black/5">
                <img
                  src={profilePhoto}
                  alt="Vikas KT"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="animate-bounce">
          <div className={`w-6 h-10 border-2 rounded-full flex items-start justify-center p-2 ${
            darkMode ? 'border-gray-600' : 'border-gray-400'
          }`}>
            <div className={`w-1.5 h-3 rounded-full ${
              darkMode ? 'bg-gray-600' : 'bg-gray-400'
            }`}></div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
