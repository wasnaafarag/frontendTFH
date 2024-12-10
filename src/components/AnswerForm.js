import React, { useState } from 'react';

const AnswerForm = () => {
  const [answerData, setAnswerData] = useState({
    question_id: '',
    answer: '',
    preferred_scents: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAnswerData(prev => ({ ...prev, [name]: value }));
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

  return (
    <div className="form-container">
      <h2>Add Answer</h2>
      <form onSubmit={handleSubmit}>
        <input type="number" name="question_id" placeholder="Question ID" onChange={handleChange} />
        <textarea name="answer" placeholder="Answer" onChange={handleChange}></textarea>
        <input type="text" name="preferred_scents" placeholder="Preferred Scents" onChange={handleChange} />
        <button type="submit">Add Answer</button>
      </form>
    </div>
  );
};

export default AnswerForm;
