import React, { useEffect, useState } from 'react';
import { getTaskById } from '../services/apiClient';
import { useParams, Link } from 'react-router-dom';

const TaskDetail = ({ token }) => {
  const { taskId } = useParams();  
  const [task, setTask] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchTask = async () => {
    setLoading(true);
    setError(null);
    try {
      const taskData = await getTaskById(token, taskId);
      if (!taskData) {
        throw new Error('No task information received');
      }
      setTask(taskData);
    } catch (err) {
      console.error('Error fetching task detail:', err);
      setError(err.message || 'Error getting task details');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (token && taskId) {
      fetchTask();
    }
  }, [token, taskId]);

  if (loading) return <p>Loading details...</p>;

  if (error) return (
    <div>
      <p style={{ color: 'red' }}>{error}</p>
      <button onClick={fetchTask}>Retry</button>
    </div>
  );

  if (!task) return <p>No task found.</p>;

  return (
    <div>
      <h3>Task Detail</h3>
      <p><strong>ID:</strong> {task.id}</p>
      <p><strong>Title:</strong> {task.title}</p>
      <p><strong>Description:</strong> {task.description || 'Without description'}</p>
      <p><strong>Completed:</strong> {task.is_completed ? 'Yes' : 'No'}</p>
      <p><strong>Created:</strong> {new Date(task.created_at).toLocaleString()}</p>
      <p><strong>Updated:</strong> {new Date(task.updated_at).toLocaleString()}</p>
      <Link to="/">Back to the list</Link>
    </div>
  );
};

export default TaskDetail;
