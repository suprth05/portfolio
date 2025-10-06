import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Database, Wrench, GitBranch } from 'lucide-react';

interface SkillsProps {
  darkMode: boolean;
}

const Skills = ({ darkMode }: SkillsProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skillCategories = [
    {
      title: 'Languages',
      icon: Code2,
      skills: ['C', 'Java', 'Python', 'Javascript'],
      color: 'from-orange-500 to-red-500',
    },
    {
      title: 'Frameworks',
      icon: Database,
      skills: ['React', 'Node.js', 'MongoDB', 'Flask', 'Bootstrap', 'Scikit-learn'],
      color: 'from-red-500 to-orange-500',
    },
    {
      title: 'Tools',
      icon: Wrench,
      skills: ['Git', 'Github', 'Numpy', 'Pandas', 'SQL', 'FIGMA', 'Matplotlib', 'Seaborn'],
      color: 'from-orange-400 to-red-400',
    },
  ];

  return (
    <section
      id="skills"
      ref={ref}
      className={`py-20 ${darkMode ? 'bg-gray-950' : 'bg-gray-50'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <div
                  className={`rounded-2xl p-8 border-2 transition-all duration-300 hover:scale-105 h-full ${
                    darkMode
                      ? 'bg-gray-900 border-orange-500/30 hover:border-orange-500'
                      : 'bg-white border-orange-500/20 hover:border-orange-500'
                  }`}
                >
                  <div className={`inline-flex p-4 rounded-xl mb-6 bg-gradient-to-br ${category.color}`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {category.title}
                  </h3>

                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.4, delay: 0.2 + 0.05 * skillIndex }}
                        className={`px-4 py-2 rounded-full font-medium text-sm transition-all duration-300 hover:scale-110 ${
                          darkMode
                            ? 'bg-gray-800 text-gray-300 hover:bg-orange-500 hover:text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-orange-500 hover:text-white'
                        }`}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16"
        >
          <div
            className={`rounded-2xl p-8 border-2 ${
              darkMode
                ? 'bg-gray-900/50 border-orange-500/30'
                : 'bg-white border-orange-500/20'
            }`}
          >
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center space-x-4">
                <div className={`p-4 rounded-xl bg-gradient-to-br from-orange-500 to-red-500`}>
                  <GitBranch className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Always Learning
                  </h3>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Continuously expanding my skill set
                  </p>
                </div>
              </div>
              <a
                href="#contact"
                className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/50"
              >
                Let's Connect
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
