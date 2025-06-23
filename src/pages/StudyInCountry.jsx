import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { continentStudyData } from '../data/continentStudyData.jsx';

// University Modal Component
function UniversityModal({ university, onClose }) {
  const navigate = useNavigate();
  
  if (!university) return null;
  
  const handleViewDetails = () => {
    // Close the modal first
    onClose();
    
    // Find the university's location data by searching through all data
    let universityLocation = null;
    
    // Search through all continents, countries, and cities to find this university
    Object.entries(continentStudyData).forEach(([continentKey, continentData]) => {
      Object.entries(continentData.countries || {}).forEach(([countryKey, countryData]) => {
        Object.entries(countryData.cities || {}).forEach(([cityKey, cityData]) => {
          if (cityData.universities) {
            const foundUniversity = cityData.universities.find(uni => uni.name === university.name);
            if (foundUniversity) {
              universityLocation = {
                continent: continentKey,
                country: countryKey,
                city: cityKey,
                continentName: continentData.name,
                countryName: countryData.name,
                cityName: cityData.name
              };
            }
          }
        });
      });
    });
    
    // Navigate to university detail page with location data
    const params = new URLSearchParams();
    if (universityLocation) {
      params.set('continent', universityLocation.continent);
      params.set('country', universityLocation.country);
      params.set('city', universityLocation.city);
    }
    params.set('university', university.name);
    
    navigate(`/university/${encodeURIComponent(university.name)}?${params.toString()}`);
  };
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.8, opacity: 0, y: 50 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="bg-white max-w-lg w-full rounded-3xl shadow-2xl p-8 relative mx-4"
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="absolute top-4 right-4 text-3xl text-[#336b87] hover:text-[#336b87]/80 transition-colors"
          onClick={onClose}
        >
          &times;
        </motion.button>
        <motion.img
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
          src={university.image}
          alt={university.name}
          className="w-full h-48 object-cover rounded-2xl mb-4 shadow-lg"
        />
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-2xl font-bold mb-2 text-[#336b87]"
        >
          {university.name}
        </motion.h2>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-6 text-gray-700"
        >
          {university.details}
        </motion.p>
        
        {/* View Full Details Button */}
        <motion.button
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          whileHover={{ 
            scale: 1.05, 
            boxShadow: "0 20px 40px -12px rgba(51, 107, 135, 0.3)"
          }}
          onClick={handleViewDetails}
          className="w-full bg-gradient-to-r from-[#336b87] to-[#336b87]/80 text-white font-semibold py-4 px-6 rounded-2xl hover:from-[#336b87]/90 hover:to-[#336b87]/70 transition-all duration-300 flex items-center justify-center space-x-2"
        >
          <span className="text-xl">📋</span>
          <span>View Full Details</span>
          <span className="text-lg">→</span>
        </motion.button>
      </motion.div>
    </motion.div>
  );
}

