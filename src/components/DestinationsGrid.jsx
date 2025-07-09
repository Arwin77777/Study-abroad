import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: 'easeOut',
        },
    },
};

const destinations = [
    {
        name: 'United Kingdom',
        continent: 'europe',
        slug: 'uk',
        flagImg: 'https://flagcdn.com/gb.svg',
        image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80',
        touristPlaces: ['London Eye', 'Stonehenge', 'Big Ben']
    },
    {
        name: 'Canada',
        continent: 'northAmerica',
        slug: 'canada',
        flagImg: 'https://flagcdn.com/ca.svg',
        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
        touristPlaces: ['Niagara Falls', 'Banff National Park', 'CN Tower']
    },
    {
        name: 'USA',
        continent: 'northAmerica',
        slug: 'usa',
        flagImg: 'https://flagcdn.com/us.svg',
        image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
    },
    {
        name: 'Ireland',
        continent: 'europe',
        slug: 'ireland',
        flagImg: 'https://flagcdn.com/ie.svg',
        image: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=600&q=80',
    },
    {
        name: 'Dubai',
        continent: 'asia',
        slug: 'dubai',
        flagImg: 'https://flagcdn.com/ae.svg',
        image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=600&q=80',
    },
    {
        name: 'Australia',
        continent: 'Australia',
        slug: 'australia',
        flagImg: 'https://flagcdn.com/au.svg',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
    },
    {
        name: 'Singapore',
        continent: 'asia',
        slug: 'singapore',
        flagImg: 'https://flagcdn.com/sg.svg',
        image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=600&q=80',
    },
    {
        name: 'Japan',
        continent: 'asia',
        slug: 'japan',
        flagImg: 'https://flagcdn.com/jp.svg',
        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
    },
    {
        name: 'Germany',
        continent: 'europe',
        slug: 'germany',
        flagImg: 'https://flagcdn.com/de.svg',
        image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=600&q=80',
    },
    {
        name: 'New Zealand',
        continent: 'australia',
        slug: 'new-zealand',
        flagImg: 'https://flagcdn.com/nz.svg',
        image: 'https://images.unsplash.com/photo-1502784444185-1b134d993d97?auto=format&fit=crop&w=600&q=80',
    },
    // 10 more countries
    {
        name: 'France',
        continent: 'europe',
        slug: 'france',
        flagImg: 'https://flagcdn.com/fr.svg',
        image: 'https://images.unsplash.com/photo-1464989646964-452f1db9fa73?auto=format&fit=crop&w=600&q=80',
    },
    {
        name: 'Italy',
        continent: 'europe',
        slug: 'italy',
        flagImg: 'https://flagcdn.com/it.svg',
        image: 'https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=600&q=80',
    },
    {
        name: 'Sweden',
        continent: 'europe',
        slug: 'sweden',
        flagImg: 'https://flagcdn.com/se.svg',
        image: 'https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=600&q=80',
    },
    {
        name: 'Netherlands',
        continent: 'europe',
        slug: 'netherlands',
        flagImg: 'https://flagcdn.com/nl.svg',
        image: 'https://images.unsplash.com/photo-1464989646964-452f1db9fa73?auto=format&fit=crop&w=600&q=80',
    },
    {
        name: 'Switzerland',
        continent: 'europe',
        slug: 'switzerland',
        flagImg: 'https://flagcdn.com/ch.svg',
        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
    },
    {
        name: 'Spain',
        continent: 'europe',
        slug: 'spain',
        flagImg: 'https://flagcdn.com/es.svg',
        image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=600&q=80',
    },
    {
        name: 'Norway',
        continent: 'europe',
        slug: 'norway',
        flagImg: 'https://flagcdn.com/no.svg',
        image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=600&q=80',
    },
    {
        name: 'South Korea',
        continent: 'asia',
        slug: 'south-korea',
        flagImg: 'https://flagcdn.com/kr.svg',
        image: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=600&q=80',
    },
    {
        name: 'China',
        continent: 'asia',
        slug: 'china',
        flagImg: 'https://flagcdn.com/cn.svg',
        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
    },
    {
        name: 'Russia',
        continent: 'europe',
        slug: 'russia',
        flagImg: 'https://flagcdn.com/ru.svg',
        image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80',
    },
];

