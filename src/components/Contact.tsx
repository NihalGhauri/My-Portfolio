"use client"
import React, { useRef } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

function ContactForm() {
  const [state, handleSubmit] = useForm("xpwzowbw");
  const formRef = useRef(null);
  const isInView = useInView(formRef, { once: false, amount: 0.3 });
  
  const { scrollYProgress } = useScroll({
    target: formRef,
    offset: ["start end", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.5], [0, 0.5, 1]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.5], [100, 50, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  if (state.succeeded) {
    return (
      <motion.div 
        className="min-h-screen bg-black flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div 
          className="bg-black border-2 border-blue-500 shadow-2xl rounded-xl p-10 max-w-md w-full text-center transform transition duration-500 hover:scale-105"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
        >
          <div className="relative">
            <motion.div 
              className="absolute -top-14 left-1/3 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-black w-24 h-24 rounded-full flex items-center justify-center shadow-lg"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200, damping: 10 }}
            >
              <svg className="h-12 w-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </motion.div>
          </div>
          <motion.div 
            className="pt-12 space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-gray-400">Submission Received!</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Your message has landed! I&apos;am excited to dive into your submission and will be in touch shortly with a personalized response.
            </p>
            <div className="flex justify-center space-x-4 pt-4">
              <motion.button
                className="bg-blue-600 hover:bg-gray-900 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-110 shadow-md"
                onClick={() => window.location.href = '/'}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                Return Home
              </motion.button>
              <motion.button
                className="bg-blue-100 text-blue-700 hover:bg-blue-200 font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-110 shadow-md"
                onClick={() => window.history.back()}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                Previous Page
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    );
  };
    
  return (
    <motion.section 
      id="contact" 
      className="py-20 bg-black"
      style={{ opacity, y }}
      ref={formRef}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-gray-300 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : -20 }}
          transition={{ duration: 0.6 }}
        >
          Get In Touch
        </motion.h2>
        <motion.div 
          className="max-w-2xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <motion.div className="relative" variants={itemVariants}>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 text-gray-300 bg-black/30 border border-gray-700
                  rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 peer
                  appearance-none placeholder-transparent"
                placeholder=" "
                required
              />
              <label
                htmlFor="name"
                className="absolute text-sm text-gray-300 duration-300 transform
                  -translate-y-6 scale-75 top-3 origin-left bg-black px-2 z-10
                  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2
                  peer-placeholder-shown:top-1/2 peer-focus:top-3 peer-focus:scale-75
                  peer-focus:-translate-y-6 peer-focus:text-blue-500 left-2 rounded-lg"
              >
                Name
              </label>
            </motion.div>
            <motion.div className="relative" variants={itemVariants}>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 bg-black/30 text-gray-300 border border-gray-700
                  rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 peer
                  appearance-none placeholder-transparent"
                placeholder=" "
                required
              />
              <label
                htmlFor="email"
                className="absolute text-sm text-gray-300 duration-300 transform
                  -translate-y-6 scale-75 top-3 origin-left bg-black px-2 z-10
                  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2
                  peer-placeholder-shown:top-1/2 peer-focus:top-3 peer-focus:scale-75
                  peer-focus:-translate-y-6 peer-focus:text-blue-500 left-2 rounded-lg"
              >
                Email
              </label>
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </motion.div>
            <motion.div className="relative" variants={itemVariants}>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full px-4 py-2 text-gray-300 bg-black/30 border border-gray-700
                  rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 peer
                  appearance-none placeholder-transparent"
                placeholder=" "
                required
              ></textarea>
              <label
                htmlFor="message"
                className="absolute text-sm text-gray-300 duration-300 transform
                  -translate-y-6 scale-75 top-3 origin-left bg-black px-2 z-10
                  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2
                  peer-placeholder-shown:top-6 peer-focus:top-3 peer-focus:scale-75
                  peer-focus:-translate-y-6 peer-focus:text-blue-500 left-2 rounded-lg"
              >
                Message
              </label>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </motion.div>
            <motion.button
              type="submit" 
              disabled={state.submitting}
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </motion.section>
  );
}
export default ContactForm;