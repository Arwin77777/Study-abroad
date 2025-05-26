import React, { useState } from 'react';
// import { HiOutlineUserGroup } from 'react-icons/hi';
import Navbar from './Navbar';

const indianStates = [
  'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
  'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand',
  'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur',
  'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab',
  'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura',
  'Uttar Pradesh', 'Uttarakhand', 'West Bengal', 'Andaman and Nicobar Islands',
  'Chandigarh', 'Dadra and Nagar Haveli and Daman and Diu', 'Delhi',
  'Jammu and Kashmir', 'Ladakh', 'Lakshadweep', 'Puducherry'
];

const HeroBanner = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    state: '',
    city: '',
    query: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert('Form submitted!');
  };

  return (
    <div>
      {/* <Navbar /> */}
      <div className="relative w-full min-h-[650px] flex items-center justify-center overflow-hidden">
        <img
          src="https://www.aecoverseas.com/wp-content/uploads/2024/11/top-bannerbg-1.webp"
          alt="Study Abroad Background"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-gray-700/70 to-gray-200/60 z-10" />
        {/* Subtle floating shapes in gray */}
        <div className="absolute z-20 top-10 left-10 animate-pulse w-16 h-16 bg-gray-300/30 rounded-full blur-2xl" />
        <div className="absolute z-20 bottom-10 right-10 animate-pulse w-24 h-24 bg-gray-400/20 rounded-full blur-2xl" />
        {/* Content */}
        <div className="relative z-30 w-full flex flex-col md:flex-row items-center justify-between px-4 md:px-16 py-12">
          {/* Left: Text */}
          <div className="md:w-1/2 w-full text-left text-white mb-8 md:mb-0 md:pr-12">
            <div className="inline-flex items-center mb-4 bg-white/20 px-3 py-1 rounded-full shadow backdrop-blur-sm">
              {/* <HiOutlineUserGroup className="text-yellow-300 text-xl mr-2" /> */}
              <span className="text-sm font-semibold tracking-wide text-white">29,000+ Success Stories</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold mb-4 drop-shadow-lg leading-tight">
              India's <span className="bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 bg-clip-text text-transparent">Top-Rated Overseas</span><br />
              <span className="relative inline-block">
                Education Consultant
                <span className="absolute left-0 -bottom-1 w-full h-2 bg-gradient-to-r from-gray-300/60 to-gray-500/60 rounded-full blur-sm animate-pulse" />
              </span>
            </h1>
            <div className="flex items-center space-x-3 mt-2">
              <span className="inline-block bg-gray-200/80 text-gray-800 text-xs font-bold px-3 py-1 rounded-full shadow">Since 2025</span>
              <span className="text-lg md:text-xl text-white/90 font-medium">Book your future today!</span>
            </div>
          </div>
          {/* Right: Form */}
          <div className="md:w-1/2 w-full flex justify-center items-center">
            <form onSubmit={handleSubmit} className="bg-white/70 backdrop-blur-lg border border-gray-200/60 shadow-2xl rounded-2xl p-8 w-full max-w-md space-y-5">
              <h1 className="text-xl md:text-2xl font-bold mb-2 text-gray-700 text-center tracking-tight">Book your counselling session now</h1>
              <div className="flex space-x-2">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name*"
                  value={form.firstName}
                  onChange={handleChange}
                  required
                  className="w-1/2 px-3 py-2 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-gray-400 bg-white/80 placeholder-gray-400 transition-all"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name*"
                  value={form.lastName}
                  onChange={handleChange}
                  required
                  className="w-1/2 px-3 py-2 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-gray-400 bg-white/80 placeholder-gray-400 transition-all"
                />
              </div>
              <div className="flex space-x-2">
                <input
                  type="email"
                  name="email"
                  placeholder="Email*"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-1/2 px-3 py-2 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-gray-400 bg-white/80 placeholder-gray-400 transition-all"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number*"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  className="w-1/2 px-3 py-2 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-gray-400 bg-white/80 placeholder-gray-400 transition-all"
                />
              </div>
              <div className="flex space-x-2">
                <select
                  name="state"
                  value={form.state}
                  onChange={handleChange}
                  required
                  className="w-1/2 px-3 py-2 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-gray-400 bg-white/80 text-gray-700 transition-all"
                >
                  <option value="">Select State*</option>
                  {indianStates.map((state) => (
                    <option key={state} value={state}>{state}</option>
                  ))}
                </select>
                <input
                  type="text"
                  name="city"
                  placeholder="City*"
                  value={form.city}
                  onChange={handleChange}
                  required
                  className="w-1/2 px-3 py-2 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-gray-400 bg-white/80 placeholder-gray-400 transition-all"
                />
              </div>
              <textarea
                name="query"
                placeholder="Comment/Query"
                value={form.query}
                onChange={handleChange}
                rows={3}
                className="w-full px-3 py-2 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-gray-400 bg-white/80 placeholder-gray-400 transition-all"
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-gray-700 via-gray-500 to-gray-300 hover:from-gray-800 hover:to-gray-400 text-white font-bold py-2 rounded-lg shadow-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-400"
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner; 