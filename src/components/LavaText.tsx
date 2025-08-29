// components/LavaText.tsx
"use client";
import { motion } from "framer-motion";

interface LavaTextProps {
  text: string;
  className?: string;
}

export default function LavaText({ text, className }: LavaTextProps) {
  const letters = Array.from(text);

  return (
    <motion.h1
      className={`font-bold text-4xl md:text-5xl ${className}`}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.05,
          },
        },
      }}
    >
      {letters.map((char, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { opacity: 0, y: 20, color: "#ff6b35" },
            visible: {
              opacity: 1,
              y: 0,
              color: "#ff8e53",
              textShadow: "0px 0px 8px #ff6b35, 0px 0px 16px #ff8e53",
            },
          }}
          transition={{ duration: 0.5 }}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.h1>
  );
}
