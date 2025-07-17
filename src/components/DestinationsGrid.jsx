import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, MapPin, Users, Award, ArrowRight, Globe, Sparkles, Filter, X } from 'lucide-react';

import UK from '../assets/destinations/UK.jpeg';
import Canada from '../assets/destinations/Canada.jpeg';
import USA from '../assets/destinations/USA.jpeg';
import Ireland from '../assets/destinations/Ireland.jpeg';
import Dubai from '../assets/destinations/Dubai.jpeg';
import Australia from '../assets/destinations/Australia.jpeg';
import Singapore from '../assets/destinations/Singapore.jpeg';
import Japan from '../assets/destinations/Japan.jpeg';
import France from '../assets/destinations/France.jpeg';
import Germany from '../assets/destinations/Germany.jpeg';
import Italy from '../assets/destinations/Italy.jpeg';
import Netherlands from '../assets/destinations/Netherlands.jpeg';
import Norway from '../assets/destinations/Norway.jpeg';
import Spain from '../assets/destinations/Spain.jpeg';
import Sweden from '../assets/destinations/Sweden.jpeg';
import Switzerland from '../assets/destinations/Switzerland.jpeg';
import SouthKorea from '../assets/destinations/SouthKorea.jpeg';
import China from '../assets/destinations/China.jpeg';
import Russia from '../assets/destinations/Russia.jpeg';
import NewZealand from '../assets/destinations/NewZealand.jpeg';
import { useNavigate } from 'react-router-dom';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05,
            delayChildren: 0.1
        },
    },
};

const itemVariants = {
    hidden: { 
        y: 50, 
        opacity: 0,
        scale: 0.8,
        rotateX: -15
    },
    visible: {
        y: 0,
        opacity: 1,
        scale: 1,
        rotateX: 0,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 15,
            duration: 0.6
        },
    },
};

