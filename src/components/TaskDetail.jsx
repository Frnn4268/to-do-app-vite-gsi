import React, { useEffect, useState } from 'react';
import { getTaskById } from '../services/api';
import { useParams, Link } from 'react-router-dom';

const TaskDetail = ({ token }) => {
  const { taskId } = useParams();  
  const [task, setTask] = useState(null);
  const [error, setError] = useState(null);

  const fetchTask = async () => {
    try {
      const taskData = await getTaskById(token, taskId);
      setTask(taskData);
    } catch (err) {
      setError('Error to obtain task details');
    }
  };

  useEffect(() => {
    if (token && taskId) {
      fetchTask();
    }
  }, [token, taskId]);

  if (error) return <p style={{ color: 'red' }}>{error}</p>;
  if (!task) return <p>Loading details...</p>;

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
