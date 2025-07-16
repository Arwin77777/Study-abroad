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

// Replace with your actual image path
import universityAccommodationBanner from '../assets/UniversityAccommodation.png';

const services = [
  'On-campus housing consultation and booking support',
  'Assistance with application forms and housing documents',
  'Guidance on meal plans, roommates, and dorm selection',
  'Support with move-in procedures and university policies',
  'Assistance in resolving accommodation-related concerns',
];

const steps = [
  'Understanding Your University’s Housing Options',
  'Helping You Choose the Right Dorm or Hall',
  'Submitting the Application on Time',
  'Pre-Arrival Guidance & Move-in Checklist',
  'Post-Move Support for Room Transfers or Issues',
];

const UniversityAccommodation = () => {
  return (
    <Box sx={{ background: 'linear-gradient(to right, #e1ecf4, #ffffff)', py: 6 }}>
      <Container>

        {/* Hero Section */}
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h3" sx={{ color: '#336b87', fontWeight: 700, m: '2rem' }}>
              University Accommodation
            </Typography>
            <Typography variant="body1" sx={{ m: '2rem' }}>
              We assist students in securing reliable, comfortable, and safe university housing. Whether it’s a single dorm or shared hall, we ensure a smooth process from application to move-in.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.img
              src={universityAccommodationBanner}
              alt="University Accommodation"
              style={{ width: '100%', borderRadius: '12px' }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            />
          </Grid>
        </Grid>

        <Divider sx={{ my: 5 }} />

        {/* Services Section */}
        <Typography variant="h5" sx={{ color: '#336b87', mb: 3, fontWeight: 600 }}>
          What We Help With
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

        {/* Step-by-Step Process */}
        <Box sx={{ mt: 8 }}>
          <Typography variant="h5" sx={{ color: '#336b87', mb: 3, fontWeight: 600 }}>
            Our Process
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
            Why Let Us Handle Your University Stay?
          </Typography>
          <Typography>
            We work directly with university housing offices to ensure your room is booked without hassle. Our experience helps avoid delays, mistakes, or missed deadlines — giving you peace of mind and a smooth transition into student life abroad.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default UniversityAccommodation;
