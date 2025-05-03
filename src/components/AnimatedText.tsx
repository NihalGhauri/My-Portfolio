"use client";
import React, { useEffect, useState } from 'react';

const roles = [
  "Nihal Khan Ghauri",
  "Full Stack Developer",
  "Programmer", 
  "Lifelong Learner",
];

const AnimatedText = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = roles[currentIndex];
    const updateText = () => {
      if (!isDeleting) {
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true),100);
        }
      } else {
        if (displayText.length === 0) {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % roles.length);
        } else {
          setDisplayText(displayText.slice(0, -1));
        }
      }
    };

    const timeout = setTimeout(updateText, isDeleting ? 100 : 200);
    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting]);

  return (
    <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-300 mb-8">
      {' '}
      <span className="text-4xl md:text-5xl text-blue-500  font-semibold ld inline-block min-w-[200px]">
        {displayText}
        <span className="animate-ping">|</span>
      </span>
    </h2>
  );
};  

export default AnimatedText;