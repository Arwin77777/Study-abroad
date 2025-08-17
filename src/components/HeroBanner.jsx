import EnquiryForm from './EnquiryForm';
import BannerImage from '../assets/HeroBannerUniversity.jpg';

const HeroBanner = () => {
  const handleScrollToDestinations = () => {
    const destinationsSection = document.getElementById('destinations');
    if (destinationsSection) {
      destinationsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Background image layer */}
      <div className="absolute inset-0">
        <img src={BannerImage} alt="Study abroad background" className="w-full h-full object-cover" />
      </div>
      {/* Dark gradient overlay to preserve theme and readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-800/90 to-slate-900/90" />

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-screen py-20">

          {/* LEFT SECTION - HERO CONTENT */}
          <div className="relative space-y-8">
            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight text-white">

                Explore the world of opportunities
                <br />
                <span className="text-orange-500">with us</span>
              </h1>

              <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
              Shape your future with Future Forge — your guide to studying abroad, expanding horizons, and unlocking global opportunities.</p>
            </div>

            {/* CTA Button */}
            <div className="pt-6">
              <button
                onClick={handleScrollToDestinations}
                className="px-8 py-4 bg-orange-500 hover:bg-orange-600 rounded-lg text-white font-semibold text-lg transition-colors duration-300 shadow-lg"
              >
                Explore Now
              </button>
            </div>
          </div>

          {/* RIGHT SECTION - FORM */}
          <div className="relative">
            <EnquiryForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;