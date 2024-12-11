import React from 'react';
import './WelcomePage.css';

const WelcomePage = ({ onContinue }) => {
  return (
    <div className="welcome-container">
      <h1>Welcome to The Fragrance Hub</h1>
      <p className="slogan">"Your perfect fragrance journey begins here. Perfumes are a huge part of who you are. They reflect your personality and add a personal touch that represents your signature. Let’s find your perfect match!"</p>
      <button className="continue-button" onClick={onContinue}>
        To continue, press here
      </button>
    </div>
  );
};

export default WelcomePage;
