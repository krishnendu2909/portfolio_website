"use client";
import { motion } from "framer-motion";

interface SkeletonLoaderProps {
  className?: string;
  variant?: 'text' | 'card' | 'avatar' | 'button';
}

export default function SkeletonLoader({ className = "", variant = 'text' }: SkeletonLoaderProps) {
  const baseClasses = "animate-pulse bg-gradient-to-r from-themeBackground/50 via-themeSecondary/20 to-themeBackground/50 bg-[length:200%_100%] rounded";
  
  const variants = {
    text: "h-4 w-full",
    card: "h-48 w-full",
    avatar: "h-24 w-24 rounded-full",
    button: "h-12 w-32"
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`${baseClasses} ${variants[variant]} ${className}`}
      style={{
        animation: 'shimmer 2s infinite linear'
      }}
    />
  );
}

// Add shimmer animation to global CSS
export const shimmerKeyframes = `
@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}
`;
