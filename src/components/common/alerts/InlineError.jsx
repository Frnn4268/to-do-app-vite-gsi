/**
 * @file InlineError.jsx
 * @description This component displays a small inline error message.
 * It is typically used to show validation or API errors near form fields or UI elements.
 *
 * @component
 * @param {Object} props - Component properties.
 * @param {string} props.error - The error message to display.
 * @returns {JSX.Element} The inline error message component.
 */

import React from 'react';

/**
 * InlineError Component
 * 
 * This component renders a small, inline error message with:
 * - **Red text styling** (`text-danger`) to indicate an error.
 * - **A subtle position adjustment** (`position-absolute end-0 me-3`) for better alignment.
 * - **Compact display** (`small mt-1`) to fit within form fields or UI elements.
 * 
 * @param {Object} props - Component properties.
 * @param {string} props.error - The error message to display.
 * @returns {JSX.Element} The styled inline error message.
 */
const InlineError = ({ error }) => (
  <div className="text-danger small mt-1 position-absolute end-0 me-3">
    {error}
  </div>
);

export default InlineError;
