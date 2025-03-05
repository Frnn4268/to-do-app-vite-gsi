import React from 'react';
import { Link } from 'react-router-dom';
import { updateTask, deleteTask } from '../services/api';

const TaskItem = ({ token, task, onTaskUpdated, onTaskDeleted }) => {
  const handleToggleStatus = async () => {
    try {
      await updateTask(token, task.id);
      onTaskUpdated(task.id);
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  const handleDelete = async () => {
    try {
      await deleteTask(token, task.id);
      onTaskDeleted(task.id);
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return (
    <li>
      <Link to={`/task/${task.id}`} style={{ textDecoration: task.is_completed ? 'line-through' : 'none' }}>
        {task.title}
      </Link>
      <button onClick={handleToggleStatus}>
        {task.is_completed ? 'Mark Incomplete' : 'Mark Complete'}
      </button>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default TaskItem;
