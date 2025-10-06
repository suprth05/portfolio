import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Trophy, Award, ExternalLink } from 'lucide-react';

interface AchievementsProps {
  darkMode: boolean;
}

const Achievements = ({ darkMode }: AchievementsProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const achievements = [
    {
      title: 'First Place – Hack Yugma Techfest 2025, JNNCE, Shivamogga',
      description:
        'Recognized as overall winners for building a polished, technically solid solution under time pressure with clear real‑world impact.',
      icon: Trophy,
      color: 'from-brand-500 to-accent-600',
      link: '/hack%20yugma.jpg',
    },
    {
      title: 'Second Place – MONAITHON 2025, JNNCE, Shivamogga',
      description:
        'Commended for standout work in AI‑driven medical imaging using the MONAI framework, from data prep to robust model evaluation.',
      icon: Award,
      color: 'from-brand-500 to-accent-600',
      link: '/Monaithon.jpg',
    },
    {
      title: 'Best Project Certificate – Solar Powered UAV',
      description: 'Awarded for second semester project, academic year 2023–24',
      icon: Trophy,
      color: 'from-brand-500 to-accent-600',
      link: '/best_project.jpg',
    },
    {
      title: 'First Place – Pictorial: Art and Mathematics',
      description: 'Won in Nov 2024 as part of National Mathematics Day with IQAC',
      icon: Award,
      color: 'from-brand-500 to-accent-600',
      link: '/pictorial.jpg',
    },
  ];

  return (
    <section
      id="achievements"
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
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-brand-gradient bg-clip-text text-transparent">
            Achievements
          </h2>
          <div className="w-24 h-1 bg-brand-gradient mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="group"
              >
                <div
                  className={`relative rounded-2xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl h-full glass-card`}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-brand-500/10 to-accent-600/10 rounded-bl-full blur-2xl"></div>

                  <div className={`relative inline-flex p-4 rounded-xl mb-4 bg-gradient-to-br ${achievement.color}`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {achievement.title}
                  </h3>

                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {achievement.description}
                  </p>

                  {/* Certificate links moved to Certifications section */}

                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-500 to-accent-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl"></div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16"
        >
          <div
            className={`rounded-2xl p-8 border-2 ${
              darkMode
                ? 'bg-gray-900/50 border-brand-500/30'
                : 'bg-white border-brand-500/20'
            }`}
          >
            <h3 className={`text-2xl font-bold mb-6 text-center ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Extracurricular Activities
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800/50' : 'bg-gray-50'}`}>
                <h4 className={`font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  National Service Scheme (NSS)
                </h4>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Active member participating in social events, blood donation camps, and marathons
                </p>
              </div>
              <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800/50' : 'bg-gray-50'}`}>
                <h4 className={`font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  College Hockey Team
                </h4>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Member of college hockey team, participated in VTU sports competitions
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
