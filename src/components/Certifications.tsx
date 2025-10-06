import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, ExternalLink } from 'lucide-react';

interface CertificationsProps {
  darkMode: boolean;
}

const Certifications = ({ darkMode }: CertificationsProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const nptelCerts = [
    {
      title: 'Data Science for Engineers',
      issuer: 'NPTEL',
      date: '2025',
      image: '/data_science.jpg',
      link: '/data_science.jpg',
    },
    {
      title: 'Decision Modelling',
      issuer: 'NPTEL',
      date: '2025',
      image: '/decision_modelling.jpg',
      link: '/decision_modelling.jpg',
    },
  ];

  const achievementCerts = [
    {
      title: 'Hack Yugma Techfest 2025 – Winner',
      issuer: 'JNNCE, Shivamogga',
      date: '2025',
      image: '/hack%20yugma.jpg',
      link: '/hack%20yugma.jpg',
    },
    {
      title: 'MONAITHON 2025 – Runner Up',
      issuer: 'JNNCE, Shivamogga',
      date: '2025',
      image: '/Monaithon.jpg',
      link: '/Monaithon.jpg',
    },
    {
      title: 'Best Project – Solar Powered UAV',
      issuer: 'Academic Year 2023–24',
      date: '2024',
      image: '/public/best_project.jpg',
      link: '/public/best_project.jpg',
    },
    {
      title: 'First Place – Pictorial: Art and Mathematics',
      issuer: 'National Mathematics Day with IQAC',
      date: '2024',
      image: '/public/Pictorial.jpg',
      link: '/public/Pictorial.jpg',
    },
  ];

  return (
    <section
      id="certifications"
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
            Certifications
          </h2>
          <div className="w-24 h-1 bg-brand-gradient mx-auto rounded-full"></div>
        </motion.div>

        <h3 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          NPTEL Certifications
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          {nptelCerts.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="group"
            >
              <div
                className={`rounded-2xl overflow-hidden border-2 transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  darkMode
                    ? 'bg-gray-800 border-brand-500/30 hover:border-brand-500'
                    : 'bg-white border-brand-500/20 hover:border-brand-500'
                }`}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <div className="p-2 bg-brand-500 rounded-full">
                      <Award className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className={`text-lg font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {cert.title}
                  </h3>

                  <p className={`text-sm mb-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {cert.issuer}
                  </p>

                  <p className={`text-xs mb-4 ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                    {cert.date}
                  </p>

                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-brand-500 font-medium text-sm hover:text-accent-600 transition-colors duration-300"
                  >
                    <span>View Certificate</span>
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <h3 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          Achievement Certificates
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievementCerts.map((cert, index) => (
            <motion.div
              key={`ach-${index}`}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="group"
            >
              <div
                className={`rounded-2xl overflow-hidden border-2 transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  darkMode
                    ? 'bg-gray-800 border-brand-500/30 hover:border-brand-500'
                    : 'bg-white border-brand-500/20 hover:border-brand-500'
                }`}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <div className="p-2 bg-brand-500 rounded-full">
                      <Award className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className={`text-lg font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {cert.title}
                  </h3>

                  <p className={`text-sm mb-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {cert.issuer}
                  </p>

                  <p className={`text-xs mb-4 ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                    {cert.date}
                  </p>

                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-brand-500 font-medium text-sm hover:text-accent-600 transition-colors duration-300"
                  >
                    <span>View Certificate</span>
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
