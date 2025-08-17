import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, ArrowRight, Star, Clock, Users, Award } from 'lucide-react';
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
  { 
    name: 'Computer Science', 
    description: 'Master software development, AI, and cutting-edge technology systems.',
    imageUrl: ComputerScience,
    duration: '4 Years',
    students: '2.5K+',
    rating: 4.9,
    color: 'from-blue-600 to-purple-600',
    category: 'Technology'
  },
  { 
    name: 'MBBS', 
    description: 'Train to become a medical professional and save lives.',
    imageUrl: MBBS,
    duration: '5.5 Years',
    students: '1.8K+',
    rating: 4.8,
    color: 'from-red-500 to-pink-500',
    category: 'Medical'
  },
  { 
    name: 'Business Admin', 
    description: 'Develop leadership, strategy, and entrepreneurial skills.',
    imageUrl: BusinessAdmin,
    duration: '4 Years',
    students: '3.2K+',
    rating: 4.7,
    color: 'from-green-600 to-emerald-600',
    category: 'Business'
  },
  { 
    name: 'Engineering', 
    description: 'Build innovative machines, structures, and systems.',
    imageUrl: Engineering,
    duration: '4 Years',
    students: '4.1K+',
    rating: 4.8,
    color: 'from-orange-500 to-red-500',
    category: 'Engineering'
  },
  { 
    name: 'Psychology', 
    description: 'Understand the human mind and behavioral patterns.',
    imageUrl: Psychology,
    duration: '4 Years',
    students: '1.9K+',
    rating: 4.6,
    color: 'from-purple-600 to-indigo-600',
    category: 'Social Science'
  },
  { 
    name: 'Data Science', 
    description: 'Transform raw data into actionable business insights.',
    imageUrl: DataScience,
    duration: '4 Years',
    students: '2.7K+',
    rating: 4.9,
    color: 'from-teal-600 to-cyan-600',
    category: 'Technology'
  },
  { 
    name: 'Law', 
    description: 'Master legal systems and champion justice.',
    imageUrl: Law,
    duration: '5 Years',
    students: '2.1K+',
    rating: 4.7,
    color: 'from-gray-700 to-gray-900',
    category: 'Legal'
  },
  { 
    name: 'Graphic Design', 
    description: 'Create stunning visual concepts and brand experiences.',
    imageUrl: GraphicDesign,
    duration: '3 Years',
    students: '1.6K+',
    rating: 4.8,
    color: 'from-pink-500 to-rose-500',
    category: 'Design'
  },
  { 
    name: 'Architecture', 
    description: 'Design innovative buildings and urban landscapes.',
    imageUrl: Architecture,
    duration: '5 Years',
    students: '1.4K+',
    rating: 4.7,
    color: 'from-amber-600 to-orange-600',
    category: 'Design'
  },
  { 
    name: 'Pharmacy', 
    description: 'Study medicinal chemistry and advanced drug therapy.',
    imageUrl: Pharmacy,
    duration: '4 Years',
    students: '1.7K+',
    rating: 4.6,
    color: 'from-green-500 to-teal-500',
    category: 'Medical'
  },
  { 
    name: 'Hotel Management', 
    description: 'Excel in hospitality and premium customer service.',
    imageUrl: HotelManagement,
    duration: '4 Years',
    students: '2.3K+',
    rating: 4.5,
    color: 'from-blue-500 to-indigo-500',
    category: 'Hospitality'
  },
  { 
    name: 'Economics', 
    description: 'Analyze global markets, finance, and economic systems.',
    imageUrl: Economics,
    duration: '4 Years',
    students: '2.0K+',
    rating: 4.7,
    color: 'from-yellow-600 to-orange-500',
    category: 'Finance'
  }
];

const categories = ['All', 'Technology', 'Medical', 'Business', 'Engineering', 'Design', 'Legal', 'Finance', 'Social Science', 'Hospitality'];

const BackgroundAnimation = () => (
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute -inset-10 opacity-20">
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full mix-blend-overlay filter blur-3xl opacity-70 animate-pulse"></div>
      <div className="absolute top-3/4 right-1/4 w-72 h-72 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full mix-blend-overlay filter blur-3xl opacity-70 animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full mix-blend-overlay filter blur-3xl opacity-70 animate-pulse" style={{ animationDelay: '4s' }}></div>
    </div>
  </div>
);

const CoursesSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredCard, setHoveredCard] = useState(null);

  const filteredCourses = activeCategory === 'All' 
    ? courses 
    : courses.filter(course => course.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      rotateX: -15
    },
    visible: { 
      opacity: 1, 
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <BackgroundAnimation />
      
      {/* Header Section */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 bg-white/95 backdrop-blur rounded-xl px-6 py-3 shadow-xl mb-6">
            <GraduationCap className="w-6 h-6 text-orange-500" />
            <span className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Discover Your Future</span>
          </div>
          
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Transform Your Future
          </h2>
          
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Explore world-class programs designed to unlock your potential and shape tomorrow&apos;s leaders
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/25 hover:bg-orange-600'
                  : 'bg-white/95 backdrop-blur text-gray-700 hover:bg-white hover:shadow-xl'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Courses Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            {filteredCourses.map((course, idx) => (
              <motion.div
                key={`${course.name}-${activeCategory}`}
                variants={cardVariants}
                className="group relative"
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="relative bg-white/95 backdrop-blur rounded-xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/25">
                  {/* Image Container */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={course.imageUrl}
                      alt={course.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/95 backdrop-blur rounded-lg text-xs font-semibold text-gray-700">
                        {course.category}
                      </span>
                    </div>

                    {/* Rating Badge */}
                    <div className="absolute top-4 right-4">
                      <div className="flex items-center gap-1 px-2 py-1 bg-orange-500 backdrop-blur rounded-lg">
                        <Star className="w-3 h-3 text-white fill-current" />
                        <span className="text-xs font-bold text-white">{course.rating}</span>
                      </div>
                    </div>

                    {/* Hover Action */}
                    {/* <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <button className="flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full font-medium text-gray-800 hover:bg-white transition-colors">
                        <span className="text-sm">Explore</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div> */}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-orange-500 transition-colors">
                      {course.name}
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {course.description}
                    </p>

                    {/* Stats */}
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-orange-500" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-3 h-3 text-orange-500" />
                        <span>{course.students}</span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Gradient Bar */}
                  <div className="h-1 bg-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  
                  {/* Hover Glow Effect */}
                  <div className="absolute -inset-0.5 bg-orange-500 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default CoursesSection;