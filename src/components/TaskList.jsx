import React, { useEffect, useState } from 'react';
import { getTasks } from '../services/api';
import TaskItem from './TaskItem';

const TaskList = ({ token }) => {
  const [tasks, setTasks] = useState([]);
  const [meta, setMeta] = useState({});
  const [error, setError] = useState(null);

  const fetchTasks = async () => {
    try {
      const { tasks, meta } = await getTasks(token);
      setTasks(tasks);
      setMeta(meta);
    } catch (err) {
      setError('Error to fetch tasks');
    }
  };

  useEffect(() => {
    if (token) fetchTasks();
  }, [token]);

  const handleTaskUpdated = (updatedTaskId) => {
    fetchTasks();
  };

  const handleTaskDeleted = (deletedTaskId) => {
    fetchTasks();
  };

  return (
    <div>
      <h2>Task List</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {tasks.map(task => (
          <TaskItem 
            key={task.id} 
            token={token} 
            task={task} 
            onTaskUpdated={handleTaskUpdated}
            onTaskDeleted={handleTaskDeleted}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
