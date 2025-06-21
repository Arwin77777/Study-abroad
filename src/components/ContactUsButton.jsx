import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MailOutline, Close } from '@mui/icons-material';
import ContactUsModal from './ContactUsModal';

const ContactUsButton = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <motion.button
        onClick={openModal}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 bg-[#336b87] text-white w-16 h-16 rounded-full shadow-lg flex items-center justify-center z-40"
        aria-label="Contact Us"
      >
        <MailOutline fontSize="large" />
      </motion.button>
      
      <AnimatePresence>
        {modalOpen && <ContactUsModal open={modalOpen} onClose={closeModal} />}
      </AnimatePresence>
    </>
  );
};

export default ContactUsButton; 