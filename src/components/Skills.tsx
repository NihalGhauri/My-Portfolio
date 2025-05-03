"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
const Skills = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });
 
  const skillCategories = [
    {
      title: "Skills",
      skills: [
        "HTML",
        "CSS",
        "Tailwind CSS",
        "JavaScript",
        "TypeScript",
        "Next.js",
        "Python",
        "Streamlit",
        "MongoDB",
        "Sanity Headless CMS",
        "Git",
        "GitHub",
        "Figma",
        "Postman",
        "VS Code",
        "IT Support Professional"
      ],
    },
  ];
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };
  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };
  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };
  return (
    <section id="skills" className="py-20 bg-black">
      <motion.div
        ref={containerRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
      >
        <motion.h2
          className="text-3xl text-gray-400 font-bold mb-12"
          variants={titleVariants}
        >
          Skills
        </motion.h2>
        <div className="">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="p-3 rounded-lg"
            >
              <motion.div
                className="flex flex-wrap gap-6"
                variants={containerVariants}
              >
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-md hover:scale-110 transition-transform duration-200 cursor-pointer"
                    variants={skillVariants}
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: "rgba(59, 130, 246, 0.2)",
                      transition: { duration: 0.2 }
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
export default Skills;
