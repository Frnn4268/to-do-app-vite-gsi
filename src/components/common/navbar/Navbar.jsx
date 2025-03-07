/**
 * @file Navbar.jsx
 * @description This component represents the navigation bar of the application.
 * It provides a link to the landing page and a login button for user authentication.
 *
 * @component
 * @returns {JSX.Element} The navigation bar component.
 */

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

/**
 * Navbar Component
 * 
 * This component renders the top navigation bar with the following elements:
 * - A brand link that redirects users to the landing page (`/todo/landing`).
 * - A login button that navigates to the login page (`/todo/login`).
 * - A responsive design with Bootstrap classes for styling.
 * 
 * @returns {JSX.Element} The navbar component with branding and navigation.
 */
const Navbar = () => {
  const navigate = useNavigate();
  
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm fixed-top">
      <div className="container">
        {/* Brand Link - Navigates to Landing Page */}
        <Link
          to="/todo/landing" 
          className="navbar-brand fw-bold fs-3 text-primary text-decoration-none"
        >
          GSI
        </Link>

        {/* Login Button - Navigates to Login Page */}
        <button 
          className="btn btn-outline-primary px-4 rounded-pill ms-auto"
          onClick={() => navigate('/todo/login')}
        >
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
