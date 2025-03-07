/**
 * @file LogoutButton.jsx
 * @description This component represents the logout button in the sidebar.
 * It triggers the logout function when clicked and is styled for a seamless user experience.
 *
 * @component
 * @param {Object} props - Component properties.
 * @param {Function} props.handleLogout - Function to handle user logout.
 * @returns {JSX.Element} The logout button component.
 */

import React from 'react';
import { BoxArrowLeft } from 'react-bootstrap-icons';

/**
 * LogoutButton Component
 * 
 * This component renders a logout button with:
 * - A **logout icon** (`BoxArrowLeft`).
 * - A **click event** to trigger the logout function.
 * - **Styling with Bootstrap classes** for a clean and accessible UI.
 * - **A border-top separator** for visual structure.
 * 
 * @param {Object} props - Component properties.
 * @param {Function} props.handleLogout - Function to handle user logout.
 * @returns {JSX.Element} The logout button component.
 */
const LogoutButton = ({ handleLogout }) => (
  <div className="mt-auto border-top border-white-20 pt-4">
    <button 
      onClick={handleLogout} 
      className="btn btn-outline-light w-100 fw-bold d-flex align-items-center gap-2 justify-content-center"
      style={{ borderColor: 'rgba(255, 255, 255, 0.5)' }}
    >
      <BoxArrowLeft size={18} />
      Cerrar sesión
    </button>
  </div>
);

export default LogoutButton;
