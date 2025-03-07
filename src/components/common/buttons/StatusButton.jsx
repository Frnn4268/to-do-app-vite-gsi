/**
 * @file StatusButton.jsx
 * @description This component represents a button that toggles the completion status of a task.
 * It visually indicates whether a task is completed, pending, or updating.
 *
 * @component
 * @param {Object} props - Component properties.
 * @param {boolean} props.updating - Indicates if the status update is in progress.
 * @param {boolean} props.isCompleted - Indicates if the task is completed.
 * @param {Function} props.onClick - Function to handle status toggle.
 * @returns {JSX.Element} The task status toggle button.
 */

import React from 'react';
import { CheckCircleFill, Circle, ArrowRepeat } from 'react-bootstrap-icons';

/**
 * StatusButton Component
 * 
 * This component renders a button to toggle task completion status with:
 * - **A loading indicator** (`ArrowRepeat`) when updating.
 * - **A completed status icon** (`CheckCircleFill`) when the task is done.
 * - **An incomplete status icon** (`Circle`) when the task is pending.
 * - **An accessible label** for screen readers.
 * 
 * @param {Object} props - Component properties.
 * @param {boolean} props.updating - Indicates if the status update is in progress.
 * @param {boolean} props.isCompleted - Indicates if the task is completed.
 * @param {Function} props.onClick - Function to handle status toggle.
 * @returns {JSX.Element} The interactive task status button.
 */
const StatusButton = ({ updating, isCompleted, onClick }) => (
  <button 
    onClick={onClick}
    className="btn btn-link p-0 me-3"
    disabled={updating}
    aria-label={isCompleted ? "Marcar incompleto" : "Marcar completo"}
  >
    {updating ? (
      <ArrowRepeat className="spin" size={20} />
    ) : isCompleted ? (
      <CheckCircleFill className="text-success" size={24} />
    ) : (
      <Circle className="text-muted opacity-75" size={24} />
    )}
  </button>
);

export default StatusButton;
