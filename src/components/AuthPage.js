import React from "react";
import { Link } from "react-router-dom";

const AuthPage = () => {
  return (
    <div className="auth-page">
      <h2>Welcome! Please Log In or Sign Up</h2>
      
      {/* Buttons to navigate between login and signup */}
      <div className="auth-options">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/signup">
          <button>Sign Up</button>
        </Link>
      </div>
    </div>
  );
};

export default AuthPage;
