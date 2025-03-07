/**
 * @file App.jsx
 * @description This is the main entry point of the application, handling routing and authentication logic.
 * It manages user sessions, route protection, and page redirections.
 *
 * @component
 * @returns {JSX.Element} The main application component with defined routes.
 */

import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

import Login from './components/auth/Login/Login';
import LandingPage from './pages/LandingPage';
import DashboardPage from './pages/DashboardPage';

/**
 * App Component
 * 
 * This component manages:
 * - **User authentication state** (`token`), stored in `localStorage`.
 * - **Route redirection** based on authentication status.
 * - **Bootstrap tooltip initialization** for enhanced UI.
 * 
 * @returns {JSX.Element} The main application with defined routes.
 */
const App = () => {
  const [token, setToken] = useState(localStorage.getItem('authToken') || null);
  const navigate = useNavigate();

  /**
   * Initializes Bootstrap tooltips for elements with `data-bs-toggle="tooltip"`.
   */
  useEffect(() => {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
    
    return () => tooltipList.forEach(tooltip => tooltip.dispose());
  }, []);

  /**
   * Handles authentication state changes:
   * - Saves or removes the authentication token in `localStorage`.
   * - Redirects users to the correct route based on authentication.
   */
  useEffect(() => {
    if (token) {
      localStorage.setItem('authToken', token);

      if (window.location.pathname === '/todo/login' || window.location.pathname === '/todo/landing') {
        navigate('/todo/dashboard');
      }
    } else {
      localStorage.removeItem('authToken');

      const currentPath = window.location.pathname;
      if (currentPath !== '/todo/landing' && currentPath !== '/todo/login') {
        navigate('/todo/landing');
      }
    }
  }, [token, navigate]);

  return (
    <Routes>
      {/* Login Route */}
      <Route 
        path="/todo/login" 
        element={token ? <Navigate to="/todo/dashboard" /> : <Login setAuthToken={setToken} />} 
      />

      {/* Landing Page Route */}
      <Route path="/todo/landing" element={<LandingPage />} />

      {/* Protected Dashboard Route */}
      <Route 
        path="/todo/dashboard/*" 
        element={token ? <DashboardPage token={token} handleLogout={() => setToken(null)} /> : <Navigate to="/todo/login" />}
      />

      {/* Redirect Unknown Routes */}
      <Route path="*" element={<Navigate to={token ? "/todo/dashboard" : "/todo/landing"} />} />
    </Routes>
  );
};

export default App;
