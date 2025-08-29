"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaPaperPlane, FaCheck, FaExclamationTriangle } from "react-icons/fa";
import SkeletonLoader from "./SkeletonLoader";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface ContactFormProps {
  onSubmit?: (data: FormData) => Promise<boolean>;
}

export default function ContactForm({ onSubmit }: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      const success = onSubmit ? await onSubmit(formData) : true;
      setSubmitStatus(success ? 'success' : 'error');
      
      if (success) {
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }
  };

  const handleChange = (field: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-10 max-w-lg mx-auto flex flex-col gap-4">
      <input type="hidden" name="access_key" value="YOUR_WEB3FORMS_KEY" />
      
      {/* Name Field */}
      <div className="text-left">
        <label htmlFor="name" className="block text-sm font-medium mb-2 text-themeSecondary">
          Name *
        </label>
        {isSubmitting ? (
          <SkeletonLoader variant="button" className="w-full h-12" />
        ) : (
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange('name')}
            placeholder="Your Name"
            required
            className={`w-full p-3 rounded bg-themeBackground/80 border-2 text-themeText transition-all duration-300 ${
              errors.name 
                ? 'border-red-500 focus:border-red-500' 
                : 'border-themePrimary/50 focus:border-themePrimary'
            }`}
          />
        )}
        {errors.name && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-red-400 text-sm mt-1 flex items-center gap-1"
          >
            <FaExclamationTriangle /> {errors.name}
          </motion.p>
        )}
      </div>

      {/* Email Field */}
      <div className="text-left">
        <label htmlFor="email" className="block text-sm font-medium mb-2 text-themeSecondary">
          Email *
        </label>
        {isSubmitting ? (
          <SkeletonLoader variant="button" className="w-full h-12" />
        ) : (
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange('email')}
            placeholder="Your Email"
            required
            className={`w-full p-3 rounded bg-themeBackground/80 border-2 text-themeText transition-all duration-300 ${
              errors.email 
                ? 'border-red-500 focus:border-red-500' 
                : 'border-themePrimary/50 focus:border-themePrimary'
            }`}
          />
        )}
        {errors.email && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-red-400 text-sm mt-1 flex items-center gap-1"
          >
            <FaExclamationTriangle /> {errors.email}
          </motion.p>
        )}
      </div>

      {/* Message Field */}
      <div className="text-left">
        <label htmlFor="message" className="block text-sm font-medium mb-2 text-themeSecondary">
          Message *
        </label>
        {isSubmitting ? (
          <SkeletonLoader variant="card" className="w-full h-32" />
        ) : (
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange('message')}
            required
            rows={5}
            className={`w-full p-4 rounded-lg bg-themeBackground/80 border-2 text-themeText placeholder-gray-400 focus:outline-none transition-all duration-300 resize-vertical ${
              errors.message 
                ? 'border-red-500 focus:border-red-500' 
                : 'border-themePrimary/50 focus:border-themePrimary'
            }`}
            placeholder="Tell me about your project, ideas, or just say hi! 🚀"
          />
        )}
        {errors.message && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-red-400 text-sm mt-1 flex items-center gap-1"
          >
            <FaExclamationTriangle /> {errors.message}
          </motion.p>
        )}
      </div>

      {/* Submit Button */}
      <motion.button
        type="submit"
        disabled={isSubmitting}
        whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
        whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
        className={`w-full py-4 rounded-lg font-bold transition-all duration-300 flex items-center justify-center gap-2 ${
          isSubmitting
            ? 'bg-gray-600 cursor-not-allowed'
            : submitStatus === 'success'
            ? 'bg-green-600 hover:bg-green-700'
            : submitStatus === 'error'
            ? 'bg-red-600 hover:bg-red-700'
            : 'bg-themePrimary hover:bg-themeSecondary'
        }`}
        style={{
          boxShadow: !isSubmitting ? `0 0 20px var(--theme-primary)` : undefined
        }}
      >
        {isSubmitting ? (
          <>
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
            Sending...
          </>
        ) : submitStatus === 'success' ? (
          <>
            <FaCheck /> Message Sent!
          </>
        ) : submitStatus === 'error' ? (
          <>
            <FaExclamationTriangle /> Failed to Send
          </>
        ) : (
          <>
            <FaPaperPlane /> Send Message
          </>
        )}
      </motion.button>
    </form>
  );
}
