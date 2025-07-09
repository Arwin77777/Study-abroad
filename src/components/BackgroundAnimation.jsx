import React from 'react';
import { motion } from 'framer-motion';

const BackgroundAnimation = ({ animationType }) => {
  const animations = {
    bubbles: {
      animate: {
        y: [0, -100, -200, -300],
        x: [0, Math.random() * 50 - 25],
        opacity: [0, 0.6, 0.6, 0],
        scale: [0.8, 1, 1.2, 0.8],
      },
      transition: {
        duration: Math.random() * 20 + 15,
        delay: Math.random() * 10,
        repeat: Infinity,
        ease: "easeInOut"
      }
    },
    waves: {
      animate: {
        x: [0, 50, 0, -50, 0],
        opacity: [0.5, 1, 0.5],
        scale: [1, 1.1, 1],
      },
      transition: {
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut"
      }
    },
    // Add more animation types as needed
  };

  const selectedAnimation = animations[animationType] || animations.bubbles;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={`bubble-${i}`}
          className="absolute bg-[#336b87]/10 rounded-full"
          style={{
            width: Math.random() * 60 + 40,
            height: Math.random() * 60 + 40,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={selectedAnimation.animate}
          transition={selectedAnimation.transition}
        />
      ))}
    </div>
  );
};

export default BackgroundAnimation; 