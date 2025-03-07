/**
 * @file DetailCard.jsx
 * @description This component serves as a reusable card layout for displaying task details.
 * It includes a title, a back navigation button, and a content area for child components.
 *
 * @component
 * @param {Object} props - Component properties.
 * @param {string} props.title - The title displayed at the top of the card.
 * @param {string} props.backLink - The URL path to navigate back.
 * @param {React.ReactNode} props.children - The content to be displayed inside the card.
 * @returns {JSX.Element} The detail card component.
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { CardChecklist, ArrowLeft } from 'react-bootstrap-icons';

/**
 * DetailCard Component
 * 
 * This component renders a **styled card layout** with:
 * - **A title section** with an icon (`CardChecklist`).
 * - **A back button** (`ArrowLeft`) for navigation.
 * - **A flexible content area** (`children`) for displaying details.
 * - **A responsive max-width** (`800px, 90% width`) for optimal usability.
 * - **Bootstrap styling** for a clean and accessible UI.
 * 
 * @param {Object} props - Component properties.
 * @param {string} props.title - The title displayed at the top of the card.
 * @param {string} props.backLink - The URL path to navigate back.
 * @param {React.ReactNode} props.children - The content to be displayed inside the card.
 * @returns {JSX.Element} The structured detail card component.
 */
const DetailCard = ({ title, backLink, children }) => (
  <div className="card border-0 shadow-lg mx-auto" style={{ maxWidth: '800px', width: '90%' }}>
    <div className="card-body p-5 d-flex flex-column">
      {/* Title and Back Button */}
      <div className="d-flex justify-content-between align-items-center mb-4 pb-3 border-bottom mt-3">
        <h2 className="h3 text-primary mb-0">
          <CardChecklist className="me-2" size={28} />
          {title}
        </h2>
        <Link 
          to={backLink} 
          className="btn btn-outline-secondary d-flex align-items-center py-2 px-3"
        >
          <ArrowLeft className="me-2" size={18} />
          Atrás
        </Link>
      </div>

      {/* Content Area */}
      <div className="flex-grow-1">
        {children}
      </div>
    </div>
  </div>
);

export default DetailCard;
