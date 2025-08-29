// components/ScrollToTop.tsx
"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaRocket } from "react-icons/fa";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (typeof window !== 'undefined' && window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', toggleVisibility);
      return () => window.removeEventListener('scroll', toggleVisibility);
    }
  }, []);

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 100 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 100 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-4 rounded-full text-white font-bold shadow-2xl transition-all duration-300"
          style={{
            background: `linear-gradient(135deg, var(--theme-primary), var(--theme-secondary))`,
            boxShadow: `0 0 30px var(--theme-primary)`
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = `0 0 40px var(--theme-primary)`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = `0 0 30px var(--theme-primary)`;
          }}
        >
          <FaRocket className="text-xl" />
          
          {/* Pulsing ring effect */}
          <motion.div
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.7, 0, 0.7]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute inset-0 rounded-full border-2 border-themeAccent"
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
