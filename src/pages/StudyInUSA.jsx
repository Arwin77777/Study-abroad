import React, { useState } from 'react';

const facts = [
  {
    icon: '🏅',
    title: "World's most popular international student destination.",
  },
  {
    icon: '🗽',
    title: "New York is world's financial capital (with London).",
  },
  {
    icon: '🎓',
    title: <><span className="font-bold text-2xl">948,519+</span><br/>International students studying in the United States.</>,
  },
  {
    icon: '👨‍🔬',
    title: (
      <>
        Nobel Laureates Prize Winners<br />Largest number in the world.
      </>
    ),
  },
  {
    icon: '🌎',
    title: (
      <>
        World's Largest<br />economy
      </>
    ),
  },
  {
    icon: '🏢',
    title: (
      <>
        124 of Fortune 500 companies<br />are from USA
      </>
    ),
  },
];

const cardSections = [
  {
    key: 'quick-facts',
    icon: '🔎',
    title: 'Quick Facts',
    content: (
      <div>
        <h2 className="text-xl font-bold mb-2">Location:</h2>
        <p className="mb-4">The United States of America is the world's third largest country in size and nearly the third largest in terms of population. The United States of America also known as the USA is located in Central North America between Canada and Mexico. It consists of 50 states and 1 Federal District Washington DC which is the Capital of USA. 2 of its states do not share any boundary with the country. The USA also has many territories in the Pacific Ocean and the Caribbean Sea.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-50 rounded-xl p-4 mb-4">
          <ul className="space-y-2 text-orange-500">
            <li>➔ <span className="text-gray-900">Area:</span> 9.834 Million KM²</li>
            <li>➔ <span className="text-gray-900">Source:</span> worlddata.info</li>
            <li>➔ <span className="text-gray-900">Distance from India:</span> 13,568 Kilometers</li>
            <li>➔ <span className="text-gray-900">Population of USA:</span> 33,42 Crores</li>
            <li>➔ <span className="text-gray-900">Source:</span> Worldometers.info</li>
            <li>➔ <span className="text-gray-900">Time Zone:</span> There are 9 time zones by law in the USA.</li>
            <li>➔ <span className="text-gray-900">Eastern Time:</span> UTC – 4.00</li>
          </ul>
          <ul className="space-y-2 text-orange-500">
            <li>➔ <span className="text-gray-900">Central Time:</span> UTC – 5.00</li>
            <li>➔ <span className="text-gray-900">Mountain Time:</span> UTC – 6.00</li>
            <li>➔ <span className="text-gray-900">Pacific Time:</span> UTC – 7.00</li>
            <li>➔ <span className="text-gray-900">Hawaii Time:</span> UTC – 10.00</li>
            <li>➔ <span className="text-gray-900">Alaskan Time:</span> UTC – 8.00</li>
          </ul>
        </div>
        <button className="mt-4 bg-orange-400 text-white font-bold px-6 py-3 rounded-full shadow hover:bg-orange-500 transition">CLICK HERE TO SEE ALL USA UNIVERSITIES</button>
      </div>
    ),
  },
  {
    key: 'why-study',
    icon: '🎓',
    title: 'Why Study in The USA?',
    content: (
      <div>
        <h2 className="text-xl font-bold mb-2">Why Study in The USA?</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>World-class universities and colleges with a wide range of programs.</li>
          <li>Cutting-edge research and innovation opportunities.</li>
          <li>Multicultural environment and global exposure.</li>
          <li>Flexible education system and curriculum.</li>
          <li>Excellent career prospects and networking opportunities.</li>
        </ul>
      </div>
    ),
  },
  {
    key: 'living',
    icon: '🏠',
    title: 'Living in the USA',
    content: (
      <div>
        <h2 className="text-xl font-bold mb-2">Living in the USA</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Diverse culture and vibrant student life.</li>
          <li>Wide range of accommodation options.</li>
          <li>Access to world-class facilities and amenities.</li>
          <li>Opportunities for travel and exploration.</li>
          <li>Support services for international students.</li>
        </ul>
      </div>
    ),
  },
  {
    key: 'money-matters',
    icon: '💵',
    title: 'Money Matters',
    content: (
      <div>
        <h2 className="text-xl font-bold mb-2">Money Matters</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Tuition fees vary by institution and program.</li>
          <li>Living expenses depend on location and lifestyle.</li>
          <li>Scholarships and financial aid available for international students.</li>
          <li>Part-time work opportunities on and off campus.</li>
          <li>Plan your finances and budget wisely.</li>
        </ul>
      </div>
    ),
  },
  {
    key: 'visa-process',
    icon: '🛂',
    title: 'Visa Process',
    content: (
      <div>
        <h2 className="text-xl font-bold mb-2">Visa Process</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Apply and get accepted to a SEVP-certified US school.</li>
          <li>Pay the SEVIS fee and receive your I-20 form.</li>
          <li>Complete the DS-160 visa application form online.</li>
          <li>Schedule and attend your visa interview at the US embassy/consulate.</li>
          <li>Prepare required documents and attend the interview.</li>
        </ul>
      </div>
    ),
  },
  {
    key: 'arrival',
    icon: '🏨',
    title: 'Arrival & Accommodation',
    content: (
      <div>
        <h2 className="text-xl font-bold mb-2">Arrival & Accommodation</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Plan your travel and arrival in advance.</li>
          <li>Arrange temporary or permanent accommodation before arrival.</li>
          <li>Check university-arranged housing or private rentals.</li>
          <li>Attend orientation programs for international students.</li>
          <li>Familiarize yourself with local transportation and amenities.</li>
        </ul>
      </div>
    ),
  },
  {
    key: 'employment',
    icon: '🤝',
    title: 'Employment Prospects',
    content: (
      <div>
        <h2 className="text-xl font-bold mb-2">Employment Prospects</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>On-campus and off-campus work opportunities for students.</li>
          <li>Optional Practical Training (OPT) and Curricular Practical Training (CPT) programs.</li>
          <li>Internships and co-op programs to gain work experience.</li>
          <li>Strong job market for STEM and business graduates.</li>
          <li>Networking events and career fairs at universities.</li>
        </ul>
      </div>
    ),
  },
  // {
  //   key: 'gallery',
  //   icon: '🖼️',
  //   title: 'Gallery',
  //   content: (
  //     <div>
  //       <h2 className="text-xl font-bold mb-2">Gallery</h2>
  //       <p>Explore photos and videos of campus life, events, and student experiences in the USA.</p>
  //       <div className="mt-4 flex flex-wrap gap-4">
  //         <div className="w-40 h-28 bg-gray-200 rounded-lg flex items-center justify-center">Image 1</div>
  //         <div className="w-40 h-28 bg-gray-200 rounded-lg flex items-center justify-center">Image 2</div>
  //         <div className="w-40 h-28 bg-gray-200 rounded-lg flex items-center justify-center">Image 3</div>
  //       </div>
  //     </div>
  //   ),
  // },
  {
    key: 'list',
    icon: '📋',
    title: 'List',
    content: (
      <div>
        <h2 className="text-xl font-bold mb-2">List</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Top universities in the USA</li>
          <li>Popular courses for international students</li>
          <li>Scholarship opportunities</li>
          <li>Student support services</li>
          <li>Useful resources and links</li>
        </ul>
      </div>
    ),
  },
];

