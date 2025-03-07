/**
 * @file AuthCard.jsx
 * @description This component provides a styled card layout for authentication forms.
 * It includes an image section, a title, a subtitle, and a content area for form elements.
 *
 * @component
 * @param {Object} props - Component properties.
 * @param {React.ReactNode} props.children - The authentication form elements inside the card.
 * @param {string} props.imageUrl - The URL of the image displayed on the left side.
 * @param {string} props.title - The main title displayed in the card.
 * @param {string} props.subtitle - The subtitle displayed over the image section.
 * @returns {JSX.Element} The authentication card component.
 */

import React from 'react';

/**
 * AuthCard Component
 * 
 * This component renders a **styled authentication card** with:
 * - **An optional image section** (`imageUrl`) for a visual workspace.
 * - **A title** (`title`) displayed above the form.
 * - **A subtitle** (`subtitle`) overlayed on the image section.
 * - **A flexible content area** (`children`) for authentication forms.
 * - **A responsive layout** (`d-none d-md-block`) that hides the image on smaller screens.
 * - **Bootstrap styling** for a modern and user-friendly interface.
 * 
 * @param {Object} props - Component properties.
 * @param {React.ReactNode} props.children - The authentication form elements inside the card.
 * @param {string} props.imageUrl - The URL of the image displayed on the left side.
 * @param {string} props.title - The main title displayed in the card.
 * @param {string} props.subtitle - The subtitle displayed over the image section.
 * @returns {JSX.Element} The authentication card component.
 */
const AuthCard = ({ children, imageUrl, title, subtitle }) => (
  <div className="card shadow-lg border-0 mx-auto mt-5" 
       style={{ 
         maxWidth: '800px', 
         height: '700px',
         width: '100%',
       }}>
    <div className="row g-0 h-100">
      {/* Image Section - Hidden on Small Screens */}
      <div className="col-md-5 d-none d-md-block h-100 position-relative">
        <div className="h-100 p-3">
          <img 
            src={imageUrl}
            alt="Workspace"
            className="img-fluid h-100 object-fit-cover rounded-3"
            style={{ boxShadow: '0 0.5rem 1rem rgba(0, 0, 0, 0.30)' }}
          />
          {/* Subtitle Overlay */}
          <div className="position-absolute bottom-0 start-0 end-0 bg-dark bg-opacity-50 text-center p-3 m-3 rounded-bottom">
            <h3 className="h4 text-white mb-0 fw-bold">{subtitle}</h3>
          </div>
        </div>
      </div>

      {/* Authentication Form Section */}
      <div className="col-md-7 d-flex align-items-center">
        <div className="card-body p-4 p-xl-5">
          {/* Card Title */}
          <h2 className="text-center mb-4 display-6 fw-bold">{title}</h2>

          {/* Form Elements */}
          {children}
        </div>
      </div>
    </div>
  </div>
);

export default AuthCard;
