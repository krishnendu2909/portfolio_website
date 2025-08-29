// components/Projects.tsx
"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo } from "react";
import { FaExternalLinkAlt, FaGithub, FaTimes, FaCloud } from "react-icons/fa";
import ProjectSearch from "./ProjectSearch";
import { 
  SiReact, SiNodedotjs, SiPython, SiMongodb, SiTensorflow, 
  SiJavascript, SiTypescript, SiTailwindcss, SiNextdotjs
} from "react-icons/si";

interface Project {
  id: number;
  title: string;
  desc: string;
  longDesc: string;
  techStack: Array<{
    name: string;
    icon: React.ReactNode;
    color: string;
  }>;
  githubUrl?: string;
  liveUrl?: string;
  features: string[];
  metrics?: {
    users?: string;
    performance?: string;
    accuracy?: string;
  };
}

const projects: Project[] = [
  {
    id: 1,
    title: "Personalized Food Recommendation System",
    desc: "ML-based meal plan generator using predictive analytics.",
    longDesc: "An intelligent food recommendation system that uses machine learning algorithms to suggest personalized meal plans based on user preferences, dietary restrictions, and nutritional goals. The system analyzes user behavior patterns and provides real-time recommendations.",
    techStack: [
      { name: "Python", icon: <SiPython />, color: "#3776ab" },
      { name: "TensorFlow", icon: <SiTensorflow />, color: "#ff6f00" },
      { name: "React", icon: <SiReact />, color: "#61dafb" },
      { name: "Node.js", icon: <SiNodedotjs />, color: "#339933" },
      { name: "MongoDB", icon: <SiMongodb />, color: "#47a248" }
    ],
    features: [
      "Personalized meal recommendations",
      "Dietary restriction filtering",
      "Nutritional analysis dashboard",
      "Recipe suggestion engine",
      "User preference learning"
    ],
    metrics: {
      accuracy: "92%",
      users: "500+",
      performance: "< 200ms"
    }
  },
  {
    id: 2,
    title: "Real-Time Anomaly Detection",
    desc: "AI-powered surveillance system with automated alerts.",
    longDesc: "A comprehensive surveillance system that uses computer vision and machine learning to detect anomalies in real-time video feeds. Features automated alert systems, pattern recognition, and detailed analytics dashboard.",
    techStack: [
      { name: "Python", icon: <SiPython />, color: "#3776ab" },
      { name: "TensorFlow", icon: <SiTensorflow />, color: "#ff6f00" },
      { name: "JavaScript", icon: <SiJavascript />, color: "#f7df1e" },
      { name: "AWS", icon: <FaCloud />, color: "#ff9900" }
    ],
    features: [
      "Real-time video processing",
      "Automated alert system",
      "Pattern recognition AI",
      "Analytics dashboard",
      "Cloud-based deployment"
    ],
    metrics: {
      accuracy: "95%",
      performance: "Real-time",
      users: "Enterprise"
    }
  },
  {
    id: 3,
    title: "Hospital Management System",
    desc: "Full-stack solution for seamless healthcare workflows.",
    longDesc: "A comprehensive hospital management system that streamlines healthcare operations including patient management, appointment scheduling, medical records, billing, and staff coordination. Built with modern web technologies for scalability and reliability.",
    techStack: [
      { name: "React", icon: <SiReact />, color: "#61dafb" },
      { name: "Node.js", icon: <SiNodedotjs />, color: "#339933" },
      { name: "TypeScript", icon: <SiTypescript />, color: "#3178c6" },
      { name: "MongoDB", icon: <SiMongodb />, color: "#47a248" },
      { name: "Tailwind", icon: <SiTailwindcss />, color: "#06b6d4" }
    ],
    features: [
      "Patient management system",
      "Appointment scheduling",
      "Medical records digitization",
      "Billing and insurance",
      "Staff coordination tools"
    ],
    metrics: {
      users: "1000+",
      performance: "99.9% uptime",
      accuracy: "Hospital-grade"
    }
  },
  {
    id: 4,
    title: "Financial Recommendation Engine",
    desc: "Real-time investment platform with trading insights.",
    longDesc: "An intelligent financial platform that provides real-time investment recommendations, market analysis, and trading insights. Features advanced algorithms for risk assessment, portfolio optimization, and market trend prediction.",
    techStack: [
      { name: "Next.js", icon: <SiNextdotjs />, color: "#000000" },
      { name: "TypeScript", icon: <SiTypescript />, color: "#3178c6" },
      { name: "Python", icon: <SiPython />, color: "#3776ab" },
      { name: "AWS", icon: <FaCloud />, color: "#ff9900" }
    ],
    features: [
      "Real-time market analysis",
      "Investment recommendations",
      "Risk assessment tools",
      "Portfolio optimization",
      "Trading insights dashboard"
    ],
    metrics: {
      performance: "< 100ms",
      accuracy: "88%",
      users: "Finance professionals"
    }
  }
];