// CustomSelect Component for enhanced UI
function CustomSelect({ options, value, onChange, placeholder, icon, disabled }) {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef(null);

  const selectedOption = options.find(o => o.value === value);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative"
      ref={selectRef}
    >
      <motion.label
        whileHover={{ scale: 1.02 }}
        className="flex items-center text-sm font-medium text-[#336b87] mb-2"
      >
        <span className="text-xl mr-2">{icon}</span> {placeholder.replace('Select a ', '')}
      </motion.label>
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        type="button"
        onClick={() => !disabled && setIsOpen(!isOpen)}
        disabled={disabled}
        className="w-full px-4 py-3 text-left bg-gradient-to-r from-white to-[#336b87]/5 border-2 border-[#336b87]/20 rounded-2xl flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-[#336b87] focus:border-[#336b87] disabled:bg-gray-100 disabled:cursor-not-allowed transition-all duration-300 hover:border-[#336b87]/40 hover:shadow-lg"
      >
        <span className={selectedOption ? 'text-[#336b87] font-medium' : 'text-gray-500'}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <motion.svg
          animate={{ rotate: isOpen ? 180 : 0 }}
          className="w-5 h-5 text-[#336b87]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </motion.svg>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute z-10 w-full mt-2 bg-white border-2 border-[#336b87]/20 rounded-2xl shadow-xl max-h-60 overflow-y-auto"
          >
            <ul>
              {options.map((option, index) => (
                <motion.li
                  key={option.value}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => {
                    onChange(option.value);
                    setIsOpen(false);
                  }}
                  className="px-4 py-3 flex items-center hover:bg-gradient-to-r hover:from-[#336b87]/10 hover:to-[#336b87]/5 cursor-pointer transition-all duration-200 hover:scale-[1.02]"
                >
                  <span className="text-xl mr-3">{option.icon}</span>
                  <span className="font-medium text-[#336b87]">{option.label}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// Filter Component
function FilterSection({ onFilterChange, selectedFilters }) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleFilterChange = (level, key) => {
    const newFilters = { ...selectedFilters };

    if (level === 'continent') {
      newFilters.continent = key;
      newFilters.country = null;
      newFilters.city = null;
    } else if (level === 'country') {
      newFilters.country = key;
      newFilters.city = null;
    } else if (level === 'city') {
      newFilters.city = key;
    }

    // Update URL
    const params = new URLSearchParams();
    if (newFilters.continent) params.set('continent', newFilters.continent);
    if (newFilters.country) params.set('country', newFilters.country);
    if (newFilters.city) params.set('city', newFilters.city);

    navigate(`${location.pathname}?${params.toString()}`);
    onFilterChange(newFilters);
  };

  const continents = Object.entries(continentStudyData).map(([key, data]) => ({ value: key, label: data.name, icon: data.icon }));

  const countries = selectedFilters.continent
    ? Object.entries(continentStudyData[selectedFilters.continent].countries).map(([key, data]) => ({ value: key, label: data.name, icon: data.icon }))
    : [];

  const cities = (selectedFilters.continent && selectedFilters.country)
    ? Object.entries(continentStudyData[selectedFilters.continent].countries[selectedFilters.country].cities).map(([key, data]) => ({ value: key, label: data.name, icon: data.icon }))
    : [];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full mb-8 bg-gradient-to-br from-[#336b87]/10 via-white to-[#336b87]/5 backdrop-blur-sm rounded-3xl p-8 border-2 border-[#336b87]/20 shadow-2xl"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end"
      >
        {/* Continent Selector */}
        <CustomSelect
          options={continents}
          value={selectedFilters.continent}
          onChange={(value) => handleFilterChange('continent', value)}
          placeholder="Select a Continent"
          icon="🌍"
        />

        {/* Country Selector */}
        <CustomSelect
          options={countries}
          value={selectedFilters.country}
          onChange={(value) => handleFilterChange('country', value)}
          placeholder="Select a Country"
          icon="🏳️"
          disabled={!selectedFilters.continent}
        />

        {/* City Selector */}
        <CustomSelect
          options={cities}
          value={selectedFilters.city}
          onChange={(value) => handleFilterChange('city', value)}
          placeholder="Select a City"
          icon="🏙️"
          disabled={!selectedFilters.country}
        />
      </motion.div>
    </motion.div>
  );
}

const StudyInCountry = () => {
  const location = useLocation();
  const [selectedUniversity, setSelectedUniversity] = useState(null);
  const [selectedFilters, setSelectedFilters] = useState({
    continent: null,
    country: null,
    city: null
  });
  const [currentData, setCurrentData] = useState(null);
  const [currentLevel, setCurrentLevel] = useState('continent');
  const [searchQuery, setSearchQuery] = useState('');

  // Parse URL parameters on component mount and URL changes
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const continent = params.get('continent');
    const country = params.get('country');
    const city = params.get('city');

    const newFilters = {
      continent: continent || null,
      country: country || null,
      city: city || null
    };

    setSelectedFilters(newFilters);
    setSearchQuery(''); // Reset search on URL change

    // Determine current level and data
    if (city && country && continent) {
      setCurrentLevel('city');
      setCurrentData(continentStudyData[continent]?.countries[country]?.cities[city]);
    } else if (country && continent) {
      setCurrentLevel('country');
      setCurrentData(continentStudyData[continent]?.countries[country]);
    } else if (continent) {
      setCurrentLevel('continent');
      setCurrentData(continentStudyData[continent]);
    } else {
      setCurrentLevel('continent');
      setCurrentData(null);
    }
  }, [location.search]);

  const handleFilterChange = (newFilters) => {
    setSelectedFilters(newFilters);
  };

  // Card sections for the current level
  const getCardSections = () => {
    if (!currentData) return [];

    const quickFactsData = [
      { icon: '🗺️', title: 'Type', value: currentLevel.charAt(0).toUpperCase() + currentLevel.slice(1) },
      { icon: '🌟', title: 'Education Quality', value: 'World-class' },
      { icon: '👋', title: 'International Students', value: 'Welcome' },
      { icon: '🗣️', title: 'Language', value: 'Multiple options' },
      { icon: '💰', title: 'Cost of Living', value: 'Varies by location' },
      { icon: '🛡️', title: 'Safety', value: 'High standards' },
      { icon: '🚆', title: 'Transportation', value: 'Excellent' },
      { icon: '🎭', title: 'Culture', value: 'Rich and diverse' },
    ];

    const baseSections = [
      {
        key: 'quick-facts',
        icon: '🔎',
        title: 'Quick Facts',
        content: (
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl font-bold mb-6 text-[#336b87]"
            >
              About {currentData.name}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-8 text-gray-700 leading-relaxed text-lg"
            >
              {currentData.name} offers excellent educational opportunities for international students.
              With world-class institutions, diverse cultures, and modern facilities, {currentData.name} provides
              an ideal environment for academic and personal growth.
            </motion.p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {quickFactsData.map((fact, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-gradient-to-br from-[#336b87]/10 to-[#336b87]/20 p-6 rounded-2xl shadow-lg text-center flex flex-col justify-center items-center h-full border-2 border-[#336b87]/30 hover:shadow-xl transition-all duration-300"
                >
                  <div className="text-4xl mb-3">{fact.icon}</div>
                  <h3 className="text-sm font-semibold text-[#336b87] mb-2">{fact.title}</h3>
                  <p className="text-lg font-bold text-[#336b87]">{fact.value}</p>
                </motion.div>
              ))}
            </div>
          </div>
        ),
      },
      {
        key: 'why-study',
        icon: '🎓',
        title: `Why Study in ${currentData.name}?`,
        content: (
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-2xl font-bold mb-6 text-[#336b87]"
            >
              Why Study in {currentData.name}?
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'World-class universities and colleges with diverse program offerings.',
                'Advanced research facilities and innovation opportunities.',
                'Multicultural environment fostering global perspectives.',
                'Flexible education system with modern teaching methods.',
                'Excellent career prospects and industry connections.',
                'High quality of life and student support services.',
                'Opportunities for personal and professional development.',
                'Rich cultural heritage and diverse communities.'
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start space-x-3 p-4 bg-gradient-to-r from-[#336b87]/5 to-[#336b87]/10 rounded-xl border-l-4 border-[#336b87]"
                >
                  <span className="text-[#336b87] text-xl">✓</span>
                  <span className="text-gray-700">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        ),
      },
      {
        key: 'living',
        icon: '🏠',
        title: `Living in ${currentData.name}`,
        content: (
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-2xl font-bold mb-6 text-[#336b87]"
            >
              Living in {currentData.name}
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Rich cultural heritage and diverse communities.',
                'Vibrant student life with numerous extracurricular activities.',
                'Wide range of accommodation options for students.',
                'Access to modern facilities and amenities.',
                'Excellent public transportation systems.',
                'Safe and welcoming environment for international students.',
                'Opportunities for travel and cultural exploration.',
                'Supportive international student communities.'
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start space-x-3 p-4 bg-gradient-to-r from-[#336b87]/5 to-[#336b87]/10 rounded-xl border-l-4 border-[#336b87]"
                >
                  <span className="text-[#336b87] text-xl">🏠</span>
                  <span className="text-gray-700">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        ),
      },
      {
        key: 'money-matters',
        icon: '💵',
        title: 'Money Matters',
        content: (
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-2xl font-bold mb-6 text-[#336b87]"
            >
              Money Matters
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Competitive tuition fees compared to global standards.',
                'Various scholarship opportunities for international students.',
                'Reasonable cost of living in most areas.',
                'Part-time work opportunities for students.',
                'Financial planning and budgeting support services.',
                'Student discounts on transportation and entertainment.',
                'Banking services tailored for international students.',
                'Flexible payment options and installment plans.'
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start space-x-3 p-4 bg-gradient-to-r from-[#336b87]/5 to-[#336b87]/10 rounded-xl border-l-4 border-[#336b87]"
                >
                  <span className="text-[#336b87] text-xl">💰</span>
                  <span className="text-gray-700">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        ),
      },
      {
        key: 'visa-process',
        icon: '🛂',
        title: 'Visa Process',
        content: (
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-2xl font-bold mb-6 text-[#336b87]"
            >
              Visa Process
            </motion.h2>
            <div className="space-y-4">
              {[
                'Apply and receive acceptance from a recognized institution.',
                'Complete visa application forms and gather required documents.',
                'Schedule and attend visa interview at embassy/consulate.',
                'Provide proof of financial resources and accommodation.',
                'Submit health and character certificates if required.',
                'Pay applicable visa fees and processing charges.',
                'Follow up on application status and prepare for arrival.'
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center space-x-4 p-4 bg-gradient-to-r from-[#336b87]/5 to-[#336b87]/10 rounded-xl"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-[#336b87] text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {idx + 1}
                  </div>
                  <span className="text-gray-700">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        ),
      },
      {
        key: 'arrival',
        icon: '🏨',
        title: 'Arrival & Accommodation',
        content: (
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-2xl font-bold mb-6 text-[#336b87]"
            >
              Arrival & Accommodation
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Plan your travel and arrival logistics in advance.',
                'Arrange temporary or permanent accommodation before arrival.',
                'Explore university housing options and private rentals.',
                'Attend orientation programs for international students.',
                'Familiarize yourself with local transportation systems.',
                'Set up essential services like banking and mobile phone.',
                'Connect with student communities and support networks.',
                'Explore local amenities and cultural attractions.'
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start space-x-3 p-4 bg-gradient-to-r from-[#336b87]/5 to-[#336b87]/10 rounded-xl border-l-4 border-[#336b87]"
                >
                  <span className="text-[#336b87] text-xl">🏨</span>
                  <span className="text-gray-700">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        ),
      },
      {
        key: 'employment',
        icon: '🤝',
        title: 'Employment Prospects',
        content: (
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-2xl font-bold mb-6 text-[#336b87]"
            >
              Employment Prospects
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'On-campus and off-campus work opportunities for students.',
                'Internship and co-op programs with leading companies.',
                'Career development services and job placement support.',
                'Networking events and industry connections.',
                'Post-study work opportunities for graduates.',
                'Strong job market in various sectors and industries.',
                'Professional development and skill-building programs.',
                'International career opportunities and global networks.'
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start space-x-3 p-4 bg-gradient-to-r from-[#336b87]/5 to-[#336b87]/10 rounded-xl border-l-4 border-[#336b87]"
                >
                  <span className="text-[#336b87] text-xl">💼</span>
                  <span className="text-gray-700">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        ),
      },
      {
        key: 'list',
        icon: '📋',
        title: 'Resources & Information',
        content: (
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-2xl font-bold mb-6 text-[#336b87]"
            >
              Resources & Information
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Top universities and colleges in ' + currentData.name,
                'Popular courses and programs for international students',
                'Scholarship and financial aid opportunities',
                'Student support services and resources',
                'Cultural adaptation and language support',
                'Health and safety information',
                'Useful links and contact information',
                'Student testimonials and success stories'
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start space-x-3 p-4 bg-gradient-to-r from-[#336b87]/5 to-[#336b87]/10 rounded-xl border-l-4 border-[#336b87]"
                >
                  <span className="text-[#336b87] text-xl">📚</span>
                  <span className="text-gray-700">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        ),
      },
    ];

    return baseSections;
  };

  const [activeSection, setActiveSection] = useState('quick-facts');
  const cardSections = getCardSections();

  // Get universities based on current level
  const getBaseUniversities = () => {
    if (!currentData) return [];

    let universities = [];

    if (currentLevel === 'city') {
      universities = currentData.universities || [];
    } else if (currentLevel === 'country') {
      // Aggregate universities from all cities in the country
      Object.values(currentData.cities || {}).forEach(city => {
        universities.push(...(city.universities || []));
      });
    } else if (currentLevel === 'continent') {
      // Aggregate universities from all countries in the continent
      Object.values(currentData.countries || {}).forEach(country => {
        Object.values(country.cities || {}).forEach(city => {
          universities.push(...(city.universities || []));
        });
      });
    }
    return universities;
  };

  const baseUniversities = getBaseUniversities();
  const facts = currentData?.facts || [];

  const filteredUniversities = baseUniversities.filter(uni => {
    if (!searchQuery) return true;
    const searchTerm = searchQuery.toLowerCase();
    return (
      uni.name.toLowerCase().includes(searchTerm) ||
      uni.short.toLowerCase().includes(searchTerm) ||
      (uni.details && uni.details.toLowerCase().includes(searchTerm))
    );
  });

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#336b87]/5 via-white to-[#336b87]/10 overflow-hidden">
      {/* Bubble Animation Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-50">
        {/* Large floating bubbles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`bubble-${i}`}
            className="absolute bg-[#336b87]/8 rounded-full"
            style={{
              width: Math.random() * 60 + 40,
              height: Math.random() * 60 + 40,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, -200, -300],
              x: [0, Math.random() * 50 - 25],
              opacity: [0, 0.6, 0.6, 0],
              scale: [0.8, 1, 1.2, 0.8],
            }}
            transition={{
              duration: Math.random() * 20 + 15,
              delay: Math.random() * 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
        
        {/* Medium bubbles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`medium-bubble-${i}`}
            className="absolute bg-[#336b87]/6 rounded-full"
            style={{
              width: Math.random() * 30 + 20,
              height: Math.random() * 30 + 20,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -80, -160, -240],
              x: [0, Math.random() * 30 - 15],
              opacity: [0, 0.4, 0.4, 0],
              scale: [0.6, 1, 0.8, 0.6],
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              delay: Math.random() * 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
        
        {/* Small bubbles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`small-bubble-${i}`}
            className="absolute bg-[#336b87]/4 rounded-full"
            style={{
              width: Math.random() * 15 + 8,
              height: Math.random() * 15 + 8,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -60, -120, -180],
              x: [0, Math.random() * 20 - 10],
              opacity: [0, 0.3, 0.3, 0],
              scale: [0.5, 1, 0.7, 0.5],
            }}
            transition={{
              duration: Math.random() * 12 + 8,
              delay: Math.random() * 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Existing animated background elements */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 left-20 w-32 h-32 bg-[#336b87]/10 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 100, 0],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-40 right-20 w-24 h-24 bg-[#336b87]/15 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            x: [0, 60, 0],
            y: [0, -80, 0],
            rotate: [0, 360, 720],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 left-1/3 w-20 h-20 bg-[#336b87]/10 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            y: [0, -70, 0],
            rotate: [180, 0, -180],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/2 right-1/4 w-28 h-28 bg-[#336b87]/10 rounded-full blur-2xl"
        />
        <motion.div
          animate={{
            x: [0, 120, 0],
            rotate: [0, -180, 0],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/3 left-1/4 w-16 h-16 bg-[#336b87]/5 rounded-full blur-lg"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 flex flex-col items-center gap-12 relative z-10">
        {/* Right content */}
        <div className="flex-1 flex flex-col items-center md:items-start w-full">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full text-center"
          >
            <motion.h2
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-3xl md:text-5xl mt-5 mb-5 font-extrabold text-[#336b87] drop-shadow-lg mb-4"
            >
              {currentData ? `Study in ${currentData.name}` : 'Study Abroad'}
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="w-24 h-1 bg-gradient-to-r from-[#336b87] to-[#336b87]/50 mx-auto rounded-full"
            />
          </motion.div>

          {/* Filter Section */}
          <FilterSection
            onFilterChange={handleFilterChange}
            selectedFilters={selectedFilters}
          />

          {/* Universities Section */}
          {baseUniversities.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="w-full max-w-7xl mx-auto mt-8 mb-16"
            >
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="text-4xl font-bold text-center mb-8 text-[#336b87]"
              >
                Top Universities in {currentData?.name}
              </motion.h2>

              {/* Search Bar */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="mb-8 px-2 md:px-8"
              >
                <div className="relative max-w-lg mx-auto">
                  <input
                    type="text"
                    placeholder={`Search from ${baseUniversities.length} universities...`}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-6 py-4 border-2 border-[#336b87]/20 rounded-full shadow-lg focus:ring-2 focus:ring-[#336b87] focus:border-[#336b87] bg-white/80 backdrop-blur-sm transition-all duration-300 hover:border-[#336b87]/40"
                  />
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#336b87]">
                    🔍
                  </div>
                </div>
              </motion.div>

              {filteredUniversities.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-2 md:px-8">
                  {filteredUniversities.map((uni, idx) => (
                    <motion.div
                      key={uni.name}
                      initial={{ opacity: 0, y: 50, scale: 0.8 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ delay: idx * 0.1, duration: 0.5 }}
                      whileHover={{
                        scale: 1.05,
                        y: -10,
                        boxShadow: "0 25px 50px -12px rgba(51, 107, 135, 0.25)"
                      }}
                      className="bg-gradient-to-br from-white to-[#336b87]/5 rounded-3xl shadow-xl p-6 flex flex-col items-center text-center cursor-pointer border-2 border-[#336b87]/20 hover:border-[#336b87]/40 transition-all duration-300"
                      onClick={() => setSelectedUniversity(uni)}
                    >
                      <motion.img
                        whileHover={{ scale: 1.1 }}
                        src={uni.image}
                        alt={uni.name}
                        className="w-full h-32 object-cover rounded-2xl mb-4 shadow-lg"
                      />
                      <div className="text-xl font-bold text-[#336b87] mb-2">{uni.name}</div>
                      <div className="text-gray-700 text-sm">{uni.short}</div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-12"
                >
                  <p className="text-lg text-gray-600">Nothing matches the search.</p>
                </motion.div>
              )}
            </motion.div>
          )}

          <AnimatePresence>
            {selectedUniversity && (
              <UniversityModal
                university={selectedUniversity}
                onClose={() => setSelectedUniversity(null)}
              />
            )}
          </AnimatePresence>

          {/* Enhanced Facts Grid */}
          {facts.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="w-full"
            >
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="text-4xl font-bold text-center text-[#336b87]"
              >
                Why {currentData?.name}?
              </motion.h2>
            </motion.div>
          )}
        </div>
      </div>

      {/* Card Navigation Section with background */}
      {currentData && cardSections.length > 0 && (
        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="w-full flex justify-center px-2 py-5 relative z-10"
        >
          <div className="w-full max-w-7xl bg-gradient-to-br from-white to-[#336b87]/5 rounded-3xl shadow-2xl px-4 py-12 flex flex-col items-center border-2 border-[#336b87]/20">
            {/* Card Navigation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="w-full flex flex-wrap justify-center gap-6 mb-10"
            >
              {cardSections.map((section, idx) => (
                <motion.button
                  key={section.key}
                  initial={{ opacity: 0, y: 30, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  onClick={() => setActiveSection(section.key)}
                  transition={{ delay: idx * 0.1 + 1, duration: 0.5 }}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -5,
                    boxShadow: "0 20px 40px -12px rgba(51, 107, 135, 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex flex-col items-center justify-center w-56 h-40 rounded-2xl shadow-lg transition-all duration-300 p-6 min-w-[180px] min-h-[120px] cursor-pointer border-2 ${
                    activeSection === section.key 
                      ? 'bg-gradient-to-br from-[#336b87] to-[#336b87]/80 text-white border-[#336b87] shadow-2xl' 
                      : 'bg-gradient-to-br from-white to-[#336b87]/10 text-[#336b87] border-[#336b87]/30 hover:border-[#336b87] hover:shadow-xl'
                  }`}
                  tabIndex={0}
                >
                  <motion.div 
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="text-5xl mb-3"
                  >
                    {section.icon}
                  </motion.div>
                  <div className="text-lg font-semibold text-center">{section.title}</div>
                </motion.button>
              ))}
            </motion.div>

            {/* Card Content */}
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-4xl bg-gradient-to-br from-white to-[#336b87]/5 rounded-2xl shadow-lg p-8 mt-2 mb-8 min-h-[400px] border-2 border-[#336b87]/20 text-gray-900"
            >
              {cardSections.find(s => s.key === activeSection)?.content}
            </motion.div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default StudyInCountry; 