/**
 * @file StatusIndicator.jsx
 * @description This component represents a status badge indicating a completed task.
 * It visually differentiates completed tasks from pending ones.
 *
 * @component
 * @returns {JSX.Element} The status indicator badge.
 */

import React from 'react';
import { Badge } from 'react-bootstrap';

/**
 * StatusIndicator Component
 * 
 * This component renders a **Bootstrap badge** with:
 * - A **green background** (`bg="success"`) to indicate a completed task.
 * - A **pill shape** (`pill` attribute) for a modern UI appearance.
 * - **Centered alignment** (`align-middle`) for better positioning.
 * - **The label "Completado"** to clearly indicate task completion.
 * 
 * @returns {JSX.Element} The completed task status badge.
 */
const StatusIndicator = () => (
  <Badge bg="success" pill className="align-middle">
    Completado
  </Badge>
);

export default StatusIndicator;
