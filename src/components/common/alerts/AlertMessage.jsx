/**
 * @file AlertMessage.jsx
 * @description This component displays an alert message with dynamic styling.
 * It can be used to show success, error, warning, or informational messages.
 *
 * @component
 * @param {Object} props - Component properties.
 * @param {string} props.type - The Bootstrap alert type (e.g., "success", "danger", "warning", "info").
 * @param {string} props.message - The message to display inside the alert.
 * @returns {JSX.Element} The alert message component.
 */

import React from 'react';

/**
 * AlertMessage Component
 * 
 * This component renders a **Bootstrap-styled alert** with:
 * - **Dynamic alert type** (`alert-${type}`) to customize the style.
 * - **A centered text layout** (`text-center`) for readability.
 * - **Margin adjustments** (`mt-3 mb-0`) for consistent spacing.
 * 
 * @param {Object} props - Component properties.
 * @param {string} props.type - The Bootstrap alert type (e.g., "success", "danger", "warning", "info").
 * @param {string} props.message - The message to display inside the alert.
 * @returns {JSX.Element} The styled alert message component.
 */
const AlertMessage = ({ type, message }) => (
  <div className={`alert alert-${type} text-center mt-3 mb-0`}>
    {message}
  </div>
);

export default AlertMessage;
