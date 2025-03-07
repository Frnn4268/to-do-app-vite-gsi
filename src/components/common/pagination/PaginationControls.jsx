/**
 * @file PaginationControls.jsx
 * @description This component provides pagination controls for navigating through multiple pages of tasks.
 * It includes previous and next buttons, as well as numbered page buttons for direct navigation.
 *
 * @component
 * @param {Object} props - Component properties.
 * @param {number} props.currentPage - The current active page number.
 * @param {number} props.totalPages - The total number of available pages.
 * @param {Function} props.onPageChange - Function to handle page change events.
 * @returns {JSX.Element} The pagination controls component.
 */

import React from 'react';
import { ArrowLeft, ArrowRight } from 'react-bootstrap-icons';

/**
 * PaginationControls Component
 * 
 * This component renders **Bootstrap pagination controls** with:
 * - **A previous button** (`ArrowLeft`) to navigate to the previous page.
 * - **A series of numbered page buttons** for direct navigation.
 * - **A next button** (`ArrowRight`) to move to the next page.
 * - **Disabled state handling** for first and last pages.
 * 
 * @param {Object} props - Component properties.
 * @param {number} props.currentPage - The current active page number.
 * @param {number} props.totalPages - The total number of available pages.
 * @param {Function} props.onPageChange - Function to handle page change events.
 * @returns {JSX.Element} The pagination controls component.
 */
const PaginationControls = ({ currentPage, totalPages, onPageChange }) => (
  <nav className="mt-5">
    <ul className="pagination justify-content-center">
      {/* Previous Page Button */}
      <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
        <button
          className="page-link d-flex align-items-center"
          onClick={() => onPageChange(currentPage - 1)}
        >
          <ArrowLeft className="me-2" size={16} />
          Anterior
        </button>
      </li>
      
      {/* Page Number Buttons */}
      {[...Array(totalPages).keys()].map(page => (
        <li 
          key={page + 1} 
          className={`page-item ${currentPage === page + 1 ? 'active' : ''}`}
        >
          <button
            className="page-link"
            onClick={() => onPageChange(page + 1)}
          >
            {page + 1}
          </button>
        </li>
      ))}
      
      {/* Next Page Button */}
      <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
        <button
          className="page-link d-flex align-items-center"
          onClick={() => onPageChange(currentPage + 1)}
        >
          Siguiente
          <ArrowRight className="ms-2" size={16} />
        </button>
      </li>
    </ul>
  </nav>
);

export default PaginationControls;
