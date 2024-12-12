import './LoginForm.css'; // Make sure the path matches your file structure
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate to navigate between pages

const LoginForm = ({ handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Define navigate function

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:7777/login', { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    if (response.ok) {
      handleLogin(data.user); // Handle login success
    } else {
      alert('Error: ' + data.error); // Show error if login fails
    }
  };

  // Navigate to the sign-up page
  const goToSignup = () => {
    navigate('/signup');
  };

  return (
    <div className="login-form-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Log In</button>
      </form>

      {/* Sign up button */}
      <div className="signup-container">
        <p>Don't have an account? <button onClick={goToSignup}>Sign Up</button></p>
      </div>
    </div>
  );
};

export default LoginForm;