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

// Example image (replace with your actual path)
import loanBanner from '../assets/LoanHelp.png';

const services = [
  'Comparison of secured and unsecured loan options',
  'Assistance with eligibility checks and co-applicant requirements',
  'Tie-ups with top banks and NBFCs (HDFC Credila, Prodigy Finance, etc.)',
  'Support in gathering documents and application submission',
  'EMI calculation and financial planning assistance',
];

const steps = [
  'Profile Evaluation and Loan Eligibility Check',
  'Choosing the Right Loan Provider',
  'Preparing & Collecting Required Documents',
  'Filing Application and Coordinating with Lenders',
  'Final Approval, Disbursement, and EMI Planning',
];

const LoanHelp = () => {
  return (
    <Box sx={{ background: 'linear-gradient(to right, #e1ecf4, #ffffff)', py: 6 }}>
      <Container>

        {/* Hero Section */}
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h3" sx={{ color: '#336b87', fontWeight: 700, m: '2rem' }}>
              Loan Help
            </Typography>
            <Typography variant="body1" sx={{ m: '2rem' }}>
              Get personalized support to compare, apply for, and secure education loans through trusted financial institutions – with or without collateral.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.img
              src={loanBanner}
              alt="Loan Help"
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
          What’s Included in Our Loan Support
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
            How the Loan Process Works
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
            Why Choose Our Loan Guidance?
          </Typography>
          <Typography>
            Our expert financial counselors ensure you get the most favorable interest rates, lowest processing fees, and fastest disbursal possible. We simplify complex bank procedures and support you every step of the way to make your education dream financially stress-free.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default LoanHelp;
