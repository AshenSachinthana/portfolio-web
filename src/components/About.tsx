import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Heart, Target } from 'lucide-react';

const About: React.FC = () => {
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
    <section id="about" className="py-20 bg-gray-50 dark:bg-slate-800">
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
            About <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">Me</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Passionate about technology and always eager to learn new things
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
            className="space-y-6"
          >
            <motion.p
              variants={itemVariants}
              className="text-lg leading-relaxed text-gray-700 dark:text-gray-300"
            >
              I'm a dedicated Computer Science student at the University of Colombo School of Computing, 
              with a strong passion for DevOps, cloud computing, and system automation. My journey in 
              technology has been driven by curiosity and a desire to build efficient, scalable solutions.
            </motion.p>
            
            <motion.p
              variants={itemVariants}
              className="text-lg leading-relaxed text-gray-700 dark:text-gray-300"
            >
              Currently working as an intern at Panaceata, I've gained valuable hands-on experience 
              with AWS services, particularly S3, and have been actively involved in improving CI/CD 
              processes. This experience has strengthened my understanding of cloud infrastructure 
              and modern deployment practices.
            </motion.p>
            
            <motion.p
              variants={itemVariants}
              className="text-lg leading-relaxed text-gray-700 dark:text-gray-300"
            >
              Beyond my professional work, I enjoy working on personal projects that challenge me 
              to learn new technologies and solve real-world problems. From building full-stack 
              web applications to implementing system administration solutions, I'm always looking 
              for opportunities to grow and contribute to meaningful projects.
            </motion.p>
          </motion.div>

          {/* Cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
            className="grid gap-6"
          >
            <motion.div
              variants={itemVariants}
              className="bg-white dark:bg-slate-700 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                  <GraduationCap className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold ml-4">Education</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                Computer Science at University of Colombo School of Computing, 
                building a strong foundation in software engineering and system design.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-white dark:bg-slate-700 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-emerald-100 dark:bg-emerald-900 rounded-lg">
                  <Briefcase className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="text-xl font-semibold ml-4">Experience</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                Intern at Panaceata, working with AWS services and CI/CD pipelines, 
                gaining practical experience in cloud computing and DevOps practices.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-white dark:bg-slate-700 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-orange-100 dark:bg-orange-900 rounded-lg">
                  <Heart className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                </div>
                <h3 className="text-xl font-semibold ml-4">Passion</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                Passionate about automation, cloud technologies, and building systems 
                that make developers' lives easier and more productive.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-white dark:bg-slate-700 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-lg">
                  <Target className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold ml-4">Goals</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                Aspiring to become a skilled DevOps engineer, contributing to innovative 
                projects and helping organizations achieve their technical goals.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;