import React, { useEffect, useState } from 'react';
import { getTasks } from '../services/apiClient';
import TaskItem from './TaskItem';
import CreateTask from './CreateTask';

const TaskList = ({ token }) => {
  const [tasks, setTasks] = useState([]);
  const [meta, setMeta] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchTasks = async () => {
    setLoading(true);
    setError(null);
    try {
      const { tasks, meta } = await getTasks(token, { limit: 5, order: '-created_at', page: currentPage });
      setTasks(tasks);
      setMeta(meta);
    } catch (err) {
      console.error('Error fetching tasks:', err);
      setError('Error fetching tasks. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (token) {
      fetchTasks();
    }
  }, [token, currentPage]);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prev => prev - 1);
    }
  };

  const handleNextPage = () => {
    if (meta.pages && currentPage < meta.pages) {
      setCurrentPage(prev => prev + 1);
    }
  };

  return (
    <div>
      <h2>Task List</h2>

      {error && (
        <div style={{ color: 'red' }}>
          <p>{error}</p>
          <button onClick={fetchTasks}>Retry</button>
        </div>
      )}

      {loading && <p>Loading tasks...</p>}

      <CreateTask token={token} onTaskCreated={fetchTasks} />

      {!loading && tasks.length === 0 && <p>No tasks found.</p>}

      <ul>
        {tasks.map(task => (
          <TaskItem 
            key={task.id} 
            token={token} 
            task={task} 
            onTaskUpdated={fetchTasks} 
            onTaskDeleted={fetchTasks} 
          />
        ))}
      </ul>

      {meta.pages && (
        <div>
          <p>
            Page {currentPage} of {meta.pages}
          </p>
          <button onClick={handlePreviousPage} disabled={currentPage <= 1}>
            Previous
          </button>
          <button onClick={handleNextPage} disabled={currentPage >= meta.pages}>
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default TaskList;
