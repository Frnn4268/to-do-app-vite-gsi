/**
 * @file HeroSection.jsx
 * @description This component represents the hero section of the landing page.
 * It provides an engaging introduction to the application, highlighting its features
 * and encouraging users to get started.
 *
 * @component
 * @returns {JSX.Element} The hero section layout.
 */

import React from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * HeroSection Component
 * 
 * This component displays a full-height hero section with:
 * - A brief description highlighting the app's productivity and team collaboration features.
 * - A call-to-action button that navigates users to the login page (`/todo/login`).
 * - Responsive Bootstrap classes for proper alignment and styling.
 * 
 * @returns {JSX.Element} The hero section component.
 */
const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="hero-section vh-100 d-flex align-items-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            {/* Main Heading */}
            <h1 className="display-4 fw-bold mb-4">
              Transforma tu productividad con 
              <span className="text-primary"> GSI</span>
            </h1>

            {/* Description */}
            <p className="lead text-muted mb-5">
              La solución "To-do" en uno para gestión de tareas inteligente y colaboración en equipo empresarial
            </p>

            {/* Call-to-Action Button */}
            <button 
              className="btn btn-primary btn-lg rounded-pill px-5 py-3"
              onClick={() => navigate('/todo/login')} 
            >
              Comenzar ahora
              <i className="bi bi-arrow-right ms-2"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
