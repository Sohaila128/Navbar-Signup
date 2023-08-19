import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/Navbar';
import Login from './components/LoginForm';
import SignUp from './components/Signup';
import Hero from './components/Hero';
import './App.css';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
      <Route path="/" element={<Hero />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;


// Hosting URL: https://navbar-login-signup-joe.web.app