import React from 'react';
import { motion } from 'framer-motion';
import { Server, Shield, Network, HardDrive, Settings, Terminal } from 'lucide-react';

const PracticalProjects: React.FC = () => {
  const practicalProjects = [
    {
      title: 'Backup Script with Hard Links',
      description: 'Developed an efficient backup solution using hard links to minimize storage usage while maintaining multiple backup versions.',
      icon: HardDrive,
      technologies: ['Bash', 'Linux', 'Cron', 'Hard Links'],
      features: [
        'Incremental backup with hard links',
        'Automated scheduling with cron',
        'Storage optimization techniques',
        'Backup verification and integrity checks'
      ]
    },
    {
      title: 'Apache + Squid + Keepalived HA Solution',
      description: 'Implemented a high-availability web infrastructure with load balancing and failover capabilities.',
      icon: Server,
      technologies: ['Apache', 'Squid Proxy', 'Keepalived', 'Linux', 'HA'],
      features: [
        'High availability configuration',
        'Load balancing implementation',
        'Automatic failover mechanisms',
        'Performance monitoring and logging'
      ]
    },
    {
      title: 'DHCP Server Configuration',
      description: 'Set up and configured a robust DHCP server for network IP address management and allocation.',
      icon: Network,
      technologies: ['DHCP', 'Linux', 'Network Configuration', 'DNS'],
      features: [
        'Dynamic IP address allocation',
        'Network scope configuration',
        'Lease management and monitoring',
        'Integration with DNS services'
      ]
    },
    {
      title: 'Linux Disk Quota Implementation',
      description: 'Implemented disk quota management system to control and monitor user storage usage.',
      icon: Settings,
      technologies: ['Linux', 'Quota Tools', 'File Systems', 'User Management'],
      features: [
        'User and group quota enforcement',
        'Storage usage monitoring',
        'Automated warning notifications',
        'Quota reporting and analytics'
      ]
    },
    {
      title: 'Linux System Hardening',
      description: 'Comprehensive system security hardening including firewall configuration and access controls.',
      icon: Shield,
      technologies: ['iptables', 'SELinux', 'SSH', 'Security Policies'],
      features: [
        'Firewall rules and policies',
        'SSH security configuration',
        'User access control implementation',
        'Security audit and compliance'
      ]
    },
    {
      title: 'Automated System Monitoring',
      description: 'Built comprehensive monitoring solution for system performance and resource utilization.',
      icon: Terminal,
      technologies: ['Bash', 'Python', 'Cron', 'Log Analysis'],
      features: [
        'Real-time system monitoring',
        'Resource utilization tracking',
        'Automated alert notifications',
        'Performance trend analysis'
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

  const getIconColor = (index: number) => {
    const colors = [
      'text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900',
      'text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-900',
      'text-orange-600 dark:text-orange-400 bg-orange-100 dark:bg-orange-900',
      'text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900',
      'text-red-600 dark:text-red-400 bg-red-100 dark:bg-red-900',
      'text-indigo-600 dark:text-indigo-400 bg-indigo-100 dark:bg-indigo-900'
    ];
    return colors[index % colors.length];
  };

  return (
    <section className="py-20">
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
            Practical <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">Projects</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            System administration and DevOps projects demonstrating hands-on technical expertise
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {practicalProjects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="flex items-center mb-4">
                <div className={`p-3 rounded-lg ${getIconColor(index)}`}>
                  <project.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold ml-3 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
              </div>

              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="mb-4">
                <h4 className="font-semibold mb-2 text-gray-900 dark:text-white text-sm">
                  Key Features:
                </h4>
                <ul className="space-y-1">
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2 text-gray-900 dark:text-white text-sm">
                  Technologies:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills Highlight */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="mt-16 bg-gradient-to-r from-gray-50 to-blue-50 dark:from-slate-800 dark:to-slate-700 p-8 rounded-xl"
        >
          <motion.div variants={itemVariants} className="text-center">
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              System Administration Expertise
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-3xl mx-auto">
              These practical projects demonstrate my hands-on experience with system administration, 
              network configuration, security implementation, and automation. Each project was designed 
              to solve real-world infrastructure challenges and improve system reliability.
            </p>
            
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'Linux System Administration', 'Network Configuration', 'Security Hardening',
                'Backup Solutions', 'High Availability', 'Performance Monitoring',
                'Automation Scripts', 'Infrastructure Management'
              ].map((skill) => (
                <motion.span
                  key={skill}
                  className="px-4 py-2 bg-white dark:bg-slate-600 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium shadow-sm"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PracticalProjects;