// University data (sample, can be expanded or replaced with real data)
const universities = [
  {
    name: 'Harvard University',
    image: 'https://www.harvard.edu/wp-content/uploads/2020/09/harvard-yard-1-1600x900.jpg',
    short: 'Prestigious Ivy League university in Cambridge, MA.',
    details: 'Harvard University, established in 1636, is the oldest institution of higher education in the United States. It is renowned for its academic excellence, distinguished faculty, and global influence. Harvard offers a wide range of undergraduate and graduate programs and is known for its beautiful campus and vibrant student life.'
  },
  {
    name: 'Stanford University',
    image: 'https://news.stanford.edu/wp-content/uploads/2022/08/StanfordCampusAerial-1600x900.jpg',
    short: 'Leading research university in Silicon Valley, CA.',
    details: 'Stanford University is a world-renowned private research university located in Stanford, California. It is known for its entrepreneurial spirit, cutting-edge research, and close ties to Silicon Valley. Stanford offers top programs in engineering, business, and the sciences.'
  },
  {
    name: 'Massachusetts Institute of Technology (MIT)',
    image: 'https://mitadmissions.org/wp-content/uploads/2018/08/mit-dome.jpg',
    short: 'Top-ranked institute for science and technology in Cambridge, MA.',
    details: 'MIT is a global leader in science, engineering, and technology education and research. The institute is known for its rigorous curriculum, innovative research, and a collaborative culture that fosters creativity and problem-solving.'
  },
  {
    name: 'California Institute of Technology (Caltech)',
    image: 'https://www.caltech.edu/sites/default/files/styles/hero_image/public/2021-10/Caltech_Campus_0.jpg',
    short: 'Small, elite science and engineering school in Pasadena, CA.',
    details: 'Caltech is a world-renowned science and engineering institute with a strong emphasis on research and discovery. It boasts a low student-to-faculty ratio and a collaborative academic environment.'
  },
  {
    name: 'University of Chicago',
    image: 'https://collegeadmissions.uchicago.edu/sites/default/files/styles/uc_main_carousel/public/images/2022-09/main-quadrangles.jpg',
    short: 'Private research university with a strong focus on economics and social sciences.',
    details: 'The University of Chicago is known for its rigorous scholarship, intellectual curiosity, and influential research in economics, law, and the social sciences. Its beautiful campus is located in the Hyde Park neighborhood of Chicago.'
  },
  {
    name: 'Columbia University',
    image: 'https://www.columbia.edu/content/sites/default/files/styles/cu_crop/public/content/Morningside%20Campus%20-%20College%20Walk.jpg',
    short: 'Ivy League university in New York City.',
    details: 'Columbia University is one of the oldest and most prestigious universities in the US. Located in Manhattan, it offers a diverse range of programs and is known for its global outlook and vibrant urban campus.'
  },
  {
    name: 'Princeton University',
    image: 'https://www.princeton.edu/sites/default/files/styles/half_2x/public/images/2022/08/20220824_Nassau_Hall_002.jpg',
    short: 'Ivy League university with a picturesque campus in New Jersey.',
    details: 'Princeton University is renowned for its commitment to undergraduate teaching, beautiful campus, and distinguished faculty. It offers top programs in the humanities, sciences, and engineering.'
  },
  {
    name: 'Yale University',
    image: 'https://news.yale.edu/sites/default/files/styles/featured_media/public/yale_yard_0.jpg',
    short: 'Historic Ivy League university in New Haven, CT.',
    details: 'Yale University is known for its rich history, outstanding faculty, and vibrant student life. It offers a wide range of programs and is particularly noted for its law, drama, and music schools.'
  },
  {
    name: 'University of Pennsylvania',
    image: 'https://penntoday.upenn.edu/sites/default/files/2022-08/20220825_campus_scenics_01.jpg',
    short: 'Ivy League university in Philadelphia, PA.',
    details: 'The University of Pennsylvania, founded by Benjamin Franklin, is known for its interdisciplinary approach, strong business and medical schools, and urban campus in Philadelphia.'
  },
  {
    name: 'Johns Hopkins University',
    image: 'https://hub.jhu.edu/media/_versions/articles/2022/08/blue-jay-campus-lead-1600x900.jpg',
    short: 'Leader in medical research and public health in Baltimore, MD.',
    details: 'Johns Hopkins University is a world leader in research, particularly in medicine and public health. It offers a collaborative academic environment and is committed to advancing knowledge for the benefit of humanity.'
  },
  {
    name: 'University of California, Berkeley',
    image: 'https://news.berkeley.edu/wp-content/uploads/2022/08/berkeleycampus-1600x900.jpg',
    short: 'Top public research university in California.',
    details: 'UC Berkeley is renowned for its academic excellence, vibrant campus life, and commitment to public service. It offers a wide range of programs and is a leader in research and innovation.'
  },
  {
    name: 'University of California, Los Angeles (UCLA)',
    image: 'https://newsroom.ucla.edu/file?fid=5f4e2e6e2cfac22b6c8b4567',
    short: 'Prestigious public university in Los Angeles, CA.',
    details: 'UCLA is known for its diverse student body, strong academic programs, and beautiful campus. It is a leader in research, arts, and athletics.'
  },
  {
    name: 'Duke University',
    image: 'https://today.duke.edu/sites/default/files/styles/lead_story/public/lead-images/2022/08/duke_chapel_summer2022.jpg',
    short: 'Private research university in Durham, NC.',
    details: 'Duke University is known for its rigorous academics, outstanding medical center, and vibrant campus life. It offers a wide range of undergraduate and graduate programs.'
  },
  {
    name: 'Northwestern University',
    image: 'https://www.northwestern.edu/about/images/arch.jpg',
    short: 'Private research university in Evanston, IL.',
    details: 'Northwestern University is known for its strong programs in journalism, business, and the performing arts. It offers a collaborative academic environment and a beautiful lakeside campus.'
  },
  {
    name: 'University of Michigan, Ann Arbor',
    image: 'https://record.umich.edu/wp-content/uploads/2022/08/082922_UMichCampus_01-1600x900.jpg',
    short: 'Top public research university in Michigan.',
    details: 'The University of Michigan is a leader in research, teaching, and public service. It offers a vibrant campus life and a wide range of academic programs.'
  },
  {
    name: 'Cornell University',
    image: 'https://news.cornell.edu/sites/default/files/styles/hero/public/2022-08/20220825_campus_scenics_01.jpg',
    short: 'Ivy League university in Ithaca, NY.',
    details: 'Cornell University is known for its diverse academic programs, beautiful campus, and commitment to public engagement. It offers top programs in agriculture, engineering, and hospitality.'
  },
  {
    name: 'Brown University',
    image: 'https://www.brown.edu/sites/g/files/dprerj316/files/styles/hero_xl/public/2022-08/20220825_campus_scenics_01.jpg',
    short: 'Ivy League university in Providence, RI.',
    details: 'Brown University is known for its open curriculum, vibrant campus culture, and commitment to undergraduate teaching. It offers a wide range of programs in the arts, sciences, and humanities.'
  },
  {
    name: 'New York University (NYU)',
    image: 'https://www.nyu.edu/content/dam/nyu/nyu-images/nyu-campus-hero.jpg',
    short: 'Major private university in New York City.',
    details: 'NYU is known for its global outlook, diverse student body, and strong programs in business, law, and the arts. Its main campus is located in the heart of Manhattan.'
  },
  {
    name: 'University of California, San Diego (UCSD)',
    image: 'https://ucpa.ucsd.edu/wp-content/uploads/2022/08/ucsd-campus-1600x900.jpg',
    short: 'Leading public research university in San Diego, CA.',
    details: 'UCSD is known for its strengths in science, engineering, and medicine. It offers a collaborative academic environment and a beautiful coastal campus.'
  },
  {
    name: 'Carnegie Mellon University',
    image: 'https://www.cmu.edu/news/stories/archives/2022/august/images/cmu-campus-1600x900.jpg',
    short: 'Private research university in Pittsburgh, PA.',
    details: 'Carnegie Mellon is renowned for its programs in computer science, engineering, and the arts. It fosters innovation and interdisciplinary collaboration.'
  },
];

