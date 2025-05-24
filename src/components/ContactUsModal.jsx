const ContactUsModal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-8 relative animate-fadeIn">
        <button
          className="absolute top-3 right-3 text-gray-400 hover:text-primary text-2xl font-bold"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>
        <div className="flex items-center mb-6">
          <span className="text-primary mr-2">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 7L12 2L22 7L12 12L2 7Z" fill="#a78bfa"/>
              <path d="M6 10V15C6 17.2091 9.13401 19 12 19C14.866 19 18 17.2091 18 15V10" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
          <h3 className="text-2xl font-bold text-primary">Enquiry Form</h3>
        </div>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Name</label>
            <input type="text" className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Your Name" />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Email</label>
            <input type="email" className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary" placeholder="you@email.com" />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Message</label>
            <textarea className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary" rows={4} placeholder="How can we help you?" />
          </div>
          <button type="submit" className="w-full bg-purple-200 hover:bg-purple-300 text-black font-semibold py-2 rounded-md transition">Send Enquiry</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUsModal; 