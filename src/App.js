import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import UserForm from './components/UserForm';
import QuestionForm from './components/QuestionForm';
import AnswerForm from './components/AnswerForm';
import PerfumeForm from './components/PerfumeForm';
import RecommendationForm from './components/RecommendationForm';
import LoginForm from './components/LoginForm';
import UserList from './components/UserList';
import QuestionList from './components/QuestionList';
import SignupForm from './components/SignupForm';

const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>The Fragrance Hub</h1>
          <p>Your perfect fragrance journey begins here</p>
        </header>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/questions" element={<QuestionForm />} />
          <Route path="/answers" element={<AnswerForm />} />
          <Route path="/perfumes" element={<PerfumeForm />} />
          <Route path="/recommendations" element={<RecommendationForm />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/questions-list" element={<QuestionList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
