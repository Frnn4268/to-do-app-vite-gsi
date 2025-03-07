/**
 * @file StatusBadge.jsx
 * @description This component displays a badge indicating the completion status of a task.
 * It visually differentiates between completed and pending tasks using color and icons.
 *
 * @component
 * @param {Object} props - Component properties.
 * @param {boolean} props.isCompleted - Determines if the task is completed.
 * @returns {JSX.Element} The status badge component.
 */

import React from 'react';
import { Badge } from 'react-bootstrap';
import { CheckCircle, Circle } from 'react-bootstrap-icons';

/**
 * StatusBadge Component
 * 
 * This component renders a **Bootstrap badge** with:
 * - **A dynamic background color** (`success` for completed, `warning` for pending).
 * - **A status icon** (`CheckCircle` for completed, `Circle` for pending).
 * - **A pill shape** (`pill` attribute) for a modern UI appearance.
 * - **A descriptive label** ("Completado" or "Pendiente").
 * - **Padding and alignment adjustments** for better readability.
 * 
 * @param {Object} props - Component properties.
 * @param {boolean} props.isCompleted - Determines if the task is completed.
 * @returns {JSX.Element} The status badge component.
 */
const StatusBadge = ({ isCompleted }) => (
  <Badge 
    bg={isCompleted ? 'success' : 'warning'} 
    pill 
    className="d-flex align-items-center py-2 px-3"
  >
    {isCompleted ? 
      <CheckCircle className="me-2" size={20} /> : 
      <Circle className="me-2" size={20} />
    }
    {isCompleted ? 'Completado' : 'Pendiente'}
  </Badge>
);

export default StatusBadge;
