import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail } from 'lucide-react';
import ContactUsModal from './ContactUsModal';

const ContactUsButton = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <motion.button
        onClick={openModal}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-8 right-8 bg-orange-500 hover:bg-orange-600 text-white w-16 h-16 rounded-xl shadow-xl hover:shadow-2xl hover:shadow-orange-500/25 flex items-center justify-center z-40 transition-all duration-300"
        aria-label="Contact Us"
      >
        <Mail className="w-8 h-8" />
      </motion.button>
      
      <AnimatePresence>
        {modalOpen && <ContactUsModal open={modalOpen} onClose={closeModal} />}
      </AnimatePresence>
    </>
  );
};

export default ContactUsButton; 