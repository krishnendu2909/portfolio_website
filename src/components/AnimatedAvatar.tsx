// components/AnimatedAvatar.tsx
"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AnimatedAvatar() {
  return (
    <motion.div
      className="relative w-full h-full rounded-full flex items-center justify-center"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Glowing aura */}
      <motion.div
        className="absolute w-full h-full rounded-full border-4"
        style={{ 
          borderColor: 'var(--theme-primary)',
          boxShadow: `0 0 30px var(--theme-primary)`
        }}
        animate={{
          boxShadow: [
            `0 0 30px var(--theme-primary)`,
            `0 0 60px var(--theme-secondary)`,
            `0 0 30px var(--theme-primary)`,
          ],
          scale: [1, 1.05, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
        }}
      />

      {/* Avatar Image from public/ */}
      <Image
        src="/avatar.png"
        alt="Avatar"
        fill
        className="rounded-full border-4 shadow-lg object-cover"
        style={{ borderColor: 'var(--theme-primary)' }}
      />
    </motion.div>
  );
}
