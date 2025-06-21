import React from 'react';
import { Phone, Mail, WhatsApp, Instagram, Facebook, Twitter, LinkedIn } from '@mui/icons-material';
import logo from '../assets/FUTURE FORGE CONSULTANCY .png';
import { useNavigate } from 'react-router-dom';

const ContactFooter = () => {
    const navigate = useNavigate();
  return (
    <footer className="bg-[#336b87] text-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Logo and About */}
          <div className="md:col-span-2 lg:col-span-1">
            <div style={{cursor: 'pointer'}} onClick={() => navigate('/')} className="mb-4">
              <img src={logo} alt="logo" className="h-20" />
            </div>
            <p className="text-white/80 text-sm">
              Your trusted partner in shaping futures. We provide expert guidance for students aspiring to study abroad, every step of the way.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4 tracking-wider">Contact Us</h3>
            <div className="space-y-3 text-white/80">
                <p className="flex items-center"><Phone fontSize="small" className="mr-3 text-white" /> +91 93636 16166 (TN)</p>
                <p className="flex items-center"><Phone fontSize="small" className="mr-3 text-white" /> +91 79044 04004 (KL)</p>
                <a href="mailto:info@futureforge.com" className="flex items-center hover:text-white transition-colors"><Mail fontSize="small" className="mr-3 text-white" /> info@futureforge.com</a>
                <a href="https://wa.me/919363616166" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-green-400 transition-colors"><WhatsApp fontSize="small" className="mr-3 text-green-400" /> WhatsApp Us</a>
            </div>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4 tracking-wider">Our Locations</h3>
            <div className="space-y-3 text-white/80">
                <div>
                    <p className="font-semibold text-white">Tamil Nadu Branch:</p>
                    <p className="text-sm">123 Future Street, Chennai, TN, 600001</p>
                </div>
                <div>
                    <p className="font-semibold text-white">Kerala Branch:</p>
                    <p className="text-sm">456 Forge Avenue, Kochi, KL, 682001</p>
                </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4 tracking-wider">Follow Us</h3>
            <div className="flex space-x-5">
              <a href="#" className="text-white/80 hover:text-white transition-colors"><Facebook fontSize="large"/></a>
              <a href="#" className="text-white/80 hover:text-white transition-colors"><Instagram fontSize="large"/></a>
              <a href="#" className="text-white/80 hover:text-white transition-colors"><Twitter fontSize="large"/></a>
              <a href="#" className="text-white/80 hover:text-white transition-colors"><LinkedIn fontSize="large"/></a>
            </div>
          </div>

        </div>
        <div className="mt-12 border-t border-white/20 pt-8 text-center text-white/80 text-sm">
          <p>&copy; {new Date().getFullYear()} Future Forge Consultancy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter; 