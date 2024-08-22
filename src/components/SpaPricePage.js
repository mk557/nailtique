import React from 'react';
import { Container, Typography, Box, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import Footer from '../components/Footer'; // Adjust the path if needed

// Styled components
const PageContainer = styled('div')(({ theme }) => ({
  minHeight: 'calc(83vh - 64px)', // Adjust based on footer height
  display: 'flex',
  flexDirection: 'column',
  paddingBottom: theme.spacing(4), // Add space for footer
}));

const ServiceCategory = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  textAlign: 'left',
  width: '100%',
  boxSizing: 'border-box',
}));

const NoWrapTypography = styled(Typography)(({ theme }) => ({
  whiteSpace: 'nowrap', // Prevent text wrapping
  overflowX: 'auto', // Enable horizontal scrolling if needed
}));

const SpaPricePage = () => {
  return (
    <PageContainer>
      <Container>
        <Box mt={4} mb={4}>
          <Typography variant="h2" align="center">Spa Services</Typography>

          {/* Single Grid Container */}
          <Grid container spacing={4} mt={4} justifyContent="center">
            {/* Body Massages Service Category */}
            <Grid item xs={12} sm={10}>
              <ServiceCategory elevation={3}>
                <Typography variant="h5" align="center" gutterBottom>
                  Body Massages
                </Typography>
                <Box p={4} textAlign="center">
                  <NoWrapTypography variant="body1">Swedish Massage - 30•60•90•120min / $50•$80•$120•$150</NoWrapTypography>
                  <NoWrapTypography variant="body1">Deep Tissue Massage - 30•60•90•120min / $60•$90•$130•$160</NoWrapTypography>
                </Box>
              </ServiceCategory>
            </Grid>

            {/* Facial Treatment Service Category */}
            <Grid item xs={12} sm={8}>
              <ServiceCategory elevation={3}>
                <Typography variant="h5" align="center" gutterBottom>
                  Facial Treatment
                </Typography>
                <Box p={4} textAlign="center">
                  <NoWrapTypography variant="body1">Deep Cleansing (Anti-acne) - 60 min. / $90</NoWrapTypography>
                  <NoWrapTypography variant="body1">Microdermabrasion - 90min. / $150</NoWrapTypography>
                  <NoWrapTypography variant="body1">Vitamin C with Ultra Sound - 90min. / $150</NoWrapTypography>
                </Box>
              </ServiceCategory>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Footer /> {/* Ensure the Footer is at the bottom */}
    </PageContainer>
  );
};

export default SpaPricePage;
