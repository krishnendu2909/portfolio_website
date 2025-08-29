// components/Footer.tsx
import { FaLinkedin, FaGithub, FaCode } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-themeBackground text-themeText py-10 mt-20">
      {/* Glowing lava top border */}
      <div className="absolute top-0 left-0 w-full h-[2px] animate-pulse" style={{ background: `linear-gradient(to right, var(--theme-primary), var(--theme-secondary), var(--theme-primary))` }}></div>

      <div className="max-w-5xl mx-auto flex flex-col items-center gap-6">
        <h3 className="text-lg font-semibold text-themePrimary">Connect with me</h3>
        
        {/* Social Links */}
        <div className="flex gap-6 text-2xl">
          <a
            href="https://www.linkedin.com/in/krishnenducj"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-themeSecondary transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/krishnendu2909"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-themeSecondary transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://leetcode.com/u/krishnendu_cj"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-themeSecondary transition"
          >
            <FaCode />
          </a>
        </div>

        <p className="text-gray-400 text-sm">
          © 2025 Krishnendu CJ
        </p>
      </div>
    </footer>
  );
}
