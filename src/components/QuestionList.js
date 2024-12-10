import React, { useState, useEffect } from 'react';

const QuestionList = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      const response = await fetch('http://localhost:7777/questions');
      const data = await response.json();
      setQuestions(data);
    };

    fetchQuestions();
  }, []);

  return (
    <div className="list-container">
      <h2>Questions List</h2>
      <ul>
        {questions.map(question => (
          <li key={question.ID}>{question.question} - {question.category}</li>
        ))}
      </ul>
    </div>
  );
};

export default QuestionList;
