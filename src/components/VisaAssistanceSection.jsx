import React from 'react';
import { Assignment, Description, Support, Timeline } from '@mui/icons-material';

const VisaAssistanceSection = () => {
  const visaServices = [
    {
      icon: <Assignment className="text-primary text-4xl" />,
      title: 'Visa Application Support',
      description: 'Comprehensive guidance through the entire visa application process.',
      details: [
        'Document preparation checklist',
        'Application form assistance',
        'Document verification',
        'Interview preparation',
        'Application tracking'
      ]
    },
    {
      icon: <Description className="text-primary text-4xl" />,
      title: 'Documentation',
      description: 'Help with preparing and organizing all required documentation.',
      details: [
        'Financial documentation',
        'Academic transcripts',
        'Language proficiency proof',
        'Health certificates',
        'Insurance documentation'
      ]
    },
    {
      icon: <Support className="text-primary text-4xl" />,
      title: 'Expert Consultation',
      description: 'One-on-one consultation with visa experts for personalized guidance.',
      details: [
        'Visa type selection',
        'Eligibility assessment',
        'Document review',
        'Interview preparation',
        'Mock interviews'
      ]
    },
    {
      icon: <Timeline className="text-primary text-4xl" />,
      title: 'Application Timeline',
      description: 'Structured timeline management for a smooth visa application process.',
      details: [
        'Application deadline tracking',
        'Document submission schedule',
        'Interview scheduling',
        'Visa processing updates',
        'Post-approval guidance'
      ]
    }
  ];

  return (
    <div className="py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {visaServices.map((service, index) => (
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

export default VisaAssistanceSection; 