import React from 'react';
import { Container, Typography, Box, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

// Styled components
const ServiceCategory = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  textAlign: 'left',
  width: '100%',
  // Remove minHeight to allow content to dictate the height
  // Ensure consistent box-sizing
  boxSizing: 'border-box',
}));

const GridItem = styled(Grid)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  // Ensure each grid item takes up equal space
  flexBasis: 'calc(20% - 16px)', // Adjust spacing
  maxWidth: 'calc(20% - 16px)', // Adjust spacing
}));

const SpaPricePage = () => {
  return (
    <Container className="container">
      <Box mt={4} mb={40}>
        <Typography variant="h2" align="center">Spa Services</Typography>

        {/* Services Price Chart */}
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

          {/* Add more items here as needed */}
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

          {/* Additional Service Categories */}
        </Grid>
      </Box>
    </Container>
  );
};

export default SpaPricePage;
