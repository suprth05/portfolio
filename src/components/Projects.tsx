import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink } from 'lucide-react';

interface ProjectsProps {
  darkMode: boolean;
}

const Projects = ({ darkMode }: ProjectsProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const projects = [
    {
      title: 'Decentralized Peer-to-Peer Encrypted Chat Communication System',
      description:
        'Privacy-focused chat enabling direct P2P text, video, and file sharing without central servers, with end-to-end encryption for complete data security.',
      technologies: ['Python', 'Sockets', 'OpenCV', 'Cryptography', 'Tkinter'],
      image: 'https://a.storyblok.com/f/231922/1726x1040/dad104072f/image-18.png/m/0x0/',
      date: '2025',
      link: 'https://github.com/suprth05/p2p',
    },
    {
      title: 'AI-Based Rice Quality Detection and Grading using YOLO and OpenCV',
      description:
        'Computer vision system to analyze rice grains and classify quality using YOLO detection with OpenCV preprocessing to support fair trade for farmers.',
      technologies: ['Python', 'YOLOv5', 'OpenCV', 'NumPy', 'Streamlit', 'Raspberry Pi'],
      image: 'https://images.pexels.com/photos/4110254/pexels-photo-4110254.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2025',
      link: 'https://github.com/suprth05/rice_grading',
    },
    {
      title: 'Deep Learning-Based Medical Image Segmentation using MONAI Framework',
      description:
        'Tumor and organ segmentation from MRI/CT using deep learning models in MONAI to assist radiologists with accurate clinical diagnosis.',
      technologies: ['Python', 'MONAI', 'PyTorch', 'NumPy', 'Matplotlib'],
      image: 'https://raw.githubusercontent.com/Project-MONAI/model-zoo/dev/models/wholeBrainSeg_Large_UNEST_segmentation/docs/3DSlicer_use.png',
      date: '2024',
      link: 'https://www.kaggle.com/code/suprth05/retinal-blood-vessels',
    },
    {
      title: 'Interactive Holographic Display Controlled through Hand Gestures',
      description:
        'Immersive holographic projection with gesture recognition; manipulate 3D holograms in real time via vision-driven hand tracking.',
      technologies: ['Python', 'OpenCV', 'Mediapipe', 'Arduino', 'Ultrasonic Sensors'],
      image: 'https://images.pexels.com/photos/8728382/pexels-photo-8728382.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2025',
      link: 'https://github.com/suprth05/3D_holograms_using_gesture_control.git',
    },
    {
      title: 'Algorithm Visualization Platform for Data Structure and Sorting Techniques',
      description:
        'Web app that visually demonstrates sorting, searching, and graph traversal algorithms to help learners grasp step-by-step logic.',
      technologies: ['JavaScript', 'React', 'D3.js', 'HTML', 'CSS'],
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2024',
      link: 'https://github.com/suprth05/DAA_EL',
    },
    {
      title: 'Gesture-Controlled Robotic Arm for Industrial and Home Applications',
      description:
        'Sensor-based robotic arm controlled via accelerometers and flex sensors to improve industrial efficiency and assist users with limited mobility.',
      technologies: ['Arduino', 'MPU6050', 'Servo Motors', 'Embedded C', 'Python'],
      image: 'https://images.pexels.com/photos/2569839/pexels-photo-2569839.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2023',
      link: 'https://github.com/suprth05/Gesture_Controlled_Robotic_Arm',
    },
    {
      title: 'AI-Powered Document and PDF Summarization System',
      description:
        'NLP application using transformer models to extract and summarize long PDF documents into concise, context-aware summaries.',
      technologies: ['Python', 'Flask', 'Hugging Face', 'PyMuPDF', 'React'],
      image: 'https://www.pdf-summarizer.com/images/PDF%20Summarizer%20(3).png',
      date: '2024',
      link: 'https://github.com/suprth05/PDFs.git',
    },
  ];

  return (
    <section
      id="projects"
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
            My Projects
          </h2>
          <div className="w-24 h-1 bg-brand-gradient mx-auto rounded-full"></div>
          <p className={`mt-6 text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Here are some of the projects I've worked on, showcasing my skills in web development and data science.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="group"
            >
              <div
                className={`rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl glass-card`}
              >
                <div className="relative overflow-hidden h-64">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block px-3 py-1 bg-brand-500/90 text-white text-xs rounded-full">
                      {project.date}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className={`text-xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {project.title}
                  </h3>

                  <p className={`text-sm mb-4 leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          darkMode
                            ? 'bg-gray-800 text-gray-300'
                            : 'bg-gray-100 text-gray-700'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-brand-500 font-medium hover:text-accent-600 transition-colors duration-300"
                    >
                      <span>View Project</span>
                      <ExternalLink size={16} />
                    </a>
                  ) : (
                    <span className="inline-flex items-center space-x-2 text-brand-500/80 font-medium cursor-default">
                      <span>View Project</span>
                      <ExternalLink size={16} />
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
