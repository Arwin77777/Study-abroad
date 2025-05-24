const HeroBanner = () => {
  return (
    <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden flex items-center justify-center">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="https://www.youtube.com/watch?v=LlCwHnp3kL4" // placeholder, replace with UK university video
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute inset-0 bg-black bg-opacity-40" />
      <button
        className="relative z-10 flex items-center justify-center w-24 h-24 rounded-full bg-primary bg-opacity-90 hover:bg-secondary transition-colors shadow-lg"
        aria-label="Play Video"
      >
        <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8 5v14l11-7z" />
        </svg>
      </button>
    </div>
  );
};

export default HeroBanner; 