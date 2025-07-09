import React, { useEffect, useRef } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import { School, EmojiEvents, MonetizationOn, Star, Apartment, Home, Flight } from '@mui/icons-material';
import BackgroundAnimation from './BackgroundAnimation';

// Custom Counter for Animated Numbers
function Counter({ to, isInt = true }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      animate(0, to, {
        duration: 2,
        onUpdate(value) {
          if (ref.current) {
            ref.current.textContent = isInt ? Math.round(value).toLocaleString() : value.toFixed(1);
          }
        },
      });
    }
  }, [inView, to, isInt]);

  return <span ref={ref}>0</span>;
}

const stats = [
  {
    icon: <EmojiEvents sx={{ fontSize: 40 }} />,
    value: 98.5,
    suffix: "%",
    title: "Success Rate",
    description: "in visa and university admissions."
  },
  {
    icon: <MonetizationOn sx={{ fontSize: 40 }} />,
    prefix: "$",
    value: 10,
    suffix: "M+",
    title: "Scholarships Secured",
    description: "Financial aid for our students."
  },
  {
    icon: <Star sx={{ fontSize: 40 }} />,
    value: 10,
    suffix: "+",
    title: "Years of Experience",
    description: "Guiding students to success."
  },
  {
    icon: <Apartment sx={{ fontSize: 40 }} />,
    value: 2,
    suffix: "+",
    title: "Global Branches",
    description: "In Tamil Nadu and Kerala."
  },
   {
    icon: <School sx={{ fontSize: 40 }} />,
    value: 1000,
    suffix: "+",
    title: "Partner Universities",
    description: "Across the world&apos;s top destinations."
  }
];

const WhyUsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  };

  return (
    <div className="py-20 bg-transparent relative">
      <BackgroundAnimation animationType="waves" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#336b87]">Why Us?</h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Main Feature Card */}
          <motion.div
            className="lg:col-span-1 md:col-span-2 bg-[#336b87] text-white p-8 rounded-2xl shadow-2xl flex flex-col justify-center"
            variants={itemVariants}
          >
            <h3 className="text-3xl font-bold mb-4">Why Future Forge</h3>
            <p className="text-lg leading-relaxed opacity-90">
              We are more than just consultants; we are your dedicated partners in building a global future. Our personalized approach, ethical practices, and unwavering commitment to your success set us apart. We forge pathways to the world&apos;s best institutions, ensuring your journey is seamless and your aspirations are realized.
            </p>
          </motion.div>

          {/* Stat Cards */}
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200/80 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
              variants={itemVariants}
            >
              <div className="flex items-center space-x-4">
                <div className="text-[#336b87]">
                  {stat.icon}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-600">{stat.title}</h4>
                  <p className="text-sm text-gray-500">{stat.description.replace("world's", "world&apos;s")}</p>
                </div>
              </div>
              <div className="mt-4 text-right">
                <p className="text-5xl font-bold text-[#336b87]">
                  {stat.prefix}
                  <Counter to={stat.value} isInt={!stat.suffix.includes('%')} />
                  {stat.suffix}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Loan Help, Help for Stay, Visa Assistance Section */}
        <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {/* Loan Help Card */}
          <motion.div
            variants={itemVariants}
            className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200/80 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
          >
            <div className="flex items-center space-x-4">
              <div className="text-[#336b87]">
                <MonetizationOn sx={{ fontSize: 40 }} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-600">Loan Help</h4>
                <p className="text-sm text-gray-500">Guidance on securing educational loans for your studies.</p>
              </div>
            </div>
          </motion.div>

          {/* Help for Stay Card */}
          <motion.div
            variants={itemVariants}
            className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200/80 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
          >
            <div className="flex items-center space-x-4">
              <div className="text-[#336b87]">
                <Home sx={{ fontSize: 40 }} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-600">Help for Stay</h4>
                <p className="text-sm text-gray-500">Assistance in finding accommodation options.</p>
              </div>
            </div>
          </motion.div>

          {/* Visa Assistance Card */}
          <motion.div
            variants={itemVariants}
            className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200/80 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
          >
            <div className="flex items-center space-x-4">
              <div className="text-[#336b87]">
                <Flight sx={{ fontSize: 40 }} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-600">Visa Assistance</h4>
                <p className="text-sm text-gray-500">Support in navigating the visa application process.</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default WhyUsSection; 