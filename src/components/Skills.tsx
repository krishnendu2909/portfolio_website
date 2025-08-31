// components/Skills.tsx
"use client";
import { motion } from "framer-motion";
import { 
  FaPython, FaReact, FaNodeJs, FaAws, FaFigma, FaGitAlt, FaDocker,
  FaJs, FaHtml5, FaCss3Alt, FaDatabase, FaCode
} from "react-icons/fa";
import { 
  SiTypescript, SiMongodb, SiPostgresql, SiTailwindcss, SiNextdotjs,
  SiExpress, SiCplusplus, SiKubernetes, SiTensorflow
} from "react-icons/si";


export default function Skills() {
  const skillCategories = {
    "Frontend": [
      { name: "React.js", icon: <FaReact /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "HTML5", icon: <FaHtml5 /> },
      { name: "CSS3", icon: <FaCss3Alt /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    ],
    "Backend": [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "Python", icon: <FaPython /> },
      { name: "C++", icon: <SiCplusplus /> },
      { name: "Java", icon: <FaCode /> },
    ],
    "Database": [
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "SQL", icon: <FaDatabase /> },
    ],
    "Cloud & DevOps": [
      { name: "AWS", icon: <FaAws /> },
      { name: "Docker", icon: <FaDocker /> },
      { name: "Kubernetes", icon: <SiKubernetes /> },
      { name: "Git", icon: <FaGitAlt /> },
    ],
    "AI/ML & Tools": [
      { name: "TensorFlow", icon: <SiTensorflow /> },
      { name: "Machine Learning", icon: <FaCode /> },
      { name: "Figma", icon: <FaFigma /> },
    ]
  };


  return (
    <section id="skills" className="py-20 text-themeText bg-themeBackground">
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
            💡 Skills & Expertise
          </motion.h2>
          <div className="w-24 h-1 mx-auto rounded-full bg-themeSecondary"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="space-y-12">
          {Object.entries(skillCategories).map(([category, skills], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-themeBackground/80 rounded-xl p-8 border border-themeSecondary/30 hover:border-themePrimary/50 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-4 font-orbitron text-themeSecondary">
                {category}
              </h3>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="bg-themeBackground/60 p-6 rounded-lg border border-themeSecondary/20 hover:border-themePrimary transition-all duration-300 glow-border-hover">
                      <div className="flex items-center justify-center">
                        <div className="text-4xl mr-4 text-themePrimary">
                          {skill.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-white text-lg">{skill.name}</h4>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
