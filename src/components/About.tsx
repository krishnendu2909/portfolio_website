// components/About.tsx
"use client";
import { motion } from "framer-motion";
import { FaGraduationCap, FaCode, FaRocket, FaHeart, FaUser, FaLightbulb } from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="py-20 text-themeText bg-themeBackground">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4 font-orbitron glow-text-subtle text-themePrimary"
          >
            🌟 About Me
          </motion.h2>
          <div className="w-24 h-1 mx-auto rounded-full bg-themeSecondary mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Passionate developer crafting innovative solutions at the intersection of technology and creativity
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Personal Introduction */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="relative group">
              <div className="absolute -inset-1 rounded-xl blur opacity-25" style={{ background: `linear-gradient(135deg, var(--theme-primary), var(--theme-secondary))` }}></div>
              <div className="relative bg-gray-900 p-8 rounded-xl border border-gray-700 hover:border-themePrimary transition-all duration-300">
                <div className="flex items-center mb-6">
                  <FaUser className="text-3xl mr-4 text-themePrimary" />
                  <h3 className="text-2xl font-bold text-themeSecondary font-orbitron">
                    My Journey 🚀
                  </h3>
                </div>
                
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    Hey there! I&apos;m <span className="text-themePrimary font-semibold">Krishnendu CJ</span>, 
                    a passionate Full Stack Developer with expertise in modern web technologies. 
                    I love creating &quot;pixel-perfect&quot; applications that deliver exceptional user experiences.
                  </p>
                  
                  <p>
                    I&apos;m fascinated by the intersection of <span className="text-themeSecondary font-medium">AI/ML</span>, 
                    <span className="text-themeSecondary font-medium"> full-stack development</span>, and 
                    <span className="text-themeSecondary font-medium"> cloud technologies</span>. Whether it&apos;s building 
                    intelligent recommendation systems or crafting seamless user experiences, I love turning 
                    ideas into reality through code.
                  </p>
                  
                  <p>
                    When I&apos;m not coding, you&apos;ll find me exploring the latest tech trends, 
                    contributing to open-source projects, or brainstorming the next big idea. 
                    I believe in continuous learning and love sharing knowledge with the developer community.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quick Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {/* Education Card */}
            <div className="bg-gray-900 p-6 rounded-xl border border-gray-700 hover:border-themePrimary transition-all duration-300 group">
              <div className="flex items-center mb-3">
                <FaGraduationCap className="text-2xl mr-3 text-themePrimary group-hover:scale-110 transition-transform" />
                <h4 className="text-lg font-semibold text-themeSecondary">Education</h4>
              </div>
              <div className="text-gray-300 text-sm">
                <p className="font-medium">B.Tech CSE</p>
                <p>VIT Chennai</p>
                <p className="text-themePrimary">2022 - 2026</p>
              </div>
            </div>

            {/* Current Focus */}
            <div className="bg-gray-900 p-6 rounded-xl border border-gray-700 hover:border-themePrimary transition-all duration-300 group">
              <div className="flex items-center mb-3">
                <FaLightbulb className="text-2xl mr-3 text-themePrimary group-hover:scale-110 transition-transform" />
                <h4 className="text-lg font-semibold text-themeSecondary">Current Focus</h4>
              </div>
              <div className="text-gray-300 text-sm space-y-1">
                <p>• Full-Stack Development</p>
                <p>• AI/ML Projects</p>
                <p>• Cloud Computing</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Core Values Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-themeSecondary font-orbitron">
            What Drives Me
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: FaCode,
                title: "Innovation",
                description: "Creating solutions that push technological boundaries"
              },
              {
                icon: FaRocket,
                title: "Growth",
                description: "Continuously learning and evolving with technology"
              },
              {
                icon: FaHeart,
                title: "Impact",
                description: "Building technology that makes a meaningful difference"
              },
              {
                icon: FaLightbulb,
                title: "Creativity",
                description: "Turning imaginative ideas into functional reality"
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gray-900 p-6 rounded-xl border border-gray-700 hover:border-themePrimary transition-all duration-300 text-center group"
              >
                <item.icon className="text-3xl mx-auto mb-4 text-themePrimary group-hover:scale-110 transition-transform" />
                <h4 className="text-lg font-semibold mb-2 text-themeSecondary">{item.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
