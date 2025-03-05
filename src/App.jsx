import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import TaskList from './components/TaskList';
import TaskDetail from './components/TaskDetail';

const App = () => {
  const [token, setToken] = useState(localStorage.getItem('authToken') || null);

  useEffect(() => {
    if (token) {
      localStorage.setItem('authToken', token);
    } else {
      localStorage.removeItem('authToken');
    }
  }, [token]);

  const handleLogout = () => {
    setToken(null);
    localStorage.removeItem('authToken'); 
  };

  return (
    <BrowserRouter>
      <div>
        <h1>To-Do List</h1>
        {!token ? (
          <Login setAuthToken={setToken} />
        ) : (
          <>
            <p>Authenticated</p>
            <button onClick={handleLogout}>Logout</button> 
            <Routes>
              <Route 
                path="/" 
                element={<TaskList token={token} />} 
              />
              <Route 
                path="/task/:taskId" 
                element={<TaskDetail token={token} />} 
              />
            </Routes>
          </>
        )}
      </div>
    </BrowserRouter>
  );
};

export default App;
