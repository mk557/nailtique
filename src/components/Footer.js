import React from 'react';
import { Typography, Container } from '@mui/material';
import logo from '../images/footerlogo.svg'; // Adjust the path to where your logo.svg is located
import '../styles/Footer.css'; // Import the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <div className="footer-container">
          <div className="footer-left">

            <Typography variant="body1" className="footer-text">
              <span className="footer-heading">PHONE</span>
              <span className="footer-value"> (201) 750-2649</span>
            </Typography>
            <Typography variant="body1" className="footer-text">
              <span className="footer-heading">EMAIL</span>
              <span className="footer-value">nail12perry@gmail.com</span>
            </Typography>
            <Typography variant="body1" className="footer-text">
              <span className="footer-heading">ADDRESS</span>
              <span className="footer-value">12 PERRY ST, Closter, New Jersey 07624</span>
            </Typography>
          </div>
          <Typography variant="body1" className="footer-text">
            <div className="footer-item">
              <Typography variant="body1" className="footer-text">
                <span className="footer-heading">HOURS</span>
              </Typography>
              <div className="footer-hours">
                <Typography variant="body1" className="footer-value">
                  Mon-Fri: 9:30am - 7pm
                </Typography>
                <Typography variant="body1" className="footer-value">
                  Sat: 9am - 6pm
                </Typography>
                <Typography variant="body1" className="footer-value">
                  Sun: 10am - 5pm
                </Typography>
              </div>
            </div>
            </Typography>
        </div>
        <div className="logo-container">
          <img src={logo} alt="Logo" className="footer-logo" />
        </div>
        
        <Typography variant="body1" align="center" className="footer-text copyright-text">
          © 2024 NailTique Closter
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
