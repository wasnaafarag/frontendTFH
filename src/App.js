import React, { useState, useEffect } from "react"; // Add useEffect import
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom'; // Add useNavigate import
import './App.css';
import WelcomePage from './components/WelcomePage';
import AuthPage from './components/AuthPage';
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
  const [isSignup, setIsSignup] = useState(false);
  const [showWelcomePage, setShowWelcomePage] = useState(true);
  const [userPreferences, setUserPreferences] = useState(null); // Store user preferences for future recommendations
  const [isReturningUser, setIsReturningUser] = useState(false); // Track if the user is returning
  const navigate = useNavigate(); // Define navigate inside the component

  useEffect(() => {
    const storedPreferences = localStorage.getItem("userPreferences");
    const user = localStorage.getItem("user");

    if (user && storedPreferences) {
      setUserPreferences(JSON.parse(storedPreferences)); // Retrieve preferences for returning users
      setIsReturningUser(true);
    }
  }, []);

  const handleLogin = (user) => {
    localStorage.setItem("user", user); // Save user login info to localStorage
    navigate('/preferences'); // Redirect user to preferences page
  };

  const handlePreferencesSubmit = (preferences) => {
    localStorage.setItem("userPreferences", JSON.stringify(preferences)); // Save preferences to localStorage
    setUserPreferences(preferences); // Update the state with the preferences
    navigate('/recommendations'); // Redirect to recommendations page
  };

  const handleContinue = () => {
    setShowWelcomePage(false); // Switch to login/signup after clicking the button
  };

  return (
    <div className="App">
      {/* Welcome page design */}
      {showWelcomePage ? (
        <div className="welcome-page">
          <header className="App-header">
            <h1 className="main-title">The Fragrance Hub</h1>
            <p className="sub-title">Your perfect fragrance journey begins here</p>
          </header>
          <button className="continue-btn" onClick={handleContinue}>To Continue, Press Here</button>
        </div>
      ) : (
        // This part is for showing Login or Signup Form
        <Routes>
          <Route path="/" element={isSignup ? <SignupForm /> : <LoginForm />} />
          <Route path="/preferences" element={<QuestionForm onSubmit={handlePreferencesSubmit} />} />
          <Route path="/recommendations" element={<RecommendationForm userPreferences={userPreferences} />} />
          <Route path="/questions" element={<QuestionForm />} />
          <Route path="/answers" element={<AnswerForm />} />
          <Route path="/perfumes" element={<PerfumeForm />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/questions-list" element={<QuestionList />} />
        </Routes>
      )}
    </div>
  );
};

export default App;

