/**
 * @file SubmitButton.jsx
 * @description This component renders a styled submit button with a loading state.
 * It provides visual feedback when an action is in progress.
 *
 * @component
 * @param {Object} props - Component properties.
 * @param {boolean} props.loading - Indicates whether the button is in a loading state.
 * @param {string} props.text - The default button text.
 * @param {string} props.loadingText - The text displayed when the button is in a loading state.
 * @returns {JSX.Element} The submit button component.
 */

import React from 'react';

/**
 * SubmitButton Component
 * 
 * This component renders a **submit button** with:
 * - **A default text** (`text`) when idle.
 * - **A spinner animation** (`spinner-border-sm`) when loading.
 * - **A disabled state** (`disabled={loading}`) to prevent multiple submissions.
 * - **Bootstrap styling** for a clean and accessible design.
 * 
 * @param {Object} props - Component properties.
 * @param {boolean} props.loading - Indicates whether the button is in a loading state.
 * @param {string} props.text - The default button text.
 * @param {string} props.loadingText - The text displayed when the button is in a loading state.
 * @returns {JSX.Element} The styled submit button.
 */
const SubmitButton = ({ loading, text, loadingText }) => (
  <button 
    type="submit" 
    className="btn btn-primary w-100 py-3 fw-bold mt-4"
    disabled={loading}
  >
    {loading ? (
      <>
        <span className="spinner-border spinner-border-sm me-2"></span>
        {loadingText}
      </>
    ) : text}
  </button>
);

export default SubmitButton;
