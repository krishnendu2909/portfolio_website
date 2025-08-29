"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function BackgroundAsteroids() {
  const [asteroids, setAsteroids] = useState<
    { id: number; left: string; top: string; size: number }[]
  >([]);

  useEffect(() => {
    // Only run on client → avoids SSR mismatch
    const generated = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: Math.random() * 40 + 15, // 🔧 bigger asteroids (15–55px)
    }));
    setAsteroids(generated);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {asteroids.map((ast) => (
        <motion.div
          key={ast.id}
          className="absolute rounded-full"
          style={{
            left: ast.left,
            top: ast.top,
            width: ast.size,
            height: ast.size,
            backgroundColor: 'var(--theme-primary)20',
            boxShadow: `0 0 10px var(--theme-primary), 0 0 20px var(--theme-secondary)`,
          }}
          animate={{ y: [0, -30, 0], rotate: [0, 360] }}
          transition={{ repeat: Infinity, duration: 6, delay: ast.id * 0.2 }}
        />
      ))}
    </div>
  );
}