const destinations = [
    {
        name: 'United Kingdom',
        continent: 'europe',
        slug: 'uk',
        flagImg: 'https://flagcdn.com/gb.svg',
        image: UK,
        touristPlaces: ['London Eye', 'Stonehenge', 'Big Ben'],
        universities: 165,
        topRank: '#2 Global',
        popular: true
    },
    {
        name: 'Canada',
        continent: 'northAmerica',
        slug: 'canada',
        flagImg: 'https://flagcdn.com/ca.svg',
        image: Canada,
        touristPlaces: ['Niagara Falls', 'Banff National Park', 'CN Tower'],
        universities: 98,
        topRank: '#1 Quality',
        popular: true
    },
    {
        name: 'USA',
        continent: 'northAmerica',
        slug: 'usa',
        flagImg: 'https://flagcdn.com/us.svg',
        image: USA,
        universities: 180,
        topRank: '#1 Choice',
        popular: true
    },
    {
        name: 'Ireland',
        continent: 'europe',
        slug: 'ireland',
        flagImg: 'https://flagcdn.com/ie.svg',
        image: Ireland,
        universities: 43,
        topRank: 'Top 10'
    },
    {
        name: 'Dubai',
        continent: 'asia',
        slug: 'dubai',
        flagImg: 'https://flagcdn.com/ae.svg',
        image: Dubai,
        universities: 76,
        topRank: 'Growing Hub'
    },
    {
        name: 'Australia',
        continent: 'Australia',
        slug: 'australia',
        flagImg: 'https://flagcdn.com/au.svg',
        image: Australia,
        universities: 88,
        topRank: '#3 Global',
        popular: true
    },
    {
        name: 'Singapore',
        continent: 'asia',
        slug: 'singapore',
        flagImg: 'https://flagcdn.com/sg.svg',
        image: Singapore,
        universities: 34,
        topRank: 'Top 5 Asia'
    },
    {
        name: 'Japan',
        continent: 'asia',
        slug: 'japan',
        flagImg: 'https://flagcdn.com/jp.svg',
        image: Japan,
        universities: 67,
        topRank: 'Tech Leader'
    },
    {
        name: 'Germany',
        continent: 'europe',
        slug: 'germany',
        flagImg: 'https://flagcdn.com/de.svg',
        image: Germany,
        universities: 112,
        topRank: '#4 Europe'
    },
    {
        name: 'New Zealand',
        continent: 'australia',
        slug: 'new-zealand',
        flagImg: 'https://flagcdn.com/nz.svg',
        image: NewZealand,
        universities: 28,
        topRank: 'Quality Ed'
    },
    {
        name: 'France',
        continent: 'europe',
        slug: 'france',
        flagImg: 'https://flagcdn.com/fr.svg',
        image: France,
        universities: 87,
        topRank: 'Art & Culture'
    },
    {
        name: 'Italy',
        continent: 'europe',
        slug: 'italy',
        flagImg: 'https://flagcdn.com/it.svg',
        image: Italy,
        universities: 78,
        topRank: 'Historic'
    },
    {
        name: 'Sweden',
        continent: 'europe',
        slug: 'sweden',
        flagImg: 'https://flagcdn.com/se.svg',
        image: Sweden,
        universities: 45,
        topRank: 'Innovation'
    },
    {
        name: 'Netherlands',
        continent: 'europe',
        slug: 'netherlands',
        flagImg: 'https://flagcdn.com/nl.svg',
        image: Netherlands,
        universities: 54,
        topRank: 'Liberal Arts'
    },
    {
        name: 'Switzerland',
        continent: 'europe',
        slug: 'switzerland',
        flagImg: 'https://flagcdn.com/ch.svg',
        image: Switzerland,
        universities: 32,
        topRank: 'Premium'
    },
    {
        name: 'Spain',
        continent: 'europe',
        slug: 'spain',
        flagImg: 'https://flagcdn.com/es.svg',
        image: Spain,
        universities: 67,
        topRank: 'Vibrant'
    },
    {
        name: 'Norway',
        continent: 'europe',
        slug: 'norway',
        flagImg: 'https://flagcdn.com/no.svg',
        image: Norway,
        universities: 23,
        topRank: 'Research'
    },
    {
        name: 'South Korea',
        continent: 'asia',
        slug: 'south-korea',
        flagImg: 'https://flagcdn.com/kr.svg',
        image: SouthKorea,
        universities: 56,
        topRank: 'K-Culture'
    },
    {
        name: 'China',
        continent: 'asia',
        slug: 'china',
        flagImg: 'https://flagcdn.com/cn.svg',
        image: China,
        universities: 134,
        topRank: 'Emerging'
    },
    {
        name: 'Russia',
        continent: 'europe',
        slug: 'russia',
        flagImg: 'https://flagcdn.com/ru.svg',
        image: Russia,
        universities: 89,
        topRank: 'Traditional'
    },
];

const continentColors = {
    europe: 'from-blue-500 to-purple-600',
    northAmerica: 'from-green-500 to-emerald-600',
    asia: 'from-orange-500 to-red-500',
    Australia: 'from-yellow-500 to-orange-500',
    australia: 'from-yellow-500 to-orange-500'
};

const BackgroundElements = () => (
    <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-10 opacity-30">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse"></div>
            <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-gradient-to-r from-green-400 to-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse" style={{ animationDelay: '2s' }}></div>
            <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-blue-50/30 to-transparent"></div>
    </div>
);

