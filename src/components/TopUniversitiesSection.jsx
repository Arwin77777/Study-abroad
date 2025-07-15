import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';

const logos = [
  {
    name: 'University of Toronto',
    logo: 'https://d3d0lqu00lnqvz.cloudfront.net/media/media/UofT_cmh2315fl.jpg',
    country: 'Canada'
  },
  {
    name: 'University of California, Berkeley',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGVYEW8UDMKQ5TjsAoysasTa8nxPnsTrO2GQ&s',
    country: 'USA'
  },
  {
    name: 'University of Oxford',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuO4jUeRncdQQjS2RVTfnjA6Q2kk3HCrgxLw&s',
    country: 'UK'
  },
  {
    name: 'University of Melbourne',
    logo: 'https://images.shiksha.com/mediadata/images/1539748284phpkXrez1.jpeg',
    country: 'Australia'
  },
  {
    name: 'National University of Singapore',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbVoyUNQMcIELJCSPae1qXjm4SD3c8p85PIA&s',
    country: 'Singapore'
  },
  {
    name: 'University of British Columbia',
    logo: 'https://images.shiksha.com/mediadata/images/1533551492phpLKGGFI.jpeg',
    country: 'Canada'
  },
  {
    name: 'University of Sydney',
    logo: 'https://images.shiksha.com/mediadata/images/1515481785phpZsgL9D_g.png',
    country: 'Australia'
  },
  {
    name: 'University of Edinburgh',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpPrefsvtemolLUsEDcK5S4-uEPpqVNR2OFQ&s',
    country: 'UK'
  },
  {
    name: 'McGill University',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT_cNXNnen7gJqEJ15xVkiIiYmOfWPjUrljg&s',
    country: 'Canada'
  },
  {
    name: 'University of Queensland',
    logo: 'https://www.avanse.com/blogs/images/st-louis-missouri-08222022-brookings-hall-danforth-campus-washington-university-st-louis_1048944-21621914.jpeg',
    country: 'Australia'
  }
];

const TopUniversitiesSection = () => {
  const duplicatedLogos = [...logos, ...logos];
  const carouselRef = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    const scroll = async () => {
      const width = carouselRef.current.scrollWidth / 2;
      await controls.start({
        x: -width,
        transition: {
          duration: 20,
          ease: 'linear',
          repeat: Infinity,
        },
      });
    };
    scroll();
  }, [controls]);


  return (
    <div className="relative w-full overflow-hidden bg-transparent py-16">
      {/* Section Title */}
      <div className="relative z-10 text-center mb-12">
        <h2 className="text-4xl font-bold text-[#336b87] mb-4">
          Top Universities Worldwide
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Partner with prestigious institutions across the globe for your academic journey
        </p>
      </div>

      {/* Logo Carousel */}
      <div className="relative overflow-hidden p-5">
        <motion.div
          className="flex"
          ref={carouselRef}
          animate={controls}
        >
          {duplicatedLogos.map((uni, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 w-80 h-56 mx-6 group"
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.3 },
              }}
            >
              <div className="relative w-full h-full rounded-2xl shadow-lg overflow-hidden bg-white">
                <img
                  src={uni.logo}
                  alt={uni.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white transition-opacity duration-300">
                  <h3 className="text-xl font-bold">{uni.name}</h3>
                  <p className="text-gray-300 text-sm">{uni.country}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TopUniversitiesSection; 