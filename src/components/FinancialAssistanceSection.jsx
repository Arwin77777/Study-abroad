import React from 'react';
import { School, AccountBalance, Work, TrendingUp } from '@mui/icons-material';

const FinancialAssistanceSection = () => {
  const assistanceOptions = [
    {
      icon: <School className="text-primary text-4xl" />,
      title: 'Scholarships',
      description: 'Access to various merit-based and need-based scholarships offered by universities and organizations.',
      details: [
        'Merit-based scholarships',
        'Need-based financial aid',
        'Sports scholarships',
        'Research grants',
        'Department-specific scholarships'
      ]
    },
    {
      icon: <AccountBalance className="text-primary text-4xl" />,
      title: 'Education Loans',
      description: 'Guidance on securing education loans with competitive interest rates and flexible repayment options.',
      details: [
        'International student loans',
        'Co-signer options',
        'Loan comparison tools',
        'Repayment planning',
        'Financial counseling'
      ]
    },
    {
      icon: <Work className="text-primary text-4xl" />,
      title: 'Work Opportunities',
      description: 'Information about on-campus and off-campus work opportunities to support your education.',
      details: [
        'On-campus employment',
        'Curricular Practical Training (CPT)',
        'Optional Practical Training (OPT)',
        'Internship opportunities',
        'Part-time work options'
      ]
    },
    {
      icon: <TrendingUp className="text-primary text-4xl" />,
      title: 'Financial Planning',
      description: 'Comprehensive financial planning services to help you manage your education expenses effectively.',
      details: [
        'Budget planning',
        'Cost of living estimates',
        'Tuition fee structure',
        'Expense management',
        'Financial goal setting'
      ]
    }
  ];

  return (
    <div className="py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {assistanceOptions.map((option, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                {option.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{option.title}</h3>
                <p className="text-gray-600 mb-4">{option.description}</p>
                <ul className="space-y-2">
                  {option.details.map((detail, idx) => (
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

export default FinancialAssistanceSection; 