import { useState } from 'react';
import { Menu, Close, ExpandMore, Phone } from '@mui/icons-material';
import StudyAbroadDropdown from './StudyAbroadDropdown';
import logo from '../assets/FUTURE FORGE CONSULTANCY .png';
import { useNavigate } from 'react-router-dom';

const NavLink = ({ href, children, isMobile, isWa, onClick }) => {
  const baseClasses = "flex items-center space-x-1 cursor-pointer transition-colors duration-300";
  const desktopClasses = `py-2 border-b-2 border-transparent ${isWa ? 'text-[#336b87] font-medium hover:text-green-300 hover:border-green-300' : 'text-[#336b87] font-medium hover:text-[#f0f8ff] hover:border-[#f0f8ff]'}`;
  const mobileClasses = `py-3 px-3 rounded-md text-base ${isWa ? 'hover:bg-green-50 hover:text-green-700' : 'hover:bg-[#f0f8ff]/10 hover:text-[#f0f8ff]'}`;
  
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
    <nav className="bg-white/60 shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div style={{cursor: 'pointer', width: '100px', height: '120px', padding: '5px'}} onClick={() => navigate('/')} className="flex items-center">
            <img src={logo} alt="logo"  />
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link, index) => (
              link.component ? <div key={index}>{link.component}</div> : (
                <NavLink key={index} href={link.href} isWa={link.isWa} onClick={() => handleNavClick(link.href)}>
                  {link.icon}
                  <span>{link.label}</span>
                </NavLink>
              )
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#336b87] hover:text-[#f0f8ff]/80"
            >
              {isOpen ? <Close fontSize="large" /> : <Menu fontSize="large" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-4 pt-2 pb-4 space-y-1">
            {mobileNavLinks.map((link, index) => (
              link.component ? <div key={index} className="px-3">{link.component}</div> : (
                <NavLink key={index} href={link.href} isMobile={true} isWa={link.isWa} onClick={() => handleNavClick(link.href)}>
                  {link.icon}
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