/**
 * @file AuthButton.jsx
 * @description This component renders a styled submit button with a loading state.
 * It provides visual feedback when an authentication process is in progress.
 *
 * @component
 * @param {Object} props - Component properties.
 * @param {boolean} props.loading - Determines if the button is in a loading state.
 * @param {string} props.text - The default button text.
 * @param {string} props.loadingText - The text displayed when the button is in a loading state.
 * @returns {JSX.Element} The authentication button component.
 */

import React from 'react';

/**
 * AuthButton Component
 * 
 * This component renders a **submit button for authentication** with:
 * - **A default text** (`text`) when idle.
 * - **A spinner animation** (`spinner-border-sm`) when loading.
 * - **A disabled state** (`disabled={loading}`) to prevent multiple submissions.
 * - **Bootstrap styling** for a clean and accessible design.
 * - **A rounded shape** (`rounded-4`) for a modern UI.
 * 
 * @param {Object} props - Component properties.
 * @param {boolean} props.loading - Determines if the button is in a loading state.
 * @param {string} props.text - The default button text.
 * @param {string} props.loadingText - The text displayed when the button is in a loading state.
 * @returns {JSX.Element} The styled authentication button.
 */
const AuthButton = ({ loading, text, loadingText }) => (
  <button
    type="submit"
    className="btn btn-primary w-100 mt-3 py-3 fw-bold fs-6 rounded-4"
    disabled={loading}
  >
    {loading ? (
      <>
        <span className="spinner-border spinner-border-sm me-2" role="status"></span>
        {loadingText}
      </>
    ) : text}
  </button>
);

export default AuthButton;
