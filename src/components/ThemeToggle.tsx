// components/ThemeToggle.tsx
"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPalette, FaTimes } from 'react-icons/fa';
import { useTheme, Theme } from '../contexts/ThemeContext';

export default function ThemeToggle() {
  const { theme, setTheme, themes } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const themeIcons = {
    lava: '🌋',
    ocean: '🌊', 
    forest: '🌲',
    cosmic: '🌌'
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      {/* Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg transition-all duration-300"
        style={{ 
          background: `linear-gradient(135deg, var(--theme-primary), var(--theme-secondary))`,
          boxShadow: `0 0 20px ${themes[theme].primary}40`
        }}
      >
        {isOpen ? <FaTimes /> : <FaPalette />}
      </motion.button>

      {/* Theme Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -20 }}
            className="absolute top-16 right-0 bg-gray-900 rounded-lg p-4 shadow-xl border border-gray-700 min-w-[200px]"
          >
            <h3 className="text-white font-semibold mb-3 text-center">Choose Theme</h3>
            <div className="grid grid-cols-2 gap-2">
              {Object.entries(themes).map(([key, themeData]) => (
                <motion.button
                  key={key}
                  onClick={() => {
                    setTheme(key as Theme);
                    setIsOpen(false);
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-3 rounded-lg border-2 transition-all duration-300 ${
                    theme === key 
                      ? 'border-white bg-gray-800' 
                      : 'border-gray-600 hover:border-themeAccent'
                  }`}
                >
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-2xl">{themeIcons[key as Theme]}</span>
                    <span className="text-xs text-gray-300">{themeData.name}</span>
                    <div 
                      className="w-6 h-2 rounded-full"
                      style={{ backgroundColor: themeData.primary }}
                    />
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
