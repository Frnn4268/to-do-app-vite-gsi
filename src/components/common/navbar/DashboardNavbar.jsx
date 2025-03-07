/**
 * @file Navbar.jsx
 * @description This component represents the top navigation bar for the application.
 * It provides branding and displays the currently logged-in user's email.
 *
 * @component
 * @returns {JSX.Element} The navbar component.
 */

import React from 'react';

/**
 * Navbar Component
 * 
 * This component renders a fixed top navigation bar with:
 * - A **branding section** displaying the "To-Do Application" title.
 * - A **gradient background** for a modern UI appearance.
 * - A **border-bottom effect** for subtle separation.
 * - A **user email display** to indicate the logged-in account.
 * 
 * @returns {JSX.Element} The navigation bar component.
 */
const Navbar = () => {
  const secondaryGradient = 'linear-gradient(273deg,rgb(0, 153, 255) 0%,rgb(23, 116, 202) 100%)';

  return (
    <nav 
      className="navbar navbar-expand-lg shadow-sm"
      style={{ 
        background: secondaryGradient,
        borderBottom: '1px solid rgba(255, 255, 255, 0.2)'
      }}
    >
      <div className="container-fluid">
        {/* Application Branding */}
        <span className="navbar-brand fw-bold d-flex align-items-center gap-2 text-white">
          <span className="text-warning">To-Do</span>
          Application
        </span>

        {/* Display logged-in user email */}
        <div className="d-flex align-items-center gap-3">
          <span className="text-white small fw-bold">Usuario: test@gmail.com</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