export default function Projects() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const techFilters = ["All", "React", "Python", "Node.js", "AI/ML", "TypeScript"];

  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      // Filter by search query
      const matchesSearch = searchQuery === "" || 
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.techStack.some(tech => tech.name.toLowerCase().includes(searchQuery.toLowerCase()));
      
      // Filter by tech category
      const matchesFilter = filter === "All" || 
        (filter === "AI/ML" && project.techStack.some(tech => 
          tech.name === "Python" || tech.name === "TensorFlow"
        )) ||
        project.techStack.some(tech => tech.name === filter);
      
      return matchesSearch && matchesFilter;
    });
  }, [searchQuery, filter]);

  return (
    <section id="projects" className="py-20 px-6 bg-themeBackground text-themeText">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 font-orbitron glow-text-subtle text-themePrimary">
            🚀 Featured Projects
          </h2>
          <div className="w-24 h-1 mx-auto rounded-full bg-themeSecondary"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Showcasing innovative solutions and technical excellence
          </p>
        </motion.div>

        {/* Search Bar */}
        <ProjectSearch onSearch={setSearchQuery} searchQuery={searchQuery} />

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {techFilters.map((tech) => (
            <button
              key={tech}
              onClick={() => setFilter(tech)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                filter === tech
                  ? 'text-white shadow-lg'
                  : 'bg-gray-800 text-gray-300 hover:bg-themeBackground hover:text-themeAccent'
              }`}
              style={{
                backgroundColor: filter === tech ? 'var(--theme-primary)' : undefined,
                boxShadow: filter === tech ? `0 0 20px var(--theme-primary)` : undefined
              }}
            >
              {tech}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-themeBackground/50 backdrop-blur-sm rounded-2xl p-8 border border-themeSecondary/30 hover:border-themePrimary/50 transition-all duration-300 group glow-border-hover cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <h3 className="text-2xl font-bold mb-4 group-hover:text-themeSecondary transition-colors font-orbitron glow-text-subtle text-themeSecondary">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4">{project.desc}</p>
              
              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.slice(0, 4).map((tech) => (
                  <div
                    key={tech.name}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 glow-border-hover font-space-grotesk"
                  >
                    <span className="text-themePrimary">{tech.icon}</span>
                    <span className="text-gray-300">{tech.name}</span>
                  </div>
                ))}
                {project.techStack.length > 4 && (
                  <div className="px-3 py-1 bg-themeBackground rounded-full text-sm text-themeText/60">
                    +{project.techStack.length - 4} more
                  </div>
                )}
              </div>

              <div className="flex items-center justify-between">
                <span className="text-themeAccent font-medium">View Details →</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-themeBackground rounded-xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-themeSecondary/30"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-3xl font-bold text-themePrimary">
                  {selectedProject.title}
                </h3>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <FaTimes size={24} />
                </button>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                {selectedProject.longDesc}
              </p>

              {/* Tech Stack */}
              <div className="mb-6">
                <h4 className="text-xl font-semibold mb-4 text-themeSecondary">
                  Technology Stack
                </h4>
                <div className="flex flex-wrap gap-3">
                  {selectedProject.techStack.map((tech) => (
                    <div
                      key={tech.name}
                      className="flex items-center gap-2 px-4 py-2 bg-themeBackground/80 rounded-lg border border-themeSecondary/20"
                    >
                      <span className="text-xl text-themePrimary">{tech.icon}</span>
                      <span className="text-white font-medium">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h4 className="text-xl font-semibold mb-4 text-themeSecondary">
                  Key Features
                </h4>
                <ul className="grid md:grid-cols-2 gap-2">
                  {selectedProject.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-300">
                      <div className="w-2 h-2 rounded-full bg-themePrimary"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Metrics */}
              {selectedProject.metrics && (
                <div className="mb-6">
                  <h4 className="text-xl font-semibold mb-4 text-themeSecondary">
                    Project Metrics
                  </h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    {Object.entries(selectedProject.metrics).map(([key, value]) => (
                      <div key={key} className="bg-themeBackground/80 p-4 rounded-lg text-center border border-themeSecondary/20">
                        <div className="text-2xl font-bold mb-1 text-themePrimary">
                          {value}
                        </div>
                        <div className="text-gray-400 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex gap-4">
                <button className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 glow-border-hover font-space-grotesk"
                  style={{ backgroundColor: 'var(--theme-primary)' }}
                >
                  <FaExternalLinkAlt />
                  Live Demo
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
