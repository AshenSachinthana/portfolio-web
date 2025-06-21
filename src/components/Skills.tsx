import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Code, Database, Settings, Server, GitBranch } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      color: 'blue',
      skills: [
        { name: 'AWS (S3, EC2, Lambda)', level: 85 },
        { name: 'Docker', level: 80 },
        { name: 'Jenkins', level: 75 },
        { name: 'CI/CD Pipelines', level: 80 },
        { name: 'Linux Administration', level: 90 }
      ]
    },
    {
      icon: Code,
      title: 'Programming Languages',
      color: 'emerald',
      skills: [
        { name: 'Python', level: 90 },
        { name: 'JavaScript/TypeScript', level: 85 },
        { name: 'Java', level: 80 },
        { name: 'Bash Scripting', level: 85 },
        { name: 'PHP', level: 75 }
      ]
    },
    {
      icon: Settings,
      title: 'Frameworks & Tools',
      color: 'orange',
      skills: [
        { name: 'React/React Native', level: 85 },
        { name: 'Node.js', level: 80 },
        { name: 'Spring Boot', level: 75 },
        { name: 'Git/GitHub', level: 90 },
        { name: 'Apache/Nginx', level: 70 }
      ]
    },
    {
      icon: Database,
      title: 'Databases',
      color: 'purple',
      skills: [
        { name: 'PostgreSQL', level: 80 },
        { name: 'MongoDB', level: 75 },
        { name: 'MySQL', level: 85 },
        { name: 'Redis', level: 70 },
        { name: 'Database Design', level: 80 }
      ]
    }
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'from-blue-500 to-blue-600',
      emerald: 'from-emerald-500 to-emerald-600',
      orange: 'from-orange-500 to-orange-600',
      purple: 'from-purple-500 to-purple-600'
    };
    return colors[color as keyof typeof colors] || 'from-gray-500 to-gray-600';
  };

  const getIconBgColor = (color: string) => {
    const colors = {
      blue: 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400',
      emerald: 'bg-emerald-100 dark:bg-emerald-900 text-emerald-600 dark:text-emerald-400',
      orange: 'bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-400',
      purple: 'bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400'
    };
    return colors[color as keyof typeof colors] || 'bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-400';
  };

  return (
    <section id="skills" className="py-20">
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
            Technical <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">Skills</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            A comprehensive overview of my technical expertise and proficiency levels
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-lg ${getIconBgColor(category.color)}`}>
                  <category.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold ml-4">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-2">
                      <motion.div
                        className={`h-2 rounded-full bg-gradient-to-r ${getColorClasses(category.color)}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 1, 
                          delay: categoryIndex * 0.2 + skillIndex * 0.1,
                          ease: "easeOut"
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="mt-16"
        >
          <motion.h3
            variants={itemVariants}
            className="text-2xl font-bold text-center mb-8"
          >
            Other Technologies & Tools
          </motion.h3>
          
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4"
          >
            {[
              'Kubernetes', 'Terraform', 'Ansible', 'Prometheus', 'Grafana',
              'Elasticsearch', 'RabbitMQ', 'Squid Proxy', 'Keepalived', 'DHCP',
              'System Hardening', 'Network Security', 'Backup Solutions'
            ].map((tech) => (
              <motion.span
                key={tech}
                className="px-4 py-2 bg-gray-100 dark:bg-slate-700 rounded-full text-sm font-medium hover:bg-gray-200 dark:hover:bg-slate-600 transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;