// University Modal Component
function UniversityModal({ university, onClose }) {
  if (!university) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="bg-white max-w-lg w-full rounded-2xl shadow-2xl p-8 relative animate-fadeInUp">
        <button className="absolute top-3 right-3 text-2xl text-blue-500 hover:text-blue-700" onClick={onClose}>&times;</button>
        <img src={university.image} alt={university.name} className="w-full h-48 object-cover rounded-xl mb-4" />
        <h2 className="text-2xl font-bold mb-2 text-blue-800">{university.name}</h2>
        <p className="mb-4 text-gray-700">{university.details}</p>
      </div>
    </div>
  );
}

const StudyInUSA = () => {
  const [activeSection, setActiveSection] = useState(cardSections[0].key);
  const [selectedUniversity, setSelectedUniversity] = useState(null);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100 overflow-hidden flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-12 relative z-10 bg-gradient-to-br from-white via-blue-50 to-blue-100">
        {/* Right content */}
        <div className="flex-1 flex flex-col items-center md:items-start w-full">
          <div className="w-full flex justify-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-center bg-gradient-to-r from-sky-700 via-cyan-500 to-blue-400 bg-clip-text text-transparent drop-shadow-lg py-6 mb-6 rounded-xl">
              Study in USA
            </h1>
          </div>
          {/* Universities Section (moved to top) */}
          <div className="w-full max-w-7xl mx-auto mt-8 mb-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-blue-800">Top Universities in the USA</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-2 md:px-8">
              {universities.map((uni, idx) => (
                <div
                  key={uni.name}
                  className="bg-white/90 rounded-3xl shadow-xl p-6 flex flex-col items-center text-center cursor-pointer border border-blue-200 hover:shadow-2xl transition-shadow animate-fadeInUp"
                  style={{ animationDelay: `${idx * 60}ms`, animationFillMode: 'both' }}
                  onClick={() => setSelectedUniversity(uni)}
                >
                  <img src={uni.image} alt={uni.name} className="w-full h-32 object-cover rounded-xl mb-4" />
                  <div className="text-xl font-bold text-blue-700 mb-2">{uni.name}</div>
                  <div className="text-gray-700 text-sm">{uni.short}</div>
                </div>
              ))}
            </div>
          </div>
          <UniversityModal university={selectedUniversity} onClose={() => setSelectedUniversity(null)} />
          {/* Enhanced Facts Grid */}
          <h2 className="text-3xl font-bold text-center mb-8 text-blue-800">Why USA?</h2>
          <div className="w-full flex justify-center">
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-2 md:px-8">
              {facts.map((fact, idx) => (
                <div
                  key={idx}
                  className={`bg-white/90 rounded-3xl shadow-xl p-8 flex flex-col items-center text-center min-h-[180px] transition-shadow duration-200 hover:shadow-2xl border border-blue-200 animate-fadeInUp`}
                  style={{ animationDelay: `${idx * 100}ms`, animationFillMode: 'both' }}
                >
                  <div className="text-5xl mb-4 text-blue-500">{fact.icon}</div>
                  <div className="text-lg md:text-xl font-medium text-gray-900">
                    {fact.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Card Navigation Section with background */}
      <div className="w-full flex justify-center px-2">
        <div className="w-full max-w-7xl bg-gradient-to-br from-white via-blue-50 to-blue-100 rounded-3xl shadow-2xl px-4 py-12 flex flex-col items-center border border-blue-200">
          {/* Card Navigation */}
          <div className="w-full flex flex-wrap justify-center gap-6 mb-10">
            {cardSections.map((section, idx) => (
              <button
                key={section.key}
                onClick={() => setActiveSection(section.key)}
                className={`flex flex-col items-center justify-center w-56 h-40 rounded-2xl shadow-lg transition-all duration-200 p-6 min-w-[180px] min-h-[120px] cursor-pointer border-2 ${activeSection === section.key ? 'bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 text-blue-900 border-blue-400 shadow-2xl' : 'bg-white/90 text-blue-700 border-transparent hover:border-blue-300 hover:shadow-xl'}`}
                style={{ outline: activeSection === section.key ? '3px solid #38bdf8' : 'none', animationDelay: `${idx * 80}ms`, animationFillMode: 'both' }}
                tabIndex={0}
              >
                <div className="text-5xl mb-3">{section.icon}</div>
                <div className="text-lg font-semibold text-center">{section.title}</div>
              </button>
            ))}
          </div>
          {/* Card Content */}
          <div className="w-full max-w-4xl bg-gradient-to-br from-white via-blue-50 to-blue-100 rounded-2xl shadow-lg p-8 mt-2 mb-8 min-h-[200px] border border-blue-200 text-gray-900">
            {cardSections.find(s => s.key === activeSection)?.content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudyInUSA;