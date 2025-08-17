import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { continentStudyData } from '../data/continentStudyData.jsx';

const UniversityDetail = () => {
  const { universityId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [university, setUniversity] = useState(null);
  const [activeSection, setActiveSection] = useState('overview');

  // Find university data from URL parameters or search through all data
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const continent = params.get('continent');
    const country = params.get('country');
    const city = params.get('city');
    const uniName = params.get('university');

    if (continent && country && city && uniName) {
      const cityData = continentStudyData[continent]?.countries[country]?.cities[city];
      if (cityData?.universities) {
        const foundUniversity = cityData.universities.find(uni => 
          uni.name === uniName || uni.short === uniName
        );
        if (foundUniversity) {
          setUniversity({
            ...foundUniversity,
            location: {
              continent,
              country,
              city,
              continentName: continentStudyData[continent]?.name,
              countryName: continentStudyData[continent]?.countries[country]?.name,
              cityName: cityData.name
            }
          });
        }
      }
    }
  }, [location.search, universityId]);

  // Mock detailed university data (in a real app, this would come from an API)
  const getUniversityDetails = () => {
    if (!university) return {};

    return {
      overview: {
        description: `${university.name} is a prestigious institution known for its academic excellence, innovative research, and commitment to student success. Located in a vibrant academic environment, the university offers world-class education across various disciplines.`,
        founded: '1890',
        type: 'Public Research University',
        ranking: 'Top 100 globally',
        students: '45,000+',
        internationalStudents: '8,000+',
        faculty: '2,500+',
        campusSize: '1,200 acres'
      },
      programs: [
        { name: 'Computer Science', level: 'Bachelor/Master/PhD', duration: '4/2/5 years', ranking: 'Top 20' },
        { name: 'Business Administration', level: 'Bachelor/MBA', duration: '4/2 years', ranking: 'Top 25' },
        { name: 'Engineering', level: 'Bachelor/Master/PhD', duration: '4/2/5 years', ranking: 'Top 30' },
        { name: 'Medicine', level: 'MD/PhD', duration: '4/6 years', ranking: 'Top 15' },
        { name: 'Arts & Humanities', level: 'Bachelor/Master/PhD', duration: '4/2/5 years', ranking: 'Top 40' },
        { name: 'Natural Sciences', level: 'Bachelor/Master/PhD', duration: '4/2/5 years', ranking: 'Top 35' }
      ],
      admission: {
        acceptanceRate: '15%',
        applicationDeadline: 'January 15th',
        requirements: [
          'High school diploma or equivalent',
          'Standardized test scores (SAT/ACT)',
          'English proficiency (TOEFL/IELTS)',
          'Letters of recommendation',
          'Personal statement/essay',
          'Academic transcripts',
          'Portfolio (for arts programs)',
          'Interview (for some programs)'
        ],
        documents: [
          'Completed application form',
          'Application fee payment',
          'Official transcripts',
          'Test score reports',
          'Financial documentation',
          'Passport copy',
          'Visa requirements',
          'Health insurance proof'
        ]
      },
      costs: {
        tuition: {
          undergraduate: '$45,000/year',
          graduate: '$50,000/year',
          international: '$55,000/year'
        },
        living: {
          accommodation: '$12,000/year',
          food: '$6,000/year',
          transportation: '$2,000/year',
          books: '$1,500/year',
          personal: '$3,000/year'
        },
        total: '$80,000/year (estimated)'
      },
      scholarships: [
        { name: 'Merit Scholarship', amount: 'Up to $20,000/year', eligibility: 'High academic achievement' },
        { name: 'International Student Grant', amount: 'Up to $15,000/year', eligibility: 'International students with financial need' },
        { name: 'Research Fellowship', amount: 'Full tuition + stipend', eligibility: 'Graduate students in research programs' },
        { name: 'Athletic Scholarship', amount: 'Varies', eligibility: 'Outstanding athletes' },
        { name: 'Departmental Award', amount: 'Up to $10,000/year', eligibility: 'Students in specific departments' }
      ],
      campus: {
        facilities: [
          'Modern library with 2 million+ volumes',
          'State-of-the-art research laboratories',
          'Sports complex and fitness centers',
          'Student union and dining facilities',
          'Technology centers and computer labs',
          'Art galleries and performance spaces',
          'Health center and counseling services',
          'Career development center'
        ],
        housing: [
          'On-campus dormitories',
          'Apartment-style housing',
          'Graduate student housing',
          'Family housing options',
          'Off-campus housing assistance'
        ],
        transportation: [
          'Free campus shuttle service',
          'Public transportation access',
          'Bike-sharing program',
          'Car parking facilities',
          'Airport shuttle service'
        ]
      },
      studentLife: {
        clubs: [
          'Academic and professional organizations',
          'Cultural and international clubs',
          'Sports and recreation groups',
          'Arts and music ensembles',
          'Volunteer and service organizations',
          'Political and advocacy groups'
        ],
        events: [
          'International student orientation',
          'Cultural festivals and celebrations',
          'Academic conferences and seminars',
          'Sports competitions and tournaments',
          'Career fairs and networking events',
          'Social mixers and parties'
        ],
        support: [
          'International student office',
          'Academic advising services',
          'Mental health counseling',
          'Career development support',
          'Language learning resources',
          'Cultural adaptation programs'
        ]
      },
      accommodation: {
        options: [
          'Single rooms with shared facilities',
          'En-suite rooms',
          'Studio apartments',
          'Shared apartments',
          'Family housing units'
        ],
        amenities: [
          'Wi-Fi and utilities included',
          '24/7 security and maintenance',
          'Common areas and study rooms',
          'Laundry facilities',
          'Cafeteria and dining options'
        ],
        policies: [
          'No smoking policy',
          'Quiet hours enforcement',
          'Guest policy',
          'Pet policy',
          'Move-in and move-out procedures'
        ]
      }
    };
  };

  const details = getUniversityDetails();

  const sections = [
    { key: 'overview', icon: '🏛️', title: 'University Overview' },
    { key: 'programs', icon: '📚', title: 'Academic Programs' },
    { key: 'admission', icon: '📝', title: 'Admission Requirements' },
    { key: 'costs', icon: '💰', title: 'Costs & Financial Aid' },
    { key: 'scholarships', icon: '🏆', title: 'Scholarships' },
    { key: 'campus', icon: '🏫', title: 'Campus Life' },
    { key: 'studentLife', icon: '🎓', title: 'Student Life' },
    { key: 'accommodation', icon: '🏠', title: 'University Accommodation' }
  ];

  if (!university) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <div className="text-6xl mb-4">🔍</div>
          <h2 className="text-2xl font-bold text-white mb-2">University Not Found</h2>
          <p className="text-gray-300 mb-4">The university you&apos;re looking for doesn&apos;t exist.</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate(-1)}
            className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-lg shadow-lg transition-all duration-300 font-semibold text-lg"
          >
            Go Back
          </motion.button>
        </motion.div>
      </div>
    );
  }

  const renderSectionContent = () => {
    const sectionData = details[activeSection];
    if (!sectionData) return null;

    switch (activeSection) {
      case 'overview':
        return (
          <div className="space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-lg text-gray-700 leading-relaxed"
            >
              {sectionData.description}
            </motion.p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {Object.entries(sectionData).filter(([key]) => key !== 'description').map(([key, value], idx) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-orange-500/10 p-4 rounded-xl text-center border border-orange-500/30"
                >
                  <div className="text-sm font-semibold text-gray-700 mb-1">
                    {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                  </div>
                  <div className="text-lg font-bold text-orange-500">{value}</div>
                </motion.div>
              ))}
            </div>
          </div>
        );

      case 'programs':
        return (
          <div className="space-y-4">
            {sectionData.map((program, idx) => (
              <motion.div
                key={program.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.02, x: 10 }}
                className="bg-orange-500/5 p-6 rounded-xl border-l-4 border-orange-500"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{program.name}</h3>
                    <p className="text-gray-600 mb-1"><strong>Level:</strong> {program.level}</p>
                    <p className="text-gray-600 mb-1"><strong>Duration:</strong> {program.duration}</p>
                  </div>
                  <div className="text-right">
                    <div className="bg-orange-500 text-white px-3 py-1 rounded-lg text-sm font-semibold">
                      {program.ranking}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        );

      case 'admission':
        return (
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6"
            >
              <div className="bg-orange-500/10 p-4 rounded-xl text-center border border-orange-500/30">
                <div className="text-sm font-semibold text-gray-700 mb-1">Acceptance Rate</div>
                <div className="text-2xl font-bold text-orange-500">{sectionData.acceptanceRate}</div>
              </div>
              <div className="bg-orange-500/10 p-4 rounded-xl text-center border border-orange-500/30">
                <div className="text-sm font-semibold text-gray-700 mb-1">Application Deadline</div>
                <div className="text-lg font-bold text-orange-500">{sectionData.applicationDeadline}</div>
              </div>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-xl font-bold text-gray-800 mb-4">Requirements</h3>
                <div className="space-y-2">
                  {sectionData.requirements.map((req, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + idx * 0.05 }}
                      className="flex items-center gap-3 p-3 bg-orange-500/5 rounded-lg"
                    >
                      <span className="text-orange-500 text-xl">✓</span>
                      <span className="text-gray-700">{req}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <h3 className="text-xl font-bold text-gray-800 mb-4">Required Documents</h3>
                <div className="space-y-2">
                  {sectionData.documents.map((doc, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + idx * 0.05 }}
                      className="flex items-center gap-3 p-3 bg-orange-500/5 rounded-lg"
                    >
                      <span className="text-orange-500 text-xl">📄</span>
                      <span className="text-gray-700">{doc}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        );

      case 'costs':
        return (
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-orange-500/10 p-6 rounded-xl border border-orange-500/30"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Total Estimated Cost</h3>
              <div className="text-3xl font-bold text-orange-500">{sectionData.total}</div>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-xl font-bold text-gray-800 mb-4">Tuition Fees</h3>
                <div className="space-y-3">
                  {Object.entries(sectionData.tuition).map(([key, value], idx) => (
                    <motion.div
                      key={key}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + idx * 0.1 }}
                      className="flex justify-between items-center p-3 bg-orange-500/5 rounded-lg"
                    >
                      <span className="font-semibold text-gray-700">
                        {key.charAt(0).toUpperCase() + key.slice(1)}
                      </span>
                      <span className="font-bold text-orange-500">{value}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <h3 className="text-xl font-bold text-gray-800 mb-4">Living Expenses</h3>
                <div className="space-y-3">
                  {Object.entries(sectionData.living).map(([key, value], idx) => (
                    <motion.div
                      key={key}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + idx * 0.1 }}
                      className="flex justify-between items-center p-3 bg-orange-500/5 rounded-lg"
                    >
                      <span className="font-semibold text-gray-700">
                        {key.charAt(0).toUpperCase() + key.slice(1)}
                      </span>
                      <span className="font-bold text-orange-500">{value}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        );

      case 'scholarships':
        return (
          <div className="space-y-4">
            {sectionData.map((scholarship, idx) => (
              <motion.div
                key={scholarship.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-orange-500/5 p-6 rounded-xl border-l-4 border-orange-500"
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{scholarship.name}</h3>
                    <p className="text-gray-600 mb-1"><strong>Eligibility:</strong> {scholarship.eligibility}</p>
                  </div>
                  <div className="text-right ml-4">
                    <div className="bg-orange-500 text-white px-4 py-2 rounded-lg font-semibold">
                      {scholarship.amount}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        );

      case 'campus':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <h3 className="text-xl font-bold text-gray-800 mb-4">🏗️ Facilities</h3>
                <div className="space-y-2">
                  {sectionData.facilities.map((facility, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + idx * 0.05 }}
                      className="flex items-center gap-3 p-3 bg-orange-500/5 rounded-lg"
                    >
                      <span className="text-orange-500 text-xl">🏢</span>
                      <span className="text-gray-700">{facility}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h3 className="text-xl font-bold text-gray-800 mb-4">🏠 Housing</h3>
                <div className="space-y-2">
                  {sectionData.housing.map((option, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + idx * 0.05 }}
                      className="flex items-center gap-3 p-3 bg-orange-500/5 rounded-lg"
                    >
                      <span className="text-orange-500 text-xl">🏠</span>
                      <span className="text-gray-700">{option}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <h3 className="text-xl font-bold text-gray-800 mb-4">🚌 Transportation</h3>
                <div className="space-y-2">
                  {sectionData.transportation.map((option, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + idx * 0.05 }}
                      className="flex items-center gap-3 p-3 bg-orange-500/5 rounded-lg"
                    >
                      <span className="text-orange-500 text-xl">🚌</span>
                      <span className="text-gray-700">{option}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        );

      case 'studentLife':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <h3 className="text-xl font-bold text-gray-800 mb-4">👥 Student Clubs</h3>
                <div className="space-y-2">
                  {sectionData.clubs.map((club, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + idx * 0.05 }}
                      className="flex items-center gap-3 p-3 bg-orange-500/5 rounded-lg"
                    >
                      <span className="text-orange-500 text-xl">👥</span>
                      <span className="text-gray-700">{club}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h3 className="text-xl font-bold text-gray-800 mb-4">🎉 Events</h3>
                <div className="space-y-2">
                  {sectionData.events.map((event, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + idx * 0.05 }}
                      className="flex items-center gap-3 p-3 bg-orange-500/5 rounded-lg"
                    >
                      <span className="text-orange-500 text-xl">🎉</span>
                      <span className="text-gray-700">{event}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <h3 className="text-xl font-bold text-gray-800 mb-4">🤝 Support Services</h3>
                <div className="space-y-2">
                  {sectionData.support.map((service, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + idx * 0.05 }}
                      className="flex items-center gap-3 p-3 bg-orange-500/5 rounded-lg"
                    >
                      <span className="text-orange-500 text-xl">🤝</span>
                      <span className="text-gray-700">{service}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        );

      case 'accommodation':
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Accommodation Options</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {details.campus.housing.map((option, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="bg-orange-500/5 p-6 rounded-xl border-l-4 border-orange-500"
                >
                  <span className="text-lg text-gray-700">{option}</span>
                </motion.div>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Bubble Animation Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`bubble-${i}`}
            className="absolute bg-orange-500/10 rounded-full mix-blend-overlay"
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
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate(-1)}
            className="mb-6 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-lg shadow-lg transition-all duration-300 flex items-center gap-2 mx-auto font-semibold text-lg"
          >
            <span>←</span>
            <span>Back to Universities</span>
          </motion.button>
          
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight text-white mb-4"
          >
            {university.name}
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-500/50 mx-auto rounded-full mb-4"
          />
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-xl text-gray-300 mb-2"
          >
            {university.location?.cityName}, {university.location?.countryName}
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-lg text-gray-400"
          >
            {university.short}
          </motion.p>
        </motion.div>

        {/* University Image */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="mb-12"
        >
          <motion.img
            src={university.image}
            alt={university.name}
            className="w-full h-96 object-cover rounded-xl shadow-xl"
            style={{ height: '400px', objectFit: 'contain' }}
          />
        </motion.div>

        {/* Navigation Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {sections.map((section, idx) => (
            <motion.button
              key={section.key}
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              onClick={() => setActiveSection(section.key)}
              transition={{ delay: 1.1 + idx * 0.1, duration: 0.5 }}
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                boxShadow: "0 20px 40px -12px rgba(51, 107, 135, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-3 px-6 py-4 rounded-xl shadow-lg transition-all duration-300 border ${
                activeSection === section.key 
                  ? 'bg-orange-500 text-white border-orange-500 shadow-2xl shadow-orange-500/25' 
                  : 'bg-white/95 backdrop-blur text-gray-800 border-gray-200/50 hover:border-orange-500 hover:shadow-xl hover:shadow-orange-500/25'
              }`}
            >
              <span className="text-2xl">{section.icon}</span>
              <span className="font-semibold">{section.title}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Content Section */}
        <motion.div
          key={activeSection}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="bg-white/95 backdrop-blur rounded-xl shadow-xl p-8 border border-gray-200/50"
        >
          {renderSectionContent()}
        </motion.div>
      </div>
    </div>
  );
};

export default UniversityDetail; 