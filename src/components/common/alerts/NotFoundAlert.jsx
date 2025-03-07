/**
 * @file NotFoundAlert.jsx
 * @description This component displays a message when a requested item is not found.
 * It provides a user-friendly way to indicate missing data.
 *
 * @component
 * @param {Object} props - Component properties.
 * @param {string} props.message - The message to display when an item is not found.
 * @returns {JSX.Element} The not-found alert component.
 */

import React from 'react';
import { Circle } from 'react-bootstrap-icons';

/**
 * NotFoundAlert Component
 * 
 * This component renders a **not-found message** with:
 * - **An icon** (`Circle`) to visually indicate missing data.
 * - **A text message** (`message`) to inform users of the issue.
 * - **Bootstrap styling** (`text-muted lead py-4 text-center`) for readability.
 * 
 * @param {Object} props - Component properties.
 * @param {string} props.message - The message to display when an item is not found.
 * @returns {JSX.Element} The not-found alert component.
 */
const NotFoundAlert = ({ message }) => (
  <div className="text-center py-4">
    <p className="text-muted lead">
      <Circle className="me-2" />
      {message}
    </p>
  </div>
);

export default NotFoundAlert;
