"use client";
import { useState } from "react";
import { motion, PanInfo } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

interface Project {
  id: number;
  title: string;
  desc: string;
  techStack: Array<{ name: string; icon: React.ReactNode; color: string }>;
}

interface ProjectCardProps {
  project: Project;
  index: number;
  onSelect: (project: Project) => void;
}

export default function ProjectCard({ project, index, onSelect }: ProjectCardProps) {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragEnd = (event: any, info: PanInfo) => {
    setIsDragging(false);
    
    // Swipe left/right to navigate (mobile gesture)
    if (Math.abs(info.offset.x) > 100) {
      // Could implement project navigation here
      console.log('Swiped:', info.offset.x > 0 ? 'right' : 'left');
    }
    
    // Tap to open if not dragging much
    if (Math.abs(info.offset.x) < 10 && Math.abs(info.offset.y) < 10) {
      onSelect(project);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.98 }}
      drag="x"
      dragConstraints={{ left: -50, right: 50 }}
      dragElastic={0.2}
      onDragStart={() => setIsDragging(true)}
      onDragEnd={handleDragEnd}
      className={`bg-themeBackground/50 backdrop-blur-sm rounded-2xl p-8 border border-themeSecondary/30 hover:border-themePrimary/50 transition-all duration-300 group glow-border-hover cursor-pointer ${
        isDragging ? 'cursor-grabbing' : 'cursor-grab'
      }`}
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
        <span className="text-themeAccent font-medium">
          {isDragging ? '← Swipe to navigate →' : 'View Details →'}
        </span>
      </div>
    </motion.div>
  );
}
