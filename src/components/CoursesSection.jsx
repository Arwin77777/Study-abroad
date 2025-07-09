import React from 'react';
import { motion } from 'framer-motion';
import BackgroundAnimation from './BackgroundAnimation';

const courses = [
  { name: 'Computer Science', description: 'Learn software, AI, and data systems.', imageUrl: 'https://example.com/computer-science-icon.png' },
  { name: 'MBBS', description: 'Train to become a medical professional.', imageUrl: 'https://example.com/mbbs-icon.png' },
  { name: 'Business Admin', description: 'Develop leadership and strategy skills.', imageUrl: 'https://example.com/business-admin-icon.png' },
  { name: 'Engineering', description: 'Build machines, structures, and systems.', imageUrl: 'https://example.com/engineering-icon.png' },
  { name: 'Psychology', description: 'Understand the human mind and behavior.', imageUrl: 'https://example.com/psychology-icon.png' },
  { name: 'Data Science', description: 'Turn raw data into real-world insights.', imageUrl: 'https://example.com/data-science-icon.png' },
  { name: 'Law', description: 'Master legal systems and justice.', imageUrl: 'https://example.com/law-icon.png' },
  { name: 'Graphic Design', description: 'Create visual concepts and designs.', imageUrl: 'https://example.com/graphic-design-icon.png' },
  { name: 'Architecture', description: 'Design buildings and urban landscapes.', imageUrl: 'https://example.com/architecture-icon.png' },
  { name: 'Pharmacy', description: 'Study medicinal chemistry and drug therapy.', imageUrl: 'https://example.com/pharmacy-icon.png' },
  { name: 'Hotel Management', description: 'Excel in hospitality and customer service.', imageUrl: 'https://example.com/hotel-management-icon.png' },
  { name: 'Economics', description: 'Analyze markets, finance, and economies.', imageUrl: 'https://example.com/economics-icon.png' },
  { name: 'Environmental Science', description: 'Protect our planet through science.', imageUrl: 'https://example.com/environmental-science-icon.png' },
  { name: 'Fashion Design', description: 'Turn creativity into wearable art.', imageUrl: 'https://example.com/fashion-design-icon.png' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

const CoursesSection = () => {
  return (
    <div className="w-full bg-white py-12 px-4 relative">
      <BackgroundAnimation animationType="waves" />
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#336b87] mb-10">
        Our Popular Courses
      </h2>
      <motion.div 
        className="grid gap-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 justify-items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {courses.map((course, index) => (
          <motion.div
            key={index}
            className="w-48 h-48 flex flex-col items-center justify-center rounded-full text-center shadow-lg border border-white/30 transition-all duration-300 hover:shadow-[inset_0_0_20px_rgba(255,255,255,0.4)] hover:scale-105"
            style={{
              backgroundColor: '#336b87',
              transform: 'perspective(1000px) rotateY(10deg)',
            }}
            variants={itemVariants}
            whileHover={{ rotateY: 0, scale: 1.1 }}
          >
            <h2 className="font-semibold text-sm md:text-base text-white px-2 animate-pulse">{course.name}</h2>
            <p className="text-[11px] md:text-sm px-3 mt-1 text-white/80 animate-fadeIn">{course.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default CoursesSection;