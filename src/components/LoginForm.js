import './LoginForm.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Ensure useNavigate is imported

const LoginForm = ({ handleLogin }) => {
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const navigate = useNavigate();  // Initialize useNavigate

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simulate API request (you can replace this with real backend call)
    const response = await fetch('http://localhost:7777/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(loginData),
    });

    const data = await response.json();

    // Check if login is successful
    if (data.success) {
      alert('Login successful!');
      handleLogin(data.user);  // Save user info after successful login
      navigate('/preferences');  // Redirect to preferences page after login
    } else {
      alert('Login failed!');
    }
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <a href="/signup">Sign up</a></p>
    </div>
  );
};

export default LoginForm;
