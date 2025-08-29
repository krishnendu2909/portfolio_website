// components/Navbar.tsx
"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AsteroidToggle from "./AsteroidToggle";
import { useActiveSection } from "../hooks/useActiveSection";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const activeSection = useActiveSection();

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        setIsScrolled(window.scrollY > 50);
      }
    };
    
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const navItems = [
    { id: 'about', href: "#about", label: "About" },
    { id: 'experience', href: "#experience", label: "Experience" },
    { id: 'skills', href: "#skills", label: "Skills" },
    { id: 'projects', href: "#projects", label: "Projects" },
    { id: 'contact', href: "#contact", label: "Contact" }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full text-themeText flex justify-between px-6 py-4 shadow-lg z-50 transition-all duration-300 ${
        isScrolled ? 'backdrop-blur-md' : ''
      }`}
      style={{ 
        backgroundColor: isScrolled 
          ? 'var(--theme-background)CC' 
          : 'var(--theme-background)80' 
      }}
    >
      <motion.h1 
        whileHover={{ scale: 1.05 }}
        className="text-2xl font-bold font-orbitron glow-text-subtle cursor-pointer text-themePrimary"
      >
        <Link href="#hero">Krishnendu CJ</Link>
      </motion.h1>
      
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-6">
        {navItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Link 
              href={item.href}
              className="relative px-4 py-2 rounded-lg transition-all duration-300 font-space-grotesk hover:glow-border text-themeText group"
            >
              <span className="relative z-10 glow-text-subtle">{item.label}</span>
              <motion.div
                className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ 
                  background: `linear-gradient(45deg, var(--theme-primary)20, var(--theme-secondary)20)`,
                  boxShadow: `0 0 15px var(--theme-primary)30`
                }}
                whileHover={{ scale: 1.05 }}
              />
              <motion.div
                className="absolute bottom-0 left-0 h-0.5 transition-all duration-300"
                style={{ 
                  width: activeSection === item.id ? '100%' : '0%',
                  background: `linear-gradient(to right, transparent, var(--theme-primary), transparent)`
                }}
              />
            </Link>
          </motion.div>
        ))}
        <AsteroidToggle />
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center gap-4">
        <AsteroidToggle />
        <button 
          className="p-2 rounded-lg text-themeText hover:bg-themeSecondary/20 transition-colors"
          style={{ color: 'var(--theme-primary)' }}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </motion.nav>
  );
}
