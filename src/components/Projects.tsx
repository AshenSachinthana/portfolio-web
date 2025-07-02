import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Calendar, Tag, ChevronDown, ChevronUp } from 'lucide-react';

const Projects: React.FC = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: 'CommuniCare',
      description: 'A comprehensive citizen-government communication platform designed to streamline public service delivery and complaint management for Sri Lankan local councils.',
      longDescription: 'CommuniCare is a full-stack e-governance platform that bridges the communication gap between citizens and local government bodies in Sri Lanka. The system enables citizens to submit complaints with visual evidence, schedule appointments with civil officers, request municipal services, and track progress transparently. Built with bilingual support (Sinhala/English), it modernizes traditional paper-based complaint systems and eliminates long waiting queues through efficient appointment scheduling.',
      technologies: ['Spring Boot', 'React', 'React Native', 'PostgreSQL', 'JWT Authentication'],
      year: '2024',
      category: 'Full Stack',
      image: '/assets/images/projects/CommuniCare.png',
      githubUrl: 'https://github.com/AshenSachinthana/CommuniCare',
      liveUrl: '',
      featured: true,
      features: [
        'Bilingual complaint submission system with multimedia support',
        'Real-time complaint tracking and status updates',
        'Appointment scheduling with civil officers and service providers',
        'Multi-role access (Citizens, Civil Officers, Admins, Super Admin)',
        'Municipal service requests and payment processing',
        'Administrative dashboard for complaint management and reporting'
      ]
    },
    {
      id: 2,
      title: 'Library Management System',
      description: 'A modern library management system with advanced features for book cataloging and member management.',
      longDescription: 'Built using the MERN stack, this system modernizes library operations with features like automated book tracking, member management, fine calculations, and comprehensive reporting dashboards.',
      technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Material-UI'],
      year: '2024',
      category: 'Web App',
      image: '/assets/images/projects/LibraryMS.png',
      githubUrl: 'https://github.com/AshenSachinthana/LibraryMS',
      liveUrl: '',
      featured: true,
      features: [
        'Book cataloging and inventory management',
        'Member registration and management',
        'Book borrowing and return tracking',
        'Automated fine calculation system',
        'Advanced search and filtering',
        'Comprehensive reporting dashboard'
      ]
    },
    {
      id: 3,
      title: 'Labora',
      description: 'A laboratory management system for educational institutions to manage experiments and resources.',
      longDescription: 'Labora streamlines laboratory operations in educational settings, providing tools for experiment scheduling, equipment management, and student progress tracking.',
      technologies: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript', 'Apache'],
      year: '2023',
      category: 'Web App',
      image: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=600',
      githubUrl: 'https://github.com/AshenSachinthana/Labora',
      liveUrl: '',
      featured: false,
      features: [
        'Laboratory scheduling system',
        'Equipment inventory management',
        'Student experiment tracking',
        'Resource allocation optimization',
        'Safety protocol management',
        'Progress reporting tools'
      ]
    },
    {
      id: 4,
      title: 'Aora Meditation App',
      description: 'A React Native mobile application focused on mindfulness and meditation practices.',
      longDescription: 'Aora provides users with guided meditation sessions, breathing exercises, and mindfulness practices to improve mental well-being and reduce stress.',
      technologies: ['React Native', 'Firebase', 'Audio APIs', 'AsyncStorage'],
      year: '2024',
      category: 'Mobile App',
      image: 'https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=600',
      githubUrl: 'https://github.com/AshenSachinthana/Aora',
      liveUrl: '',
      featured: true,
      features: [
        'Guided meditation sessions',
        'Breathing exercise routines',
        'Progress tracking and statistics',
        'Customizable meditation timers',
        'Offline content availability',
        'User preference personalization'
      ]
    },
    {
      id: 5,
      title: 'ShopNest E-commerce',
      description: 'A full-featured e-commerce platform with modern shopping cart and payment integration.',
      longDescription: 'ShopNest is a comprehensive e-commerce solution featuring product management, shopping cart functionality, payment processing, and order tracking capabilities.',
      technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Stripe API'],
      year: '2023',
      category: 'E-commerce',
      image: 'https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600',
      githubUrl: 'https://github.com/AshenSachinthana/ShopNest',
      liveUrl: '',
      featured: false,
      features: [
        'Product catalog and management',
        'Shopping cart and wishlist',
        'Secure payment processing',
        'Order tracking and history',
        'User reviews and ratings',
        'Admin dashboard for management'
      ]
    },
    {
      id: 6,
      title: 'Weather Application',
      description: 'A Node.js weather application with dual CI/CD pipeline implementation and AWS cloud deployment.',
      longDescription: 'A comprehensive weather application that showcases modern DevOps practices through dual CI/CD pipeline implementation. Built with Node.js and integrated with weather APIs, this project demonstrates proficiency in cloud deployment, automation, and continuous integration workflows. The application fetches real-time weather data based on user location input and is deployed across multiple platforms for learning and comparison purposes.',
      technologies: ['Node.js', 'Weather API', 'AWS Elastic Beanstalk', 'GitLab CI/CD', 'GitHub Actions', 'SSL/HTTPS'],
      year: '2025',
      category: 'DevOps',
      image: '/assets/images/projects/WeatherApp.png',
      githubUrl: 'https://github.com/AshenSachinthana/weather-app',
      gitlabUrl: 'https://gitlab.com/AshenSachinthana/weather-app',
      liveUrl: '',
      featured: true,
      features: [
        'Real-time weather data retrieval based on user location input',
        'Dual CI/CD pipeline implementation using both GitLab CI/CD and GitHub Actions',
        'Automated deployment to AWS Elastic Beanstalk with environment management',
        'SSL certificate configuration for secure HTTPS communication',
        'Cross-platform deployment comparison and learning experience',
        'Infrastructure as Code practices and automated testing integration'
      ]
    }
  ];

  const categories = ['All', 'Full Stack', 'Web App', 'Mobile App', 'E-commerce', 'DevOps'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const featuredProjects = projects.filter(project => project.featured);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const toggleProject = (projectId: number) => {
    setExpandedProject(expandedProject === projectId ? null : projectId);
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl font-bold mb-4"
          >
            Featured <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">Projects</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            A showcase of my development projects and technical capabilities
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              variants={itemVariants}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white dark:bg-slate-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-600'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-white dark:bg-slate-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                whileHover={{ y: -5 }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                  {project.featured && (
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-emerald-600 text-white rounded-full text-sm font-medium">
                        Featured
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                      <Calendar className="h-4 w-4" />
                      <span>{project.year}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-100 dark:bg-slate-600 text-gray-700 dark:text-gray-300 rounded text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 dark:bg-slate-600 text-gray-700 dark:text-gray-300 rounded text-sm">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex gap-3">
                      {project.githubUrl && (
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-gray-100 dark:bg-slate-600 rounded-lg hover:bg-gray-200 dark:hover:bg-slate-500 transition-colors duration-200"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Github className="h-5 w-5" />
                        </motion.a>
                      )}
                      {project.liveUrl && (
                        <motion.a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-gray-100 dark:bg-slate-600 rounded-lg hover:bg-gray-200 dark:hover:bg-slate-500 transition-colors duration-200"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <ExternalLink className="h-5 w-5" />
                        </motion.a>
                      )}
                    </div>

                    <motion.button
                      onClick={() => toggleProject(project.id)}
                      className="flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="text-sm font-medium">Details</span>
                      {expandedProject === project.id ? (
                        <ChevronUp className="h-4 w-4" />
                      ) : (
                        <ChevronDown className="h-4 w-4" />
                      )}
                    </motion.button>
                  </div>

                  {/* Expanded Details */}
                  <AnimatePresence>
                    {expandedProject === project.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 pt-4 border-t border-gray-200 dark:border-slate-600"
                      >
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                          {project.longDescription}
                        </p>

                        <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">
                          Key Features:
                        </h4>
                        <ul className="space-y-1 mb-4">
                          {project.features.map((feature, index) => (
                            <li key={index} className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2">
                              <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                              {feature}
                            </li>
                          ))}
                        </ul>

                        <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">
                          Technologies:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="text-center mt-16"
        >
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-blue-50 to-emerald-50 dark:from-slate-700 dark:to-slate-600 p-8 rounded-xl"
          >
            <h3 className="text-2xl font-bold mb-4">
              Interested in Collaborating?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              I'm always open to new opportunities and exciting projects. 
              Let's discuss how we can work together to bring your ideas to life.
            </p>
            <motion.button
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-emerald-600 text-white rounded-lg hover:from-blue-700 hover:to-emerald-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;