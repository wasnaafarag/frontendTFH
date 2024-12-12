import './AnswerForm.css';

import React, { useState } from 'react';

const AnswerForm = () => {
  const [answerData, setAnswerData] = useState({
    question_id: '',
    answer: '',
    preferred_scents: []
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'preferred_scents') {
      // Update preferred_scents as an array of selected options
      const options = Array.from(e.target.selectedOptions, option => option.value);
      setAnswerData(prev => ({ ...prev, [name]: options }));
    } else {
      setAnswerData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:7777/answers', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(answerData)
    });
    const data = await response.json();
    alert(data.message || 'Answer added successfully');
  };

  const answerChoices = ['Yes', 'No', 'Maybe', 'Not Sure']; // Example answer choices
  const scentChoices = ['Floral', 'Citrus', 'Woody', 'Spicy', 'Fresh']; // Example scent choices

  return (
    <div className="form-container">
      <h2>Add Answer</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          name="question_id"
          placeholder="Question ID"
          onChange={handleChange}
        />
        
        <label htmlFor="answer">Choose Your Answer</label>
        <select name="answer" onChange={handleChange}>
          {answerChoices.map((choice, index) => (
            <option key={index} value={choice}>
              {choice}
            </option>
          ))}
        </select>

        <label htmlFor="preferred_scents">Select Preferred Scents (you can select multiple)</label>
        <select
          name="preferred_scents"
          multiple
          size="4" // Adjust size to control the visible options
          onChange={handleChange}
        >
          {scentChoices.map((scent, index) => (
            <option key={index} value={scent}>
              {scent}
            </option>
          ))}
        </select>
        
        <button type="submit">Add Answer</button>
      </form>
    </div>
  );
};

export default AnswerForm;
