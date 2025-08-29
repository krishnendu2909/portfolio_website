// components/LavaTagline.tsx
"use client";
import { motion } from "framer-motion";

interface LavaTaglineProps {
  text: string;
}

export default function LavaTagline({ text }: LavaTaglineProps) {
  return (
    <motion.p
      className="mt-4 text-lg max-w-2xl mx-auto font-medium bg-clip-text text-transparent bg-gradient-to-r from-gray-300 via-lavaOrange to-gray-300"
      initial={{ backgroundPosition: "200% center" }}
      animate={{ backgroundPosition: "-200% center" }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "linear",
      }}
      style={{
        backgroundSize: "200% auto",
      }}
    >
      {text}
    </motion.p>
  );
}
