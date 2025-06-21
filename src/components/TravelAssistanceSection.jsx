import React from 'react';
import { FlightTakeoff, Hotel, DirectionsBus, LocalHospital } from '@mui/icons-material';

const TravelAssistanceSection = () => {
  const travelServices = [
    {
      icon: <FlightTakeoff className="text-primary text-4xl" />,
      title: 'Pre-Departure Support',
      description: 'Comprehensive assistance before your journey begins.',
      details: [
        'Flight booking assistance',
        'Airport pickup arrangements',
        'Travel insurance guidance',
        'Packing checklist',
        'Pre-departure orientation'
      ]
    },
    {
      icon: <Hotel className="text-primary text-4xl" />,
      title: 'Accommodation',
      description: 'Help with finding and securing suitable accommodation.',
      details: [
        'On-campus housing options',
        'Off-campus accommodation',
        'Homestay arrangements',
        'Temporary housing solutions',
        'Roommate matching'
      ]
    },
    {
      icon: <DirectionsBus className="text-primary text-4xl" />,
      title: 'Local Transportation',
      description: 'Guidance on transportation options in your study destination.',
      details: [
        'Public transport passes',
        'Student discount cards',
        'Airport transfer services',
        'Local transport apps',
        'Bicycle rental options'
      ]
    },
    {
      icon: <LocalHospital className="text-primary text-4xl" />,
      title: 'Health & Safety',
      description: 'Support for health and safety concerns during your stay.',
      details: [
        'Health insurance setup',
        'Medical facility information',
        'Emergency contact numbers',
        'Safety guidelines',
        'Local healthcare system orientation'
      ]
    }
  ];

  return (
    <div className="py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {travelServices.map((service, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                {service.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <span className="text-primary mr-2">•</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TravelAssistanceSection; 