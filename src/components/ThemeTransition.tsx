"use client";
import { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function ThemeTransition() {
  useEffect(() => {
    // Add smooth transition to all elements when theme changes
    const style = document.createElement('style');
    style.textContent = `
      * {
        transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease !important;
      }
      
      .theme-transition-disable * {
        transition: none !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return null;
}
