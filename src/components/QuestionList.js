import React, { useState } from 'react';

const QuestionForm = ({ onSubmit }) => {
  const [preferences, setPreferences] = useState({
    scent: '',
    category: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(preferences); // Send the preferences to App.js
  };

  const scentChoices = [
    { name: 'Floral', image: '/images/floral.jpg' },
    { name: 'Citrus', image: '/images/citrus.jpg' },
    { name: 'Woody', image: '/images/woody.jpg' },
    { name: 'Spicy', image: '/images/spicy.jpg' },
    { name: 'Fresh', image: '/images/fresh.jpg' }
  ]; // Example scent choices with images

  const categoryChoices = [
    { name: 'Luxury', image: '/images/luxury.jpg' },
    { name: 'Casual', image: '/images/casual.jpg' },
    { name: 'Sporty', image: '/images/sporty.jpg' },
    { name: 'Elegant', image: '/images/elegant.jpg' },
    { name: 'Tropical', image: '/images/tropical.jpg' }
  ]; // Example categories with images

  const handleChoiceSelect = (value, type) => {
    setPreferences((prev) => ({ ...prev, [type]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="question-form">
      <label>Favorite Scent:</label>
      <div className="scrollable-dropdown">
        {scentChoices.map((scent, index) => (
          <div
            key={index}
            className="dropdown-item"
            onClick={() => handleChoiceSelect(scent.name, 'scent')}
          >
            <img src={scent.image} alt={scent.name} className="dropdown-image" />
            <span>{scent.name}</span>
          </div>
        ))}
      </div>

      <label>Scent Category:</label>
      <div className="scrollable-dropdown">
        {categoryChoices.map((category, index) => (
          <div
            key={index}
            className="dropdown-item"
            onClick={() => handleChoiceSelect(category.name, 'category')}
          >
            <img src={category.image} alt={category.name} className="dropdown-image" />
            <span>{category.name}</span>
          </div>
        ))}
      </div>

      <button type="submit">Submit Preferences</button>
    </form>
  );
};

export default QuestionForm;
