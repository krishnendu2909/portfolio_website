// components/LavaTrail.tsx
"use client";
import { useEffect } from "react";

export default function LavaTrail() {
  useEffect(() => {
    const trail: HTMLDivElement[] = [];
    let timeout: NodeJS.Timeout;

    const createDot = (x: number, y: number) => {
      const dot = document.createElement("div");
      dot.className =
        "fixed w-3 h-3 rounded-full pointer-events-none z-50";
      dot.style.left = `${x - 6}px`;
      dot.style.top = `${y - 6}px`;
      dot.style.background = "radial-gradient(circle, var(--theme-primary), var(--theme-secondary))";
      dot.style.boxShadow = "0 0 12px var(--theme-primary), 0 0 24px var(--theme-secondary)";
      dot.style.opacity = "0.9";
      document.body.appendChild(dot);
      trail.push(dot);

      setTimeout(() => {
        dot.style.transition = "opacity 0.4s, transform 0.4s";
        dot.style.opacity = "0";
        dot.style.transform = "scale(0)";
        setTimeout(() => {
          dot.remove();
        }, 400);
      }, 50);
    };

    const handleClick = (e: MouseEvent) => {
      createDot(e.clientX, e.clientY);
      timeout = setInterval(() => {
        createDot(e.clientX, e.clientY);
      }, 30);
      setTimeout(() => clearInterval(timeout), 500);
    };

    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
      clearInterval(timeout);
    };
  }, []);

  return null;
}
