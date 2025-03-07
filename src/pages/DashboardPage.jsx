/**
 * @file DashboardPage.jsx
 * @description This component represents the main dashboard page of the application.
 * It provides a structured layout with a sidebar for navigation and a main content area
 * where task-related functionalities are displayed.
 *
 * @component
 * @param {Object} props - Component properties.
 * @param {string} props.token - The authentication token for API requests.
 * @param {Function} props.handleLogout - Function to handle user logout.
 * @returns {JSX.Element} The dashboard page layout.
 */

import React from 'react';
import Sidebar from '../components/common/sidebar/Sidebar';
import MainContent from '../components/common/layout/MainContent';

/**
 * DashboardPage Component
 * 
 * This component structures the authenticated user interface with:
 * - A `Sidebar` component for navigation and logout functionality.
 * - A `MainContent` component that displays the main task management features.
 * - A responsive full-height layout using Bootstrap classes.
 * 
 * @param {Object} props - Component properties.
 * @param {string} props.token - The authentication token for API requests.
 * @param {Function} props.handleLogout - Function to handle user logout.
 * @returns {JSX.Element} The structured dashboard page.
 */
const DashboardPage = ({ token, handleLogout }) => {
  return (
    <div className="d-flex vh-100">
      {/* Sidebar for navigation and logout */}
      <Sidebar handleLogout={handleLogout} />

      {/* Main content displaying user tasks */}
      <MainContent token={token} />
    </div>
  );
};

export default DashboardPage;
