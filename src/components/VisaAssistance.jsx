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
import visaBanner from '../assets/Airplane.png';

const services = [
  'Guidance on selecting the right student visa (F1, Tier 4, etc.)',
  'Help with gathering financial and academic documents',
  'Mock interviews for visa officers',
  'Visa form filling and appointment scheduling',
  'Assistance with visa fee payment and SEVIS registration',
];

const steps = [
  'Understanding Your Destination’s Visa Requirements',
  'Document Preparation & Financial Proofs',
  'Online Application & Fee Submission',
  'Biometrics & Interview Preparation',
  'Visa Outcome Tracking & Next Steps',
];

const VisaAssistance = () => {
  return (
    <Box sx={{ background: 'linear-gradient(to right, #e1ecf4, #ffffff)', py: 6 }}>
      <Container>

        {/* Hero Section */}
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h3" sx={{ color: '#336b87', fontWeight: 700, m: '2rem' }}>
              Visa Assistance
            </Typography>
            <Typography variant="body1" sx={{ m: '2rem' }}>
              From choosing the right visa type to preparing for interviews, our expert counselors guide you through each step to ensure a smooth visa approval process.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.img
              src={visaBanner}
              alt="Visa Assistance"
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
          What’s Included
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

        {/* Process Steps */}
        <Box sx={{ mt: 8 }}>
          <Typography variant="h5" sx={{ color: '#336b87', mb: 3, fontWeight: 600 }}>
            Step-by-Step Visa Process
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
            Why Trust Our Visa Experts?
          </Typography>
          <Typography>
            Our dedicated visa team has helped thousands of students successfully secure visas for the USA, UK, Canada, Germany, Australia, and more. We stay updated with embassy policies, ensure accurate documentation, and provide mock interviews that build your confidence.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default VisaAssistance;
