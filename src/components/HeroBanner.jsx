import { motion } from 'framer-motion';
import EnquiryForm from './EnquiryForm';

const HeroBanner = () => {

  const bubbles = [
    { x: '10vw', y: '20vh', size: 60, duration: 25, delay: 0 },
    { x: '80vw', y: '30vh', size: 100, duration: 30, delay: 5 },
    { x: '50vw', y: '70vh', size: 40, duration: 35, delay: 10 },
    { x: '20vw', y: '85vh', size: 80, duration: 28, delay: 15 },
    { x: '90vw', y: '80vh', size: 50, duration: 22, delay: 20 },
  ];

  return (
    <div
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url('https://www.aecoverseas.com/wp-content/uploads/2024/11/top-bannerbg-1.webp')` }}
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        {bubbles.map((b, i) => (
          <motion.div
            key={i}
            className="absolute bg-white/10 rounded-full"
            style={{
              width: b.size,
              height: b.size,
              left: b.x,
              top: b.y,
            }}
            animate={{
              y: ['0%', '-50%', '0%'],
            }}
            transition={{
              duration: b.duration,
              delay: b.delay,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 bg-[#336b87]/60 z-10" />

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-24 mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <motion.div
            className="text-white text-center lg:text-left"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 drop-shadow-lg leading-tight">
              Explore the World of Opportunities With Us
            </h1>
            <p className="mt-6 text-lg lg:text-xl leading-8 text-white drop-shadow-md">
              Your gateway to global education. We help you find the best universities, courses, and scholarships to make your study abroad dream a reality.
            </p>
            <div className="mt-10">
              <button
                onClick={() => {
                  const destinationsSection = document.getElementById('destinations');
                  if (destinationsSection) {
                    destinationsSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="rounded-full bg-[#336b87] px-8 py-4 text-base font-semibold text-white shadow-lg hover:bg-[#336b87]/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#336b87] transition-transform transform hover:scale-105"
              >
                Explore Destinations
              </button>
            </div>
          </motion.div>
          <div style={{padding:'10px'}}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <EnquiryForm />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner; 