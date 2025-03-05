const BASE_URL = '/to-do';

async function fetchWithAuth(url, options = {}) {
  const response = await fetch(url, options);
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.error || `Request failed with status ${response.status}`);
  }
  return data;
}

export async function login(email) {
  if (email.trim().toLowerCase() !== 'test@gmail.com') {
    throw new Error('Only test@gmail.com can log in.');
  }

  try {
    const response = await fetch(`${BASE_URL}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email })
    });

    if (!response.ok) throw new Error('Login failed.');
    
    const data = await response.json();
    return data.data.token;
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
}

export async function createTask(token, user_email, title, description = '') {
  try {
    const payload = { user_email, title };
    if (description) {
      payload.description = description;
    }
    const data = await fetchWithAuth(`${BASE_URL}/tasks/create`, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}` 
      },
      body: JSON.stringify(payload)
    });

    return data.data;
  } catch (error) {
    console.error('Create task error:', error);
    throw error;
  }
}

export async function getTaskById(token, taskId) {
  try {
    const data = await fetchWithAuth(`${BASE_URL}/tasks/${taskId}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    return data.data.task;
  } catch (error) {
    console.error('Get task by ID error:', error);
    throw error;
  }
}

export async function getTasks(token, { limit = 5, order = '-created_at', page = 1 } = {}) {
  try {
    const params = new URLSearchParams({ limit, order, page });
    const data = await fetchWithAuth(`${BASE_URL}/tasks?${params.toString()}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    return { tasks: data.data, meta: data.meta };
  } catch (error) {
    console.error('Get tasks error:', error);
    throw error;
  }
}

export async function updateTask(token, taskId) {
  try {
    const data = await fetchWithAuth(`${BASE_URL}/tasks/update/${taskId}`, {
      method: 'PATCH',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    return data.data;
  } catch (error) {
    console.error('Update task error:', error);
    throw error;
  }
}

export async function deleteTask(token, taskId) {
  try {
    const data = await fetchWithAuth(`${BASE_URL}/tasks/delete/${taskId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    return data.data;
  } catch (error) {
    console.error('Delete task error:', error);
    throw error;
  }
}
