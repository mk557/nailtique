import React from 'react';
import { Container, Typography, Box, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

// Styled components
const ServiceCategory = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  textAlign: 'center',
  width: '105%',
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

const EyelashExtensionPage = () => {
  return (
    <Container className="container">
      <Box mt={4} mb={4}>
        <Typography variant="h2" align="center" gutterBottom>
          Eyelash Extensions
        </Typography>

        {/* Services Price Chart */}
        <Grid container spacing={4} mt={4}>
          <Grid item xs={12} sm={6} md={4}>
            <ServiceCategory elevation={3}>
              <Typography variant="h5" gutterBottom>
                Full New Set <br />80 Lashes Per Eye <br />$140
              </Typography>
              <Box p={4} textAlign="left">
                <Typography variant="body2">2 Weeks Touch Up (8-14 Days) - $70</Typography>
                <Typography variant="body2">3 Weeks Touch Up (15-21 Days) - $90</Typography>
              </Box>
            </ServiceCategory>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <ServiceCategory elevation={3}>
              <Typography variant="h5" gutterBottom>
                **GLAMOROUS** <br />100 Lashes Per Eye <br />$160
              </Typography>
              <Box p={4} textAlign="left">
                <Typography variant="body2">2 Weeks Touch Up (8-14 Days) - $80</Typography>
                <Typography variant="body2">3 Weeks Touch Up (15-21 Days) - $100</Typography>
              </Box>
            </ServiceCategory>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <ServiceCategory elevation={3}>
              <Typography variant="h5" gutterBottom>
                YY Full Set <br />$160
              </Typography>
              <Box p={4} textAlign="left">
                <Typography variant="body2">2 Weeks Touch Up (8-14 Days) - $80</Typography>
                <Typography variant="body2">3 Weeks Touch Up (15-21 Days) - $100</Typography>
              </Box>
            </ServiceCategory>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <ServiceCategory elevation={3}>
              <Typography variant="h5" gutterBottom>
                YY Glamorous Set <br />$180
              </Typography>
              <Box p={4} textAlign="left">
                <Typography variant="body2">2 Weeks Touch Up (8-14 Days) - $95</Typography>
                <Typography variant="body2">3 Weeks Touch Up (15-21 Days) - $115</Typography>
              </Box>
            </ServiceCategory>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <ServiceCategory elevation={3}>
              <Typography variant="h5" gutterBottom>
                Volume Set <br />$130
              </Typography>
              <Box p={4} textAlign="left">
                <Typography variant="body2">2 Weeks Touch Up (8-14 Days) - $70</Typography>
                <Typography variant="body2">3 Weeks Touch Up (15-21 Days) - $90</Typography>
              </Box>
            </ServiceCategory>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <ServiceCategory elevation={3}>
              <Typography variant="h5" gutterBottom>
                Regular Volume Set <br />$170
              </Typography>
              <Box p={4} textAlign="left">
                <Typography variant="body2">2 Weeks Touch Up (8-14 Days) - $90</Typography>
                <Typography variant="body2">3 Weeks Touch Up (15-21 Days) - $110</Typography>
              </Box>
            </ServiceCategory>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <ServiceCategory elevation={3}>
              <Typography variant="h5" gutterBottom>
                Mega Volume Set <br />$250
              </Typography>
              <Box p={4} textAlign="left">
                <Typography variant="body2">2 Weeks Touch Up (8-14 Days) - $140</Typography>
                <Typography variant="body2">3 Weeks Touch Up (15-21 Days) - $170</Typography>
              </Box>
            </ServiceCategory>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <ServiceCategory elevation={3}>
              <Typography variant="h5" gutterBottom>
                Lash LLHT & Tinting
              </Typography>
              <Box p={4} textAlign="left">
                <Typography variant="body2">Lash Lifting - $100</Typography>
                <Typography variant="body2">Lash Tinting - $30</Typography>
                <Typography variant="body2">Lash Lifting + Tinting - $110</Typography>
                <Typography variant="body2">Eyebrow Tinting - $30</Typography>
              </Box>
            </ServiceCategory>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <ServiceCategory elevation={3}>
              <Typography variant="h5" gutterBottom>
                Brow
              </Typography>
              <Box p={4} textAlign="left">
                <Typography variant="body2">Brow Lanqination - $100</Typography>
                <Typography variant="body2">Brow + Lanqination + Tinting - $30</Typography>
                <Typography variant="body2">Removal - $30</Typography>
              </Box>
            </ServiceCategory>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default EyelashExtensionPage;
