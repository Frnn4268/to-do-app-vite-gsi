/**
 * @file NavItem.jsx
 * @description This component represents a single navigation item inside the sidebar.
 * It provides a styled link with an icon and text, highlighting the active route.
 *
 * @component
 * @param {Object} props - Component properties.
 * @param {string} props.to - The destination route for the navigation link.
 * @param {React.ElementType} props.icon - The icon component to display.
 * @param {string} props.text - The text label for the navigation item.
 * @returns {JSX.Element} The navigation item component.
 */

import React from 'react';
import { NavLink } from 'react-router-dom';

/**
 * NavItem Component
 * 
 * This component renders a sidebar navigation link with:
 * - An **icon** representing the section.
 * - A **text label** describing the section.
 * - **Active link styling** when the route matches.
 * - **A hover effect** for better user experience.
 * 
 * @param {Object} props - Component properties.
 * @param {string} props.to - The destination route for the navigation link.
 * @param {React.ElementType} props.icon - The icon component to display.
 * @param {string} props.text - The text label for the navigation item.
 * @returns {JSX.Element} The navigation link component.
 */
const NavItem = ({ to, icon, text }) => {
  const IconComponent = icon;
  
  return (
    <li className="nav-item">
      <NavLink 
        to={to}
        end={to === '/todo/dashboard'}
        className={({ isActive }) =>
          `nav-link d-flex align-items-center gap-3 py-3 px-4 rounded ${
            isActive ? 'text-white shadow-sm' : 'text-white hover-effect'
          }`
        }
        style={({ isActive }) =>
          isActive ? { backgroundColor: 'rgba(3, 59, 97, 0.2)' } : {}
        }
      >
        <IconComponent size={20} />
        <span className="fw-semibold">{text}</span>
      </NavLink>
    </li>
  );
};

export default NavItem;
