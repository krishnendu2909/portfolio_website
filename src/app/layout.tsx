import type { Metadata } from "next";
import { Orbitron, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from '../contexts/ThemeContext';
import ThemeToggle from '../components/ThemeToggle';
import ScrollProgress from '../components/ScrollProgress';
import ThemeTransition from '../components/ThemeTransition';
import ServiceWorker from '../components/ServiceWorker';

const orbitron = Orbitron({ 
  subsets: ["latin"],
  variable: '--font-orbitron'
});
const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: '--font-space-grotesk'
});

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LavaTrail from "@/components/LavaTrail";
import SmoothScroll from "@/components/SmoothScroll";
import LoadingScreen from "@/components/LoadingScreen";
import ScrollToTop from "@/components/ScrollToTop";




export const metadata: Metadata = {
  title: "Krishnendu CJ - Full Stack Developer | AI/ML Enthusiast",
  description: "B.Tech CSE student at VIT specializing in Full Stack Development, AI/ML, and Cloud Computing. Explore my projects, skills, and journey in technology.",
  keywords: "Krishnendu CJ, Full Stack Developer, AI ML, React, Node.js, Python, VIT, Portfolio, Web Development",
  authors: [{ name: "Krishnendu CJ" }],
  creator: "Krishnendu CJ",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://krishnenducj.dev",
    title: "Krishnendu CJ - Full Stack Developer | AI/ML Enthusiast",
    description: "B.Tech CSE student at VIT specializing in Full Stack Development, AI/ML, and Cloud Computing. Explore my projects, skills, and journey in technology.",
    siteName: "Krishnendu CJ Portfolio",
    images: [
      {
        url: "/avatar.png",
        width: 1200,
        height: 630,
        alt: "Krishnendu CJ - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Krishnendu CJ - Full Stack Developer | AI/ML Enthusiast",
    description: "B.Tech CSE student at VIT specializing in Full Stack Development, AI/ML, and Cloud Computing.",
    images: ["/avatar.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#ff6b35" />
        <link rel="apple-touch-icon" href="/avatar.png" />
      </head>
      <body
        className={`${orbitron.variable} ${spaceGrotesk.variable} antialiased bg-black text-white`}
        style={{
          fontFamily: 'var(--font-space-grotesk), sans-serif',
          backgroundColor: 'var(--theme-background, #0a0a0a)',
          color: 'var(--theme-text, #ffffff)'
        }}
      >
        <ThemeProvider>
          <ThemeTransition />
          <ScrollProgress />
          <LoadingScreen />
          <SmoothScroll />
          <LavaTrail />
          <Navbar />
          {children}
          <Footer />
          <ScrollToTop />
          <ThemeToggle />
          <ServiceWorker />
        </ThemeProvider>
      </body>
    </html>
  );
}
