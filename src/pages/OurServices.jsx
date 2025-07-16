import React from 'react';
import { Grid, Card, CardContent, Typography, CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

import AdmissionAtTopUniversity from '../assets/AdmissionAtTopUniversity.png';
import Airplane from '../assets/Airplane.png';
import LoanHelp from '../assets/LoanHelp.png';
import HelpForStay from '../assets/HelpForStay.png';
import UniversityAccommodation from '../assets/UniversityAccommodation.png';
import PrivateAccommodation from '../assets/PrivateHostel.png';

const services = [
  {
    title: 'Admissions at Top Universities',
    description: 'Get expert help with university selection, SOPs, and applications.',
    link: '/our-services/admissions',
    image: AdmissionAtTopUniversity,
  },
  {
    title: 'Visa Assistance',
    description: 'Full support with visa application, interview prep, and documentation.',
    link: '/our-services/visa-assistance',
    image: Airplane,
  },
  {
    title: 'Loan Help',
    description: 'Guidance on education loans, documentation, and financial planning.',
    link: '/our-services/loan-help',
    image: LoanHelp,
  },
  {
    title: 'Help for Stay',
    description: 'Support for short-term stay, pickup assistance, and city orientation.',
    link: '/our-services/stay-help',
    image: HelpForStay,
  },
  {
    title: 'University Accommodation',
    description: 'Get help booking secure on-campus university accommodation.',
    link: '/our-services/university-accommodation',
    image: UniversityAccommodation,
  },
  {
    title: 'Private Home or Hostel Accommodation',
    description: 'Find private rooms, shared homes, or verified hostels nearby.',
    link: '/our-services/private-accommodation',
    image: PrivateAccommodation,
  },
];

const ServicesSection = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        background: 'linear-gradient(to bottom right, #e1ecf4, #ffffff)',
        padding: '4rem 2rem',
      }}
    >
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        style={{ color: '#336b87', fontWeight: 600, margin: '2rem' }}
      >
        Our Services
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <Card
                sx={{
                  height: '100%',
                  backgroundColor: '#f2f7fb',
                  borderRadius: '16px',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                }}
              >
                <CardActionArea onClick={() => navigate(service.link)}>
                  <img
                    src={service.image}
                    alt={service.title}
                    style={{
                      width: '100%',
                      height: '250px',
                      objectFit: 'cover',
                      borderTopLeftRadius: '16px',
                      borderTopRightRadius: '16px',
                    }}
                  />
                  <CardContent>
                    <Typography variant="h6" style={{ color: '#264053', fontWeight: 600 }}>
                      {service.title}
                    </Typography>
                    <Typography variant="body2" style={{ color: '#555', marginTop: '0.5rem' }}>
                      {service.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ServicesSection;
