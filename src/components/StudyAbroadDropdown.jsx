import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { continentStudyData } from '../data/continentStudyData.jsx';

const StudyAbroadDropdown = () => {
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
    
    // Check available space for submenu positioning
    if (continentRefs.current[continentKey]) {
      const rect = continentRefs.current[continentKey].getBoundingClientRect();
      const windowWidth = window.innerWidth;
      const submenuWidth = 256; // w-64 = 256px
      
      // If there's not enough space on the right, position on the left
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

  return (
    <div className="relative" ref={dropdownRef}>
      <div
        className="flex items-center space-x-1 cursor-pointer text-[#336b87] hover:text-[#336b87]/80"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>Study Abroad</span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      {isOpen && (
        <div className="absolute left-0 mt-2 w-96 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
          <div className="py-1" role="menu" aria-orientation="vertical">
            {/* Quick Access Links */}
            <div className="px-4 py-2 border-b border-gray-100">
              <Link
                to="/study-abroad"
                className="flex items-center text-sm text-[#336b87] hover:text-[#336b87]/80 font-medium"
                onClick={() => setIsOpen(false)}
              >
                <span className="mr-2">🌍</span>
                <span>Browse All Destinations</span>
              </Link>
            </div>

            {/* Continents and Countries */}
            {continents.map((continent) => (
              <div
                key={continent.key}
                className="relative"
                ref={(el) => continentRefs.current[continent.key] = el}
                onMouseEnter={() => handleContinentHover(continent.key)}
                onMouseLeave={() => setHoveredContinent(null)}
              >
                <Link
                  to={`/study-abroad?continent=${continent.key}`}
                  className="flex items-center justify-between px-4 py-2 text-sm text-[#336b87] hover:bg-[#336b87]/10 hover:text-[#336b87]"
                  role="menuitem"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="flex items-center">
                    <span className="mr-2">{continent.icon}</span>
                    <span>{continent.name}</span>
                  </div>
                  <span className="text-xs text-[#336b87]/70">({continent.countries.length} countries)</span>
                </Link>

                {/* Country Submenu */}
                {hoveredContinent === continent.key && (
                  <div className={`absolute top-0 ${
                    submenuPosition === 'right' 
                      ? 'left-full ml-1' 
                      : 'right-full mr-1'
                  } w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50`}>
                    <div className="py-1">
                      <div className="px-3 py-2 text-xs font-semibold text-[#336b87]/70 uppercase tracking-wide border-b border-gray-100">
                        Countries in {continent.name}
                      </div>
                      {continent.countries.map((country) => (
                        <Link
                          key={country.key}
                          to={`/study-abroad?continent=${continent.key}&country=${country.key}`}
                          className="flex items-center justify-between px-3 py-2 text-sm text-[#336b87] hover:bg-[#336b87]/10 hover:text-[#336b87]"
                          onClick={() => setIsOpen(false)}
                        >
                          <div className="flex items-center">
                            <span className="mr-2">{country.icon}</span>
                            <span>{country.name}</span>
                          </div>
                          <span className="text-xs text-[#336b87]/70">({country.cities.length} cities)</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Popular Destinations */}
            <div className="px-4 py-2 border-t border-gray-100">
              <div className="text-xs font-semibold text-[#336b87]/70 uppercase tracking-wide mb-2">
                Popular Destinations
              </div>
              <div className="grid grid-cols-2 gap-2">
                <Link
                  to="/study-in-usa"
                  className="flex items-center text-xs text-[#336b87] hover:text-[#336b87]/80"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="mr-1">🇺🇸</span>
                  <span>USA</span>
                </Link>
                <Link
                  to="/study-abroad?continent=europe&country=uk"
                  className="flex items-center text-xs text-[#336b87] hover:text-[#336b87]/80"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="mr-1">🇬🇧</span>
                  <span>UK</span>
                </Link>
                <Link
                  to="/study-abroad?continent=northAmerica&country=canada"
                  className="flex items-center text-xs text-[#336b87] hover:text-[#336b87]/80"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="mr-1">🇨🇦</span>
                  <span>Canada</span>
                </Link>
                <Link
                  to="/study-abroad?continent=europe&country=germany"
                  className="flex items-center text-xs text-[#336b87] hover:text-[#336b87]/80"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="mr-1">🇩🇪</span>
                  <span>Germany</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudyAbroadDropdown; 