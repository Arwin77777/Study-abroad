import { motion } from 'framer-motion';
import { MailOutline } from '@mui/icons-material';
import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const indianStates = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana",
  "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
  "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
  "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal", "Andaman and Nicobar Islands",
  "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu", "Delhi", "Jammu and Kashmir", "Ladakh",
  "Lakshadweep", "Puducherry"
];

const ContactUsModal = ({ open, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    email: '',
    state: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    if (submitStatus) {
      const timer = setTimeout(() => setSubmitStatus(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  // Validation patterns
  const validationPatterns = {
    name: /^[a-zA-Z\s]{2,50}$/,
    contact: /^(\+91[\s]?)?[789]\d{9}$/,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  };

  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Name is required';
        if (!validationPatterns.name.test(value.trim())) {
          return 'Name should be 2-50 characters long and contain only letters and spaces';
        }
        break;
      case 'contact':
        if (!value.trim()) return 'Contact number is required';
        if (!validationPatterns.contact.test(value.trim())) {
          return 'Please enter a valid Indian mobile number (10 digits starting with 7, 8, or 9)';
        }
        break;
      case 'email':
        if (!value.trim()) return 'Email is required';
        if (!validationPatterns.email.test(value.trim())) {
          return 'Please enter a valid email address';
        }
        break;
      case 'state':
        if (!value) return 'Please select your state';
        break;
      default:
        return '';
    }
    return '';
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach(field => {
      const error = validateField(field, formData[field]);
      if (error) {
        newErrors[field] = error;
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    setSubmitStatus(null);
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    const serviceId = 'service_t67izrn';
    const templateId = 'template_tatpvn9';
    emailjs.init('xNwQn8UBjxDukCjle');

    emailjs.send(serviceId, templateId, formData)
      .then(() => {
        setSubmitStatus('success');
        setIsSubmitting(false);
        setFormData({
          name: '',
          contact: '',
          email: '',
          state: ''
        });
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);
        setSubmitStatus('error');
        setIsSubmitting(false);
      });
  };

  const getInputClasses = (fieldName) => {
    return `w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#336b87] transition-shadow ${errors[fieldName] ? 'border-red-500' : 'border-gray-300'}`;
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 50, scale: 0.9 }}
        className="bg-gradient-to-br from-[#ffecb3] to-[#ffe082] rounded-2xl shadow-2xl w-full max-w-md p-8 relative m-4 mt-20"
      >
        <motion.button
          whileHover={{ scale: 1.1, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
          className="absolute top-4 right-4 text-[#336b87]/70 hover:text-[#336b87] text-3xl"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </motion.button>
        <div className="flex items-center mb-6">
          <span className="text-[#336b87] mr-3">
            <MailOutline sx={{ fontSize: 32 }} />
          </span>
          <h3 className="text-2xl font-bold text-[#336b87]">Contact Us</h3>
        </div>
        <form className="space-y-2" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={getInputClasses('name')}
              placeholder="Eg. Alex Kumar"
              required
              disabled={isSubmitting}
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Contact number</label>
            <input
              type="tel"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              className={getInputClasses('contact')}
              placeholder="+91 9876543210"
              required
              disabled={isSubmitting}
            />
            {errors.contact && <p className="text-red-500 text-sm mt-1">{errors.contact}</p>}
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={getInputClasses('email')}
              placeholder="Eg. alex@gmail.com"
              required
              disabled={isSubmitting}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-1">State</label>
            <select
              name="state"
              value={formData.state}
              onChange={handleChange}
              className={`${getInputClasses('state')} bg-white`}
              required
              disabled={isSubmitting}
            >
              <option value="" disabled>Select your state</option>
              {indianStates.map(state => (
                <option key={state} value={state}>{state}</option>
              ))}
            </select>
            {errors.state && <p className="text-red-500 text-sm mt-1">{errors.state}</p>}
          </div>

          <div className="h-12">
            <motion.button
              type="submit"
              whileHover={{ scale: 1 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
              className="w-full bg-gradient-to-r from-[#ffb74d] to-[#ff8a65] hover:from-[#ff7043] hover:to-[#ff5722] text-white font-semibold py-3 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </motion.button>
          </div>
          {submitStatus === 'success' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-green-800">
              Message sent successfully!
            </motion.div>
          )}
          {submitStatus === 'error' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-800">
              Failed to send. Please try again.
            </motion.div>
          )}
        </form>
      </motion.div>
    </div>
  );
};

export default ContactUsModal; 