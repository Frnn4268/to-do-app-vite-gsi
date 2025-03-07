/**
 * @file ErrorAlert.jsx
 * @description This component displays an error message with a retry button.
 * It is used to inform the user about an issue and provide an option to retry the action.
 *
 * @component
 * @param {Object} props - Component properties.
 * @param {string} props.error - The error message to display.
 * @param {Function} props.onRetry - Function to retry the failed action.
 * @returns {JSX.Element} The error alert component.
 */

import React from 'react';
import { XCircle, ArrowRepeat } from 'react-bootstrap-icons';

/**
 * ErrorAlert Component
 * 
 * This component renders an **error message alert** with:
 * - **A red error icon** (`XCircle`) for visual emphasis.
 * - **A text message** describing the issue.
 * - **A retry button** (`ArrowRepeat`) that triggers the provided `onRetry` function.
 * - **A responsive max-width** (`500px`) for proper alignment.
 * - **Bootstrap styling** for a clean, accessible alert layout.
 * 
 * @param {Object} props - Component properties.
 * @param {string} props.error - The error message to display.
 * @param {Function} props.onRetry - Function to retry the failed action.
 * @returns {JSX.Element} The error alert component.
 */
const ErrorAlert = ({ error, onRetry }) => (
  <div className="alert alert-danger text-center shadow-sm mx-auto" style={{ maxWidth: '500px' }}>
    {/* Error Icon */}
    <XCircle size={32} className="mb-2 text-danger" />

    {/* Error Message */}
    <p className="h5 mb-3">{error}</p>

    {/* Retry Button */}
    <button 
      onClick={onRetry}
      className="btn btn-outline-danger btn-sm d-flex align-items-center mx-auto"
    >
      <ArrowRepeat className="me-2" size={16} />
      Inténtalo de nuevo
    </button>
  </div>
);

export default ErrorAlert;
