import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, ExternalLink, CheckCircle } from 'lucide-react';

const Certifications: React.FC = () => {
  const certifications = [
    {
      title: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services',
      date: '2024',
      credentialId: 'AWS-CCP-2024-001',
      description: 'Foundational understanding of AWS cloud services, security, and pricing models.',
      skills: ['Cloud Computing', 'AWS Services', 'Security', 'Pricing Models'],
      badgeUrl: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=300',
      verifyUrl: '#'
    },
    {
      title: 'Docker Fundamentals',
      issuer: 'LinkedIn Learning',
      date: '2024',
      credentialId: 'LIL-DOCKER-2024',
      description: 'Comprehensive understanding of containerization, Docker commands, and deployment strategies.',
      skills: ['Docker', 'Containerization', 'DevOps', 'Deployment'],
      badgeUrl: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=300',
      verifyUrl: '#'
    },
    {
      title: 'CI/CD Pipeline Implementation',
      issuer: 'LinkedIn Learning',
      date: '2024',
      credentialId: 'LIL-CICD-2024',
      description: 'Advanced techniques for implementing continuous integration and deployment pipelines.',
      skills: ['CI/CD', 'Jenkins', 'Automation', 'DevOps'],
      badgeUrl: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=300',
      verifyUrl: '#'
    },
    {
      title: 'Linux System Administration',
      issuer: 'LinkedIn Learning',
      date: '2023',
      credentialId: 'LIL-LINUX-2023',
      description: 'Comprehensive Linux administration skills including system configuration and security.',
      skills: ['Linux', 'System Administration', 'Security', 'Networking'],
      badgeUrl: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=300',
      verifyUrl: '#'
    }
  ];

  const upcomingCertifications = [
    'AWS Solutions Architect Associate',
    'Certified Kubernetes Administrator (CKA)',
    'HashiCorp Terraform Associate',
    'Docker Certified Associate'
  ];

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
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-slate-800">
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
            <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">Certifications</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Professional certifications demonstrating expertise in cloud computing and DevOps practices
          </motion.p>
        </motion.div>

        {/* Current Certifications */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              variants={itemVariants}
              className="bg-white dark:bg-slate-700 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="relative">
                  <img
                    src={cert.badgeUrl}
                    alt={`${cert.title} Badge`}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                    {cert.title}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2">
                    {cert.issuer}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{cert.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Award className="h-4 w-4" />
                      <span>{cert.credentialId}</span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                {cert.description}
              </p>

              <div className="mb-4">
                <h4 className="font-semibold mb-2 text-gray-900 dark:text-white text-sm">
                  Skills Covered:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <motion.a
                href={cert.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink className="h-4 w-4" />
                <span className="text-sm font-medium">Verify Certificate</span>
              </motion.a>
            </motion.div>
          ))}
        </motion.div>

        {/* Upcoming Certifications */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="bg-gradient-to-r from-blue-50 to-emerald-50 dark:from-slate-700 dark:to-slate-600 p-8 rounded-xl"
        >
          <motion.div variants={itemVariants} className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Upcoming Certifications
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Continuing my professional development journey with these planned certifications
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {upcomingCertifications.map((cert, index) => (
              <motion.div
                key={cert}
                variants={itemVariants}
                className="bg-white dark:bg-slate-700 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
                whileHover={{ y: -3 }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white text-sm leading-tight">
                  {cert}
                </h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                  In Progress
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Certification Impact */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="mt-16 text-center"
        >
          <motion.div
            variants={itemVariants}
            className="bg-white dark:bg-slate-700 p-8 rounded-xl shadow-lg max-w-4xl mx-auto"
          >
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Commitment to Continuous Learning
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              These certifications represent my dedication to staying current with industry best practices 
              and emerging technologies. Each certification has enhanced my practical skills and theoretical 
              understanding, making me a more effective developer and system administrator.
            </p>
            
            <div className="grid sm:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">4+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Certifications Earned</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">4</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">In Progress</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">100+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Hours of Study</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;