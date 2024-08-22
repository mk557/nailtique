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

const Content = styled('main')(({ theme }) => ({
  flex: 1, // Take up available space
  paddingBottom: theme.spacing(8), // Add space for footer
}));

const ServiceGrid = styled(Grid)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: theme.spacing(4), // Adjust spacing between items
  marginTop: theme.spacing(4), // Add top margin to the grid
}));

const Header = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(4), // Add bottom margin to the header
}));

const ManiPediPage = () => {
  return (
    <div>
    <PageContainer>
      <Content>
        <Container className="container">
          <Box mt={4} mb={4}>
            <Header variant="h2" align="center">
              Manicure & Pedicure Services
            </Header>

            {/* Services Price Chart */}
            <ServiceGrid container justifyContent="center">
              {/* Manicure */}
              <Grid item xs={12} sm={6} md={3}>
                <Paper elevation={3} className="service-category">
                  <Typography variant="h5" align="center" gutterBottom>
                    Manicure
                  </Typography>
                  <Box p={3} textAlign="left"> {/* Aligned text to the left */}
                    <Typography variant="body1">Regular Manicure - $15</Typography>
                    <Typography variant="body1">French Manicure - $20</Typography>
                    <Typography variant="body1">Weekly Manicure - $22</Typography>
                    <Typography variant="body1">Color Gel - $40</Typography>
                    <Typography variant="body1">Color Gel French - $50</Typography>
                    <Typography variant="body1">Buffing - $20</Typography>
                    <Typography variant="body1">Polish Change - $12</Typography>
                    <Typography variant="body1">Spa Manicure - $40</Typography>
                    <Typography variant="body1">Kids Mani+Pedi - $30</Typography>
                    <Typography variant="body1">Dazzle Dry - $25</Typography>
                  </Box>
                </Paper>
              </Grid>

              {/* Gel Set */}
              <Grid item xs={12} sm={6} md={3}>
                <Paper elevation={3} className="service-category">
                  <Typography variant="h5" align="center" gutterBottom>
                    Gel Set
                  </Typography>
                  <Box p={3} textAlign="left"> {/* Aligned text to the left */}
                    <Typography variant="body1">Full Set (Extend) - $100</Typography>
                    <Typography variant="body1">Fill-In - $65+</Typography>
                    <Typography variant="body1">French Fill - $75</Typography>
                    <Typography variant="body1">Long Nail Extra - $10</Typography>
                  </Box>
                </Paper>
              </Grid>

              {/* Powder */}
              <Grid item xs={12} sm={6} md={3}>
                <Paper elevation={3} className="service-category">
                  <Typography variant="h5" align="center" gutterBottom>
                    Powder
                  </Typography>
                  <Box p={3} textAlign="left"> {/* Aligned text to the left */}
                    <Typography variant="body1">Dip Powder (SNS) - $55</Typography>
                    <Typography variant="body1">Dip Powder French - $65</Typography>
                    <Typography variant="body1">Dip Powder Set (Extend) - $75</Typography>
                    <Typography variant="body1">Acrylic Set - $70</Typography>
                    <Typography variant="body1">Acrylic Set With Color Gel - $90</Typography>
                  </Box>
                </Paper>
              </Grid>

              {/* Pedicure */}
              <Grid item xs={12} sm={6} md={3}>
                <Paper elevation={3} className="service-category">
                  <Typography variant="h5" align="center" gutterBottom>
                    Pedicure
                  </Typography>
                  <Box p={3} textAlign="left"> {/* Aligned text to the left */}
                    <Typography variant="body1">Regular Pedicure - $30</Typography>
                    <Typography variant="body1">Callus Pedicure - $45</Typography>
                    <Typography variant="body1">French Pedicure - $40</Typography>
                    <Typography variant="body1">Color Gel Pedicure - $50</Typography>
                    <Typography variant="body1">Color Gel French Pedicure - $55</Typography>
                    <Typography variant="body1">Polish Change - $15</Typography>
                  </Box>
                </Paper>
              </Grid>

              {/* Spa Pedicure */}
              <Grid item xs={12} sm={6} md={3}>
                <Paper elevation={3} className="service-category">
                  <Typography variant="h5" align="center" gutterBottom>
                    Spa Pedicure
                  </Typography>
                  <Box p={3} textAlign="left"> {/* Aligned text to the left */}
                    <Typography variant="body1">Eucalyptus Spa - $65</Typography>
                    <Typography variant="body1">Peppermint Spa - $55</Typography>
                    <Typography variant="body1">Green Tea Spa - $60</Typography>
                    <Typography variant="body1">Lavender Spa - $70</Typography>
                    <Typography variant="body1">Pure Shea Butter Spa - $50</Typography>
                    <Typography variant="body1">Pomegranate Lime Spa - $90</Typography>
                    <Typography variant="body1">Vanilla Plum Spa - $90</Typography>
                    <Typography variant="body1">Silk Milk Spa - $75</Typography>
                  </Box>
                </Paper>
              </Grid>
            </ServiceGrid>
          </Box>
        </Container>
      </Content>
    </PageContainer>

    <Footer />
    </div>
  );
};

export default ManiPediPage;
