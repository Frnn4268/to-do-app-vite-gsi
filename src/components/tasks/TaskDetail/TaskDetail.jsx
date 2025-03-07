/**
 * @file TaskDetail.jsx
 * @description This component displays detailed information about a specific task.
 * It fetches the task details from the API and handles loading, error, and not-found states.
 *
 * @component
 * @param {Object} props - Component properties.
 * @param {string} props.token - The authentication token required for API requests.
 * @returns {JSX.Element} The task detail component.
 */

import React, { useEffect, useState } from 'react';
import { apiService } from '../../../services/apiClient';
import { useParams } from 'react-router-dom';
import { ClockHistory } from 'react-bootstrap-icons';
import { Spinner } from 'react-bootstrap';
import DetailCard from '../../common/cards/DetailCard';
import StatusBadge from '../../common/badges/StatusBadge';
import DetailField from '../../common/layout/DetailField';
import ErrorAlert from '../../common/alerts/ErrorAlert';
import NotFoundAlert from '../../common/alerts/NotFoundAlert';

/**
 * TaskDetail Component
 * 
 * This component renders a **detailed view of a task** with:
 * - **API integration** to fetch task details dynamically.
 * - **A loading state** with a spinner while fetching data.
 * - **Error handling** with a retry option.
 * - **A not-found message** if the task does not exist.
 * - **A formatted display** for task attributes like title, description, status, and creation date.
 * 
 * @param {Object} props - Component properties.
 * @param {string} props.token - The authentication token required for API requests.
 * @returns {JSX.Element} The structured task detail view.
 */
const TaskDetail = ({ token }) => {
  const { taskId } = useParams();  
  const [task, setTask] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  /**
   * Fetches task details from the API and updates the state.
   */
  const fetchTask = async () => {
    setLoading(true);
    setError(null);
    try {
      const taskData = await apiService.getTaskById(token, taskId);
      if (!taskData) throw new Error('No se recibió información de la tarea');
      setTask(taskData);
    } catch (err) {
      setError(err.message || 'Error al obtener los detalles de la tarea');
    } finally {
      setLoading(false);
    }
  };

  /**
   * useEffect hook to fetch task details when the token or taskId changes.
   */
  useEffect(() => {
    token && taskId && fetchTask();
  }, [token, taskId]);

  // Loading state
  if (loading) return (
    <div className="text-center py-5">
      <Spinner animation="border" variant="primary" role="status">
        <span className="visually-hidden">Cargando...</span>
      </Spinner>
      <p className="mt-3 text-muted">Cargando detalles de la tarea...</p>
    </div>
  );

  // Error state with retry option
  if (error) return <ErrorAlert error={error} onRetry={fetchTask} />;
  
  // Not found state
  if (!task) return <NotFoundAlert message="No se encontró ninguna tarea" />;

  return (
    <div className="container mt-4">
      <DetailCard title="Detalles de la tarea" backLink="/">
        <div className="list-group list-group-flush">
          {/* Task Status */}
          <div className="list-group-item py-3 d-flex align-items-center border-0">
            <span className="text-muted me-3" style={{ width: '120px' }}>Estado:</span>
            <StatusBadge isCompleted={task.is_completed} />
          </div>

          {/* Task Title */}
          <DetailField label="Título" isCompleted={task.is_completed}>
            {task.title}
          </DetailField>

          {/* Task Description */}
          <DetailField label="Descripción">
            {task.description}
          </DetailField>

          {/* Task Creation Date */}
          <DetailField label="Creada">
            <div className="d-flex align-items-center">
              <ClockHistory className="me-2" size={20} />
              {new Date(task.created_at).toLocaleString()}
            </div>
          </DetailField>
        </div>
      </DetailCard>
    </div>
  );
};

export default TaskDetail;
