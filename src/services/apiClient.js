/**
 * @file apiClient.js
 * @description API service for the To-Do List application using Vite and React.
 * This file contains functions to perform requests to the API as defined in the documentation.
 * It includes error handling, data validation, and standardized messages.
 *
 * Available Endpoints:
 *   - Login: POST /to-do/login
 *   - Crear Tarea: POST /to-do/tasks/create
 *   - Obtener Tarea por ID: GET /to-do/tasks/{task_id}
 *   - Obtener Lista de Tareas: GET /to-do/tasks?limit={}&order={}&page={}
 *   - Actualizar Tarea: PATCH /to-do/tasks/update/{task_id}
 *   - Eliminar Tarea: DELETE /to-do/tasks/delete/{task_id}
 */

const BASE_URL = '/to-do';

/**
 * Base function to perform API requests with authentication.
 * It checks the response status and handles errors, always returning JSON.
 *
 * @param {string} url - The URL of the request.
 * @param {object} options - Options for the request (method, headers, body, etc.).
 * @returns {Promise<object>} - A promise that resolves with the JSON response.
 * @throws {Error} - Throws an error with a message and status code if the request fails.
 */
async function fetchWithAuth(url, options = {}) {
  try {
    const response = await fetch(url, options);

    // Check if the response is successful
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      const error = new Error(errorData.error || `Error HTTP ${response.status}`);
      error.status = response.status;
      throw error;
    }

    return await response.json();
  } catch (error) {
    console.error(`API Error [${options.method || 'GET'} ${url}]:`, error);
    throw error;
  }
}

/**
 * API service containing functions to interact with the endpoints.
 */
export const apiService = {
  /**
   * Logs in the user.
   *
   * @param {string} email - The user's email.
   * @returns {Promise<string>} - A promise that resolves with the authentication token.
   * @throws {Error} - If the email format is invalid or authentication fails.
   */
  async login(email) {
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      throw Object.assign(new Error('Formato de email inválido'), { status: 400 });
    }

    const { data } = await fetchWithAuth(`${BASE_URL}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email })
    });

    if (!data?.token) {
      const error = new Error('Error en autenticación');
      error.status = 401;
      throw error;
    }
    return data.token;
  },

  /**
   * Creates a new task.
   *
   * @param {string} token - The authentication token.
   * @param {object} payload - The task data. Must include: user_email and title.
   * @returns {Promise<object>} - A promise that resolves with the created task information.
   * @throws {Error} - If required fields are missing or task creation fails.
   */
  async createTask(token, payload) {
    if (!payload.user_email || !payload.title) {
      throw Object.assign(new Error('Campos requeridos faltantes'), { status: 400 });
    }

    const { data } = await fetchWithAuth(`${BASE_URL}/tasks/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(payload)
    });

    if (!data?.id) {
      const error = new Error('Error al crear la tarea');
      error.status = 500;
      throw error;
    }
    return data;
  },

  /**
   * Retrieves a task by its ID.
   *
   * @param {string} token - The authentication token.
   * @param {number|string} taskId - The ID of the task.
   * @returns {Promise<object>} - A promise that resolves with the found task.
   * @throws {Error} - If the task ID is invalid or the task is not found.
   */
  async getTaskById(token, taskId) {
    if (!taskId || isNaN(taskId)) {
      throw Object.assign(new Error('ID de tarea inválido'), { status: 400 });
    }

    const { data } = await fetchWithAuth(`${BASE_URL}/tasks/${taskId}`, {
      headers: { 'Authorization': `Bearer ${token}` }
    });

    if (!data?.task) {
      const error = new Error('Tarea no encontrada');
      error.status = 404;
      throw error;
    }
    return data.task;
  },

  /**
   * Retrieves a list of tasks with pagination and sorting.
   *
   * @param {string} token - The authentication token.
   * @param {object} params - Query parameters: limit, page, and order.
   * @returns {Promise<object>} - A promise that resolves with an object containing tasks and metadata.
   */
  async getTasks(token, params = {}) {
    const validParams = {
      limit: Number(params.limit) || 5,
      page: Number(params.page) || 1,
      order: params.order || '-created_at'
    };

    const query = new URLSearchParams(validParams);
    const { data, meta } = await fetchWithAuth(`${BASE_URL}/tasks?${query}`, {
      headers: { 'Authorization': `Bearer ${token}` }
    });

    return { tasks: data, meta };
  },

  /**
   * Updates (toggles the status of) a task.
   *
   * @param {string} token - The authentication token.
   * @param {number|string} taskId - The ID of the task to update.
   * @returns {Promise<object>} - A promise that resolves with a confirmation message.
   * @throws {Error} - If an error occurs while updating the task.
   */
  async updateTask(token, taskId) {
    const { data } = await fetchWithAuth(`${BASE_URL}/tasks/update/${taskId}`, {
      method: 'PATCH',
      headers: { 'Authorization': `Bearer ${token}` }
    });

    if (!data?.message?.includes('actualizada')) {
      const error = new Error('Error al actualizar la tarea');
      error.status = 500;
      throw error;
    }
    return data;
  },

  /**
   * Deletes (soft-deletes) a task.
   *
   * @param {string} token - The authentication token.
   * @param {number|string} taskId - The ID of the task to delete.
   * @returns {Promise<object>} - A promise that resolves with a confirmation message.
   * @throws {Error} - If an error occurs while deleting the task.
   */
  async deleteTask(token, taskId) {
    const { data } = await fetchWithAuth(`${BASE_URL}/tasks/delete/${taskId}`, {
      method: 'DELETE',
      headers: { 'Authorization': `Bearer ${token}` }
    });

    if (!data?.message?.includes('borrada')) {
      const error = new Error('Error al eliminar la tarea');
      error.status = 500;
      throw error;
    }
    return data;
  }
};
