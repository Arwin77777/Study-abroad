import React from 'react';
import { Container, Typography, Box, Grid, Paper, Divider } from '@mui/material';
import { motion } from 'framer-motion';
import { CheckCircle } from '@mui/icons-material';

// Example image (replace with actual path)
import admissionsBanner from '../assets/AdmissionAtTopUniversity.png';

const points = [
  'University shortlisting based on profile and goals',
  'Guidance on SOPs, LORs, and Resume writing',
  'Application form filling and documentation support',
  'Deadline reminders and tracking',
  'Interview prep and one-on-one counseling',
];

const Admissions = () => {
  return (
    <Box sx={{ background: 'linear-gradient(to right, #e1ecf4, #ffffff)', py: 6 }}>
      <Container>
        {/* Hero Section */}
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h3" sx={{ color: '#336b87', fontWeight: 700, m: '2rem' }}>
              Admissions at Top Universities
            </Typography>
            <Typography variant="body1" sx={{ m: '2rem' }}>
              Start your global education journey with expert guidance on getting into prestigious institutions around the world.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.img
              src={admissionsBanner}
              alt="Admissions"
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
          {points.map((point, idx) => (
            <Grid item xs={12} md={6} key={idx}>
              <Paper elevation={3} sx={{ p: 2, display: 'flex', gap: 2, alignItems: 'center' }}>
                <CheckCircle sx={{ color: '#336b87' }} />
                <Typography>{point}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Process Steps */}
        <Box sx={{ mt: 8 }}>
          <Typography variant="h5" sx={{ color: '#336b87', mb: 3, fontWeight: 600 }}>
            Our Step-by-Step Process
          </Typography>
          <Grid container spacing={4}>
            {[
              'Profile Evaluation',
              'University Shortlisting',
              'Document Preparation',
              'Application Submission',
              'Follow-up & Decision',
            ].map((step, index) => (
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

        {/* Why Choose Us */}
        <Box sx={{ mt: 10, background: '#336b87', p: 5, borderRadius: 3, color: '#fff' }}>
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
            Why Choose Us?
          </Typography>
          <Typography>
            With years of experience and a team of expert counselors, we provide personalized support throughout your admission process. Our students have successfully secured admissions in Ivy League, Russell Group, Go8, and other globally renowned universities.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Admissions;
