// src/components/HomePage.js
import React from 'react';
import '../styles/HomePage.css';
import spaImage from '../images/spa.jpg';
import maniPediImage from '../images/manicure.jpg';
import waxingImage from '../images/waxing.png';
import eyelashImage from '../images/eyelash.png';
import flowerImage from '../images/flower.jpg';
import instagramIcon from '../images/instagram.png'; // Instagram icon
import googleIcon from '../images/google.png'; // Google review icon
import largeImage from '../images/background.png'
import { Link } from 'react-router-dom';
import Footer from '../components/Footer'; // Adjust the path if needed

const HomePage = () => {
    return (
        <div className="container">
            {/* Large image section with overlay text */}
            <div className="welcome-image-container">
                <img src={largeImage} alt="Welcome" className="welcome-image" />
                <div className="welcome-text">
                    <h1>Welcome</h1>
                    <p>Nail Tique, where excellence meets relaxation.</p>
                    <p>Indulge in our top-notch nail care services in a warm and inviting atmosphere.</p>
                </div>
            </div>
            <section className="hero-section">
                <p className="hero-text">Nothing improves your mood like a new manicure.</p>
            </section>
            <section className="grid-section">
                <Link to="/spa" className="grid-link">
                    <div className="grid-item">
                        <img src={spaImage} alt="Spa Services" className="grid-image" />
                        <p>Spa Services</p>
                    </div>
                </Link>
                <Link to="/manipedi" className="grid-link">
                    <div className="grid-item">
                        <img src={maniPediImage} alt="Mani & Pedi" className="grid-image" />
                        <p>Mani & Pedi</p>
                    </div>
                </Link>
                <Link to="/waxing" className="grid-link">
                    <div className="grid-item">
                        <img src={waxingImage} alt="Waxing" className="grid-image" />
                        <p>Waxing</p>
                    </div>
                </Link>
                <Link to="/eyelash-extensions" className="grid-link">
                    <div className="grid-item">
                        <img src={eyelashImage} alt="Eyelash" className="grid-image" />
                        <p>Eyelash Extension</p>
                    </div>
                </Link>
            </section>
            <div className="flower-image-container">
                <img src={flowerImage} alt="Full Width" className="flower-image" />
                <div className="overlay-text">
                    <p>Follow us on Instagram &</p>
                    <p>Leave us a review!</p>
                    <div className="overlay-links">
                        <a href="https://www.instagram.com/nailtiquecloster/" target="_blank" rel="noopener noreferrer">
                            <img src={instagramIcon} alt="Instagram" />
                        </a>
                        <a href="https://g.co/kgs/J4YaVLy" target="_blank" rel="noopener noreferrer">
                            <img src={googleIcon} alt="Google Review" />
                        </a>
                    </div>
                    {/* Follow Button */}
                    <div className="follow-button-container">
                        <a href="https://www.instagram.com/nailtiquecloster/">
                        <button className="follow-button">FOLLOW</button>
                        </a>
                    </div>
                </div>
            </div>
            <Footer /> {/* Ensure the Footer is at the bottom */}
        </div>
    );
};

export default HomePage;