const DestinationsGrid = ({ showAll = false, showMoreButton = true }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [search, setSearch] = useState('');

    const isDestinationsPage = location.pathname.includes('/destinations');
    const filtered = destinations.filter(dest => dest.name.toLowerCase().includes(search.toLowerCase()));
    const visibleDestinations = (showAll || isDestinationsPage) ? filtered : filtered.slice(0, 10);

    const handleNavigation = (continent, slug) => {
        navigate(`/study-abroad?continent=${continent}&country=${slug}`);
    };

    return (
        <section className="py-16 bg-gray-50 min-h-[80vh] relative overflow-hidden">
            <div 
                className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage: 'radial-gradient(circle at center, #336b87 1px, transparent 1px)',
                    backgroundSize: '2rem 2rem'
                }}
            />
            <div className="max-w-6xl mx-auto px-4 relative">
                {isDestinationsPage && (
                    <div>
                        <h1 className="text-4xl font-bold text-center mt-5 mb-10 text-[#336b87]">Destinations</h1>
                    </div>
                )}
                {/* Quick Stats */}
                {isDestinationsPage && (
                    <>
                        {/* Search Bar Only */}
                        <div className="flex justify-center mb-10 mt-4">
                            <input
                                type="text"
                                placeholder="Search destinations..."
                                value={search}
                                onChange={e => setSearch(e.target.value)}
                                className="w-full max-w-lg px-6 py-3 border border-gray-300 rounded-full shadow focus:outline-none focus:ring-2 focus:ring-[#336b87] focus:border-[#336b87] text-lg transition bg-white/90"
                            />
                        </div>
                        <div className="flex flex-wrap justify-center gap-6 mb-10 mt-8">
                            <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center w-52">
                                <span className="text-3xl font-bold text-[#336b87] mb-1">20+</span>
                                <span className="text-gray-700 font-medium">Countries</span>
                            </div>
                            <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center w-52">
                                <span className="text-3xl font-bold text-[#336b87] mb-1">1000+</span>
                                <span className="text-gray-700 font-medium">Partner Universities</span>
                            </div>
                            <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center w-52">
                                <span className="text-3xl font-bold text-[#336b87] mb-1">Expert</span>
                                <span className="text-gray-700 font-medium">Guidance</span>
                            </div>
                            <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center w-52">
                                <span className="text-3xl font-bold text-[#336b87] mb-1">End-to-End</span>
                                <span className="text-gray-700 font-medium">Support</span>
                            </div>
                        </div>
                        {/* Call to Action */}
                        <div className="flex justify-center mb-10">
                            <button
                                className="bg-[#336b87] text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-[#336b87]/90 transition-colors text-lg"
                                onClick={() => navigate('/contact')}
                            >
                                Get Free Counselling
                            </button>
                        </div>
                    </>
                )}
                <motion.div 
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 justify-items-center"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {visibleDestinations.map((dest, idx) => (
                        <motion.div
                            key={dest.name}
                            className="relative w-56 h-40 rounded-2xl overflow-hidden shadow-xl group bg-gray-200 cursor-pointer transform transition-transform duration-200 hover:scale-105 hover:shadow-2xl"
                            style={{ backgroundImage: `url(${dest.image})`, backgroundSize: 'cover', backgroundPosition: 'center', animationDelay: `${idx * 40}ms` }}
                            onClick={() => handleNavigation(dest.continent, dest.slug)}
                            variants={itemVariants}
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/70 transition" />
                            <div className="absolute left-3 bottom-3 flex items-center space-x-2 bg-white/95 rounded-full px-3 py-1 shadow-lg backdrop-blur-sm">
                                <img src={dest.flagImg} alt={dest.name + ' flag'} className="w-6 h-6 rounded-full object-cover border border-gray-300" />
                                <span className="text-xs font-semibold text-gray-800 tracking-wide uppercase whitespace-nowrap">{dest.name}</span>
                            </div>
                            {/* View Details Overlay */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition bg-black/30">
                                <button className="bg-[#336b87] text-white font-semibold px-5 py-2 rounded-full shadow hover:bg-[#336b87]/90 transition-colors text-sm">View Details</button>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
                {/* More Destinations Button */}
                {showMoreButton && !isDestinationsPage && filtered.length > 10 && (
                    <div className="flex justify-center mt-10">
                        <button
                            className="bg-[#336b87] text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-[#336b87]/90 transition-colors text-lg"
                            onClick={() => navigate('/destinations')}
                        >
                            More Destinations
                        </button>
                    </div>
                )}
                {filtered.length === 0 && (
                    <div className="text-center text-gray-500 mt-10">No destinations found.</div>
                )}
            </div>
            {/* Fade-in animation style */}
            <style>{`
        .fade-in {
          opacity: 0;
          animation: fadeInUp 0.6s forwards;
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: none; }
        }
      `}</style>
        </section>
    );
};

export default DestinationsGrid; 