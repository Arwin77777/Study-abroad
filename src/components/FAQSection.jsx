import { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const faqs = [
  {
    q: 'How do I apply for a UK student visa?',
    a: 'You need to receive an offer from a UK university, prepare your documents, and apply online through the UK government website.'
  },
  {
    q: 'Can I work while studying in the UK?',
    a: 'Yes, international students can work up to 20 hours per week during term time.'
  },
  {
    q: 'What is the cost of living in the UK?',
    a: 'It varies by city, but you should budget for accommodation, food, transport, and entertainment.'
  },
];

const FAQSection = () => {
  const [open, setOpen] = useState(null);
  return (
    <div className="max-w-2xl mx-auto">
      {faqs.map((faq, i) => (
        <div key={i} className="mb-4 border rounded-xl bg-white shadow">
          <button
            className="w-full flex justify-between items-center p-4 text-left font-semibold text-lg focus:outline-none"
            onClick={() => setOpen(open === i ? null : i)}
          >
            {faq.q}
            <ExpandMoreIcon className={`transition-transform ${open === i ? 'rotate-180' : ''}`} />
          </button>
          {open === i && (
            <div className="p-4 pt-0 text-gray-700 border-t">{faq.a}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQSection; 