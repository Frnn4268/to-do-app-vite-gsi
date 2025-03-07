/**
 * @file LoadingSpinner.jsx
 * @description This component displays a loading spinner with an optional message.
 * It is used to indicate that a process is in progress, such as data fetching.
 *
 * @component
 * @param {Object} props - Component properties.
 * @param {string} props.message - The message to display below the spinner.
 * @returns {JSX.Element} The loading spinner component.
 */

import React from 'react';

/**
 * LoadingSpinner Component
 * 
 * This component renders a **Bootstrap loading spinner** with:
 * - **A centered layout** (`text-center my-5 py-5`) for proper positioning.
 * - **A visually hidden accessibility label** (`visually-hidden`).
 * - **A customizable message** displayed below the spinner.
 * - **A larger size** (`width: '3rem', height: '3rem'`) for better visibility.
 * 
 * @param {Object} props - Component properties.
 * @param {string} props.message - The message to display below the spinner.
 * @returns {JSX.Element} The loading spinner component.
 */
const LoadingSpinner = ({ message }) => (
  <div className="text-center my-5 py-5">
    {/* Bootstrap Spinner */}
    <div 
      className="spinner-border text-primary" 
      style={{ width: '3rem', height: '3rem' }} 
      role="status"
    >
      <span className="visually-hidden">Cargando...</span>
    </div>
    
    {/* Loading Message */}
    <p className="mt-3 text-muted">{message}</p>
  </div>
);

export default LoadingSpinner;
