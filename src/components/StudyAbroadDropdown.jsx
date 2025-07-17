import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { continentStudyData } from '../data/continentStudyData.jsx';

const StudyAbroadDropdown = ({ isMobile }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredContinent, setHoveredContinent] = useState(null);
  const [submenuPosition, setSubmenuPosition] = useState('right');
  const dropdownRef = useRef(null);
  const continentRefs = useRef({});

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
        setHoveredContinent(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleContinentHover = (continentKey) => {
    setHoveredContinent(continentKey);
    
    if (continentRefs.current[continentKey]) {
      const rect = continentRefs.current[continentKey].getBoundingClientRect();
      const windowWidth = window.innerWidth;
      const submenuWidth = 280;
      
      if (rect.right + submenuWidth > windowWidth) {
        setSubmenuPosition('left');
      } else {
        setSubmenuPosition('right');
      }
    }
  };

  const continents = Object.entries(continentStudyData).map(([key, data]) => ({
    key,
    name: data.name,
    icon: data.icon,
    countries: Object.entries(data.countries).map(([countryKey, countryData]) => ({
      key: countryKey,
      name: countryData.name,
      icon: countryData.icon,
      cities: Object.keys(countryData.cities)
    }))
  }));

  const dropdownVariants = {
    hidden: { 
      opacity: 0, 
      y: -10, 
      scale: 0.95,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 }
  };

  const submenuVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.95,
      x: submenuPosition === 'right' ? -10 : 10,
      transition: {
        duration: 0.2
      }
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
        staggerChildren: 0.03
      }
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <motion.div
        className={`flex items-center space-x-2 cursor-pointer transition-all duration-300 relative group ${
          isMobile 
            ? 'py-3 px-4 rounded-xl text-gray-700 font-medium hover:text-blue-600 hover:bg-blue-50' 
            : 'py-3 px-4 rounded-xl text-gray-700 font-medium hover:text-blue-600 hover:bg-blue-50'
        }`}
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <span className="text-2xl">🌍</span>
        <span className="font-semibold">Study Abroad</span>
        <motion.svg
          className="w-5 h-5 transition-transform duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </motion.svg>
        
        {/* Hover effect line */}
        {!isMobile && (
          <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300" />
        )}
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className={`absolute ${isMobile ? 'left-0 right-0' : 'left-0'} mt-2 ${
              isMobile ? 'w-full' : 'w-[420px]'
            } rounded-2xl shadow-2xl bg-white/95 backdrop-blur-xl ring-1 ring-black/5 border border-gray-100 z-50 overflow-hidden`}
            variants={dropdownVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <div className="py-2" role="menu" aria-orientation="vertical">
              
              {/* Enhanced Header */}
              <motion.div 
                className="px-6 py-4 bg-gradient-to-r from-blue-50 to-purple-50 border-b border-gray-100"
                variants={itemVariants}
              >
                <Link
                  to="/study-abroad"
                  className="flex items-center text-base font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-200 group"
                  onClick={() => setIsOpen(false)}
                >
                  <motion.span 
                    className="mr-3 text-2xl"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  >
                    🌍
                  </motion.span>
                  <span>Browse All Destinations</span>
                  <motion.span
                    className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </Link>
              </motion.div>

              {/* Continents Grid */}
              <div className="px-4 py-2">
                <motion.div 
                  className="grid grid-cols-1 gap-1"
                  variants={itemVariants}
                >
                  {continents.map((continent) => (
                    <motion.div
                      key={continent.key}
                      className="relative"
                      ref={(el) => continentRefs.current[continent.key] = el}
                      onMouseEnter={() => handleContinentHover(continent.key)}
                      onMouseLeave={() => setHoveredContinent(null)}
                      variants={itemVariants}
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Link
                        to={`/study-abroad?continent=${continent.key}`}
                        className="flex items-center justify-between px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-600 rounded-xl transition-all duration-200 group"
                        role="menuitem"
                        onClick={() => setIsOpen(false)}
                      >
                        <div className="flex items-center space-x-3">
                          <motion.span 
                            className="text-2xl"
                            whileHover={{ scale: 1.2, rotate: 10 }}
                            transition={{ duration: 0.2 }}
                          >
                            {continent.icon}
                          </motion.span>
                          <span className="font-semibold">{continent.name}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                            {continent.countries.length} countries
                          </span>
                          <motion.span
                            className="text-gray-400 group-hover:text-blue-500"
                            animate={{ x: [0, 3, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          >
                            →
                          </motion.span>
                        </div>
                      </Link>

                      {/* Enhanced Country Submenu */}
                      <AnimatePresence>
                        {hoveredContinent === continent.key && !isMobile && (
                          <motion.div 
                            className={`absolute top-0 ${
                              submenuPosition === 'right' 
                                ? 'left-full ml-2' 
                                : 'right-full mr-2'
                            } w-72 rounded-2xl shadow-2xl bg-white/95 backdrop-blur-xl ring-1 ring-black/5 border border-gray-100 z-50 overflow-hidden`}
                            variants={submenuVariants}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                          >
                            <div className="py-2">
                              <div className="px-4 py-3 bg-gradient-to-r from-blue-50 to-purple-50 border-b border-gray-100">
                                <div className="flex items-center space-x-2">
                                  <span className="text-xl">{continent.icon}</span>
                                  <span className="text-sm font-bold text-gray-800">
                                    {continent.name}
                                  </span>
                                </div>
                              </div>
                              
                              <div className="max-h-80 overflow-y-auto">
                                {continent.countries.map((country) => (
                                  <motion.div
                                    key={country.key}
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.2 }}
                                  >
                                    <Link
                                      to={`/study-abroad?continent=${continent.key}&country=${country.key}`}
                                      className="flex items-center justify-between px-4 py-3 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-600 transition-all duration-200 group"
                                      onClick={() => setIsOpen(false)}
                                    >
                                      <div className="flex items-center space-x-3">
                                        <motion.span 
                                          className="text-lg"
                                          whileHover={{ scale: 1.2 }}
                                          transition={{ duration: 0.2 }}
                                        >
                                          {country.icon}
                                        </motion.span>
                                        <span className="font-medium">{country.name}</span>
                                      </div>
                                      <div className="flex items-center space-x-2">
                                        <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                                          {country.cities.length} cities
                                        </span>
                                        <motion.span
                                          className="text-gray-400 group-hover:text-blue-500"
                                          animate={{ x: [0, 3, 0] }}
                                          transition={{ duration: 1.5, repeat: Infinity }}
                                        >
                                          →
                                        </motion.span>
                                      </div>
                                    </Link>
                                  </motion.div>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Enhanced Popular Destinations */}
              <motion.div 
                className="px-6 py-4 bg-gradient-to-r from-gray-50 to-blue-50 border-t border-gray-100"
                variants={itemVariants}
              >
                <div className="text-xs font-bold text-gray-600 uppercase tracking-wider mb-3 flex items-center">
                  <span className="mr-2">⭐</span>
                  Popular Destinations
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { continent: 'northAmerica', country: 'usa', flag: '🇺🇸', name: 'USA' },
                    { continent: 'europe', country: 'uk', flag: '🇬🇧', name: 'UK' },
                    { continent: 'northAmerica', country: 'canada', flag: '🇨🇦', name: 'Canada' },
                    { continent: 'europe', country: 'germany', flag: '🇩🇪', name: 'Germany' }
                  ].map((destination) => (
                    <motion.div
                      key={destination.country}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link
                        to={`/study-abroad?continent=${destination.continent}&country=${destination.country}`}
                        className="flex items-center space-x-2 p-3 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-white/60 rounded-xl transition-all duration-200 group"
                        onClick={() => setIsOpen(false)}
                      >
                        <motion.span 
                          className="text-lg"
                          whileHover={{ scale: 1.2, rotate: 10 }}
                          transition={{ duration: 0.2 }}
                        >
                          {destination.flag}
                        </motion.span>
                        <span>{destination.name}</span>
                        <motion.span
                          className="text-gray-400 group-hover:text-blue-500 ml-auto"
                          animate={{ x: [0, 3, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          →
                        </motion.span>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default StudyAbroadDropdown;