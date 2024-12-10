import React, { useState } from 'react';

const RecommendationForm = () => {
  const [recommendationData, setRecommendationData] = useState({
    user_id: '',
    perfumes_id: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecommendationData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:7777/recommendations', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(recommendationData)
    });
    const data = await response.json();
    alert(data.message || 'Recommendation added successfully');
  };

  return (
    <div className="form-container">
      <h2>Add Recommendation</h2>
      <form onSubmit={handleSubmit}>
        <input type="number" name="user_id" placeholder="User ID" onChange={handleChange} />
        <input type="number" name="perfumes_id" placeholder="Perfume ID" onChange={handleChange} />
        <button type="submit">Add Recommendation</button>
      </form>
    </div>
  );
};

export default RecommendationForm;
