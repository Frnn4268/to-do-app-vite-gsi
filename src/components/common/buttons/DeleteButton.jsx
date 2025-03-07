/**
 * @file DeleteButton.jsx
 * @description This component represents a button for deleting a task.
 * It includes a loading state and an icon for visual feedback.
 *
 * @component
 * @param {Object} props - Component properties.
 * @param {boolean} props.deleting - Indicates if the deletion is in progress.
 * @param {Function} props.onClick - Function to handle the delete action.
 * @returns {JSX.Element} The delete button component.
 */

import React from 'react';
import { Trash3 } from 'react-bootstrap-icons';

/**
 * DeleteButton Component
 * 
 * This component renders a button to delete a task with:
 * - **A spinner** (`spinner-border`) while the deletion is in progress.
 * - **A trash bin icon** (`Trash3`) when idle.
 * - **A tooltip** ("Delete") for accessibility.
 * - **A disabled state** to prevent multiple clicks during deletion.
 * 
 * @param {Object} props - Component properties.
 * @param {boolean} props.deleting - Indicates if the deletion is in progress.
 * @param {Function} props.onClick - Function to handle the delete action.
 * @returns {JSX.Element} The delete button component.
 */
const DeleteButton = ({ deleting, onClick }) => (
  <button 
    onClick={onClick}
    className="btn btn-sm btn-outline-danger"
    disabled={deleting}
    title="Delete"
  >
    {deleting ? (
      <span className="spinner-border spinner-border-sm" role="status" />
    ) : (
      <Trash3 size={16} />
    )}
  </button>
);

export default DeleteButton;
