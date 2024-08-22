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

const GridItem = styled(Grid)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  flexBasis: 'calc(20% - 16px)',
  maxWidth: 'calc(20% - 16px)',
}));

const SpaPricePage = () => {
  return (
    <div> {/* Make sure this container is full height */}
        <PageContainer>

      <Container>
        <Box mt={4} mb={4}>
          <Typography variant="h2" align="center">Spa Services</Typography>

          <Grid container spacing={4} mt={4}>
            <Grid item xs={12} sm={6} md={7} component={GridItem}>
              <ServiceCategory elevation={3}>
                <Typography variant="h5" align="center" gutterBottom>
                  Body Massages
                </Typography>
                <Box p={4} textAlign="left">
                  <Typography variant="body1">Swedish Massage - 30•60•90•120min / $50•$80•$120•$150</Typography>
                  <Typography variant="body1">Deep Tissue Massage - 30•60•90•120min / $60•$90•$130•$160</Typography>
                </Box>
              </ServiceCategory>
            </Grid>
            <Grid item xs={12} sm={6} md={5} component={GridItem}>
              <ServiceCategory elevation={3}>
                <Typography variant="h5" align="center" gutterBottom>
                  Facial Treatment
                </Typography>
                <Box p={4} textAlign="left">
                  <Typography variant="body1">Deep Cleansing (Anti-acne) 60 min. / $90</Typography>
                  <Typography variant="body1">Microdermabrasion 90min. / $150</Typography>
                  <Typography variant="body1">Vitamin C with Ultra Sound 90min. / $150</Typography>
                </Box>
              </ServiceCategory>
            </Grid>
          </Grid>
        </Box>
      </Container>
      </PageContainer>
      <Footer /> {/* Ensure the Footer is at the bottom */}
    </div>
  );
};

export default SpaPricePage;
