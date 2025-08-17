import { useState } from 'react';
import { Menu, X as Close, ChevronDown, Phone } from 'lucide-react';
import StudyAbroadDropdown from './StudyAbroadDropdown';
import logo from '../assets/FUTURE FORGE CONSULTANCY .png';
import { useNavigate } from 'react-router-dom';

const NavLink = ({ href, children, isMobile, isWa, onClick }) => {
  const baseClasses = "flex items-center gap-2 cursor-pointer transition-all duration-300";
  const desktopClasses = `py-2 border-b-2 border-transparent ${
    isWa 
      ? 'text-slate-700 font-medium hover:text-orange-500 hover:border-orange-500' 
      : 'text-slate-700 font-medium hover:text-orange-500 hover:border-orange-500'
  }`;
  const mobileClasses = `py-3 px-4 rounded-xl text-base font-medium ${
    isWa 
      ? 'text-slate-700 hover:bg-orange-500/10 hover:text-orange-500' 
      : 'text-slate-700 hover:bg-orange-500/10 hover:text-orange-500'
  }`;
  
  const Component = href ? 'a' : 'div';

  return (
    <Component href={href} className={`${baseClasses} ${isMobile ? mobileClasses : desktopClasses}`} onClick={onClick}>
      {children}
    </Component>
  );
};

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { component: <StudyAbroadDropdown isMobile={false} /> },
    { label: 'About us', href: '/about-us' },
    { label: 'Our services', href: '/our-services' },
    { label: '+91 93636 16166', href: 'tel:+91 93636 16166', icon: <Phone fontSize="small" /> }
  ];
  
  const mobileNavLinks = [
    { component: <StudyAbroadDropdown isMobile={true} /> },
    { label: 'About us', href: '/about-us' },
    { label: 'Our services', href: '/our-services' },
    { label: '+91 93636 16166', href: 'tel:+91 93636 16166', icon: <Phone fontSize="small" /> }
  ];

  const handleNavClick = (href) => {
    if (href && href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      setIsOpen(false);
    }
  };

  return (
    <nav className="bg-gradient-to-br from-white/95 via-white to-white backdrop-blur fixed w-full z-50 border-b border-gray-100 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div 
            onClick={() => navigate('/')} 
            className="flex items-center cursor-pointer transform hover:scale-105 transition-all duration-300 p-10"
          >
            <img 
              src={logo} 
              alt="logo" 
              className="w-28 h-auto object-contain"
            />
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8 lg:space-x-10">
            {navLinks.map((link, index) => (
              link.component ? (
                <div key={index} className="hover:opacity-80 transition-opacity">{link.component}</div>
              ) : (
                <NavLink key={index} href={link.href} isWa={link.isWa} onClick={() => handleNavClick(link.href)}>
                  {link.icon && <span className="text-orange-500">{link.icon}</span>}
                  <span>{link.label}</span>
                </NavLink>
              )
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-700 hover:text-orange-500 transition-all duration-300 p-2 hover:bg-orange-500/10 rounded-xl"
              aria-label="Toggle menu"
            >
              {isOpen ? <Close className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-br from-white/90 via-white to-white backdrop-blur shadow-xl border-t border-gray-100">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {mobileNavLinks.map((link, index) => (
              link.component ? (
                <div key={index} className="px-3 py-2">{link.component}</div>
              ) : (
                <NavLink key={index} href={link.href} isMobile={true} isWa={link.isWa} onClick={() => handleNavClick(link.href)}>
                  {link.icon && <span className="text-orange-500">{link.icon}</span>}
                  <span>{link.label}</span>
                </NavLink>
              )
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 