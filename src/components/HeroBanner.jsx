import { motion } from 'framer-motion';
import EnquiryForm from './EnquiryForm';
import GlobeBackground from './GlobeBackground';

const HeroBanner = () => {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      <GlobeBackground />
      <div className="absolute inset-0 z-10" />

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-24 mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT SECTION WITH ENHANCED BACKGROUND */}
          <div className="relative z-10">
            <div
              className="absolute inset-0 -z-10"
              style={{
                clipPath: 'polygon(0 0, 85% 0, 95% 50%, 85% 100%, 0 100%)',
                background: 'linear-gradient(to bottom right, #336b87, #2a4d69)',
                borderRadius: '1.5rem',
                boxShadow: '0 15px 35px rgba(0,0,0,0.15)',
                backdropFilter: 'blur(5px)',
              }}
            ></div>

            <motion.div
              className="text-white text-center lg:text-left p-6 sm:p-10 md:p-14"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight drop-shadow-md mb-4">
                Explore the <span className="text-[#f0f8ff]">World</span> of
                <br className="hidden sm:block" /> Opportunities <span className="text-[#f0f8ff]">With Us</span>
              </h1>

              <p className="mt-5 text-lg lg:text-xl leading-relaxed text-white/90 max-w-xl mx-auto lg:mx-0 drop-shadow-sm">
                Your gateway to global education. We help you find the best universities, courses, and scholarships to make your study abroad dream a reality.
              </p>

              <div className="mt-8">
                <button
                  onClick={() => {
                    const destinationsSection = document.getElementById('destinations');
                    if (destinationsSection) {
                      destinationsSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="rounded-full bg-gradient-to-r from-[#f0f8ff] to-[#336b87] px-8 py-4 text-base font-semibold text-[#336b87] shadow-md hover:bg-[#f0f8ff] transition-transform transform hover:scale-105"
                >
                  Explore Destinations
                </button>
              </div>
            </motion.div>
          </div>

          {/* RIGHT SECTION: ENQUIRY FORM */}
          <div style={{ padding: '10px' }}>
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
