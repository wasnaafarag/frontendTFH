import React, { useState } from 'react';

const QuestionForm = () => {
  const [questionData, setQuestionData] = useState({
    question: '',
    category: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setQuestionData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:7777/questions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(questionData)
    });
    const data = await response.json();
    alert(data.message || 'Question added successfully');
  };

  return (
    <div className="form-container">
      <h2>Add Question</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="question" placeholder="Question" onChange={handleChange} />
        <input type="text" name="category" placeholder="Category" onChange={handleChange} />
        <button type="submit">Add Question</button>
      </form>
    </div>
  );
};

export default QuestionForm;
