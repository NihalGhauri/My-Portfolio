"use client";

import React, { useEffect } from 'react';
import Image from 'next/image';
import { 
  motion, 
  useAnimation, 
  Variants, 
  useScroll, 
  useTransform, 
  useSpring, 
  useInView 
} from 'framer-motion';

const About: React.FC = () => {
  const sectionRef = React.useRef(null);
  const imageRef = React.useRef(null);
  const textRef = React.useRef(null);
  const titleRef = React.useRef(null);
  
  const isSectionInView = useInView(sectionRef, { once: false, amount: 0.1 });
  const isImageInView = useInView(imageRef, { once: false, amount: 0.5 });
  const isTextInView = useInView(textRef, { once: false, amount: 0.3 });
  const isTitleInView = useInView(titleRef, { once: false, amount: 0.5 });
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const smoothProgress = useSpring(scrollYProgress, { 
    stiffness: 100, 
    damping: 30, 
    restDelta: 0.001 
  });
  
  const imageY = useTransform(smoothProgress, [0, 1], [50, -50]);
  const textY = useTransform(smoothProgress, [0, 1], [100, -20]);
  const opacity = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  
  const controls = useAnimation();
  const titleControls = useAnimation();
  const imageControls = useAnimation();
  const textControls = useAnimation();
  const buttonControls = useAnimation();

  useEffect(() => {
    if (isSectionInView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, isSectionInView]);
  
  useEffect(() => {
    if (isTitleInView) {
      titleControls.start('visible');
    } else {
      titleControls.start('hidden');
    }
  }, [titleControls, isTitleInView]);
  
  useEffect(() => {
    if (isImageInView) {
      imageControls.start('visible');
      setTimeout(() => {
        buttonControls.start('visible');
      }, 600);
    } else {
      imageControls.start('hidden');
      buttonControls.start('hidden');
    }
  }, [imageControls, buttonControls, isImageInView]);
  
  useEffect(() => {
    if (isTextInView) {
      textControls.start('visible');
    } else {
      textControls.start('hidden');
    }
  }, [textControls, isTextInView]);

  const sectionVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.3,
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const titleVariants: Variants = {
    hidden: { opacity: 0, y: -30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  const imageVariants: Variants = {
    hidden: { 
      opacity: 0, 
      scale: 0.9,
      x: -50,
      rotateY: -15
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      x: 0,
      rotateY: 0,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.8
      }
    }
  };

  const textVariants: Variants = {
    hidden: { 
      opacity: 0, 
      x: 50
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.1
      }
    }
  };

  const paragraphVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 20
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5
      }
    }
  };

  

  
  return (
    <motion.section 
      id="about" 
      className="py-16 sm:py-20 bg-black overflow-hidden relative"
      ref={sectionRef}
      style={{ opacity }}
      initial="hidden"
      animate={controls}
      variants={sectionVariants}
    >
      <motion.div 
        className="absolute inset-0 bg-black"
        style={{ 
          y: useTransform(smoothProgress, [0, 1], [0, -100]) 
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2 
          ref={titleRef}
          className="text-2xl sm:text-3xl lg:text-4xl text-gray-300 text-center font-bold mb-12 relative"
          variants={titleVariants}
          initial="hidden"
          animate={titleControls}
        >
          About Me
          <motion.span
            className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-blue-600 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: isTitleInView ? "50px" : 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
          <motion.div 
            ref={imageRef}
            className="flex justify-center mx-auto max-w-xs sm:max-w-md"
            variants={imageVariants}
            initial="hidden"
            animate={imageControls}
            style={{ y: imageY }}
            whileHover={{ 
              scale: 1.05,
              rotateY: 5,
              transition: { duration: 0.4 }
            }}
          >
            <div className="relative overflow-hidden rounded-xl shadow-lg group ">
              <Image 
                src="/ai1.jpeg" 
                alt="Profile" 
                width={350} 
                height={350}
                className="rounded-xl w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110 " 
                priority
              />
              
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 "
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div 
            ref={textRef}
            className="text-base sm:text-lg text-center md:text-left md:mb-12"
            variants={textVariants}
            initial="hidden"
            animate={textControls}
            style={{ y: textY }}
          >
            <motion.p 
              className="text-gray-300 mb-10"
              variants={paragraphVariants}
            >
              I am an enthusiastic <strong 
                className="text-blue-600"
              >
                Full Stack Developer
              </strong> and aspiring <strong    
                className="text-blue-600"
              >
                Certified Agentic and Robotic AI Engineer
              </strong>, currently advancing my skills through <strong 
                className="text-blue-600"
              >
                Governor Sindh IT Initiative
              </strong>. My focus lies in leveraging cutting-edge agentic AI and cloud-native technologies, including the DACA design pattern, to build innovative, planet-scale solutions and humanoid robotics. I thrive on solving complex challenges, mastering tools like Python, OpenAI Agents SDK, and Kubernetes, and contributing to projects that drive the Agentia vision.
            </motion.p>

            <motion.p 
              className="text-gray-300"
              variants={paragraphVariants}
            >
              When I&apos;m not coding or experimenting with cloud deployments, you can find me diving into AI research, contributing to open-source projects on GitHub, or exploring ethical AI innovation.
            </motion.p>
            
            
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;