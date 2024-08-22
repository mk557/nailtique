import React from 'react';
import { Container, Typography, Box, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

// Styled components
const ServiceCategory = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  textAlign: 'left',
  width: '100%', // Ensure ServiceCategory takes full width of the Grid item
  boxSizing: 'border-box',
}));

const ColumnsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between', // Ensure columns are spaced evenly
  gap: theme.spacing(4), // Adjust spacing between columns
  marginTop: theme.spacing(4), // Add spacing above the columns
}));

const Column = styled(Box)(({ theme }) => ({
  flex: 1,
  maxWidth: 'calc(40% - 16px)', // Ensure columns take up 50% of the width minus spacing
}));

const WaxingPricePage = () => {
  return (
    <Container className="container">
      <Box mt={4} mb={4}>
        <Typography variant="h2" align="center" gutterBottom>
          Waxing Services
        </Typography>

        {/* Services Price Chart */}
        <Grid container spacing={4} mt={4} justifyContent="center">
          <Grid item xs={12} sm={10} md={5}>
            <ServiceCategory elevation={3}>
              <Typography variant="h5" align="center" gutterBottom>
                Waxing
              </Typography>
              <ColumnsContainer>
                {/* First Column */}
                <Column>
                  <Typography variant="body1">Eyebrow - $15</Typography>
                  <Typography variant="body1">Lip - $10</Typography>
                  <Typography variant="body1">Chin - $12+</Typography>
                  <Typography variant="body1">Side Burns - $15</Typography>
                  <Typography variant="body1">Half Arms - $30</Typography>
                  <Typography variant="body1">Full Arms - $50</Typography>
                  <Typography variant="body1">Under Arms - $25</Typography>
                </Column>
                {/* Second Column */}
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
  );
};

export default WaxingPricePage;
