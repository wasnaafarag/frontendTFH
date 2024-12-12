import React, { useState, useEffect } from 'react';
import './RecommendationForm.css';  // Include CSS for styling

const RecommendationForm = ({ userPreferences }) => {
  const [perfumes, setPerfumes] = useState([]); // Initialize with empty array
  const [filteredPerfumes, setFilteredPerfumes] = useState([]);
  const [error, setError] = useState(null);

  // Fetch perfumes data
  useEffect(() => {
    fetch('/api/perfumes')  // Replace with the correct API URL
      .then(response => response.json())
      .then(data => {
        console.log("Perfumes data fetched:", data);
        setPerfumes(data);
      })
      .catch(err => {
        console.error('Error fetching perfumes:', err);
        setError('Failed to load perfumes');
      });
  }, []);

  // Filter perfumes based on user preferences
  useEffect(() => {
    if (perfumes && perfumes.length > 0 && userPreferences) {
      const filtered = perfumes.filter(perfume => {
        return (
          (userPreferences.scent.length === 0 || userPreferences.scent.some(scent => perfume.scentCategory.includes(scent))) &&
          (userPreferences.category.length === 0 || userPreferences.category.some(category => perfume.category.includes(category)))
        );
      });
      setFilteredPerfumes(filtered);
    }
  }, [perfumes, userPreferences]); // Only run this effect when perfumes or user preferences change

  // Handle case when data is loading
  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  if (!perfumes || perfumes.length === 0) {
    return <div className="loading">Loading perfumes...</div>; // Show loading message until data is available
  }

  return (
    <div className="recommendations-container">
      <h1>Perfume Recommendations</h1>
      {filteredPerfumes.length > 0 ? (
        <ul className="perfume-list">
          {filteredPerfumes.map((perfume, index) => (
            <li key={index} className="perfume-item">
              <div className="perfume-image-container">
                <img src={perfume.image} alt={perfume.name} className="perfume-image" />
              </div>
              <div className="perfume-details">
                <h2>{perfume.name}</h2>
                <p><strong>Scent:</strong> {perfume.scentCategory.join(', ')}</p>
                <p><strong>Notes:</strong> {perfume.notes.join(', ')}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No matching perfumes found based on your preferences.</p>
      )}
    </div>
  );
};

export default RecommendationForm;
