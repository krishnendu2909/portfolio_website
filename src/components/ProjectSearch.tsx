"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaSearch, FaTimes } from "react-icons/fa";

interface ProjectSearchProps {
  onSearch: (query: string) => void;
  searchQuery: string;
}

export default function ProjectSearch({ onSearch, searchQuery }: ProjectSearchProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="relative max-w-md mx-auto mb-8"
    >
      <div className="relative">
        <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-themeSecondary" />
        <input
          type="text"
          placeholder="Search projects..."
          value={searchQuery}
          onChange={(e) => onSearch(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={`w-full pl-12 pr-12 py-3 rounded-full bg-themeBackground/80 border-2 transition-all duration-300 text-themeText placeholder-gray-400 ${
            isFocused 
              ? 'border-themePrimary shadow-lg' 
              : 'border-themeSecondary/30 hover:border-themeSecondary/50'
          }`}
          style={{
            boxShadow: isFocused ? `0 0 20px var(--theme-primary)` : undefined
          }}
        />
        {searchQuery && (
          <button
            onClick={() => onSearch('')}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-themeAccent transition-colors"
          >
            <FaTimes />
          </button>
        )}
      </div>
    </motion.div>
  );
}
