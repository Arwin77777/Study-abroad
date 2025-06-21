import { useState } from 'react';
import { Menu, Close, ExpandMore, WhatsApp, Phone } from '@mui/icons-material';
import StudyAbroadDropdown from './StudyAbroadDropdown';
import logo from '../assets/FUTURE FORGE CONSULTANCY .png';
import { useNavigate } from 'react-router-dom';

const NavLink = ({ href, children, isMobile, isWa, onClick }) => {
  const baseClasses = "flex items-center space-x-1 cursor-pointer transition-colors duration-300";
  const desktopClasses = `py-2 border-b-2 border-transparent ${isWa ? 'text-[#336b87] font-medium hover:text-green-600 hover:border-green-600' : 'text-[#336b87] font-medium hover:text-[#336b87] hover:border-[#336b87]'}`;
  const mobileClasses = `py-3 px-3 rounded-md text-base ${isWa ? 'hover:bg-green-50 hover:text-green-700' : 'hover:bg-[#336b87]/10 hover:text-[#336b87]'}`;
  
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
  { label: 'WhatsApp Us', href: 'https://wa.me/1234567890', icon: <WhatsApp fontSize="small" />, isWa: true },
    { label: '+1 (234) 567-890', href: 'tel:+1234567890', icon: <Phone fontSize="small" /> }
  ];
  
  const mobileNavLinks = [
    { component: <StudyAbroadDropdown isMobile={true} /> },
    { label: 'About us', href: '#about-us' },
    { label: 'Help' },
    { label: 'WhatsApp Us', href: 'https://wa.me/1234567890', icon: <WhatsApp fontSize="small" />, isWa: true },
    { label: '+1 (234) 567-890', href: 'tel:+1234567890', icon: <Phone fontSize="small" /> }
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
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div style={{cursor: 'pointer'}} onClick={() => navigate('/')} className="flex items-center">
            <img src={logo} alt="logo" className="h-12" />
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
              className="text-[#336b87] hover:text-[#336b87]/80"
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