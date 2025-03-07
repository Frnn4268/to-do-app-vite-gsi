/**
 * @file EmailInput.jsx
 * @description This component renders a styled email input field with a label.
 * It supports dynamic values, change handling, validation, and a disabled state during loading.
 *
 * @component
 * @param {Object} props - Component properties.
 * @param {string} props.value - The current value of the email input field.
 * @param {Function} props.onChange - Function to handle input value changes.
 * @param {boolean} props.loading - Determines if the input should be disabled while loading.
 * @returns {JSX.Element} The email input field component.
 */

import React from 'react';

/**
 * EmailInput Component
 * 
 * This component renders an **email input field** with:
 * - **A descriptive label** (`Correo electrónico:`).
 * - **A controlled input value** (`value`) with an `onChange` handler.
 * - **Placeholder text** (`Ingresa tu email`) for guidance.
 * - **Required validation** (`required` attribute).
 * - **A disabled state** (`disabled={loading}`) when a process is running.
 * - **Bootstrap styling** for a clean and consistent UI.
 * 
 * @param {Object} props - Component properties.
 * @param {string} props.value - The current value of the email input field.
 * @param {Function} props.onChange - Function to handle input value changes.
 * @param {boolean} props.loading - Determines if the input should be disabled while loading.
 * @returns {JSX.Element} The styled email input field.
 */
const EmailInput = ({ value, onChange, loading }) => (
  <div className="mb-4">
    {/* Input Label */}
    <label htmlFor="email" className="form-label text-muted small mb-2">
      Correo electrónico: 
    </label>

    {/* Email Input Field */}
    <input
      type="email"
      id="email"
      className="form-control form-control-lg border-secondary fs-6"
      placeholder="Ingresa tu email"
      value={value}
      onChange={onChange}
      required
      disabled={loading}
    />
  </div>
);

export default EmailInput;
