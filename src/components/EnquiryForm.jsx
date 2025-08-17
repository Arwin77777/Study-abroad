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

  // Apply modern styling to form elements
  const inputClasses = "w-full px-4 py-3 bg-white border rounded-xl focus:ring-2 focus:ring-orange-500/30 focus:border-orange-500 transition-all duration-300 shadow-sm placeholder-gray-400 text-gray-700";
  const getInputClasses = (fieldName) => {
    return `${inputClasses} ${errors[fieldName] ? 'border-red-500' : 'border-gray-200 hover:border-orange-500/50'}`;
  };

  return (
    <div className="rounded-2xl p-6 md:p-8 bg-white/95 backdrop-blur-md shadow-xl">
      <ToastContainer 
        position="top-right"
        theme="light"
        toastClassName="bg-white text-gray-800"
      />
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="form-group">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
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
            {errors.name && <p className="text-red-600 text-xs mt-2">{errors.name}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="contact" className="block text-sm font-medium text-gray-700 mb-2">Contact Number</label>
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
            {errors.contact && <p className="text-red-600 text-xs mt-2">{errors.contact}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
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
            {errors.email && <p className="text-red-600 text-xs mt-2">{errors.email}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-2">State</label>
            <select
              id="state"
              name="state"
              value={formData.state}
              onChange={handleChange}
              className={`${getInputClasses('state')} appearance-none bg-white`}
              required
              disabled={isSubmitting}
            >
              <option value="" disabled>Select your state</option>
              {indianStates.map(state => (
                <option key={state} value={state} className="text-gray-700">{state}</option>
              ))}
            </select>
            {errors.state && <p className="text-red-600 text-xs mt-2">{errors.state}</p>}
          </div>
          <div className="form-group sm:col-span-2">
            <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-2">
              Needed Course <span className="text-gray-500 text-sm">(Optional)</span>
            </label>
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
            {errors.course && <p className="text-red-600 text-xs mt-2">{errors.course}</p>}
          </div>
          <div className="form-group sm:col-span-2">
            <label htmlFor="comments" className="block text-sm font-medium text-gray-700 mb-2">
              Other Comments <span className="text-gray-500 text-sm">(Optional)</span>
            </label>
            <textarea 
              id="comments" 
              name="comments" 
              value={formData.comments} 
              onChange={handleChange} 
              rows="3" 
              className={`${getInputClasses('comments')} resize-none`}
              placeholder="Eg. I want to know more about the course" 
              disabled={isSubmitting} 
            />
            {errors.comments && <p className="text-red-600 text-xs mt-2">{errors.comments}</p>}
          </div>
        </div>
        <div className="pt-2">
          <button 
            type="submit" 
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-xl font-semibold text-lg shadow-lg hover:shadow-orange-500/25 transition-all duration-300 disabled:opacity-50 disabled:hover:bg-orange-500"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Submitting...
              </span>
            ) : 'Get Free Counselling'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default EnquiryForm;