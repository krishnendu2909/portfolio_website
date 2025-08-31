// components/Contact.tsx
"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        setSubmitStatus('success');
        (e.target as HTMLFormElement).reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 text-themeText bg-themeBackground">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-4 font-orbitron glow-text-subtle text-themePrimary"
        >
          📬 Get In Touch
        </motion.h2>
        <p className="text-gray-300 mb-10 max-w-2xl mx-auto">
          Ready to collaborate on something amazing? Drop me a message and let&apos;s create something stellar together!
        </p>

        <form onSubmit={handleSubmit} className="max-w-lg mx-auto flex flex-col gap-6">
          {/* Web3Forms Access Key - Replace with your actual key */}
          <input type="hidden" name="access_key" value="a9496a9f-58db-43eb-a1dc-005bb7482648" />
          <input type="hidden" name="subject" value="New Contact Form Submission from Portfolio" />
          <input type="hidden" name="from_name" value="Portfolio Contact Form" />

          <div className="text-left">
            <label htmlFor="name" className="block text-sm font-medium mb-2 text-themeSecondary">
              Name *
            </label>
            <input type="text" name="name" placeholder="Your Name" required className="w-full p-3 rounded bg-gray-900 border border-themePrimary text-themeText" />
          </div>

          <div className="text-left">
            <label htmlFor="email" className="block text-sm font-medium mb-2 text-themeSecondary">
              Email *
            </label>
            <input type="email" name="email" placeholder="Your Email" required className="w-full p-3 rounded bg-gray-900 border border-themePrimary text-themeText" />
          </div>

          <div className="text-left">
            <label htmlFor="message" className="block text-sm font-medium mb-2 text-themeSecondary">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              defaultValue="Tell me about your project, ideas, or just say hi! 🚀"
              className="w-full p-4 rounded-lg bg-gray-900 border-2 border-gray-700 text-white placeholder-gray-400 focus:border-themePrimary focus:outline-none transition-colors resize-vertical"
            />
          </div>

          <button 
            type="submit" 
            disabled={isSubmitting}
            className="py-3 rounded font-bold transition" 
            style={{ backgroundColor: 'var(--theme-primary)' }} 
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--theme-secondary)'} 
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--theme-primary)'}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>

          {/* Status Messages */}
          {submitStatus === 'success' && (
            <div 
              className="p-4 rounded-lg border text-center"
              style={{
                backgroundColor: 'var(--theme-primary)20',
                borderColor: 'var(--theme-primary)',
                color: 'var(--theme-primary)'
              }}
            >
              ✅ Message sent successfully! I&apos;ll get back to you soon.
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div 
              className="p-4 rounded-lg border text-center"
              style={{
                backgroundColor: 'var(--theme-accent)20',
                borderColor: 'var(--theme-accent)',
                color: 'var(--theme-accent)'
              }}
            >
              ❌ Something went wrong. Please try again or contact me directly.
            </div>
          )}
        </form>

        {/* Alternative Contact Info */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <p className="text-gray-400 text-sm">
            Prefer email? Reach me directly at{" "}
            <a 
              href="mailto:krishnendu.c.j.2004@gmail.com" 
              className="text-themeSecondary hover:text-themeAccent transition-colors"
            >
              krishnendu.c.j.2004@gmail.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
