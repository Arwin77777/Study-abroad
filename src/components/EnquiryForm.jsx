import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

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
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null

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
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const templateParams = {
        from_name: formData.name.trim(),
        from_contact: formData.contact.trim(),
        from_email: formData.email.trim(),
        from_state: formData.state,
        needed_course: formData.course.trim(),
        other_comments: formData.comments.trim(),
        to_name: 'Admin'
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
         console.log('SUCCESS!', response.status, response.text);
         setSubmitStatus('success');
         setIsSubmitting(false);
         // Reset form after a short delay
         setTimeout(() => {
            setFormData({ name: '', contact: '', email: '', state: '', course: '', comments: '' });
            setErrors({});
            setSubmitStatus(null);
         }, 3000);
      }, (err) => {
         console.error('FAILED...', err);
         setSubmitStatus('error');
         setIsSubmitting(false);
         // Optionally, hide error after some time
         setTimeout(() => {
            setSubmitStatus(null);
         }, 5000);
      });
  };

  const inputClasses = "w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#336b87] focus:border-transparent transition-shadow shadow-sm disabled:bg-gray-100";
  const getInputClasses = (fieldName) => {
    return `${inputClasses} ${errors[fieldName] ? 'border-red-500' : 'border-gray-300'}`;
  };

  return (
    <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-[#336b87]/20 shadow-xl">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          <div className="form-group">
            <label htmlFor="name" className="block text-sm font-medium text-black mb-2">Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              className={getInputClasses('name')} 
              required 
              placeholder="John Doe" 
              disabled={isSubmitting} 
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="contact" className="block text-sm font-medium text-black mb-2">Contact Number</label>
            <input 
              type="tel" 
              id="contact" 
              name="contact" 
              value={formData.contact} 
              onChange={handleChange} 
              className={getInputClasses('contact')} 
              required 
              placeholder="+91 12345 67890" 
              disabled={isSubmitting} 
            />
            {errors.contact && <p className="text-red-500 text-sm mt-1">{errors.contact}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="email" className="block text-sm font-medium text-black mb-2">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              className={getInputClasses('email')} 
              placeholder="john.doe@example.com" 
              disabled={isSubmitting} 
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="state" className="block text-sm font-medium text-black mb-2">State</label>
            <select
              id="state"
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
          <div className="form-group md:col-span-2">
            <label htmlFor="course" className="block text-sm font-medium text-black mb-2">Needed Course <span className="text-[#336b87]">(Optional)</span></label>
            <input 
              type="text" 
              id="course" 
              name="course" 
              value={formData.course} 
              onChange={handleChange} 
              className={getInputClasses('course')} 
              placeholder="e.g., Computer Science" 
              disabled={isSubmitting} 
            />
            {errors.course && <p className="text-red-500 text-sm mt-1">{errors.course}</p>}
          </div>
          <div className="form-group md:col-span-2">
            <label htmlFor="comments" className="block text-sm font-medium text-black mb-2">Other Comments <span className="text-[#336b87]">(Optional)</span></label>
            <textarea 
              id="comments" 
              name="comments" 
              value={formData.comments} 
              onChange={handleChange} 
              rows="2" 
              className={getInputClasses('comments')} 
              placeholder="Any additional information..." 
              disabled={isSubmitting}
            ></textarea>
            {errors.comments && <p className="text-red-500 text-sm mt-1">{errors.comments}</p>}
          </div>
        </div>
        <div className="text-center mt-8">
          <button type="submit" className="bg-[#336b87] text-white font-bold px-10 py-4 rounded-full shadow-lg hover:bg-[#336b87]/90 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-[#336b87]/30 disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit Enquiry'}
          </button>
        </div>
        <div className="mt-4 h-6 text-center">
            {submitStatus === 'success' && (
              <p className="text-green-600 font-semibold">Enquiry sent successfully!</p>
            )}
            {submitStatus === 'error' && (
              <p className="text-red-600 font-semibold">Failed to send enquiry. Please try again.</p>
            )}
        </div>
      </form>
    </div>
  );
};

export default EnquiryForm; 