/**
 * @file MainContent.jsx
 * @description This component manages the main content area of the dashboard.
 * It provides navigation for task-related views, including task listing, creation, and details.
 *
 * @component
 * @param {Object} props - Component properties.
 * @param {string} props.token - The authentication token required for API requests.
 * @returns {JSX.Element} The main content layout.
 */

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DashboardNavbar from '../navbar/DashboardNavbar';
import TaskList from '../../tasks/TaskList/TaskList';
import CreateTask from '../../tasks/CreateTask/CreateTask';
import TaskDetail from '../../tasks/TaskDetail/TaskDetail';

/**
 * MainContent Component
 * 
 * This component structures the main content area with:
 * - A **dashboard navbar** (`DashboardNavbar`) at the top for additional navigation.
 * - A **dynamic route system** (`Routes`) to handle different task-related views.
 * - A **task list** as the default view.
 * - Routes for **creating a new task** and **viewing task details**.
 * - A **fluid container** with padding for better spacing.
 * 
 * @param {Object} props - Component properties.
 * @param {string} props.token - The authentication token required for API requests.
 * @returns {JSX.Element} The main content layout with task management functionality.
 */
const MainContent = ({ token }) => (
  <div className="flex-grow-1">
    {/* Top navigation bar within the dashboard */}
    <DashboardNavbar />
    
    {/* Main content area with task routes */}
    <div className="container-fluid p-4">
      <Routes>
        {/* Default view: Task List */}
        <Route index element={<TaskList token={token} />} />
        
        {/* Create Task View */}
        <Route path="create" element={<CreateTask token={token} />} />
        
        {/* Task Detail View */}
        <Route 
          path="task/:taskId" 
          element={
            <div className="card-body p-4">
              <TaskDetail token={token} />
            </div>
          } 
        />
      </Routes>
    </div>
  </div>
);

export default MainContent;
