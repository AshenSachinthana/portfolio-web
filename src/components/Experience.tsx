import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Full Stack Developer Intern',
      company: 'Panaceata',
      location: 'Colombo, Sri Lanka',
      period: 'November 2024 - May 2025',
      type: 'Internship',
      description: 'Working on cloud infrastructure and DevOps practices, focusing on AWS services and CI/CD pipeline optimization.',
      achievements: [
        'Implemented AWS S3 bucket management and automation scripts',
        'Established quality assurance framework by implementing Playwright end to end testing',
        'Implemented AWS Lambda functions for notification system',
        'Collaborated with senior developers on infrastructure improvements',
        'Gained hands-on experience with Docker containerization',
        'Contributed to system monitoring and logging implementations'
      ],
      technologies: ['AWS', 'CI/CD', 'Docker', 'Python', 'Jenkins', 'Playwright']
    },
    {
      title: 'Full Stack Developer',
      company: 'Panaceata',
      location: 'Colombo, Sri Lanka',
      period: 'May 2025 - Present',
      type: 'Full-time',
      description: 'Leading full stack development initiatives with emphasis on multi-tenant deployments, feature flag management systems, and enterprise-grade logging and monitoring solutions. Architecting scalable SaaS applications and mentoring junior developers.',
      achievements: [
        'Designed and deployed multi tenant SaaS architecture supporting multiple isolated customer environments with secure data segregation',
        'Built and maintained feature flag system, canary deployments, and progressive feature rollouts',
        'Implemented end-to-end observability platform integrating logging, monitoring, and alerting using CloudWatch',
        'Led optimization of deployment pipelines and infrastructure cost reduction by 35%',
        'Developed scalable APIs and responsive UI components for mission critical applications',
        'Established database performance monitoring and query optimization strategies for high scale multi tenant systems',
        'Mentored intern team members and contributed to technical documentation and best practices'
      ],
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Node.js', 'React', 'TypeScript', 'PostgreSQL', 'CloudWatch', 'Grafana', 'CI/CD', 'Linux', 'Python']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="experience" className="py-20">
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
            Work <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">Experience</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Professional experience and contributions to real-world projects
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative pl-8 border-l-2 border-blue-200 dark:border-blue-800 pb-12 last:pb-0"
            >
              <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-2 top-2"></div>
              
              <motion.div
                className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {exp.title}
                      </h3>
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
                        {exp.type}
                      </span>
                    </div>
                    <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold mb-3">
                      {exp.company}
                    </p>
                    
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                    <Briefcase className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  </div>
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  {exp.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-gray-900 dark:text-white">
                    Key Achievements:
                  </h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <motion.li
                        key={achIndex}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: achIndex * 0.1 }}
                      >
                        <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">
                          {achievement}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3 text-gray-900 dark:text-white">
                    Technologies Used:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <motion.span
                        key={tech}
                        className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200 rounded-full text-sm font-medium"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Future Goals */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="mt-16 max-w-4xl mx-auto"
        >
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-blue-50 to-emerald-50 dark:from-slate-800 dark:to-slate-700 p-8 rounded-xl"
          >
            <h3 className="text-2xl font-bold mb-4 text-center">
              Looking Forward
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 text-center leading-relaxed">
              Actively seeking opportunities to grow as a DevOps engineer and contribute to 
              innovative projects. Interested in roles that involve cloud architecture, 
              automation, and building scalable systems that make a real impact.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;