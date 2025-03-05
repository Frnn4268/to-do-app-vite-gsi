import React, { useEffect, useState } from 'react';
import { getTasks } from '../services/api';
import TaskItem from './TaskItem';
import CreateTask from './CreateTask';

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

  return (
    <div>
      <h2>Task List</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <CreateTask token={token} onTaskCreated={fetchTasks} />

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
    </div>
  );
};

export default TaskList;
