/**
 * @file CreateTask.jsx
 * @description This component provides a form for creating a new task.
 * It allows users to enter a title and description and submit the task to the API.
 *
 * @component
 * @param {Object} props - Component properties.
 * @param {string} props.token - The authentication token required for API requests.
 * @param {Function} props.onTaskCreated - Callback function triggered when a task is successfully created.
 * @returns {JSX.Element} The create task form component.
 */

import React, { useState } from 'react';
import { apiService } from '../../../services/apiClient';
import FormCard from '../../common/cards/FormCard';
import TextInput from '../../common/forms/TextInput';
import TextArea from '../../common/forms/TextArea';
import SubmitButton from '../../common/buttons/SubmitButton';
import AlertMessage from '../../common/alerts/AlertMessage';

/**
 * CreateTask Component
 * 
 * This component renders a **task creation form** with:
 * - **Title input** for task naming.
 * - **Description textarea** for additional task details.
 * - **Submit button** with a loading state.
 * - **Error and success messages** for user feedback.
 * - **API integration** to submit the task and update the UI upon success.
 * 
 * @param {Object} props - Component properties.
 * @param {string} props.token - The authentication token required for API requests.
 * @param {Function} props.onTaskCreated - Callback function triggered when a task is successfully created.
 * @returns {JSX.Element} The create task form component.
 */
const CreateTask = ({ token, onTaskCreated }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');

  /**
   * Handles task creation by sending data to the API.
   * Updates UI based on response (success or error).
   * 
   * @param {Event} e - Form submit event.
   */
  const handleCreate = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccessMsg('');
    setLoading(true);

    const payload = {
      user_email: "test@gmail.com", // Static email for task assignment
      title,
      description
    };
  
    try {
      const result = await apiService.createTask(token, payload);
      
      if (result?.id) { 
        setSuccessMsg("✅ ¡Tarea creada exitosamente!");
        setTitle('');
        setDescription('');
        
        if (typeof onTaskCreated === 'function') {
          onTaskCreated(); 
        }
      }
    } catch (err) {
      const errorMessage = err.response?.data?.error || err.message || '❌ Error al crear tarea';
      setError(errorMessage);
      setSuccessMsg(''); 
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container d-flex align-items-center justify-content-center mt-5">
      <div className="row justify-content-center w-100 mt-5">
        <div className="col-12 col-md-10 col-lg-8 col-xl-6 mt-5">
          {/* Task creation form */}
          <FormCard title="Crear nueva Tarea">
            <form onSubmit={handleCreate} className="row g-3">
              {/* Task title input */}
              <TextInput
                label="Título"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Ingrese el título de la tarea"
                required
              />
              
              {/* Task description input */}
              <TextArea
                label="Descripción"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Introduzca la descripción de la tarea (opcional)"
              />

              {/* Submit button with loading state */}
              <SubmitButton 
                loading={loading}
                text="Create Task"
                loadingText="Creando..."
              />

              {/* Display error or success messages */}
              {error && <AlertMessage type="danger" message={error} />}
              {successMsg && <AlertMessage type="success" message={successMsg} />}
            </form>
          </FormCard>
        </div>
      </div>
    </div>
  );
};

export default CreateTask;
