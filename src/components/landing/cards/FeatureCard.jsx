/**
 * @file FeatureCard.jsx
 * @description This component represents a card highlighting a key feature of the application.
 * It displays an icon, title, and description in a visually appealing layout.
 *
 * @component
 * @param {Object} props - Component properties.
 * @param {string} props.icon - The Bootstrap icon class for the feature.
 * @param {string} props.title - The title of the feature.
 * @param {string} props.description - The description of the feature.
 * @returns {JSX.Element} The feature card component.
 */

import React from 'react';

/**
 * FeatureCard Component
 * 
 * This component renders a **feature highlight card** with:
 * - **A circular icon** (`feature-icon`) for visual representation.
 * - **A title** (`title`) describing the feature.
 * - **A description** (`description`) providing additional details.
 * - **A hover effect** (`shadow-hover`) for better user interaction.
 * - **Bootstrap styling** for a modern and responsive UI.
 * 
 * @param {Object} props - Component properties.
 * @param {string} props.icon - The Bootstrap icon class for the feature.
 * @param {string} props.title - The title of the feature.
 * @param {string} props.description - The description of the feature.
 * @returns {JSX.Element} The feature card component.
 */
const FeatureCard = ({ icon, title, description }) => (
  <div className="card h-100 border-0 shadow-hover">
    <div className="card-body p-4">
      {/* Feature Icon */}
      <div className="feature-icon bg-primary rounded-circle mb-4">
        <i className={`${icon} text-white fs-4`}></i>
      </div>

      {/* Feature Title */}
      <h3 className="h4 mb-3">{title}</h3>

      {/* Feature Description */}
      <p className="text-muted mb-0">{description}</p>
    </div>
  </div>
);

export default FeatureCard;
