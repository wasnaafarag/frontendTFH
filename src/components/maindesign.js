import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app">
      {/* Header Section */}
      <header className="header">
        <h1 className="title">The Fragrance Hub</h1>
        <p className="slogan">"Where Your Scent Story Begins"</p>
      </header>

      {/* Welcome Section */}
      <section className="welcome-section">
        <h2>Welcome to The Fragrance Hub</h2>
        <p>
          Discover your perfect fragrance match! Explore the world of scents, from floral to woody notes, and let us guide you to a perfume that's uniquely you.
        </p>
      </section>

      {/* Scents Questionnaire Section */}
      <section className="questionnaire-section">
        <h2>Find Your Perfect Scent</h2>
        <p>Choose your preferred scents:</p>
        <div className="options">
          <button className="option-button">Floral</button>
          <button className="option-button">Citrus</button>
          <button className="option-button">Woody</button>
          <button className="option-button">Spicy</button>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <p>&copy; 2024 The Fragrance Hub. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
