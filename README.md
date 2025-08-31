# 🚀 Krishnendu CJ - Portfolio

A modern, responsive portfolio website built with Next.js, featuring dynamic theme switching, smooth animations, and interactive components.

![Portfolio Preview](https://img.shields.io/badge/Next.js-15.5.2-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0-38B2AC?style=for-the-badge&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.0-FF0055?style=for-the-badge&logo=framer)

## ✨ Features

### 🎨 **Dynamic Theme System**
- **4 Beautiful Themes**: Lava (default), Ocean, Forest, and Cosmic
- **Smooth Transitions**: Seamless color changes across all components
- **Theme Persistence**: Remembers your preferred theme

### 🎭 **Interactive Components**
- **Animated Avatar**: Theme-aware avatar with glow effects
- **Floating Particles**: Dynamic background animations
- **Smooth Scrolling**: Active section highlighting in navigation
- **Project Search**: Real-time filtering of projects
- **Contact Form**: Fully functional with validation and feedback

### 📱 **Responsive Design**
- **Mobile-First**: Optimized for all screen sizes
- **Touch Gestures**: Swipe navigation for project cards
- **Progressive Loading**: Skeleton loaders and lazy images
- **PWA Ready**: Offline support and installable

### 🚀 **Performance Optimized**
- **Next.js 15**: Latest features and optimizations
- **Image Optimization**: Lazy loading and responsive images
- **Code Splitting**: Optimized bundle sizes
- **SEO Friendly**: Meta tags and Open Graph support

## 🛠️ Tech Stack

- **Framework**: Next.js 15.5.2
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Fonts**: Orbitron, Space Grotesk (Google Fonts)
- **Form Handling**: Web3Forms API

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/krishnendu2909/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
portfolio/
├── public/                 # Static assets
│   ├── avatar.png         # Profile picture
│   ├── *.pdf              # Certificates and resume
│   └── icons/             # PWA icons
├── src/
│   ├── app/               # Next.js app directory
│   │   ├── globals.css    # Global styles and theme variables
│   │   ├── layout.tsx     # Root layout
│   │   └── page.tsx       # Home page
│   ├── components/        # React components
│   │   ├── Hero.tsx       # Landing section
│   │   ├── About.tsx      # About section
│   │   ├── Projects.tsx   # Projects showcase
│   │   ├── Skills.tsx     # Skills section
│   │   ├── Experience.tsx # Education & certifications
│   │   ├── Contact.tsx    # Contact form
│   │   └── ...           # Other components
│   ├── contexts/          # React contexts
│   │   └── ThemeContext.tsx # Theme management
│   └── hooks/             # Custom hooks
│       └── useActiveSection.ts # Section tracking
```

## 🎨 Themes

The portfolio includes 4 carefully crafted themes:

| Theme | Primary | Secondary | Accent | Description |
|-------|---------|-----------|---------|-------------|
| 🔥 **Lava** | `#ff6b35` | `#ff8e53` | `#ffab73` | Warm orange/red tones |
| 🌊 **Ocean** | `#0ea5e9` | `#38bdf8` | `#7dd3fc` | Cool blue tones |
| 🌲 **Forest** | `#22c55e` | `#4ade80` | `#86efac` | Natural green tones |
| 🌌 **Cosmic** | `#8b5cf6` | `#a78bfa` | `#c4b5fd` | Mystical purple tones |

## 📧 Contact Form Setup

The contact form uses Web3Forms for handling submissions. To set up:

1. Get your access key from [Web3Forms](https://web3forms.com)
2. Replace the access key in `src/components/ContactForm.tsx`
3. For production, use environment variables:
   ```env
   NEXT_PUBLIC_WEB3FORMS_KEY=your_access_key_here
   ```

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy with one click

### Other Platforms
- **Netlify**: Drag and drop the `out` folder after `npm run build`
- **GitHub Pages**: Use `next export` for static deployment

## 📱 PWA Features

The portfolio includes Progressive Web App capabilities:
- **Offline Support**: Service worker for caching
- **Installable**: Add to home screen on mobile
- **App-like Experience**: Standalone display mode

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Krishnendu CJ**
- Portfolio: [krishnendu-portfolio.vercel.app](https://portfolio-website-plum-mu.vercel.app/)
- GitHub: [@krishnendu2909](https://github.com/krishnendu2909)
- LinkedIn: [Krishnendu CJ](https://www.linkedin.com/in/krishnenducj/)

---

⭐ **Star this repository if you found it helpful!**
