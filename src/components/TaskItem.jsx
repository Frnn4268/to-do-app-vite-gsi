import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { updateTask, deleteTask } from '../services/apiClient';

const TaskItem = ({ token, task, onTaskUpdated, onTaskDeleted }) => {
  const [updating, setUpdating] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [error, setError] = useState(null);

  const handleToggleStatus = async () => {
    setError(null);
    setUpdating(true);
    try {
      await updateTask(token, task.id);
      onTaskUpdated(task.id);
    } catch (err) {
      console.error('Error updating task:', err);
      setError('Error updating task');
    } finally {
      setUpdating(false);
    }
  };

  const handleDelete = async () => {
    if (!window.confirm('Are you sure you want to delete this task?')) return;
    setError(null);
    setDeleting(true);
    try {
      await deleteTask(token, task.id);
      onTaskDeleted(task.id);
    } catch (err) {
      console.error('Error deleting task:', err);
      setError('Error deleting task');
    } finally {
      setDeleting(false);
    }
  };

  return (
    <li style={{ marginBottom: '10px' }}>
      <Link 
        to={`/task/${task.id}`} 
        style={{ textDecoration: task.is_completed ? 'line-through' : 'none', marginRight: '10px' }}
      >
        {task.title}
      </Link>
      <button onClick={handleToggleStatus} disabled={updating || deleting}>
        {updating ? 'Updating...' : task.is_completed ? 'Mark Incomplete' : 'Mark Complete'}
      </button>
      <button onClick={handleDelete} disabled={deleting || updating} style={{ marginLeft: '10px' }}>
        {deleting ? 'Deleting...' : 'Delete'}
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </li>
  );
};

export default TaskItem;
