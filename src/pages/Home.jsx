import Navbar from '../components/Navbar'
import HeroBanner from '../components/HeroBanner'
import DestinationsGrid from '../components/DestinationsGrid'
import StudyAbroadRoadmap from '../components/StudyAbroadRoadmap'
import WhyUsSection from '../components/WhyUsSection'
import TopUniversitiesSection from '../components/TopUniversitiesSection'
import SuccessStories from '../components/SuccessStories'
import { motion } from 'framer-motion'

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

const Section = ({ id, title, children }) => (
  <motion.section
    id={id}
    className="scroll-mt-15 py-10 sm:py-10"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    variants={sectionVariants}
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-5">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#336b87] drop-shadow-lg">
          {title}
        </h2>
      </div>
      {children}
    </div>
  </motion.section>
)

const bubbleData = [
  // Left to Right
  { size: 55, top: '20%', duration: 45, delay: 0, from: 'left' },
  { size: 40, top: '40%', duration: 60, delay: 5, from: 'left' },
  { size: 65, top: '60%', duration: 50, delay: 10, from: 'left' },
  { size: 30, top: '70%', duration: 70, delay: 15, from: 'left' },
  { size: 50, top: '30%', duration: 40, delay: 20, from: 'left' },
  
  // Right to Left
  { size: 60, top: '25%', duration: 55, delay: 2, from: 'right' },
  { size: 35, top: '45%', duration: 45, delay: 7, from: 'right' },
  { size: 70, top: '65%', duration: 65, delay: 12, from: 'right' },
  { size: 45, top: '50%', duration: 35, delay: 17, from: 'right' },
  { size: 50, top: '35%', duration: 50, delay: 22, from: 'right' },
];

function Home() {
  return (
    <div className="min-h-screen scroll-smooth bg-white text-gray-800 relative overflow-x-hidden">
      {/* Global Bubble Background */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
        {bubbleData.map((bubble, i) => {
          const isFromLeft = bubble.from === 'left';
          return (
            <motion.div
              key={i}
              className="absolute bg-[#336b87]/10 rounded-full"
              style={{
                width: bubble.size,
                height: bubble.size,
                top: bubble.top,
                left: isFromLeft ? 0 : 'auto',
                right: !isFromLeft ? 0 : 'auto',
              }}
              initial={{ 
                x: isFromLeft ? -bubble.size : `calc(100vw + ${bubble.size}px)`, 
                opacity: 0 
              }}
              animate={{ 
                x: isFromLeft ? '100vw' : `-${bubble.size}px`,
                opacity: [0, 0.4, 0.4, 0] 
              }}
              transition={{
                duration: bubble.duration,
                delay: bubble.delay,
                ease: 'linear',
                repeat: Infinity,
                times: [0, 0.1, 0.9, 1]
              }}
            />
          );
        })}
      </div>

      <Navbar />
      <main className="relative z-10 overflow-x-hidden">
        <HeroBanner />

        <Section id="destinations" title="Explore Destinations">
          <DestinationsGrid />
        </Section>

        <StudyAbroadRoadmap />

        <WhyUsSection />

        <Section id="top-universities" title="Our Students At">
          <TopUniversitiesSection />
        </Section>

        <Section id="success-stories" title="Success Stories">
          <SuccessStories />
        </Section>
        {/* <AboutUsSection /> */}
      </main>
    </div>
  )
}

export default Home;
