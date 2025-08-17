import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, MapPin, GraduationCap, Quote } from 'lucide-react';

const stories = [
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    name: 'Priya Sharma',
    university: 'University of Toronto',
    country: 'Canada',
    course: 'Computer Science',
    rating: 5,
    testimonial: "Future Forge made my dream of studying in Canada a reality. Their support was incredible and they guided me through every step of the process!",
    year: '2024'
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1582572564332-15f68e015d39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    name: 'Rahul Verma',
    university: 'University of California, LA',
    country: 'USA',
    course: 'Business Administration',
    rating: 5,
    testimonial: "The guidance on my visa application was flawless. I couldn't have done it without their expert team and personalized approach.",
    year: '2023'
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    name: 'Anjali Singh',
    university: 'King\'s College London',
    country: 'UK',
    course: 'International Relations',
    rating: 5,
    testimonial: "From choosing a course to finding accommodation, the team was with me at every step. Truly exceptional service!",
    year: '2024'
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    name: 'Vikram Patel',
    university: 'University of Melbourne',
    country: 'Australia',
    course: 'Engineering',
    rating: 5,
    testimonial: "An amazing experience. The counselors are knowledgeable and genuinely helpful. They made my Australian dream come true!",
    year: '2023'
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1509479200259-f83141df3c13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    name: 'Sneha Reddy',
    university: 'National University of Singapore',
    country: 'Singapore',
    course: 'Data Science',
    rating: 5,
    testimonial: "The best consultancy for anyone planning to study in Singapore. Highly recommended for their attention to detail!",
    year: '2024'
  }
];

const SuccessStories = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % stories.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = stories.length - 1;
    } else if (newIndex >= stories.length) {
      newIndex = 0;
    }
    setActiveIndex(newIndex);
    setIsAutoPlaying(false);
    
    // Resume auto-play after 8 seconds
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const numStories = stories.length;

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 px-4 sm:px-6 lg:px-8">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-400 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Section Header */}
      <div className="text-center z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/95 backdrop-blur rounded-xl text-orange-500 font-medium text-sm mb-4 shadow-xl">
          <Star className="w-4 h-4" />
          Success Stories
        </div>
        <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
          Dreams Turned Into
          <span className="text-orange-500"> Reality</span>
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Join thousands of students who have transformed their futures with our expert guidance
        </p>
      </div>

      {/* 3D Carousel */}
      <div className="relative w-full h-[500px] perspective-1000 z-10">
        {stories.map((story, i) => {
          let offset = i - activeIndex;
          if (offset > numStories / 2) {
            offset -= numStories;
          } else if (offset < -numStories / 2) {
            offset += numStories;
          }
          
          const rotateY = offset * 25;
          const translateX = offset * 40;
          const translateZ = Math.abs(offset) * -180;
          const scale = 1 - Math.abs(offset) * 0.12;
          const opacity = offset === 0 ? 1 : 0.6;
          const zIndex = numStories - Math.abs(offset);

          return (
            <div
              key={i}
              className="absolute w-full h-full flex items-center justify-center transition-all duration-700 ease-out"
              style={{
                transform: `translateX(${translateX}%) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                opacity: opacity,
                zIndex: zIndex,
                transformStyle: 'preserve-3d',
              }}
            >
              <div className="w-[420px] h-[300px] bg-white/95 backdrop-blur rounded-xl shadow-xl overflow-hidden group hover:shadow-2xl hover:shadow-orange-500/25 transition-all duration-500 hover:scale-105">
                {/* Content Section */}
                <div className="p-8 h-3/5 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(story.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-orange-500 text-orange-500" />
                      ))}
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-800 mb-1">{story.name}</h3>
                    
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center gap-1 text-orange-500">
                        <GraduationCap className="w-4 h-4" />
                        <span className="text-sm font-medium">{story.course}</span>
                      </div>
                      <div className="flex items-center gap-1 text-gray-600">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{story.country}</span>
                      </div>
                    </div>
                    
                    <p className="text-sm text-gray-600 mb-4 font-medium">{story.university}</p>
                  </div>

                  <div className="relative">
                    <Quote className="absolute -top-2 -left-2 w-6 h-6 text-orange-200" />
                    <p className="text-gray-700 text-base leading-relaxed italic pl-4">
                      {story.testimonial}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Enhanced Navigation */}
      <div className="flex items-center justify-center gap-8 z-10 mb-8">
        <button 
          onClick={() => goToIndex(activeIndex - 1)}
          className="group bg-white/95 backdrop-blur hover:bg-white transition-all duration-300 p-4 rounded-lg shadow-xl hover:shadow-2xl hover:shadow-orange-500/25 text-orange-500 hover:text-orange-600 hover:scale-110"
        >
          <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
        </button>
        
        {/* Dots Indicator */}
        <div className="flex gap-2">
          {stories.map((_, index) => (
            <button
              key={index}
              onClick={() => goToIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeIndex 
                  ? 'bg-orange-500 w-8' 
                  : 'bg-white/95 hover:bg-white'
              }`}
            />
          ))}
        </div>
        
        <button 
          onClick={() => goToIndex(activeIndex + 1)}
          className="group bg-white/95 backdrop-blur hover:bg-white transition-all duration-300 p-4 rounded-lg shadow-xl hover:shadow-2xl hover:shadow-orange-500/25 text-orange-500 hover:text-orange-600 hover:scale-110"
        >
          <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
        </button>
      </div>

      {/* Auto-play Toggle */}
      <div className="flex items-center gap-2 text-sm text-gray-600 z-10">
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className="flex items-center gap-2 px-4 py-2 bg-white/95 backdrop-blur rounded-lg hover:bg-white shadow-xl hover:shadow-2xl hover:shadow-orange-500/25 transition-all duration-300"
        >
          <div className={`w-2 h-2 rounded-full ${isAutoPlaying ? 'bg-green-500' : 'bg-gray-400'}`}></div>
          {isAutoPlaying ? 'Auto-playing' : 'Paused'}
        </button>
      </div>

      {/* Statistics */}
      <div className="mt-16 grid grid-cols-3 gap-8 z-10">
        <div className="text-center">
          <div className="text-4xl font-bold text-orange-500 mb-2">5000+</div>
          <div className="text-gray-300">Success Stories</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-orange-500 mb-2">98%</div>
          <div className="text-gray-300">Success Rate</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-orange-500 mb-2">50+</div>
          <div className="text-gray-300">Countries</div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;