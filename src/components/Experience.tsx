// components/Experience.tsx
"use client";
import { motion } from "framer-motion";
import { FaGraduationCap, FaAward, FaCode, FaCalendarAlt } from "react-icons/fa";

interface TimelineItem {
  id: number;
  title: string;
  institution: string;
  period: string;
  type: 'education' | 'certification';
  description: string;
  achievements: string[];
  icon: React.ReactNode;
}

export default function Experience() {
  const experiences = [
    {
      id: 1,
      title: "Bachelor of Technology in Computer Science and Engineering",
      organization: "Vellore Institute of Technology, Chennai",
      period: "Sep 2022 – May 2026",
      type: "education" as const,
      description: "Currently pursuing Bachelor's degree with focus on Full Stack Development, AI/ML, and Cloud Computing.",
      achievements: [
        "CGPA: 8.64/10",
        "Relevant Coursework: Data Structures, Algorithms, DBMS, Web Development",
        "Active member of coding clubs and tech communities"
      ],
      icon: <FaGraduationCap />
    },
    {
      id: 2,
      title: "Microsoft Certified: Azure AI Fundamentals (AI-900)",
      organization: "Microsoft",
      period: "2024",
      type: "certification" as const,
      description: "Certified in Azure AI services and machine learning fundamentals.",
      achievements: [
        "Azure Cognitive Services",
        "Machine Learning Concepts",
        "AI Ethics and Responsible AI",
        "Azure AI Solutions"
      ],
      icon: <FaAward />
    },
    {
      id: 3,
      title: "Internshala Web Development Training",
      organization: "Internshala",
      period: "2024",
      type: "certification" as const,
      description: "Comprehensive training in modern web development technologies.",
      achievements: [
        "HTML, CSS, JavaScript",
        "React.js Development",
        "Backend Development",
        "Project-based Learning"
      ],
      icon: <FaAward />
    },
    {
      id: 4,
      title: "Higher Secondary School Certificate",
      organization: "Maharishi Vidya Mandir, Chennai",
      period: "Jun 2020 – Mar 2022",
      type: "education" as const,
      description: "Completed higher secondary education with strong academic performance.",
      achievements: [
        "Percentage: 77.80%",
        "Science Stream with Mathematics",
        "Foundation in Computer Science"
      ],
      icon: <FaGraduationCap />
    },
    {
      id: 5,
      title: "Secondary School Certificate",
      organization: "Velammal Vidhyashram, Surapet, Chennai",
      period: "Jun 2012 – Mar 2020",
      type: "education" as const,
      description: "Completed secondary education with excellent academic record.",
      achievements: [
        "Percentage: 92.00%",
        "Strong foundation in Mathematics and Science",
        "Active participation in academic competitions"
      ],
      icon: <FaGraduationCap />
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'education': return 'var(--theme-primary)';
      case 'certification': return 'var(--theme-secondary)';
      case 'achievement': return 'var(--theme-accent)';
      default: return 'var(--theme-primary)';
    }
  };

  return (
    <section id="experience" className="py-20 text-themeText bg-themeBackground">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-4 font-orbitron glow-text-subtle text-themePrimary"
          >
            🎓 Education & Certifications
          </motion.h2>
          <div className="w-24 h-1 mx-auto rounded-full bg-themeSecondary"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            My journey of continuous learning and growth in technology
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5" style={{ background: `linear-gradient(to bottom, var(--theme-primary), var(--theme-secondary), var(--theme-accent))` }}></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {experiences.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Icon */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 z-10">
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center text-white text-xl shadow-lg"
                    style={{ backgroundColor: getTypeColor(item.type) }}
                  >
                    {item.icon}
                  </div>
                </div>

                {/* Content Card */}
                <div className={`ml-24 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-gray-900 p-6 rounded-xl border border-gray-700 hover:border-themePrimary transition-all duration-300 shadow-lg"
                  >
                    {/* Period Badge */}
                    <div className="flex items-center mb-3">
                      <FaCalendarAlt className="mr-2 text-themeAccent" />
                      <span 
                        className="px-3 py-1 rounded-full text-sm font-semibold"
                        style={{ backgroundColor: getTypeColor(item.type), color: 'white' }}
                      >
                        {item.period}
                      </span>
                    </div>

                    {/* Title */}
                    <h4 className="text-xl font-bold mb-2 text-themeSecondary">
                      {item.title}
                    </h4>
                    <p className="text-gray-300 font-medium mb-1">{item.organization}</p>

                    {/* Description */}
                    <p className="text-gray-300 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Achievements */}
                    <ul className="mt-4 space-y-2">
                      {item.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <div className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0 bg-themePrimary"></div>
                          <span className="text-gray-300 text-sm">{achievement}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Certificate Links */}
                    {item.type === 'certification' && (
                      <div className="mt-4">
                        {item.title.includes('Azure AI') && (
                          <a 
                            href="/asure_ai.pdf" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-4 py-2 text-white text-sm rounded-lg transition-colors mr-2"
                            style={{
                              backgroundColor: 'var(--theme-primary)',
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--theme-secondary)'}
                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--theme-primary)'}
                          >
                            📜 View Certificate
                          </a>
                        )}
                        {item.title.includes('Web Development') && (
                          <a 
                            href="/Web_Development.pdf" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-4 py-2 text-white text-sm rounded-lg transition-colors"
                            style={{
                              backgroundColor: 'var(--theme-primary)',
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--theme-secondary)'}
                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--theme-primary)'}
                          >
                            📜 View Certificate
                          </a>
                        )}
                      </div>
                    )}

                    {/* Type Badge */}
                    <div className="mt-4">
                      <span className="inline-block px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded-full capitalize">
                        {item.type}
                      </span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
