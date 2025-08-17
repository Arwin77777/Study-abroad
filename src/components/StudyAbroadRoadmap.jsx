import React from 'react';
import { motion } from 'framer-motion';
import { 
  School, 
  Search, 
  Description, 
  FlightTakeoff, 
  CheckCircle,
  Timeline,
  Assignment
} from '@mui/icons-material';

const roadmapSteps = [
  {
    id: 1,
    title: "Initial Consultation",
    description: "Free counseling session to understand your goals and preferences.",
    icon: <Search fontSize="large" />,
    details: [
      "Career assessment",
      "Country & course selection",
      "Budget planning",
      "Timeline discussion"
    ]
  },
  {
    id: 2,
    title: "University Selection",
    description: "Research and shortlist universities based on your profile.",
    icon: <School fontSize="large" />,
    details: [
      "University research",
      "Program comparison",
      "Entry requirements",
      "Application deadlines"
    ]
  },
  {
    id: 3,
    title: "Application Process",
    description: "Complete applications with our expert guidance.",
    icon: <Description fontSize="large" />,
    details: [
      "Document preparation",
      "SOP & LOR writing",
      "Application submission",
      "Follow-up support"
    ]
  },
  {
    id: 4,
    title: "Visa Application",
    description: "Navigate the visa process with professional assistance.",
    icon: <Assignment fontSize="large" />,
    details: [
      "Visa documentation",
      "Interview preparation",
      "Application submission",
      "Status tracking"
    ]
  },
  {
    id: 5,
    title: "Pre-Departure",
    description: "Prepare for your journey with comprehensive support.",
    icon: <FlightTakeoff fontSize="large" />,
    details: [
      "Travel arrangements",
      "Accommodation booking",
      "Insurance & health",
      "Orientation session"
    ]
  },
  {
    id: 6,
    title: "Academic Success",
    description: "Ongoing support throughout your academic journey.",
    icon: <Timeline fontSize="large" />,
    details: [
      "Course registration",
      "Academic guidance",
      "Cultural adaptation",
      "Career preparation"
    ]
  }
];

const bubbleData = [
  // Left to Right
  { size: 55, top: '20%', duration: 45, delay: 0, from: 'left' },
  { size: 40, top: '40%', duration: 60, deuselay: 1, from: 'left' },
  { size: 65, top: '60%', duration: 50, delay: 3, from: 'left' },
  { size: 30, top: '70%', duration: 70, delay: 5, from: 'left' },
  { size: 50, top: '30%', duration: 40, delay: 3, from: 'left' },
  
  // Right to Left
  { size: 60, top: '25%', duration: 55, delay: 2, from: 'right' },
  { size: 35, top: '45%', duration: 45, delay: 4, from: 'right' },
  { size: 70, top: '65%', duration: 65, delay: 2, from: 'right' },
  { size: 45, top: '50%', duration: 35, delay: 4, from: 'right' },
  { size: 50, top: '35%', duration: 50, delay: 2, from: 'right' },
];

const StudyAbroadRoadmap = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = (isLeft) => ({
    hidden: { opacity: 0, x: isLeft ? -100 : 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  });

  return (
    <div className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Horizontal Bubble Background */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
        {bubbleData.map((bubble, i) => {
          const isFromLeft = bubble.from === 'left';
          return (
            <motion.div
              key={i}
              className="absolute bg-orange-500/20 rounded-full"
              style={{
                width: bubble.size,
                height: bubble.size,
                top: bubble.top,
                left: isFromLeft ? 0 : 'auto',
                right: !isFromLeft ? 0 : 'auto',
              }}
              initial={{ 
                x: isFromLeft ? -bubble.size : bubble.size, 
                opacity: 0 
              }}
              animate={{ 
                x: isFromLeft ? '100vw' : '-100vw',
                opacity: [0, 0.5, 0.5, 0] 
              }}
              transition={{
                duration: bubble.duration,
                delay: bubble.delay,
                ease: 'linear',
                repeat: Infinity,
                times: [0, 0.1, 0.9, 1]
              }}
            />
          );
        })}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4">
            Your Study Abroad Journey
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Our 6-step roadmap ensures a smooth and successful transition from your home country to your dream university.
          </p>
        </motion.div>

        {/* Vertical Roadmap */}
        <div className="relative">
          {/* Central Timeline - hidden on small screens */}
          <div className="absolute left-0 md:left-1/2 top-0 h-full w-1 bg-orange-500/20 transform md:-translate-x-1/2"></div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {roadmapSteps.map((step, index) => {
              const isLeft = index % 2 === 0;
              return (
                <motion.div
                  key={step.id}
                  className="mb-8 flex justify-center items-center w-full"
                  variants={itemVariants(isLeft)}
                >
                  <div className={`flex w-full items-center ${isLeft ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                    {/* Card */}
                    <div className="w-full md:w-5/12">
                      <div className="bg-white/95 backdrop-blur p-6 rounded-xl shadow-xl transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/25">
                        <div className="flex items-center space-x-4 mb-3">
                           <div className="w-10 h-10 bg-orange-500 rounded-lg flex md:hidden items-center justify-center text-white font-bold border-4 border-white shadow-lg shadow-orange-500/25 z-10 mr-4">
                            {step.id}
                          </div>
                          <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center text-orange-500">
                            {step.icon}
                          </div>
                          <h3 className="text-lg font-bold text-gray-800">
                            {step.title}
                          </h3>
                        </div>
                        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                          {step.description}
                        </p>
                        <div className="space-y-2">
                          {step.details.map((detail, idx) => (
                            <div key={idx} className="flex items-center text-sm text-gray-700">
                              <CheckCircle className="w-4 h-4 text-orange-500 mr-2 flex-shrink-0" />
                              <span>{detail}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Timeline Dot and Connector for large screens */}
                    <div className="hidden md:flex items-center justify-center w-2/12">
                      <div className="w-full h-0.5 bg-orange-500/30"></div>
                      <div className="absolute w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold border-4 border-white shadow-lg shadow-orange-500/25 z-10">
                        {step.id}
                      </div>
                    </div>
                    
                    {/* Spacer for large screens */}
                     <div className="hidden md:block w-5/12"></div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default StudyAbroadRoadmap; 