// components/LavaProjectCard.tsx
"use client";
import { motion } from "framer-motion";  // ✅ required


interface LavaProjectCardProps {
  title: string;
  desc: string;
}

export default function LavaProjectCard({ title, desc }: LavaProjectCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="relative p-6 rounded-xl text-white bg-asteroidBlack border border-lavaOrange overflow-hidden shadow-lg"
    >
      {/* Lava cracks overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,#ff6b35_0%,transparent_20%),radial-gradient(circle_at_80%_80%,#ff8e53_0%,transparent_20%)] opacity-20 animate-pulse"></div>

      {/* Content */}
      <h3 className="text-xl font-bold text-lavaOrange relative z-10">{title}</h3>
      <p className="mt-3 text-sm text-gray-300 relative z-10">{desc}</p>
    </motion.div>
  );
}
