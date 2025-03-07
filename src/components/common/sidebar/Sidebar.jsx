/**
 * @file Sidebar.jsx
 * @description This component represents the sidebar navigation for the dashboard.
 * It provides quick access to task-related pages and includes a logout button.
 *
 * @component
 * @param {Object} props - Component properties.
 * @param {Function} props.handleLogout - Function to handle user logout.
 * @returns {JSX.Element} The sidebar component.
 */

import React from 'react';
import { ListTask, PlusSquare } from 'react-bootstrap-icons';
import NavItem from '../navigation/NavItem';
import LogoutButton from '../buttons/LogoutButton';

/**
 * Sidebar Component
 * 
 * This component renders a sidebar with:
 * - A **dashboard title** styled with a gradient background.
 * - **Navigation items** (`NavItem` components) for task management.
 * - A **logout button** for user session termination.
 * - A **fixed width layout** with a custom gradient background.
 * 
 * @param {Object} props - Component properties.
 * @param {Function} props.handleLogout - Function to handle user logout.
 * @returns {JSX.Element} The sidebar navigation component.
 */
const Sidebar = ({ handleLogout }) => {
  const primaryGradient = 'linear-gradient(0deg,rgb(0, 153, 255) 0%,rgb(23, 116, 202) 100%)';

  return (
    <aside 
      className="text-white p-4 d-flex flex-column shadow-lg"
      style={{
        width: '280px',
        background: primaryGradient,
        borderRight: '1px solid rgba(255, 255, 255, 0.2)'
      }}
    >
      {/* Dashboard Title */}
      <div className="mb-5">
        <h4 className="fw-bold mb-4 d-flex align-items-center gap-2 text-white">
          <span style={{ color: '#ffd700' }}>GSI</span>
          <span>Dashboard</span>
        </h4>
        
        {/* Navigation Menu */}
        <ul className="nav flex-column gap-2">
          <NavItem 
            to="/todo/dashboard" 
            icon={ListTask}
            text="Lista de Tareas"
          />
          <NavItem 
            to="/todo/dashboard/create" 
            icon={PlusSquare}
            text="Crear Tarea"
          />
        </ul>
      </div>

      {/* Logout Button */}
      <LogoutButton handleLogout={handleLogout} />
    </aside>
  );
};

export default Sidebar;
