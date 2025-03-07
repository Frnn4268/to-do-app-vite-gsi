/**
 * @file FormCard.jsx
 * @description This component serves as a reusable card container for forms.
 * It provides a structured layout with a title and content area for form elements.
 *
 * @component
 * @param {Object} props - Component properties.
 * @param {string} props.title - The title displayed at the top of the form card.
 * @param {React.ReactNode} props.children - The form content inside the card.
 * @returns {JSX.Element} The form card component.
 */

import React from 'react';

/**
 * FormCard Component
 * 
 * This component renders a **styled form container** with:
 * - **A title section** for the form heading.
 * - **A flexible content area** (`children`) for form elements.
 * - **A Bootstrap-styled card layout** with soft shadows.
 * - **A responsive max-width** (`650px`) to maintain an optimal size.
 * 
 * @param {Object} props - Component properties.
 * @param {string} props.title - The title displayed at the top of the form card.
 * @param {React.ReactNode} props.children - The form content inside the card.
 * @returns {JSX.Element} The structured form card component.
 */
const FormCard = ({ title, children }) => (
  <div 
    className="card border-0 shadow-lg p-5 bg-white" 
    style={{ 
      borderRadius: '5px',
      maxWidth: '650px',
      width: '100%'
    }}
  >
    {/* Form Title */}
    <h3 className="mb-4 text-center fw-bold text-primary">{title}</h3>

    {/* Form Content */}
    {children}
  </div>
);

export default FormCard;
