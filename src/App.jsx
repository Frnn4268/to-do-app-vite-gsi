import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import TaskList from './components/TaskList';
import CreateTask from './components/CreateTask';
import TaskDetail from './components/TaskDetail';

const App = () => {
  const [token, setToken] = useState(null);

  return (
    <BrowserRouter>
      <div>
        <h1>To-Do List</h1>
        {!token ? (
          <Login setAuthToken={setToken} />
        ) : (
          <>
            <p>Autenticado</p>
            <Routes>
              <Route 
                path="/" 
                element={
                  <>
                    <CreateTask token={token} onTaskCreated={() => {}} />
                    <TaskList token={token} />
                  </>
                } 
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