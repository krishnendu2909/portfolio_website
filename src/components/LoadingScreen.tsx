// components/LoadingScreen.tsx
"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          style={{ backgroundColor: '#0b0b0d' }}
        >
          <div className="text-center">
            {/* Animated Logo/Avatar */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-8"
            >
              <div className="w-24 h-24 mx-auto rounded-full flex items-center justify-center text-3xl font-bold text-white shadow-2xl" style={{ background: `linear-gradient(135deg, var(--theme-primary), var(--theme-secondary))` }}>
                KC
              </div>
            </motion.div>

            {/* Animated Text */}
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-3xl font-bold mb-4 text-themePrimary"
            >
              Krishnendu CJ
            </motion.h1>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-gray-400 mb-8"
            >
              Crafting digital experiences...
            </motion.p>

            {/* Lava Loading Animation */}
            <div className="relative w-64 h-2 mx-auto bg-gray-800 rounded-full overflow-hidden">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute inset-y-0 w-1/3 rounded-full"
                style={{ 
                  background: `linear-gradient(to right, transparent, var(--theme-primary), transparent)`,
                  boxShadow: `0 0 20px var(--theme-primary)`
                }}
              />
            </div>

            {/* Floating Particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(12)].map((_, i) => {
                // Generate consistent values for SSR
                const seedX = Math.random() * 1000; // Pseudo-random but consistent
                const seedDelay = (i * 0.3) % 2;
                const seedDuration = 3 + (i * 0.2) % 2;
                
                return (
                  <motion.div
                    key={i}
                    initial={{ 
                      x: `${seedX}vw`,
                      y: '100vh',
                      opacity: 0
                    }}
                    animate={{
                      y: '-10vh',
                      opacity: [0, 1, 0],
                      x: `${(seedX + 20) % 100}vw`
                    }}
                    transition={{
                      duration: seedDuration,
                      repeat: Infinity,
                      delay: seedDelay,
                      ease: "linear"
                    }}
                    className="absolute w-2 h-2 rounded-full"
                    style={{ backgroundColor: i % 2 === 0 ? 'var(--theme-primary)' : 'var(--theme-secondary)' }}
                  />
                );
              })}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
