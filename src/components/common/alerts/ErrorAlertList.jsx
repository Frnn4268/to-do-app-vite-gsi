/**
 * @file ErrorAlertList.jsx
 * @description This component displays an alert message for errors in a list format.
 * It provides a retry button to attempt the action again.
 *
 * @component
 * @param {Object} props - Component properties.
 * @param {string} props.error - The error message to display.
 * @param {Function} props.onRetry - Function to retry the failed action.
 * @returns {JSX.Element} The error alert list component.
 */

import React from 'react';

/**
 * ErrorAlertList Component
 * 
 * This component renders an **error alert box** with:
 * - **An error message** (`error`) displayed to the user.
 * - **A retry button** (`onRetry`) to attempt the action again.
 * - **Bootstrap styling** (`alert alert-danger`) for a clear visual indication.
 * - **A shadow effect** (`shadow-sm`) for better UI contrast.
 * - **A flexible layout** (`d-flex align-items-center`) to align content properly.
 * 
 * @param {Object} props - Component properties.
 * @param {string} props.error - The error message to display.
 * @param {Function} props.onRetry - Function to retry the failed action.
 * @returns {JSX.Element} The error alert list component.
 */
const ErrorAlertList = ({ error, onRetry }) => (
  <div className="alert alert-danger d-flex align-items-center shadow-sm mb-4">
    {/* Error Message */}
    <div className="flex-grow-1">{error}</div>

    {/* Retry Button */}
    <button 
      onClick={onRetry}
      className="btn btn-sm btn-outline-danger"
    >
      Inténtalo de nuevo
    </button>
  </div>
);

export default ErrorAlertList;
