/**
 * @file DetailField.jsx
 * @description This component represents a field inside a detail view.
 * It displays a label alongside a value, with styling adjustments for completed tasks.
 *
 * @component
 * @param {Object} props - Component properties.
 * @param {string} props.label - The label displayed for the field.
 * @param {string} [props.value] - The value to display if no children are provided.
 * @param {boolean} [props.isCompleted=false] - Determines if the field should appear as completed (strikethrough).
 * @param {React.ReactNode} [props.children] - Custom content to display instead of the value.
 * @returns {JSX.Element} The detail field component.
 */

import React from 'react';

/**
 * DetailField Component
 * 
 * This component renders a **field in a detail view** with:
 * - **A label** (`label`) aligned to the left for clarity.
 * - **A value or custom content** (`value` or `children`).
 * - **A strikethrough effect** if `isCompleted` is `true`.
 * - **A fallback text** ("No disponible") when no value is provided.
 * - **A Bootstrap-styled list-group item** for consistent UI.
 * 
 * @param {Object} props - Component properties.
 * @param {string} props.label - The label displayed for the field.
 * @param {string} [props.value] - The value to display if no children are provided.
 * @param {boolean} [props.isCompleted=false] - Determines if the field should appear as completed (strikethrough).
 * @param {React.ReactNode} [props.children] - Custom content to display instead of the value.
 * @returns {JSX.Element} The detail field component.
 */
const DetailField = ({ label, value, isCompleted = false, children }) => (
  <div className="list-group-item py-3 d-flex align-items-start border-0">
    {/* Field Label */}
    <span className="text-muted me-3" style={{ width: '120px' }}>{label}:</span>

    {/* Field Value or Custom Content */}
    <div className={isCompleted ? 'text-muted text-decoration-line-through' : ''}>
      {children || value || <span className="fst-italic">No disponible</span>}
    </div>
  </div>
);

export default DetailField;
