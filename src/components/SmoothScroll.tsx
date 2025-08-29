// components/SmoothScroll.tsx
"use client";
import { useEffect } from 'react';

export default function SmoothScroll() {
  useEffect(() => {
    // Add smooth scrolling behavior to all anchor links
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetId = target.getAttribute('href')?.substring(1);
        if (typeof document !== 'undefined') {
          const targetElement = document.getElementById(targetId || '');
          
          if (targetElement && typeof window !== 'undefined') {
            const offsetTop = targetElement.offsetTop - 80; // Account for navbar height
            window.scrollTo({
              top: offsetTop,
              behavior: 'smooth'
            });
          }
        }
      }
    };

    if (typeof document !== 'undefined') {
      document.addEventListener('click', handleSmoothScroll);
      
      return () => {
        document.removeEventListener('click', handleSmoothScroll);
      };
    }
  }, []);

  return null;
}
