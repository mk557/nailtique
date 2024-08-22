// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import ManiPediPage from './components/ManiPediPage';
import ContactPage from './components/ContactPage';
import LocationModal from './components/LocationModal';
import SpaPricePage from './components/SpaPricePage';
import WaxingPricePage from './components/WaxingPricePage';
import EyelashExtensionPage from './components/EyelashExtensionPage';

import './styles/App.css';

const App = () => {
  const [isLocationModalOpen, setLocationModalOpen] = useState(false);

  const handleOpenLocationModal = () => {
    setLocationModalOpen(true);
  };

  const handleCloseLocationModal = () => {
    setLocationModalOpen(false);
  };

  return (
    <Router>
      <Navbar onOpenLocationModal={handleOpenLocationModal} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/spa" element={<SpaPricePage />} />
        <Route path="/waxing" element={<WaxingPricePage />} />
        <Route path="/eyelash-extensions" element={<EyelashExtensionPage />} />
        <Route path="/manipedi" element={<ManiPediPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
      <LocationModal open={isLocationModalOpen} onClose={handleCloseLocationModal} />
    </Router>
  );
};

export default App;
