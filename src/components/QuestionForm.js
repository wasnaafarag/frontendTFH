import React, { useState } from "react";

// Example data for seasons, flowers, and scents
const seasons = ["Summer", "Winter", "Autumn", "Spring"];
const flowers = [
  { name: "Rose", image: "/images/rose.jpg" },
  { name: "Lavender", image: "/images/lavender.jpg" },
  { name: "Jasmine", image: "/images/jasmine.jpg" }
];
const scents = [
  { name: "Floral", image: "/images/floral.jpg" },
  { name: "Citrus", image: "/images/citrus.jpg" },
  { name: "Woody", image: "/images/woody.jpg" }
];

const QuestionForm = () => {
  const [answers, setAnswers] = useState({
    season: "",
    flower: "",
    scent: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAnswers((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:7777/answers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(answers),
    });

    const data = await response.json();
    alert(data.message || "Answers submitted successfully!");
  };

  return (
    <div className="form-container">
      <h2>Tell Us About Your Preferences</h2>
      <form onSubmit={handleSubmit}>
        {/* Question 1: Season */}
        <div className="question-section">
          <h3>What's your favorite season?</h3>
          <div className="options">
            {seasons.map((season) => (
              <label key={season}>
                <input
                  type="radio"
                  name="season"
                  value={season}
                  onChange={handleChange}
                />
                {season}
              </label>
            ))}
          </div>
        </div>

        {/* Question 2: Favorite Flower */}
        <div className="question-section">
          <h3>Choose your favorite flower</h3>
          <div className="options">
            {flowers.map((flower) => (
              <label key={flower.name}>
                <input
                  type="radio"
                  name="flower"
                  value={flower.name}
                  onChange={handleChange}
                />
                <img src={flower.image} alt={flower.name} className="flower-image" />
                {flower.name}
              </label>
            ))}
          </div>
        </div>

        {/* Question 3: Favorite Scent */}
        <div className="question-section">
          <h3>What's your preferred scent?</h3>
          <div className="options">
            {scents.map((scent) => (
              <label key={scent.name}>
                <input
                  type="radio"
                  name="scent"
                  value={scent.name}
                  onChange={handleChange}
                />
                <img src={scent.image} alt={scent.name} className="scent-image" />
                {scent.name}
              </label>
            ))}
          </div>
        </div>

        <button type="submit">Submit Preferences</button>
      </form>
    </div>
  );
};

export default QuestionForm;
