// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, Menu, MenuItem } from '@mui/material';
import logo from '../images/logo.svg'; // Adjust the path to where your logo.svg is located
import '../styles/Navbar.css'; // Import the CSS file

const Navbar = ({ onOpenLocationModal }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" className="navbar">
      <Toolbar className="navbar-toolbar">
        {/* Wrap the logo with Link to make it clickable */}
        <Link to="/">
          <img
            src={logo}
            alt="Logo"
            className="navbar-logo"
          />
        </Link>
        {/* Right-aligned navbar buttons */}
        <div className="navbar-buttons-container">
          <Button color="inherit" component={Link} to="/" className="navbar-buttons">
            Home
          </Button>
          <Button
            color="inherit"
            aria-controls="services-menu"
            aria-haspopup="true"
            onClick={handleClick}
            className="navbar-buttons"
          >
            Services
          </Button>
          <Menu
            id="services-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem component={Link} to="/spa" onClick={handleClose}>
              Spa
            </MenuItem>
            <MenuItem component={Link} to="/manipedi" onClick={handleClose}>
              Mani & Pedi
            </MenuItem>
            <MenuItem component={Link} to="/waxing" onClick={handleClose}>
              Waxing
            </MenuItem>
            <MenuItem component={Link} to="/eyelash-extensions" onClick={handleClose}>
              Eyelash Extensions
            </MenuItem>
          </Menu>
          <Button color="inherit" component={Link} to="/contact" className="navbar-buttons">
            Contact Us
          </Button>
          <Button color="inherit" onClick={onOpenLocationModal} className="navbar-buttons">
            Location
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
