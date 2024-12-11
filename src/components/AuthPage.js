import React from 'react';
import './AuthPage.css';

const AuthPage = ({ onLogin, onSignup }) => {
  return (
    <div className="auth-container">
      <h2>Welcome back! Please choose:</h2>
      <div className="auth-buttons">
        <button className="auth-button" onClick={onLogin}>Log In</button>
        <button className="auth-button" onClick={onSignup}>Sign Up</button>
      </div>
    </div>
  );
};

export default AuthPage;
