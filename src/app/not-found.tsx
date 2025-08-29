// app/not-found.tsx
"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaRocket, FaHome } from "react-icons/fa";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center text-themeText bg-themeBackground">
      <div className="text-center px-6">
        {/* Animated 404 */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <h1 className="text-9xl md:text-[12rem] font-bold mb-4 text-themePrimary">
            404
          </h1>
          <div className="w-32 h-1 mx-auto rounded-full bg-themeSecondary"></div>
        </motion.div>

        {/* Error Message */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-themeSecondary">
            🌌 Lost in Space
          </h2>
          <p className="text-xl text-gray-300 mb-2">
            Looks like this page drifted into the asteroid belt!
          </p>
          <p className="text-gray-400">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-8 py-4 rounded-lg font-bold text-white transition-all duration-300"
              style={{
                background: `linear-gradient(135deg, var(--theme-primary), var(--theme-secondary))`,
                boxShadow: `0 0 30px var(--theme-primary)`
              }}
            >
              <FaHome />
              Return Home
            </motion.button>
          </Link>

          <Link href="#contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-8 py-4 rounded-lg font-bold border-2 border-themePrimary text-themePrimary hover:bg-themePrimary hover:text-white transition-all duration-300"
            >
              <FaRocket />
              Contact Me
            </motion.button>
          </Link>
        </motion.div>

        {/* Floating Asteroids Animation */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ 
                x: Math.random() * window.innerWidth,
                y: window.innerHeight + 50,
                rotate: 0
              }}
              animate={{
                y: -50,
                rotate: 360,
                x: Math.random() * window.innerWidth
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "linear"
              }}
              className="absolute w-3 h-3 rounded-full opacity-60"
              style={{ backgroundColor: i % 2 === 0 ? 'var(--theme-primary)' : 'var(--theme-secondary)' }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
