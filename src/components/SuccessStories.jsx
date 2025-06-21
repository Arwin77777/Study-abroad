import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material';

// Placeholder data
const stories = [
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    name: 'Priya Sharma',
    university: 'University of Toronto',
    testimonial: "Future Forge made my dream of studying in Canada a reality. Their support was incredible!",
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1582572564332-15f68e015d39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    name: 'Rahul Verma',
    university: 'University of California, LA',
    testimonial: "The guidance on my visa application was flawless. I couldn't have done it without them.",
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    name: 'Anjali Singh',
    university: 'King\'s College London',
    testimonial: "From choosing a course to finding accommodation, the team was with me at every step.",
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    name: 'Vikram Patel',
    university: 'University of Melbourne',
    testimonial: "An amazing experience. The counselors are knowledgeable and genuinely helpful.",
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1509479200259-f83141df3c13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    name: 'Sneha Reddy',
    university: 'National University of Singapore',
    testimonial: "The best consultancy for anyone planning to study in Singapore. Highly recommended!",
  }
];

const SuccessStories = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = stories.length - 1;
    } else if (newIndex >= stories.length) {
      newIndex = 0;
    }
    setActiveIndex(newIndex);
  };

  const numStories = stories.length;

  return (
    <div className="relative w-full flex flex-col items-center justify-center overflow-hidden bg-transparent py-16">
      <div className="relative w-full h-[380px] perspective-1000 z-10">
        {stories.map((story, i) => {
          let offset = i - activeIndex;
          if (offset > numStories / 2) {
            offset -= numStories;
          } else if (offset < -numStories / 2) {
            offset += numStories;
          }
          
          const rotateY = offset * 20; // degrees
          const translateX = offset * 35; // percentage
          const scale = 1 - Math.abs(offset) * 0.15;
          const opacity = 1;
          const zIndex = numStories - Math.abs(offset);

          return (
            <motion.div
              key={i}
              className="absolute w-full h-full flex items-center justify-center"
              initial={false}
              animate={{
                transform: `translateX(${translateX}%) translateZ(${Math.abs(offset) * -200}px) rotateY(${rotateY}deg) scale(${scale})`,
                opacity: opacity,
                zIndex: zIndex,
              }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              style={{
                transformStyle: 'preserve-3d',
              }}
            >
              <div className="w-[380px] h-[300px] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col transition-shadow hover:shadow-[#336b87]/20">
                <img src={story.src} alt={story.name} className="w-full h-3/5 object-cover" />
                <div className="p-6 flex-grow flex flex-col justify-center text-center bg-gradient-to-t from-gray-50">
                  <h3 className="text-2xl font-bold text-[#336b87]">{story.name}</h3>
                  <p className="text-sm font-medium text-[#336b87] mb-3">{story.university}</p>
                  <p className="text-gray-600 text-base italic leading-relaxed">&ldquo;{story.testimonial}&rdquo;</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center space-x-8 py-1 z-10">
        <button 
          onClick={() => goToIndex(activeIndex - 1)}
          className="bg-white/80 backdrop-blur-sm hover:bg-white transition-colors p-4 rounded-full shadow-lg text-[#336b87] hover:text-[#336b87]/80"
        >
          <ArrowBackIosNew />
        </button>
        <button 
          onClick={() => goToIndex(activeIndex + 1)}
          className="bg-white/80 backdrop-blur-sm hover:bg-white transition-colors p-4 rounded-full shadow-lg text-[#336b87] hover:text-[#336b87]/80"
        >
          <ArrowForwardIos />
        </button>
      </div>
    </div>
  );
};

export default SuccessStories; 