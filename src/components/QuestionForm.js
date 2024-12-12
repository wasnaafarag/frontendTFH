import React, { useState, useEffect } from 'react';

const QuestionForm = ({ onSubmit, userPreferences }) => {
  // Safely initialize preferences with default values if they are undefined
  const [preferences, setPreferences] = useState({
    scent: userPreferences?.scent || [], 
    category: userPreferences?.category || [],
  });

  useEffect(() => {
    if (userPreferences) {
      setPreferences(userPreferences);
    }
  }, [userPreferences]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (preferences.scent.length === 0 || preferences.category.length === 0) {
      alert("Please select at least one scent and one category.");
      return;
    }

    onSubmit(preferences); // Pass preferences back to parent
  };

  const handleScentChange = (e) => {
    const { value, checked } = e.target;
    setPreferences((prev) => {
      const newScent = checked
        ? [...prev.scent, value]
        : prev.scent.filter((scent) => scent !== value);
      return { ...prev, scent: newScent };
    });
  };

  const handleCategoryChange = (e) => {
    const { value, checked } = e.target;
    setPreferences((prev) => {
      const newCategory = checked
        ? [...prev.category, value]
        : prev.category.filter((category) => category !== value);
      return { ...prev, category: newCategory };
    });
  };

  const scentChoices = ['Floral', 'Citrus', 'Woody', 'Spicy', 'Fresh'];
  const categoryChoices = ['Luxury', 'Casual', 'Sporty', 'Elegant', 'Tropical'];

  return (
    <form onSubmit={handleSubmit} className="question-form">
      <label>
        Favorite Scents:
        <div className="scrollable-dropdown">
          {scentChoices.map((scent, index) => (
            <div key={index} className="dropdown-item">
              <input
                type="checkbox"
                value={scent}
                checked={preferences.scent.includes(scent)}
                onChange={handleScentChange}
              />
              <label>{scent}</label>
            </div>
          ))}
        </div>
      </label>

      <label>
        Scent Categories:
        <div className="scrollable-dropdown">
          {categoryChoices.map((category, index) => (
            <div key={index} className="dropdown-item">
              <input
                type="checkbox"
                value={category}
                checked={preferences.category.includes(category)}
                onChange={handleCategoryChange}
              />
              <label>{category}</label>
            </div>
          ))}
        </div>
      </label>

      <button type="submit">Submit Preferences</button>
    </form>
  );
};

export default QuestionForm;
