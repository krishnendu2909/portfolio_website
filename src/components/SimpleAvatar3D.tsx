"use client";
import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function SimpleAvatar3D() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    canvas.width = 200;
    canvas.height = 200;

    let rotation = 0;
    let time = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      
      // Create gradient based on theme
      const gradient = ctx.createRadialGradient(centerX, centerY, 20, centerX, centerY, 80);
      gradient.addColorStop(0, 'var(--theme-primary)');
      gradient.addColorStop(0.5, 'var(--theme-secondary)');
      gradient.addColorStop(1, 'var(--theme-accent)');

      // Draw main sphere with 3D effect
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(rotation);
      
      // Shadow
      ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
      ctx.beginPath();
      ctx.ellipse(5, 10, 70, 70, 0, 0, 2 * Math.PI);
      ctx.fill();
      
      // Main sphere
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(0, 0, 70, 0, 2 * Math.PI);
      ctx.fill();
      
      // Highlight
      const highlightGradient = ctx.createRadialGradient(-20, -20, 0, -20, -20, 40);
      highlightGradient.addColorStop(0, 'rgba(255, 255, 255, 0.8)');
      highlightGradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
      ctx.fillStyle = highlightGradient;
      ctx.beginPath();
      ctx.arc(-20, -20, 40, 0, 2 * Math.PI);
      ctx.fill();
      
      // Draw "KC" text
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 24px Arial';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('KC', 0, 0);
      
      ctx.restore();
      
      // Draw floating particles
      for (let i = 0; i < 8; i++) {
        const angle = (i / 8) * Math.PI * 2 + time * 0.5;
        const radius = 100 + Math.sin(time * 2 + i) * 20;
        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * radius;
        
        ctx.fillStyle = i % 2 === 0 ? 'var(--theme-primary)' : 'var(--theme-secondary)';
        ctx.beginPath();
        ctx.arc(x, y, 3, 0, 2 * Math.PI);
        ctx.fill();
        
        // Particle glow
        ctx.shadowColor = i % 2 === 0 ? 'var(--theme-primary)' : 'var(--theme-secondary)';
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
      
      rotation += 0.01;
      time += 0.02;
      
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, rotateY: -180 }}
      animate={{ opacity: 1, scale: 1, rotateY: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      whileHover={{ scale: 1.05, rotateY: 10 }}
      className="relative mx-auto mb-8 cursor-pointer"
      style={{ perspective: '1000px' }}
    >
      <canvas
        ref={canvasRef}
        className="rounded-full shadow-2xl"
        style={{
          filter: 'drop-shadow(0 0 30px var(--theme-primary))',
          background: 'transparent'
        }}
      />
      
      {/* Pulsing ring effect */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0, 0.5]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute inset-0 rounded-full border-2 border-themePrimary"
        style={{
          boxShadow: '0 0 20px var(--theme-primary)'
        }}
      />
    </motion.div>
  );
}
