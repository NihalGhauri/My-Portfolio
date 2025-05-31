"use client";

import Image from "next/image";
import Link from "next/link";
import { Instagram, Github, Linkedin, Mail } from "lucide-react";
import AnimatedText from "./AnimatedText";
import { motion } from "framer-motion";
  

const SOCIAL_LINKS = [
  {
    href: "https://github.com/NihalGhauri",
    icon: Github,
    ariaLabel: "GitHub Profile",
    hoverBg: "hover:bg-gray-400",
    hoverTextColor: "hover:text-black"
  },
  {
    href: "https://www.linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=nihal-khan-ghauri-93a9a627b",
    icon: Linkedin,
    ariaLabel: "LinkedIn Profile",
    hoverBg: "hover:bg-sky-500"
  },
  {
    href: "https://www.instagram.com/nihal.khan_ghouri",
    icon: Instagram,
    ariaLabel: "Instagram Profile",
    hoverBg: "hover:bg-gradient-to-r from-[#833AB4] via-[#C13584] to-[#FDCB58]"
  },
  {
    href: "mailto:nihalghouri321@gmail.com",
    icon: Mail,
    ariaLabel: "Send Email",
    hoverBg: "hover:bg-red-500"
  },
  {
   icon: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="currentColor"
      className="bi bi-whatsapp"
      viewBox="0 0 16 16"
    >
      <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
    </svg>
  ),
  href: 'https://wa.me/923162403438?text=Hello%20Nihal!',
  aria: 'WhatsApp Number',
  hoverBg: 'hover:bg-green-500',
  hoverText: 'hover:text-white',
  }
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6,
    }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const imageVariants = {
  hidden: { 
    opacity: 0,
    scale: 0.8,
    rotate: -5
  },
  visible: { 
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { 
      type: "spring",
      stiffness: 100,
      damping: 15,
      duration: 0.8
    }
  }
};

const socialIconVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20
    }
  },
  hover: { 
    scale: 1.2,
    transition: { 
      duration: 0.2 
    }
  }
};

const Hero = () => {
  return (
    <motion.section
      id="Home"
      className="min-h-screen bg-black flex items-center justify-center overflow-hidden"
      aria-labelledby="hero-title"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      <div className="max-w-7xl mx-auto px-4 mt-16 mb-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={imageVariants}
          whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
        >
          <Image
            src="/nihalkhanghauri.jpg"
            alt="Nihal Khan Ghauri - Profile Picture"
            width={600}
            height={300}
            priority
            className="rounded-lg shadow-chart-1 my-4"
          />
        </motion.div>
        
        <motion.h1 
          id="hero-title" 
          className="text-gray-400 text-2xl md:text-3xl mt-5 mb-6"
          variants={fadeInUp}
        >
          Hey, I&apos;m
        </motion.h1>
        
        <motion.span 
          className="text-gray-400"
          variants={fadeInUp}
        >
          <AnimatedText />
        </motion.span>
        <motion.div 
          className="mt-12"
          variants={fadeInUp}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
            Weaving {' '}
            <strong className='text-blue-400'> Full Stack</strong> Craft with <strong className='text-blue-400'> AI & Robotics </strong>Vision.
          </p>
        </motion.div>
        <motion.div 
          className="flex justify-center space-x-6 mt-8" 
          role="group" 
          aria-label="Social Media Links"
          variants={staggerContainer}
        >
          {SOCIAL_LINKS.map(({ href, icon: Icon, ariaLabel, hoverBg, hoverTextColor }, index) => (
            <motion.div
              key={href}
              variants={socialIconVariants}
              whileHover="hover"
              custom={index}
            >
              <Link
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={ariaLabel}
                className={`
                  text-gray-400 
                  p-2 
                  ${hoverBg} 
                  ${hoverTextColor || ''} 
                  hover:text-white 
                  rounded-full 
                  transition-all 
                  ease-out 
                  duration-500
                  flex items-center justify-center
                `}
              >
                <Icon size={24} />
              </Link>
            </motion.div>
          ))}
        </motion.div>
        
        
      </div>
    </motion.section>
  );
}

export default Hero;
