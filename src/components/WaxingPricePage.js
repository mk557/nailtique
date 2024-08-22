import React from 'react';
import { Container, Typography, Box, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import Footer from '../components/Footer'; // Adjust the path if needed

// Styled components
const ServiceCategory = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  textAlign: 'left',
  width: '100%',
  boxSizing: 'border-box',
}));

const ColumnsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  gap: theme.spacing(4),
  marginTop: theme.spacing(4),
}));

const Column = styled(Box)(({ theme }) => ({
  flex: 1,
  maxWidth: 'calc(40% - 16px)',
}));

const PageContainer = styled('div')(({ theme }) => ({
  minHeight: 'calc(83vh - 64px)', // Adjust based on footer height
  display: 'flex',
  flexDirection: 'column',
  paddingBottom: theme.spacing(4), // Add space for footer
}));

const WaxingPricePage = () => {
  return (
    <div>
    <PageContainer>
      <Container>
        <Box mt={4} mb={4}>
          <Typography variant="h2" align="center" gutterBottom>
            Waxing Services
          </Typography>
          <Grid container spacing={4} mt={4} justifyContent="center">
            <Grid item xs={12} sm={10} md={5}>
              <ServiceCategory elevation={3}>
                <Typography variant="h5" align="center" gutterBottom>
                  Waxing
                </Typography>
                <ColumnsContainer>
                  <Column>
                    <Typography variant="body1">Eyebrow - $15</Typography>
                    <Typography variant="body1">Lip - $10</Typography>
                    <Typography variant="body1">Chin - $12+</Typography>
                    <Typography variant="body1">Side Burns - $15</Typography>
                    <Typography variant="body1">Half Arms - $30</Typography>
                    <Typography variant="body1">Full Arms - $50</Typography>
                    <Typography variant="body1">Under Arms - $25</Typography>
                  </Column>
                  <Column>
                    <Typography variant="body1">Upper Legs - $40+</Typography>
                    <Typography variant="body1">Half Legs - $35</Typography>
                    <Typography variant="body1">Full Legs - $55</Typography>
                    <Typography variant="body1">Bikini - $25+</Typography>
                    <Typography variant="body1">Brazilian - $60</Typography>
                    <Typography variant="body1">Back - $50+</Typography>
                    <Typography variant="body1">Chest - $50</Typography>
                  </Column>
                </ColumnsContainer>
              </ServiceCategory>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </PageContainer>
    <Footer/></div>
  );
};

export default WaxingPricePage;
