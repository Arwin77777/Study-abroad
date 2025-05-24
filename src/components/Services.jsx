import { School, Language, Assignment, Support } from '@mui/icons-material';

const services = [
  {
    icon: <School className="w-12 h-12 text-primary" />,
    title: "University Selection",
    description: "Expert guidance in choosing the right university and program that matches your academic goals and career aspirations."
  },
  {
    icon: <Language className="w-12 h-12 text-primary" />,
    title: "Language Preparation",
    description: "Comprehensive language training and preparation to ensure you're ready for your international academic journey."
  },
  {
    icon: <Assignment className="w-12 h-12 text-primary" />,
    title: "Application Support",
    description: "End-to-end assistance with university applications, documentation, and visa processes."
  },
  {
    icon: <Support className="w-12 h-12 text-primary" />,
    title: "Pre-departure Support",
    description: "Complete guidance on accommodation, travel arrangements, and settling into your new environment."
  }
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive support throughout your study abroad journey
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 