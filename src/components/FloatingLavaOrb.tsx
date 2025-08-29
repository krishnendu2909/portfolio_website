// components/FloatingLavaOrb.tsx
"use client";
import { motion } from "framer-motion";

export default function FloatingLavaOrb() {
  return (
    <motion.div
      className="absolute w-16 h-16 rounded-full bg-gradient-to-r from-lavaOrange to-lavaGlow opacity-70 blur-xl"
      animate={{
        x: [0, 30, -30, 0],
        y: [0, -20, 20, 0],
        scale: [1, 1.2, 1],
        opacity: [0.7, 1, 0.7],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}
