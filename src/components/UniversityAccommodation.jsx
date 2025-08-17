import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import universityAccommodationBanner from '../assets/UniversityAccommodation.png';

const services = [
  'On-campus housing consultation and booking support',
  'Assistance with application forms and housing documents',
  'Guidance on meal plans, roommates, and dorm selection',
  'Support with move-in procedures and university policies',
  'Assistance in resolving accommodation-related concerns',
];

const steps = [
  'Understanding Your University’s Housing Options',
  'Helping You Choose the Right Dorm or Hall',
  'Submitting the Application on Time',
  'Pre-Arrival Guidance & Move-in Checklist',
  'Post-Move Support for Room Transfers or Issues',
];

const UniversityAccommodation = () => {
  const navigate = useNavigate();
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-10 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500 rounded-full mix-blend-overlay filter blur-3xl opacity-70 animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-orange-400 rounded-full mix-blend-overlay filter blur-3xl opacity-70 animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-orange-500 rounded-full mix-blend-overlay filter blur-3xl opacity-70 animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <motion.button
              onClick={() => navigate('/our-services')}
              className="group flex items-center gap-2 mb-8 bg-white/95 backdrop-blur rounded-xl px-5 py-3 text-gray-800 hover:text-orange-500 shadow-xl hover:shadow-2xl hover:shadow-orange-500/25 transition-all duration-300"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
              <span className="font-medium">Back to Services</span>
            </motion.button>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
              University Accommodation
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              We assist students in securing reliable, comfortable, and safe university housing. Whether it&apos;s a single dorm or shared hall, we ensure a smooth process from application to move-in.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={universityAccommodationBanner}
              alt="University Accommodation"
              className="w-full rounded-xl shadow-xl"
            />
          </motion.div>
        </div>

        {/* Services Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-8">
            What We Help With
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((item, idx) => (
              <div 
                key={idx}
                className="bg-white/95 backdrop-blur rounded-xl p-6 shadow-xl hover:shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 flex items-center gap-4"
              >
                <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0" />
                <p className="text-gray-800">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Step-by-Step Process */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-8">
            Our Process
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-white/95 backdrop-blur rounded-xl p-6 shadow-xl hover:shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="w-8 h-8 rounded-lg bg-orange-500 text-white flex items-center justify-center font-bold">
                    {index + 1}
                  </span>
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-orange-500 transition-colors">
                    {step}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-orange-500 rounded-xl p-8 shadow-xl">
          <h2 className="text-3xl font-bold text-white mb-4">
            Why Let Us Handle Your University Stay?
          </h2>
          <p className="text-white/90 text-lg leading-relaxed mb-6">
            We work directly with university housing offices to ensure your room is booked without hassle. Our experience helps avoid delays, mistakes, or missed deadlines — giving you peace of mind and a smooth transition into student life abroad.
          </p>
          <div className="flex items-center text-white">
            <span className="font-medium mr-2">Get Started Today</span>
            <ArrowRight className="w-5 h-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniversityAccommodation;
