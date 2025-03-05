const BASE_URL = '/to-do'; 

export async function login(email) {
  try {
    const response = await fetch(`${BASE_URL}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email })
    });
    if (!response.ok) throw new Error('Error in login');
    const data = await response.json();
    return data.data.token;
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
}

export async function createTask(token, user_email, title) {
  try {
    const response = await fetch(`${BASE_URL}/tasks/create`, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}` 
      },
      body: JSON.stringify({ user_email, title })
    });
    if (response.status !== 201) throw new Error('Error to create task');
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error('Create task error:', error);
    throw error;
  }
}

export async function getTaskById(token, taskId) {
  try {
    const response = await fetch(`${BASE_URL}/tasks/${taskId}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    if (!response.ok) throw new Error('Error to fetch task by ID');
    const data = await response.json();
    return data.data.task;
  } catch (error) {
    console.error('Get task by ID error:', error);
    throw error;
  }
}

export async function getTasks(token, { limit = 5, order = '-created_at', page = 1 } = {}) {
  try {
    const response = await fetch(`${BASE_URL}/tasks?limit=${limit}&order=${order}&page=${page}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    if (!response.ok) throw new Error('Error to fetch tasks');
    const data = await response.json();
    return { tasks: data.data, meta: data.meta };
  } catch (error) {
    console.error('Get tasks error:', error);
    throw error;
  }
}

export async function updateTask(token, taskId) {
  try {
    const response = await fetch(`${BASE_URL}/tasks/update/${taskId}`, {
      method: 'PATCH',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    if (!response.ok) throw new Error('Error to update tasks');
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error('Update task error:', error);
    throw error;
  }
}

export async function deleteTask(token, taskId) {
  try {
    const response = await fetch(`${BASE_URL}/tasks/delete/${taskId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    if (!response.ok) throw new Error('Error to delete task');
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error('Delete task error:', error);
    throw error;
  }
}
