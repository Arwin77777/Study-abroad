import { useState } from 'react';
import { Menu, Close, ExpandMore, WhatsApp, Phone } from '@mui/icons-material';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="backdrop-blur-md bg-white/30 shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <span className="text-3xl text-primary">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 7L12 2L22 7L12 12L2 7Z" fill="#a78bfa"/>
                <path d="M6 10V15C6 17.2091 9.13401 19 12 19C14.866 19 18 17.2091 18 15V10" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            <span className="text-2xl font-bold text-primary">Study Abroad</span>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-1 cursor-pointer text-gray-700 hover:text-primary">
              <span>Study Abroad</span>
              <ExpandMore fontSize="small" />
            </div>
            <div className="flex items-center space-x-1 cursor-pointer text-gray-700 hover:text-primary">
              <span>About us</span>
              <ExpandMore fontSize="small" />
            </div>
            <div className="flex items-center space-x-1 cursor-pointer text-gray-700 hover:text-primary">
              <span>Help</span>
              <ExpandMore fontSize="small" />
            </div>
            <a href="https://wa.me/1234567890" className="flex items-center space-x-1 text-gray-700 hover:text-green-600">
              <WhatsApp fontSize="small" />
              <span>WhatsApp Us</span>
            </a>
            <a href="tel:+1234567890" className="flex items-center space-x-1 text-gray-700 hover:text-primary">
              <Phone fontSize="small" />
              <span>+1 (234) 567-890</span>
            </a>
            {/* <a href="#counsellor" className="ml-4 bg-primary hover:bg-secondary text-white font-semibold px-6 py-2 rounded-lg transition-colors">Find your counsellor</a> */}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary"
            >
              {isOpen ? <Close /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white/80 backdrop-blur-md shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <div className="flex items-center space-x-1 cursor-pointer text-gray-700 hover:text-primary">
              <span>Study Abroad</span>
              <ExpandMore fontSize="small" />
            </div>
            <div className="flex items-center space-x-1 cursor-pointer text-gray-700 hover:text-primary">
              <span>About us</span>
              <ExpandMore fontSize="small" />
            </div>
            <div className="flex items-center space-x-1 cursor-pointer text-gray-700 hover:text-primary">
              <span>Help</span>
              <ExpandMore fontSize="small" />
            </div>
            <a href="https://wa.me/1234567890" className="flex items-center space-x-1 text-gray-700 hover:text-green-600 py-2">
              <WhatsApp fontSize="small" />
              <span>WhatsApp Us</span>
            </a>
            <a href="tel:+1234567890" className="flex items-center space-x-1 text-gray-700 hover:text-primary py-2">
              <Phone fontSize="small" />
              <span>+1 (234) 567-890</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 