import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

interface EducationProps {
  darkMode: boolean;
}

const Education = ({ darkMode }: EducationProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const education = [
    {
      institution: 'R V College of Engineering, Bengaluru',
      degree: 'B.E. in Computer Science and Engineering',
      duration: '2023 – Present',
      location: 'Bengaluru, Karnataka',
      achievement: 'CGPA: 9.26 (up to 4th semester)',
      icon: GraduationCap,
    },
    {
      institution: 'SAI PU College, Bengaluru',
      degree: 'Pre-University Education (Class 12)',
      duration: '2021 – 2023',
      location: 'Bengaluru, Karnataka',
      achievement: 'Percentage: 96.33%',
      icon: BookOpen,
    },
    {
      institution: 'Kendriya Vidyalaya Borjhar, Assam',
      degree: 'Class 10 (CBSE)',
      duration: '2016 – 2021',
      location: 'Assam',
      achievement: 'Percentage: 97.6%',
      icon: BookOpen,
    },
  ];

  const coursework = [
    'Data Structures',
    'Algorithms Analysis',
    'Data Science',
    'Web Development',
    'Operating Systems',
    'Machine Learning',
    'Database Management',
  ];

  return (
    <section
      id="education"
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
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-500 to-blue-400 bg-clip-text text-transparent">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-blue-400 mx-auto rounded-full"></div>
        </motion.div>

        <div className="space-y-8 mb-16">
          {education.map((edu, index) => {
            const Icon = edu.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <div
                  className={`rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:scale-105 glass-card`}
                >
                  <div className="flex flex-col sm:flex-row gap-6">
                    <div className={`flex-shrink-0 w-16 h-16 rounded-xl flex items-center justify-center ${
                      darkMode ? 'bg-orange-500/20' : 'bg-orange-500/10'
                    }`}>
                      <Icon className="w-8 h-8 text-orange-500" />
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                          {edu.institution}
                        </h3>
                        <span className={`text-sm mt-2 sm:mt-0 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          {edu.duration}
                        </span>
                      </div>

                      <p className={`text-lg mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        {edu.degree}
                      </p>

                      <p className={`text-sm mb-3 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        {edu.location}
                      </p>

                      <div className="flex flex-wrap gap-3">
                        <span className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-medium text-sm">
                          <Award className="w-4 h-4 mr-2" />
                          {edu.achievement}
                        </span>
                        {edu.additional?.map((item, i) => (
                          <span
                            key={i}
                            className={`px-4 py-2 rounded-full font-medium text-sm ${
                              darkMode ? 'bg-gray-700 text-gray-300' : 'bg-white text-gray-700 border border-gray-300'
                            }`}
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className={`text-2xl font-bold text-center mb-8 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Relevant Coursework
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {coursework.map((course, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + 0.05 * index }}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-110 ${
                  darkMode
                    ? 'bg-gray-800 text-gray-300 hover:bg-orange-500 hover:text-white'
                    : 'bg-white text-gray-700 hover:bg-orange-500 hover:text-white shadow-md'
                }`}
              >
                {course}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
