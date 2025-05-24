const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-primary to-secondary min-h-screen flex items-center">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Your Journey to Global Education Starts Here
        </h1>
        <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto">
          We guide students through every step of their study abroad journey, from choosing the right university to settling in their new home.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contact" className="btn-primary bg-white text-primary hover:bg-gray-100">
            Get Started
          </a>
          <a href="#services" className="btn-primary border-2 border-white bg-transparent hover:bg-white hover:text-primary">
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero; 