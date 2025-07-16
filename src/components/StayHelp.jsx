import React from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Paper,
  Divider,
} from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { motion } from 'framer-motion';

// Example image (replace with actual path)
import stayBanner from '../assets/HelpForStay.png';

const services = [
  'Airport pickup service and welcome kits',
  'Temporary stay assistance (hotels, hostels, PGs)',
  'Support with local SIM, groceries & essentials',
  'City orientation and transport guidance',
  'Emergency helpline during first week of arrival',
];

const steps = [
  'Pre-Arrival Coordination & Airport Pickup',
  'Initial Accommodation Search & Booking',
  'Local Essentials Setup (SIM, Bank, Groceries)',
  'Neighborhood Guidance & Travel Setup',
  'Post-Arrival Support and Check-ins',
];

const StayHelp = () => {
  return (
    <Box sx={{ background: 'linear-gradient(to right, #e1ecf4, #ffffff)', py: 6 }}>
      <Container>

        {/* Hero Section */}
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h3" sx={{ color: '#336b87', fontWeight: 700, m: '2rem' }}>
              Help for Stay
            </Typography>
            <Typography variant="body1" sx={{ m: '2rem' }}>
              Moving abroad can be overwhelming. From your airport arrival to settling in your new neighborhood, our team ensures you are comfortable, informed, and supported every step of the way.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.img
              src={stayBanner}
              alt="Stay Help"
              style={{ width: '100%', borderRadius: '12px' }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            />
          </Grid>
        </Grid>

        <Divider sx={{ my: 5 }} />

        {/* Service Highlights */}
        <Typography variant="h5" sx={{ color: '#336b87', mb: 3, fontWeight: 600 }}>
          What’s Included in Our Stay Assistance
        </Typography>
        <Grid container spacing={3}>
          {services.map((item, idx) => (
            <Grid item xs={12} md={6} key={idx}>
              <Paper elevation={3} sx={{ p: 2, display: 'flex', gap: 2, alignItems: 'center' }}>
                <CheckCircle sx={{ color: '#336b87' }} />
                <Typography>{item}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Step-by-Step Help Process */}
        <Box sx={{ mt: 8 }}>
          <Typography variant="h5" sx={{ color: '#336b87', mb: 3, fontWeight: 600 }}>
            Our Step-by-Step Support Process
          </Typography>
          <Grid container spacing={4}>
            {steps.map((step, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Paper
                  elevation={2}
                  sx={{
                    p: 3,
                    textAlign: 'center',
                    borderBottom: '4px solid #336b87',
                    background: '#f8f9fa',
                  }}
                >
                  <Typography variant="h6" sx={{ fontWeight: 600, color: '#264053' }}>
                    {index + 1}. {step}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* CTA - Why Choose Us */}
        <Box sx={{ mt: 10, background: '#336b87', p: 5, borderRadius: 3, color: '#fff' }}>
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
            Why Our Stay Help Makes a Difference
          </Typography>
          <Typography>
            We understand that settling in a new country comes with uncertainty. Our team provides personalized, round-the-clock assistance so you can focus on your education without stress. From the moment you land, we’re by your side.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default StayHelp;
