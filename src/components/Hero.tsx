// components/Hero.tsx
"use client";
import { motion } from "framer-motion";
import AnimatedAvatar from "./AnimatedAvatar";
import BackgroundAsteroids from "./BackgroundAsteroids";
import LavaTagline from "./LavaTagline";
import TypingAnimation from "./TypingAnimation";
import ResumeButton from "./ResumeButton";

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen flex flex-col lg:flex-row items-center justify-center lg:justify-between text-themeText overflow-hidden px-6 lg:px-12 bg-themeBackground">
      {/* 🔥 Floating asteroid background */}
      <BackgroundAsteroids />

      {/* Mobile Avatar - Top */}
      <div className="relative z-10 mb-8 lg:hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: -50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="w-48 h-48"
        >
          <AnimatedAvatar />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 text-center lg:text-left max-w-2xl lg:ml-16">
        {/* 🔥 Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 font-orbitron glow-text pulse-glow text-themePrimary"
        >
          Krishnendu CJ
        </motion.h1>

        {/* 🔥 Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-8"
        >
          <LavaTagline text="Full Stack Developer & Tech Enthusiast" />
        </motion.div>

        {/* 🔥 Typing Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-8"
        >
          <TypingAnimation text="Building innovative solutions with modern technologies" />
        </motion.div>

        {/* 🔥 Resume Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <ResumeButton />
        </motion.div>
      </div>

      {/* Desktop Avatar - Right */}
      <div className="relative z-10 flex-shrink-0 hidden lg:block mr-8 xl:mr-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.5, x: 100 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="w-80 h-80"
        >
          <AnimatedAvatar />
        </motion.div>
      </div>

    </section>
  );
}
