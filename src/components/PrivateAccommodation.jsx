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

// Replace with actual image path
import privateAccommodationBanner from '../assets/PrivateHostel.png';

const services = [
  'Verified listings for hostels, PGs, and rental flats',
  'Budget-based accommodation matching',
  'Support in understanding lease agreements',
  'Help with local references and documentation',
  'Roommate matching and community housing support',
];

const steps = [
  'Understanding Student Preferences & Budget',
  'Shortlisting Local Verified Properties',
  'Virtual Tours & Document Verification',
  'Assistance with Lease & Legal Terms',
  'Check-in Support & Emergency Contact Setup',
];

const PrivateAccommodation = () => {
  return (
    <Box sx={{ background: 'linear-gradient(to right, #e1ecf4, #ffffff)', py: 6 }}>
      <Container>

        {/* Hero Section */}
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h3" sx={{ color: '#336b87', fontWeight: 700, m: '2rem' }}>
              Private Home or Hostel Accommodation
            </Typography>
            <Typography variant="body1" sx={{ m: '2rem' }}>
              We assist students in finding trused off-campus living options — from private homes and shared apartments to hostels — all tailored to comfort, safety, and budget.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.img
              src={privateAccommodationBanner}
              alt="Private Accommodation"
              style={{ width: '100%', borderRadius: '12px' }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            />
          </Grid>
        </Grid>

        <Divider sx={{ my: 5 }} />

        {/* Services Highlights */}
        <Typography variant="h5" sx={{ color: '#336b87', mb: 3, fontWeight: 600 }}>
          What We Offer
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

        {/* Process Section */}
        <Box sx={{ mt: 8 }}>
          <Typography variant="h5" sx={{ color: '#336b87', mb: 3, fontWeight: 600 }}>
            Our Process for Private Housing
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

        {/* CTA Section */}
        <Box sx={{ mt: 10, background: '#336b87', p: 5, borderRadius: 3, color: '#fff' }}>
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
            Why Choose Us for Off-Campus Housing?
          </Typography>
          <Typography>
            We bridge the gap between students and reliable local landlords. Our verified listings and on-ground teams ensure you get safe, affordable, and legal accommodation — without falling into rental traps or scams.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default PrivateAccommodation;
