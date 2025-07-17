import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const indianStates = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", 
  "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", 
  "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", 
  "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal", "Andaman and Nicobar Islands", 
  "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu", "Delhi", "Jammu and Kashmir", "Ladakh", 
  "Lakshadweep", "Puducherry"
];

const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    email: '',
    state: '',
    course: '',
    comments: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Validation patterns
  const validationPatterns = {
    name: /^[a-zA-Z\s]{2,50}$/,
    contact: /^(\+91[\s]?)?[789]\d{9}$/,  
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    course: /^[a-zA-Z\s.]{0,100}$/,
    comments: /^[\s\S]{0,500}$/
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
      case 'course':
        if (value.trim() && !validationPatterns.course.test(value.trim())) {
          return 'Course name should be less than 100 characters and contain only letters, spaces, hyphens, and dots';
        }
        break;
      case 'comments':
        if (value.trim() && !validationPatterns.comments.test(value.trim())) {
          return 'Comments should be less than 500 characters';
        }
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
    e.preventDefault();
  
    if (!validateForm()) return;
  
    setIsSubmitting(true);
  
    const serviceId = 'service_t67izrn';
    const templateId = 'template_tatpvn9';
    emailjs.init('xNwQn8UBjxDukCjle');
  
    emailjs.send(serviceId, templateId, formData)
      .then(() => {
        setIsSubmitting(false);
        setFormData({
          name: '',
          contact: '',
          email: '',
          state: '',
          course: '',
          comments: ''
        });
        toast.success('Form submitted successfully!');
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);
        setIsSubmitting(false);
        toast.error('There was an error submitting the form.');
      });
  };

  // Apply gradient background to the form container
  const inputClasses = "w-full px-2 py-2 border rounded-lg focus:ring-2 focus:ring-[#4f91b7] focus:border-transparent transition-shadow shadow-sm disabled:bg-gray-100 text-sm";
  const getInputClasses = (fieldName) => {
    return `${inputClasses} ${errors[fieldName] ? 'border-red-500' : 'border-gray-300'}`;
  };

  return (
    <div className="rounded-2xl p-4 md:p-6 shadow-xl">
      <ToastContainer />
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-x-4 gap-y-4">
          <div className="form-group">
            <label htmlFor="name" className="block text-xs font-semibold text-white mb-1">Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              className={getInputClasses('name')} 
              required 
              placeholder="Eg. Alex Kumar" 
              disabled={isSubmitting} 
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="contact" className="block text-xs font-semibold text-white mb-1">Contact Number</label>
            <input 
              type="tel" 
              id="contact" 
              name="contact" 
              value={formData.contact} 
              onChange={handleChange} 
              className={getInputClasses('contact')} 
              required 
              placeholder="+91 9876543210" 
              disabled={isSubmitting} 
            />
            {errors.contact && <p className="text-red-500 text-xs mt-1">{errors.contact}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="email" className="block text-xs font-semibold text-white mb-1">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              className={getInputClasses('email')} 
              placeholder="Eg. alex@gmail.com" 
              disabled={isSubmitting} 
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="state" className="block text-xs font-semibold text-white mb-1">State</label>
            <select
              id="state"
              name="state"
              value={formData.state}
              onChange={handleChange}
              className={`${getInputClasses('state')} bg-white text-sm`}
              required
              disabled={isSubmitting}
            >
              <option value="" disabled>Select your state</option>
              {indianStates.map(state => (
                <option key={state} value={state}>{state}</option>
              ))}
            </select>
            {errors.state && <p className="text-red-500 text-xs mt-1">{errors.state}</p>}
          </div>
          <div className="form-group md:col-span-2">
            <label htmlFor="course" className="block text-xs font-semibold text-white mb-1">Needed Course <span className="text-white">(Optional)</span></label>
            <input 
              type="text" 
              id="course" 
              name="course" 
              value={formData.course} 
              onChange={handleChange} 
              className={getInputClasses('course')} 
              placeholder="Eg. Computer Science" 
              disabled={isSubmitting} 
            />
            {errors.course && <p className="text-red-500 text-xs mt-1">{errors.course}</p>}
          </div>
          <div className="form-group md:col-span-2">
            <label htmlFor="comments" className="block text-xs font-medium text-white mb-1">Other Comments <span className="text-white">(Optional)</span></label>
            <textarea 
              id="comments" 
              name="comments" 
              value={formData.comments} 
              onChange={handleChange} 
              rows="2" 
              className={getInputClasses('comments')} 
              placeholder="Eg. I want to know more about the course" 
              disabled={isSubmitting} 
            />
            {errors.comments && <p className="text-red-500 text-xs mt-1">{errors.comments}</p>}
          </div>
        </div>
        <div className="mt-4">
          <button 
            type="submit" 
            className="w-full bg-[#336b87] text-white py-2 rounded-lg shadow-md hover:bg-[#285f6b] transition-colors disabled:opacity-50"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
          {/* {submitStatus && <p className={`mt-2 text-sm ${submitStatus === 'success' ? 'text-green-500' : 'text-red-500'}`}>{submitStatus === 'success' ? 'Form submitted successfully!' : 'There was an error submitting the form.'}</p>} */}
        </div>
      </form>
    </div>
  );
};

export default EnquiryForm;