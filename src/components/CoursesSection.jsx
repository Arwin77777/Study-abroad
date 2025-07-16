import React from 'react';
import { motion } from 'framer-motion';
import BackgroundAnimation from './BackgroundAnimation';
import ComputerScience from '../assets/courses/ComputerScience.jpeg';
import MBBS from '../assets/courses/MBBS.jpeg';
import BusinessAdmin from '../assets/courses/BusinessAdmin.jpeg';
import Engineering from '../assets/courses/Engineer.jpeg';
import Psychology from '../assets/courses/Psychology.jpeg';
import DataScience from '../assets/courses/DataScientist.jpeg';
import Law from '../assets/courses/Lawyer.jpeg';
import GraphicDesign from '../assets/courses/GraphicDesigner.jpeg';
import Architecture from '../assets/courses/Architect.jpeg';
import Pharmacy from '../assets/courses/Pharmacist.jpeg';
import HotelManagement from '../assets/courses/HotelManagement.jpeg';
import Economics from '../assets/courses/Economist.jpeg';

const courses = [
  { name: 'Computer Science', description: 'Learn software, AI, and data systems.', imageUrl: ComputerScience },
  { name: 'MBBS', description: 'Train to become a medical professional.', imageUrl: MBBS },
  { name: 'Business Admin', description: 'Develop leadership and strategy skills.', imageUrl: BusinessAdmin },
  { name: 'Engineering', description: 'Build machines, structures, and systems.', imageUrl: Engineering },
  { name: 'Psychology', description: 'Understand the human mind and behavior.', imageUrl: Psychology },
  { name: 'Data Science', description: 'Turn raw data into real-world insights.', imageUrl: DataScience },
  { name: 'Law', description: 'Master legal systems and justice.', imageUrl: Law },
  { name: 'Graphic Design', description: 'Create visual concepts and designs.', imageUrl: GraphicDesign },
  { name: 'Architecture', description: 'Design buildings and urban landscapes.', imageUrl: Architecture },
  { name: 'Pharmacy', description: 'Study medicinal chemistry and drug therapy.', imageUrl: Pharmacy },
  { name: 'Hotel Management', description: 'Excel in hospitality and customer service.', imageUrl: HotelManagement },
  { name: 'Economics', description: 'Analyze markets, finance, and economies.', imageUrl: Economics }
];

const CoursesSection = () => {
  return (
    <div className="w-full bg-gradient-to-br from-white via-[#e0f7ff] to-[#336b87]/10 py-20 px-6 relative overflow-hidden">
      <BackgroundAnimation animationType="waves" />
      <h2 className="text-4xl font-extrabold text-center text-[#336b87] mb-14 tracking-wide drop-shadow-sm">
        ✨ Explore Our Coolest Courses
      </h2>

      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center z-10 relative">
        {courses.map((course, idx) => (
          <motion.div
            key={idx}
            whileHover={{
              rotate: [-1, 0, 1],
              scale: 1.05,
              transition: { type: "spring", stiffness: 200, damping: 10 }
            }}
            className="w-64 h-[380px]  rounded-3xl shadow-xl text-center flex flex-col overflow-hidden group"
          >
            {/* Image occupies 60% of card height */}
            <div className="h-[60%] w-full bg-transparent flex items-center justify-center">
              <img
                src={course.imageUrl}
                alt={course.name}
                className="w-full h-48 object-cover bg-center drop-shadow-lg group-hover:scale-105 transition duration-300 rounded-t-3xl"
              />
            </div>

            {/* Textual Info */}
            <div className="flex-1 bg-gradient-to-br from-[#336b87] to-[#4f91b7] text-white px-4 py-6">
              <h3 className="text-lg font-bold mb-1 tracking-wide">{course.name}</h3>
              <p className="text-sm text-white/80">{course.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CoursesSection;
