// components/LavaButton.tsx
import { motion } from "framer-motion";

interface LavaButtonProps {
  label: string;
  onClick?: () => void;
  href?: string;
}

export default function LavaButton({ label, onClick, href }: LavaButtonProps) {
  const base = (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="relative px-6 py-3 font-bold text-white rounded-lg overflow-hidden"
    >
      <span className="absolute inset-0 bg-gradient-to-r from-lavaOrange to-lavaGlow animate-pulse opacity-80"></span>
      <span className="absolute inset-0 bg-asteroidBlack rounded-lg m-[2px]"></span>
      <span className="relative z-10">{label}</span>
    </motion.button>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {base}
      </a>
    );
  }
  return <div onClick={onClick}>{base}</div>;
}
