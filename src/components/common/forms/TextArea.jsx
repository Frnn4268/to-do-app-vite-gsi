/**
 * @file TextArea.jsx
 * @description This component renders a styled textarea input field with a label.
 * It allows users to enter multi-line text with dynamic properties.
 *
 * @component
 * @param {Object} props - Component properties.
 * @param {string} props.label - The label displayed above the textarea.
 * @param {string} props.value - The current value of the textarea.
 * @param {Function} props.onChange - Function to handle textarea value changes.
 * @param {string} props.placeholder - The placeholder text displayed inside the textarea.
 * @param {number} [props.rows=3] - The number of visible rows in the textarea.
 * @returns {JSX.Element} The textarea input component.
 */

import React from 'react';

/**
 * TextArea Component
 * 
 * This component renders a **multi-line text input field** with:
 * - **A customizable label** (`label`) displayed above the input.
 * - **A controlled input value** (`value`) with an `onChange` handler.
 * - **A placeholder** to guide users on expected input (`placeholder`).
 * - **Configurable row count** (`rows`) to adjust the height of the textarea.
 * - **Bootstrap styling** for a clean and consistent UI.
 * 
 * @param {Object} props - Component properties.
 * @param {string} props.label - The label displayed above the textarea.
 * @param {string} props.value - The current value of the textarea.
 * @param {Function} props.onChange - Function to handle textarea value changes.
 * @param {string} props.placeholder - The placeholder text displayed inside the textarea.
 * @param {number} [props.rows=3] - The number of visible rows in the textarea.
 * @returns {JSX.Element} The styled textarea input component.
 */
const TextArea = ({ label, value, onChange, placeholder, rows = 3 }) => (
  <div className="col-12">
    {/* Input Label */}
    <label className="form-label fw-semibold">{label}</label>

    {/* Textarea Input Field */}
    <textarea
      className="form-control border-primary"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      rows={rows}
    />
  </div>
);

export default TextArea;