const DestinationsGrid = () => {
    const [search, setSearch] = useState('');
    const isDestinationsPage = window.location.pathname.includes('/destinations');
    const navigate = useNavigate();
    const [selectedContinent, setSelectedContinent] = useState('all');
    const [showFilters, setShowFilters] = useState(false);
    const [hoveredCard, setHoveredCard] = useState(null);
    
    const continents = [
        { value: 'all', label: 'All Destinations', icon: Globe },
        { value: 'europe', label: 'Europe', icon: MapPin },
        { value: 'northAmerica', label: 'North America', icon: MapPin },
        { value: 'asia', label: 'Asia', icon: MapPin },
        { value: 'Australia', label: 'Australia', icon: MapPin },
        { value: 'australia', label: 'Oceania', icon: MapPin }
    ];

    const filtered = destinations.filter(dest => {
        const matchesSearch = dest.name.toLowerCase().includes(search.toLowerCase());
        const matchesContinent = selectedContinent === 'all' || dest.continent === selectedContinent;
        return matchesSearch && matchesContinent;
    });

    const visibleDestinations = (isDestinationsPage) ? filtered : filtered.slice(0, 10);

    const handleNavigation = (continent, slug) => {
        navigate(`/study-abroad?continent=${continent}&country=${slug}`);
    };

    const stats = [
        { value: '20+', label: 'Countries', icon: Globe },
        { value: '1000+', label: 'Partner Universities', icon: Award },
        { value: 'Expert', label: 'Guidance', icon: Users },
        { value: 'End-to-End', label: 'Support', icon: ArrowRight }
    ];

    return (
        <section className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-20 px-6 relative overflow-hidden">
            <BackgroundElements />
            
            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    {isDestinationsPage && (
                        <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg mb-6">
                            <MapPin className="w-6 h-6 text-blue-600" />
                            <span className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Study Destinations</span>
                        </div>
                    )}
                    
                    <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent mb-6 leading-tight">
                        {isDestinationsPage ? 'Global Study Destinations' : 'Where Dreams Take Flight'}
                    </h1>
                    
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Discover world-class education opportunities across the globe. From historic universities to cutting-edge research institutions.
                    </p>
                </motion.div>

                {/* Search & Filter Section */}
                {isDestinationsPage && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="mb-12"
                    >
                        <div className="flex flex-col md:flex-row gap-4 items-center justify-center mb-8">
                            {/* Search Bar */}
                            <div className="relative flex-1 max-w-lg">
                                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                <input
                                    type="text"
                                    placeholder="Search destinations..."
                                    value={search}
                                    onChange={e => setSearch(e.target.value)}
                                    className="w-full pl-12 pr-4 py-4 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 placeholder-gray-500 transition-all"
                                />
                            </div>
                            
                            {/* Filter Button */}
                            <button
                                onClick={() => setShowFilters(!showFilters)}
                                className="flex items-center gap-2 px-6 py-4 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-all"
                            >
                                <Filter className="w-5 h-5 text-gray-600" />
                                <span className="text-gray-700 font-medium">Filter</span>
                            </button>
                        </div>

                        {/* Continent Filters */}
                        <AnimatePresence>
                            {showFilters && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className="overflow-hidden"
                                >
                                    <div className="flex flex-wrap justify-center gap-3 mb-8 p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg">
                                        {continents.map((continent) => {
                                            const IconComponent = continent.icon;
                                            return (
                                                <button
                                                    key={continent.value}
                                                    onClick={() => setSelectedContinent(continent.value)}
                                                    className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all ${
                                                        selectedContinent === continent.value
                                                            ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                                                            : 'bg-white/80 text-gray-600 hover:bg-white hover:shadow-md'
                                                    }`}
                                                >
                                                    <IconComponent className="w-4 h-4" />
                                                    <span>{continent.label}</span>
                                                </button>
                                            );
                                        })}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                )}

                {/* Stats Section */}
                {isDestinationsPage && (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
                    >
                        {stats.map((stat, index) => {
                            const IconComponent = stat.icon;
                            return (
                                <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all group">
                                    <div className="flex items-center justify-between mb-2">
                                        <IconComponent className="w-8 h-8 text-blue-600 group-hover:scale-110 transition-transform" />
                                        <Sparkles className="w-5 h-5 text-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </div>
                                    <div className="text-3xl font-bold text-gray-800 mb-1">{stat.value}</div>
                                    <div className="text-gray-600 font-medium">{stat.label}</div>
                                </div>
                            );
                        })}
                    </motion.div>
                )}

                {/* Destinations Grid */}
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
                >
                    {visibleDestinations.map((dest, idx) => (
                        <motion.div
                            key={dest.name}
                            variants={itemVariants}
                            className="group relative"
                            onMouseEnter={() => setHoveredCard(idx)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            <div 
                                className="relative h-64 rounded-3xl overflow-hidden shadow-xl cursor-pointer transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 hover:scale-105"
                                onClick={() => handleNavigation(dest.continent, dest.slug)}
                            >
                                {/* Background Image */}
                                <div 
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                    style={{ backgroundImage: `url(${dest.image})` }}
                                />
                                
                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/80 transition-all duration-300" />
                                
                                {/* Popular Badge */}
                                {dest.popular && (
                                    <div className="absolute top-4 left-4 z-10">
                                        <div className="flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full shadow-lg">
                                            <Sparkles className="w-3 h-3 text-white" />
                                            <span className="text-xs font-bold text-white">Popular</span>
                                        </div>
                                    </div>
                                )}

                                {/* Rank Badge */}
                                <div className="absolute top-4 right-4 z-10">
                                    <div className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full shadow-lg">
                                        <span className="text-xs font-bold text-gray-800">{dest.topRank}</span>
                                    </div>
                                </div>

                                {/* Country Info */}
                                <div className="absolute bottom-4 left-4 right-4 z-10">
                                    <div className="flex items-center gap-3 mb-3">
                                        <img 
                                            src={dest.flagImg} 
                                            alt={dest.name + ' flag'} 
                                            className="w-8 h-8 rounded-full object-cover border-2 border-white shadow-lg" 
                                        />
                                        <div>
                                            <h3 className="text-white font-bold text-lg leading-tight">{dest.name}</h3>
                                            <p className="text-white/80 text-sm">{dest.universities}+ Universities</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Hover Action */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/30 backdrop-blur-sm">
                                    <div className="text-center">
                                        <button className="flex items-center gap-2 px-6 py-3 bg-white/90 backdrop-blur-sm rounded-full font-semibold text-gray-800 hover:bg-white transition-all shadow-lg hover:shadow-xl transform hover:scale-105">
                                            <span>Explore</span>
                                            <ArrowRight className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>

                                {/* Continent Color Bar */}
                                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${continentColors[dest.continent] || 'from-gray-400 to-gray-600'} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* More Destinations Button */}
                {!isDestinationsPage && filtered.length > 10 && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="flex justify-center mt-12"
                    >
                        <button
                            onClick={() => navigate('/destinations')}
                            className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all hover:from-blue-700 hover:to-purple-700"
                        >
                            <Globe className="w-5 h-5" />
                            <span>Explore All Destinations</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </motion.div>
                )}

                {/* Call to Action */}
                {isDestinationsPage && (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 }}
                        className="text-center mt-16 pt-12 border-t border-gray-200/50"
                    >
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">Ready to Start Your Journey?</h3>
                        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                            Get personalized guidance from our expert counselors and take the first step towards your dream education abroad.
                        </p>
                        <button
                            onClick={() => navigate('/contact')}
                            className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all"
                        >
                            <Users className="w-5 h-5" />
                            <span>Get Free Counselling</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </motion.div>
                )}

                {/* No Results */}
                {filtered.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-12"
                    >
                        <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                            <Search className="w-8 h-8 text-gray-400" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-700 mb-2">No destinations found</h3>
                        <p className="text-gray-500">Try adjusting your search or filter criteria</p>
                        <button
                            onClick={() => {
                                setSearch('');
                                setSelectedContinent('all');
                            }}
                            className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                        >
                            Clear Filters
                        </button>
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default DestinationsGrid;