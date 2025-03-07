/**
 * @file TaskItem.jsx
 * @description This component represents a single task item in the task list.
 * It provides functionality to update task status, delete a task, and navigate to task details.
 *
 * @component
 * @param {Object} props - Component properties.
 * @param {string} props.token - The authentication token required for API requests.
 * @param {Object} props.task - The task object containing task details.
 * @param {Function} props.onTaskUpdated - Callback function to refresh the task list after an update.
 * @param {Function} props.onTaskDeleted - Callback function to refresh the task list after a deletion.
 * @returns {JSX.Element} The task item component.
 */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { apiService } from '../../../services/apiClient';
import StatusButton from '../../common/buttons/StatusButton';
import DeleteButton from '../../common/buttons/DeleteButton';
import DeleteConfirmationModal from '../../common/modal/DeleteConfirmationModal';
import InlineError from '../../common/alerts/InlineError';
import StatusIndicator from '../../common/badges/StatusIndicator';

/**
 * TaskItem Component
 * 
 * This component renders an individual task with:
 * - A **status button** to toggle completion state.
 * - A **clickable title** that navigates to the task details page.
 * - A **delete button** that triggers a confirmation modal.
 * - **Error handling** for update and delete operations.
 * 
 * @param {Object} props - Component properties.
 * @param {string} props.token - The authentication token required for API requests.
 * @param {Object} props.task - The task object containing task details.
 * @param {Function} props.onTaskUpdated - Callback function to refresh the task list after an update.
 * @param {Function} props.onTaskDeleted - Callback function to refresh the task list after a deletion.
 * @returns {JSX.Element} The interactive task item component.
 */
const TaskItem = ({ token, task, onTaskUpdated, onTaskDeleted }) => {
  const [updating, setUpdating] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [error, setError] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  /**
   * Handles task status toggle (mark as completed/incomplete).
   */
  const handleToggleStatus = async () => {
    setError(null);
    setUpdating(true);
    try {
      await apiService.updateTask(token, task.id);
      onTaskUpdated(task.id);
    } catch (err) {
      setError('Error actualizando tarea');
    } finally {
      setUpdating(false);
    }
  };

  /**
   * Handles task deletion after confirmation.
   */
  const handleDelete = async () => {
    setError(null);
    setDeleting(true);
    try {
      await apiService.deleteTask(token, task.id);
      onTaskDeleted(task.id);
    } catch (err) {
      setError('Error eliminando tarea');
    } finally {
      setDeleting(false);
      setShowDeleteModal(false);
    }
  };

  return (
    <li className="list-group-item d-flex align-items-center py-3 hover-shadow position-relative">
      {/* Task status toggle button */}
      <StatusButton
        updating={updating}
        isCompleted={task.is_completed}
        onClick={handleToggleStatus}
      />

      {/* Task title and description with navigation */}
      <Link 
        to={`task/${task.id}`} 
        className={`flex-grow-1 text-decoration-none ${
          task.is_completed ? 'text-muted text-decoration-line-through opacity-75' : 'text-dark'
        }`}
      >
        <div className="d-flex flex-column">
          <div className="d-flex align-items-center">
            <span className="me-2">{task.title}</span>
            {task.is_completed && <StatusIndicator />}
          </div>
          {task.description && (
            <small className="text-muted mt-1">{task.description}</small>
          )}
        </div>
      </Link>

      {/* Delete task button */}
      <div className="btn-group ms-3">
        <DeleteButton 
          deleting={deleting} 
          onClick={() => setShowDeleteModal(true)}
        />
      </div>

      {/* Delete confirmation modal */}
      <DeleteConfirmationModal
        show={showDeleteModal}
        title={task.title}
        onHide={() => setShowDeleteModal(false)}
        onConfirm={handleDelete}
        deleting={deleting}
      />

      {/* Error message display */}
      {error && <InlineError error={error} />}
    </li>
  );
};

export default TaskItem;
