import React from 'react';
import { Container, Typography, Box, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

// Styled component for the map container
const MapContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  height: '400px',
  width: '100%',
  boxSizing: 'border-box',
}));

const ContactPage = () => {
    return (
      <Container className="container">
        <Box mt={4}>
          <Typography variant="h2" align="center">Contact Us</Typography>
          
          <Grid container spacing={4} mt={4}>
            {/* Left Side - Contact Info */}
            <Grid item xs={12} md={6}>
              <Box>
                <Typography variant="h5" align="left">Contact Information</Typography>
                <Typography variant="body1" mt={2} align="left">
                  Please call us to make any appointments or message us on social media for any questions about our services.
                </Typography>
                <Typography variant="body1" mt={2} align="left">
                  Email: nail12perry@gmail.com
                  <br />
                  Phone: (201) 750-2649
                </Typography>
                <Typography variant="h5" mt={4} align="left">Hours</Typography>
                <Typography variant="body1" mt={2} align="left">
                  Mon - Fri: 9:00 AM - 7:00 PM
                  <br />
                  Sat: 9:00 AM - 6:00 PM
                  <br />
                  Sun: 9:00 AM - 7:00
                </Typography>
              </Box>
            </Grid>
          
          {/* Right Side - Google Maps */}
          <Grid item xs={12} md={6}>
            <Box>
              <Typography variant="h5" align="center">VISIT NAIL TIQUE</Typography>

              <Typography variant="body1" align="center" mt={2}>
              12 PERRY ST, Closter, New Jersey 07624
                            </Typography>
              <MapContainer elevation={3}>
                <iframe
                  title="Google Maps"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3012.465026703997!2d-73.96257658822523!3d40.97129702158144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2ee41d31828d1%3A0xf5a1defefb201ccc!2s12%20Perry%20St%2C%20Closter%2C%20NJ%2007624!5e0!3m2!1sen!2sus!4v1724280258415!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                />
              </MapContainer>
            </Box>
          </Grid>
        </Grid>

        {/* Spacer */}
        <Box mt={8} mb={4} /> {/* Adjust mt and mb values to control the space */}
      </Box>
    </Container>
  );
};

export default ContactPage;
