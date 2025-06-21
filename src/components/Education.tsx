import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award, Trophy } from 'lucide-react';

const Education: React.FC = () => {
  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University of Colombo School of Computing',
      location: 'Colombo, Sri Lanka',
      period: '2021 - Present',
      description: 'Specializing in software engineering, system design, and computer networks. Maintaining strong academic performance while actively participating in programming competitions and tech communities.',
      highlights: [
        'Data Structures & Algorithms',
        'Software Engineering',
        'Database Systems',
        'Computer Networks',
        'Operating Systems',
        'Web Technologies'
      ]
    }
  ];

  const achievements = [
    {
      title: 'AWS Certified Cloud Practitioner',
      year: '2024',
      icon: Award
    },
    {
      title: 'Hackathon Winner - Best Innovation',
      year: '2023',
      icon: Trophy
    },
    {
      title: 'Programming Competition Participant',
      year: '2022-2024',
      icon: Award
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
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-slate-800">
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
            <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">Education</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Academic background and continuous learning journey
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Education Timeline */}
          <div className="lg:col-span-2">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={containerVariants}
              className="space-y-8"
            >
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative pl-8 border-l-2 border-blue-200 dark:border-blue-800"
                >
                  <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-2 top-2"></div>
                  
                  <motion.div
                    className="bg-white dark:bg-slate-700 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {edu.degree}
                        </h3>
                        <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold">
                          {edu.institution}
                        </p>
                      </div>
                      <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                        <GraduationCap className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                      {edu.description}
                    </p>
                    
                    <div>
                      <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">
                        Key Subjects:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.highlights.map((subject) => (
                          <span
                            key={subject}
                            className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                          >
                            {subject}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Achievements */}
          <div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={containerVariants}
            >
              <motion.h3
                variants={itemVariants}
                className="text-2xl font-bold mb-6"
              >
                Achievements
              </motion.h3>
              
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="bg-white dark:bg-slate-700 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                    whileHover={{ x: 5 }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-emerald-100 dark:bg-emerald-900 rounded-lg">
                        <achievement.icon className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">
                          {achievement.title}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {achievement.year}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;