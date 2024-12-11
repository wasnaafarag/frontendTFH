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
  const [userPreferences, setUserPreferences] = useState(null); // Store user preferences for future recommendations
  const [isReturningUser, setIsReturningUser] = useState(false); // Track if the user is returning
  const navigate = useNavigate(); // Define navigate inside the component

  // Check localStorage for existing user and preferences
  useEffect(() => {
    const storedPreferences = localStorage.getItem("userPreferences");
    const user = localStorage.getItem("user");

    if (user && storedPreferences) {
      setUserPreferences(JSON.parse(storedPreferences)); // Retrieve preferences for returning users
      setIsReturningUser(true); // Mark user as returning
      navigate('/preferences'); // Redirect to preferences page if returning user
    }
  }, [navigate]);

  // Handle user login
  const handleLogin = (user) => {
    localStorage.setItem("user", user); // Save user login info to localStorage
    navigate('/preferences'); // Redirect to preferences page after login
  };

  // Handle preferences submit
  const handlePreferencesSubmit = (preferences) => {
    localStorage.setItem("userPreferences", JSON.stringify(preferences)); // Save preferences to localStorage
    setUserPreferences(preferences); // Update the state with the preferences
    navigate('/recommendations'); // Redirect to recommendations page
  };

  // Handle 'Continue' button click - navigate to login/signup page
  const handleContinue = () => {
    navigate('/login'); // Navigate to login page after "Continue" is clicked
  };

  return (
    <div className="App">
      {/* Show Welcome page if it's the first time user */}
      {!isReturningUser && (
        <div className="welcome-page">
          <header className="App-header">
            <h1 className="main-title">The Fragrance Hub</h1>
            <p className="sub-title">Where elegance meets your unique essence!</p>
          </header>
          <button className="continue-btn" onClick={handleContinue}>To Continue, Press Here</button>
        </div>
      )}
      
      {/* Show Login or Signup forms once the WelcomePage is hidden or skipped */}
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/login" element={<LoginForm handleLogin={handleLogin} />} />
        <Route path="/signup" element={<SignupForm />} />

        {/* Other Pages */}
        <Route path="/preferences" element={<QuestionForm onSubmit={handlePreferencesSubmit} />} />
        <Route path="/recommendations" element={<RecommendationForm userPreferences={userPreferences} />} />
        <Route path="/questions" element={<QuestionForm />} />
        <Route path="/answers" element={<AnswerForm />} />
        <Route path="/perfumes" element={<PerfumeForm />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/questions-list" element={<QuestionList />} />
      </Routes>
    </div>
  );
};

export default App;
