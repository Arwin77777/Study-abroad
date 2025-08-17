import React from 'react';
import { motion } from 'framer-motion';
import { School, Public, EmojiEvents, Psychology, MonetizationOn, Home, Flight } from '@mui/icons-material';
import BackgroundAnimation from './BackgroundAnimation';

const AboutUsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  };

  return (
    <div id="about-us" className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      <BackgroundAnimation animationType="bubbles" />
      <div 
        className="absolute inset-0 opacity-5"
        style={{
            backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.1) 25%, transparent 25%, transparent 75%, rgba(255,255,255,0.1) 75%, rgba(255,255,255,0.1)), repeating-linear-gradient(-45deg, rgba(255,255,255,0.1) 25%, transparent 25%, transparent 75%, rgba(255,255,255,0.1) 75%, rgba(255,255,255,0.1))',
            backgroundSize: '60px 60px',
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 mb-8">
            About Us
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-2xl md:text-3xl font-semibold text-orange-500 mb-6">
              Together, we&apos;ll forge your future!
            </p>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Join us at Future Forge, where your educational aspirations meet unparalleled guidance, 
              support, and a world of possibilities.
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-16"
        >
          {/* Who We Are Section */}
          <motion.div variants={itemVariants} className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-8">
                <Psychology sx={{ fontSize: 48, color: 'rgb(249, 115, 22)' }} />
                <h3 className="text-3xl font-bold text-white ml-4">Who We Are?</h3>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed">
                At Future Forge, we are more than just a study abroad agency; we are your dedicated 
                partners in shaping your academic journey and global aspirations. Our mission is to 
                empower students like you to unlock the world&apos;s educational opportunities, 
                fostering cross-cultural experiences that lead to personal and professional growth.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-white/10 hover:border-orange-500/30 transition-colors duration-300">
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-orange-500/20">
                  <School sx={{ fontSize: 40, color: 'white' }} />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">Your Academic Partner</h4>
                <p className="text-gray-300">
                  We guide you through every step of your international education journey, 
                  from initial consultation to successful placement.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Vision and Mission Cards */}
          <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-8">
            {/* Vision Card */}
            <motion.div
              variants={cardVariants}
              className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-8 rounded-2xl shadow-xl"
            >
              <div className="flex items-center mb-6">
                <Public sx={{ fontSize: 48, color: 'white' }} />
                <h3 className="text-2xl font-bold ml-4">Our Vision</h3>
              </div>
              <p className="text-lg leading-relaxed">
                Empowering learners to craft their futures by forging global connections. 
                Through immersive educational experiences abroad, we aim to cultivate adaptable, 
                global citizens who embrace diversity, foster intercultural understanding, 
                and drive positive change.
              </p>
            </motion.div>

            {/* Mission Card */}
            <motion.div
              variants={cardVariants}
              className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-white/10 hover:border-orange-500/30 transition-colors duration-300"
            >
              <div className="flex items-center mb-6">
                <EmojiEvents sx={{ fontSize: 48, color: 'rgb(249, 115, 22)' }} />
                <h3 className="text-2xl font-bold text-white ml-4">Our Mission</h3>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed">
                To be the gold standard in study abroad experiences, forging brighter futures 
                one student at a time. By 2030, we envision a world where every student sees 
                the planet as their classroom, every culture as a lesson, and every interaction 
                as an opportunity to shape a more connected, compassionate, and innovative world.
              </p>
            </motion.div>
          </motion.div>

          {/* Values Section */}
          <motion.div variants={itemVariants} className="text-center">
            <h3 className="text-3xl font-bold text-white mb-12">Our Core Values</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <School sx={{ fontSize: 40, color: 'rgb(249, 115, 22)' }} />,
                  title: "Excellence",
                  description: "We strive for excellence in every aspect of our service, ensuring the highest quality guidance and support."
                },
                {
                  icon: <Public sx={{ fontSize: 40, color: 'rgb(249, 115, 22)' }} />,
                  title: "Global Perspective",
                  description: "We embrace diversity and foster cross-cultural understanding through international education."
                },
                {
                  icon: <Psychology sx={{ fontSize: 40, color: 'rgb(249, 115, 22)' }} />,
                  title: "Personal Growth",
                  description: "We believe in empowering students to discover their potential and achieve their dreams."
                }
              ].map((value, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  className="bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-xl border border-white/10 hover:border-orange-500/30 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="mb-6">{value.icon}</div>
                  <h4 className="text-xl font-bold text-white mb-4">{value.title}</h4>
                  <p className="text-gray-300">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Loan Help, Help for Stay, Visa Assistance Section */}
          <h3 className="text-3xl font-bold text-white mb-12">Our Services</h3>
          <motion.div variants={containerVariants} className="space-y-16 mt-16">
            <motion.div variants={itemVariants} className="grid md:grid-cols-3 gap-8">
              {/* Loan Help Card */}
              <motion.div
                variants={cardVariants}
                className="bg-gradient-to-br from-orange-500 to-orange-600 p-8 rounded-2xl shadow-xl transform transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center mb-6">
                  <MonetizationOn sx={{ fontSize: 48, color: 'white' }} />
                  <h3 className="text-2xl font-bold text-white ml-4">Loan Help</h3>
                </div>
                <p className="text-lg text-white/90 leading-relaxed">
                  We provide guidance on securing educational loans to support your study abroad journey.
                </p>
              </motion.div>

              {/* Help for Stay Card */}
              <motion.div
                variants={cardVariants}
                className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-white/10 hover:border-orange-500/30 transform transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center mb-6">
                  <Home sx={{ fontSize: 48, color: 'rgb(249, 115, 22)' }} />
                  <h3 className="text-2xl font-bold text-white ml-4">Help for Stay</h3>
                </div>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Assistance in finding comfortable and affordable accommodation options.
                </p>
              </motion.div>

              {/* Visa Assistance Card */}
              <motion.div
                variants={cardVariants}
                className="bg-gradient-to-br from-orange-500 to-orange-600 p-8 rounded-2xl shadow-xl transform transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center mb-6">
                  <Flight sx={{ fontSize: 48, color: 'white' }} />
                  <h3 className="text-2xl font-bold text-white ml-4">Visa Assistance</h3>
                </div>
                <p className="text-lg text-white/90 leading-relaxed">
                  Expert advice and support in navigating the visa application process.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUsSection; 