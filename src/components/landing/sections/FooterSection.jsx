/**
 * @file FooterSection.jsx
 * @description This component represents the footer section of the application.
 * It provides copyright information and ensures consistent branding at the bottom of the page.
 *
 * @component
 * @returns {JSX.Element} The footer section layout.
 */

import React from 'react';

/**
 * FooterSection Component
 * 
 * This component renders a simple footer with:
 * - A dark background for visual contrast.
 * - Centered copyright text for branding consistency.
 * - Responsive design using Bootstrap utility classes.
 * 
 * @returns {JSX.Element} The footer section component.
 */
const FooterSection = () => (
  <footer className="bg-dark text-white py-4">
    <div className="container text-center">
      <p className="mb-0 small">
        © Copyright 2025. All Rights Reserved.
      </p>
    </div>
  </footer>
);

export default FooterSection;
