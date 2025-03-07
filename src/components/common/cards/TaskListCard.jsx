/**
 * @file TaskListCard.jsx
 * @description This component represents a styled card container for displaying a list of tasks.
 * It includes a header with a task count and a body section where tasks are rendered.
 *
 * @component
 * @param {Object} props - Component properties.
 * @param {React.ReactNode} props.children - The content to be displayed inside the card (list of tasks).
 * @param {number} props.taskCount - The total number of tasks to display in the badge.
 * @returns {JSX.Element} The task list card component.
 */

import React from 'react';
import { ClockHistory } from 'react-bootstrap-icons';

/**
 * TaskListCard Component
 * 
 * This component renders a **Bootstrap-styled card** with:
 * - **A header** containing the "Tus Tareas" title and task count badge.
 * - **A task count badge** to indicate the number of tasks.
 * - **A flexible body section** (`children`) to display task items dynamically.
 * - **A responsive design** (`maxWidth: '800px', width: '90%'`) for optimal usability.
 * 
 * @param {Object} props - Component properties.
 * @param {React.ReactNode} props.children - The content to be displayed inside the card (list of tasks).
 * @param {number} props.taskCount - The total number of tasks to display in the badge.
 * @returns {JSX.Element} The task list card component.
 */
const TaskListCard = ({ children, taskCount }) => (
  <div className="card border-0 shadow-lg mx-auto" style={{ maxWidth: '800px', width: '90%' }}>
    {/* Card Header: Title and Task Count Badge */}
    <div className="card-header bg-white border-0 pt-4 px-5 mt-5">
      <div className="d-flex justify-content-between align-items-center fw-bold">
        <h2 className="h3 mb-0 text-primary">
          <ClockHistory className="me-2" />
          Tus Tareas
        </h2>
        <span className="badge bg-primary rounded-pill">
          {taskCount}
        </span>
      </div>
    </div>

    {/* Card Body: Task List Content */}
    <div className="card-body px-5 py-4">
      {children}
    </div>
  </div>
);

export default TaskListCard;
