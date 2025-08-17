import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

import AdmissionAtTopUniversity from '../assets/AdmissionAtTopUniversity.png';
import Airplane from '../assets/Airplane.png';
import LoanHelp from '../assets/LoanHelp.png';
import HelpForStay from '../assets/HelpForStay.png';
import UniversityAccommodation from '../assets/UniversityAccommodation.png';
import PrivateAccommodation from '../assets/PrivateHostel.png';

const services = [
  {
    title: 'Admissions at Top Universities',
    description: 'Get expert help with university selection, SOPs, and applications.',
    link: '/our-services/admissions',
    image: AdmissionAtTopUniversity,
  },
  {
    title: 'Visa Assistance',
    description: 'Full support with visa application, interview prep, and documentation.',
    link: '/our-services/visa-assistance',
    image: Airplane,
  },
  {
    title: 'Loan Help',
    description: 'Guidance on education loans, documentation, and financial planning.',
    link: '/our-services/loan-help',
    image: LoanHelp,
  },
  {
    title: 'Help for Stay',
    description: 'Support for short-term stay, pickup assistance, and city orientation.',
    link: '/our-services/stay-help',
    image: HelpForStay,
  },
  {
    title: 'University Accommodation',
    description: 'Get help booking secure on-campus university accommodation.',
    link: '/our-services/university-accommodation',
    image: UniversityAccommodation,
  },
  {
    title: 'Private Home or Hostel ',
    description: 'Find private rooms, shared homes, or verified hostels nearby.',
    link: '/our-services/private-accommodation',
    image: PrivateAccommodation,
  },
];

const ServicesSection = () => {
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
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive support for your international education journey
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="group"
            >
              <div 
                onClick={() => navigate(service.link)}
                className="bg-white/95 backdrop-blur rounded-xl shadow-xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/25"
              >
                <div className="relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-orange-500 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <div className="flex items-center text-orange-500 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                    <span className="font-medium mr-2">Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
