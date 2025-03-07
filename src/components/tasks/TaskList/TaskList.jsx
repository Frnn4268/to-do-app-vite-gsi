/**
 * @file TaskList.jsx
 * @description This component displays the list of tasks in the dashboard.
 * It fetches tasks from the API, handles pagination, and provides loading/error states.
 *
 * @component
 * @param {Object} props - Component properties.
 * @param {string} props.token - The authentication token required for API requests.
 * @returns {JSX.Element} The task list component.
 */

import React, { useEffect, useState } from 'react';
import { apiService } from '../../../services/apiClient';
import TaskItem from '../../../components/tasks/TaskItem/TaskItem';
import TaskListCard from '../../common/cards/TaskListCard';
import PaginationControls from '../../common/pagination/PaginationControls';
import LoadingSpinner from '../../common/loading/LoadingSpinner';
import ErrorAlertList from '../../common/alerts/ErrorAlertList';
import EmptyState from '../../common/alerts/EmptyState';

/**
 * TaskList Component
 * 
 * This component manages the display of tasks with:
 * - **API integration** to fetch tasks from the backend.
 * - **Loading state** while fetching data.
 * - **Error handling** with retry functionality.
 * - **Pagination controls** for navigating through multiple pages of tasks.
 * - **Conditional rendering** to show empty state if no tasks are available.
 * 
 * @param {Object} props - Component properties.
 * @param {string} props.token - The authentication token required for API requests.
 * @returns {JSX.Element} The task list component with pagination and task actions.
 */
const TaskList = ({ token }) => {
  const [tasks, setTasks] = useState([]);
  const [meta, setMeta] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  /**
   * Fetches tasks from the API with pagination and sorting.
   * Updates the state with tasks and metadata.
   */
  const fetchTasks = async () => {
    setLoading(true);
    setError(null);
    try {
      const { tasks, meta } = await apiService.getTasks(token, { 
        limit: 5, 
        order: '-created_at', 
        page: currentPage 
      });
      setTasks(tasks);
      setMeta(meta);
    } catch (err) {
      setError('Error mostrando las tareas. Por favor intenta de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  /**
   * useEffect hook to fetch tasks when token or currentPage changes.
   */
  useEffect(() => {
    token && fetchTasks();
  }, [token, currentPage]);

  /**
   * Handles page change for pagination.
   * @param {number} newPage - The new page number to navigate to.
   */
  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= meta.pages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div className="task-list-container mt-5">
      {/* Error message with retry option */}
      {error && <ErrorAlertList error={error} onRetry={fetchTasks} />}

      {/* Loading spinner while fetching tasks */}
      {loading && <LoadingSpinner message="Cargando tus tareas..." />}

      {/* Display task list if tasks exist */}
      {!loading && tasks.length > 0 && (
        <TaskListCard taskCount={meta.total}>
          <div className="list-group list-group-flush">
            {tasks.map(task => (
              <TaskItem 
                key={task.id} 
                token={token} 
                task={task} 
                onTaskUpdated={fetchTasks} 
                onTaskDeleted={fetchTasks} 
              />
            ))}
          </div>
        </TaskListCard>
      )}

      {/* Pagination controls */}
      {meta.pages > 1 && (
        <PaginationControls
          currentPage={currentPage}
          totalPages={meta.pages}
          onPageChange={handlePageChange}
        />
      )}

      {/* Display empty state if there are no tasks */}
      {!loading && tasks.length === 0 && <EmptyState />}
    </div>
  );
};

export default TaskList;
