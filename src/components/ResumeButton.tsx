// components/ResumeButton.tsx
"use client";
import { motion } from "framer-motion";
import { FaDownload, FaFileAlt, FaRocket } from "react-icons/fa";

export default function ResumeButton() {
  return (
    <div className="relative flex justify-center mt-8">
      {/* Background Glow Effect */}
      <div className="absolute inset-0 rounded-2xl blur-xl" style={{ background: `linear-gradient(to right, var(--theme-primary)20, var(--theme-secondary)30, var(--theme-accent)20)` }}></div>
      
      <motion.a
        href="/Krishnendu_cj_resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ 
          scale: 1.05,
          boxShadow: "0 0 50px var(--theme-primary)"
        }}
        whileTap={{ scale: 0.98 }}
        className="relative group inline-flex items-center gap-4 px-8 py-4 rounded-xl font-bold text-themeText transition-all duration-300 overflow-hidden border border-themeBorder/30"
        style={{
          background: 'linear-gradient(135deg, var(--theme-primary), var(--theme-secondary), var(--theme-primary))',
          backgroundSize: '200% 200%',
          animation: 'gradient 3s ease infinite'
        }}
      >
        {/* Animated Background */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
          animate={{
            x: ['-100%', '100%']
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Icon */}
        <motion.div
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.6 }}
          className="relative z-10"
        >
          <FaFileAlt className="text-xl" />
        </motion.div>
        
        {/* Text */}
        <span className="relative z-10 font-orbitron text-lg">View Resume</span>
        
        {/* Arrow Icon */}
        <motion.div
          whileHover={{ x: 5 }}
          className="relative z-10"
        >
          <FaRocket className="text-lg" />
        </motion.div>
        
        {/* Particle Effects */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full opacity-60"
              style={{
                backgroundColor: 'var(--theme-text)',
                left: `${20 + i * 15}%`,
                top: `${30 + (i % 2) * 40}%`
              }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3
              }}
            />
          ))}
        </div>
      </motion.a>
      
      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  );
}
