/**
 * @file EmptyState.jsx
 * @description This component displays a message when no tasks are found.
 * It provides a friendly prompt encouraging users to create their first task.
 *
 * @component
 * @returns {JSX.Element} The empty state message component.
 */

import React from 'react';

/**
 * EmptyState Component
 * 
 * This component renders an **empty state card** with:
 * - **A muted heading** indicating that no tasks were found.
 * - **A brief message** encouraging users to create a new task.
 * - **A Bootstrap-styled card** for consistent UI design.
 * - **A centered layout** for better readability.
 * 
 * @returns {JSX.Element} The empty state message component.
 */
const EmptyState = () => (
  <div className="card border-0 shadow-lg">
    <div className="card-body text-center py-5">
      {/* Heading: No tasks found */}
      <h3 className="text-muted mb-3">No se encontraron tareas</h3>
      
      {/* Message: Encouraging task creation */}
      <p className="text-muted">¡Comienza creando tu primera tarea!</p>
    </div>
  </div>
);

export default EmptyState;
