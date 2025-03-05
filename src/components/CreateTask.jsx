import React, { useState } from 'react';
import { createTask } from '../services/apiClient';

const CreateTask = ({ token, onTaskCreated }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');

  const handleCreate = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccessMsg('');
    setLoading(true);
    try {
      const result = await createTask(token, "test@gmail.com", title, description);
      if (result && result.message === "Task created") {
        setSuccessMsg("Task created correctly");
      } else {
        setSuccessMsg("Task created");
      }

      setTitle('');
      setDescription('');
      onTaskCreated();  
    } catch (err) {
      setError(err.message || 'Error creating task');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h3>Create Task</h3>
      <form onSubmit={handleCreate}>
        <input 
          type="text" 
          placeholder="Task Title" 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea 
          placeholder="Task Description (optional)" 
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit" disabled={loading}>
          {loading ? "Creating..." : "Create"}
        </button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {successMsg && <p style={{ color: 'green' }}>{successMsg}</p>}
    </div>
  );
};

export default CreateTask;
