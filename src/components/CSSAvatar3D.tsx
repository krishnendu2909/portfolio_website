"use client";
import { motion } from 'framer-motion';

export default function CSSAvatar3D() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, rotateY: -180 }}
      animate={{ opacity: 1, scale: 1, rotateY: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      whileHover={{ scale: 1.05, rotateY: 15, rotateX: 5 }}
      className="relative mx-auto mb-8 cursor-pointer"
      style={{ perspective: '1000px' }}
    >
      {/* Main 3D Sphere */}
      <div className="relative w-48 h-48 mx-auto">
        <div 
          className="w-full h-full rounded-full relative overflow-hidden shadow-2xl transform-gpu"
          style={{
            background: `conic-gradient(from 0deg, var(--theme-primary), var(--theme-secondary), var(--theme-accent), var(--theme-primary))`,
            animation: 'rotate3d 8s linear infinite',
            filter: 'drop-shadow(0 0 30px var(--theme-primary))',
            transformStyle: 'preserve-3d'
          }}
        >
          {/* Inner glow */}
          <div 
            className="absolute inset-4 rounded-full"
            style={{
              background: `radial-gradient(circle at 30% 30%, rgba(255,255,255,0.8) 0%, transparent 50%), linear-gradient(45deg, var(--theme-primary), var(--theme-secondary))`,
              animation: 'pulse3d 3s ease-in-out infinite alternate'
            }}
          />
          
          {/* Text overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span 
              className="text-4xl font-bold text-white font-orbitron"
              style={{
                textShadow: '0 0 20px rgba(0,0,0,0.8), 0 0 40px var(--theme-primary)',
                transform: 'translateZ(20px)'
              }}
            >
              KC
            </span>
          </div>
          
          {/* Surface details */}
          <div 
            className="absolute inset-0 rounded-full opacity-30"
            style={{
              background: `repeating-conic-gradient(from 0deg, transparent 0deg, var(--theme-accent) 1deg, transparent 2deg)`,
              animation: 'spin 20s linear infinite reverse'
            }}
          />
        </div>
        
        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              background: i % 2 === 0 ? 'var(--theme-primary)' : 'var(--theme-secondary)',
              boxShadow: `0 0 10px ${i % 2 === 0 ? 'var(--theme-primary)' : 'var(--theme-secondary)'}`,
              left: '50%',
              top: '50%',
              transformOrigin: '0 0'
            }}
            animate={{
              rotate: 360,
              x: Math.cos((i / 6) * Math.PI * 2) * (80 + Math.sin(Date.now() * 0.001 + i) * 20),
              y: Math.sin((i / 6) * Math.PI * 2) * (80 + Math.cos(Date.now() * 0.001 + i) * 20),
            }}
            transition={{
              rotate: { duration: 8 + i, repeat: Infinity, ease: "linear" },
              x: { duration: 4 + i * 0.5, repeat: Infinity, ease: "easeInOut" },
              y: { duration: 4 + i * 0.5, repeat: Infinity, ease: "easeInOut" }
            }}
          />
        ))}
      </div>
      
      {/* Pulsing rings */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute inset-0 rounded-full border-2 pointer-events-none"
          style={{
            borderColor: i % 2 === 0 ? 'var(--theme-primary)' : 'var(--theme-secondary)',
            borderWidth: '1px'
          }}
          animate={{
            scale: [1, 1.3 + i * 0.1, 1],
            opacity: [0.6, 0, 0.6]
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5
          }}
        />
      ))}
    </motion.div>
  );
}
