import { useState } from 'react';
import ContactUsModal from './ContactUsModal';

const ContactUsButton = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        className="fixed bottom-6 right-6 z-50 flex items-center bg-purple-400 hover:bg-purple-500 text-black font-bold px-5 py-3 rounded-full shadow-lg transition group"
        onClick={() => setOpen(true)}
        aria-label="Contact Us"
      >
        <span className="mr-2">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 7L12 2L22 7L12 12L2 7Z" fill="#fff"/>
            <path d="M6 10V15C6 17.2091 9.13401 19 12 19C14.866 19 18 17.2091 18 15V10" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
        <span className="font-semibold">Contact Us</span>
      </button>
      <ContactUsModal open={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default ContactUsButton; 