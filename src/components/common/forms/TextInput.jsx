/**
 * @file TextInput.jsx
 * @description This component renders a styled text input field with a label.
 * It supports dynamic values, placeholder text, change handling, and required validation.
 *
 * @component
 * @param {Object} props - Component properties.
 * @param {string} props.label - The label displayed above the input field.
 * @param {string} props.value - The current value of the input field.
 * @param {Function} props.onChange - Function to handle input value changes.
 * @param {string} props.placeholder - The placeholder text displayed inside the input field.
 * @param {boolean} [props.required=false] - Determines if the input is required.
 * @returns {JSX.Element} The text input component.
 */

import React from 'react';

/**
 * TextInput Component
 * 
 * This component renders a **text input field** with:
 * - **A customizable label** (`label`) displayed above the input.
 * - **A controlled input value** (`value`) with an `onChange` handler.
 * - **A placeholder** to guide users on expected input (`placeholder`).
 * - **A required field option** (`required`) for form validation.
 * - **Bootstrap styling** for a consistent and clean UI.
 * 
 * @param {Object} props - Component properties.
 * @param {string} props.label - The label displayed above the input field.
 * @param {string} props.value - The current value of the input field.
 * @param {Function} props.onChange - Function to handle input value changes.
 * @param {string} props.placeholder - The placeholder text displayed inside the input field.
 * @param {boolean} [props.required=false] - Determines if the input is required.
 * @returns {JSX.Element} The styled text input component.
 */
const TextInput = ({ label, value, onChange, placeholder, required = false }) => (
  <div className="col-12">
    {/* Input Label */}
    <label className="form-label fw-semibold">{label}</label>

    {/* Text Input Field */}
    <input 
      type="text" 
      className="form-control border-primary"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
    />
  </div>
);

export default TextInput;
