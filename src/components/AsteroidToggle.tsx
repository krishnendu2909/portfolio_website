// components/AsteroidToggle.tsx
"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function AsteroidToggle() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <motion.div
      onClick={() => setDark(!dark)}
      className="cursor-pointer w-12 h-12 rounded-full flex items-center justify-center relative shadow-lg"
      animate={{
        background: dark
          ? "radial-gradient(circle, #0a0a0a 30%, #ff6b35 90%)"
          : "radial-gradient(circle, #ff8e53 30%, #fff5e6 90%)",
        boxShadow: dark
          ? "0 0 20px #ff6b35, 0 0 40px #ff8e53"
          : "0 0 15px #ffb347, 0 0 25px #ffe29f",
      }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="absolute w-6 h-6 rounded-full bg-white/10"
        animate={{
          scale: dark ? [1, 1.2, 1] : [1.2, 1, 1.2],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{ repeat: Infinity, duration: 3 }}
      />
    </motion.div>
  );
}
