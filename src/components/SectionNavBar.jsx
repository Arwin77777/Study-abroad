import { useState, useEffect } from 'react';

const sections = [
  { id: 'key-details', label: 'Key Details' },
  { id: 'top-universities', label: 'Top Universities' },
  { id: 'fees', label: 'Fees' },
  { id: 'requirements', label: 'Requirements' },
  { id: 'courses', label: 'Courses' },
  { id: 'visa-travel', label: 'Visa & travel' },
  { id: 'faq', label: 'FAQ' },
];

const SectionNavBar = () => {
  const [active, setActive] = useState('key-details');

  useEffect(() => {
    const handleScroll = () => {
      let found = 'key-details';
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el && window.scrollY + 120 >= el.offsetTop) {
          found = section.id;
        }
      }
      setActive(found);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="bg-white sticky top-[64px] z-40 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <ul className="flex flex-nowrap justify-start md:justify-center space-x-8 text-lg font-medium overflow-x-auto whitespace-nowrap scrollbar-hide">
          {sections.map((section) => (
            <li key={section.id} className="flex-shrink-0">
              <a
                href={`#${section.id}`}
                className={`block py-4 px-2 transition-colors border-b-2 ${
                  active === section.id
                    ? 'text-primary border-primary' : 'text-gray-900 border-transparent hover:text-primary'
                }`}
              >
                {section.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default SectionNavBar; 