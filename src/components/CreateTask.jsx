import React, { useState } from 'react';
import { createTask } from '../services/api';

const CreateTask = ({ token, onTaskCreated }) => {
  const [title, setTitle] = useState('');
  const [error, setError] = useState(null);

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      await createTask(token, "test@gmail.com", title);
      setTitle('');  
      onTaskCreated();  
    } catch (err) {
      setError('Error to create task');
    }
  };

  return (
    <div>
      <h3>Crear Tarea</h3>
      <form onSubmit={handleCreate}>
        <input 
          type="text" 
          placeholder="Task Title" 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <button type="submit">Crear</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default CreateTask;
