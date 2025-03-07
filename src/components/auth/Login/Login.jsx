/**
 * @file Login.jsx
 * @description This component provides a login form for user authentication.
 * It allows users to enter their email and submit it for verification.
 *
 * @component
 * @param {Object} props - Component properties.
 * @param {Function} props.setAuthToken - Function to set the authentication token in state.
 * @returns {JSX.Element} The login form component.
 */

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiService } from '../../../services/apiClient';
import Navbar from '../../common/navbar/Navbar';
import AuthCard from '../../common/cards/AuthCard';
import EmailInput from '../../common/forms/EmailInput';
import AuthButton from '../../common/buttons/AuthButton';

/**
 * Login Component
 * 
 * This component renders a **user login form** with:
 * - **An email input field** (`EmailInput`) for authentication.
 * - **A login button** (`AuthButton`) with a loading state.
 * - **Error handling** for invalid email or authentication failure.
 * - **Local storage support** to save the authentication token.
 * - **Navigation redirection** to the dashboard upon successful login.
 * 
 * @param {Object} props - Component properties.
 * @param {Function} props.setAuthToken - Function to set the authentication token in state.
 * @returns {JSX.Element} The structured login form.
 */
const Login = ({ setAuthToken }) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  /**
   * Handles form submission for user login.
   * 
   * @param {Event} e - Form submit event.
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    // Validate email
    if (email.trim().toLowerCase() !== 'test@gmail.com') {
      setError('Esta cuenta no existe.');
      return;
    }

    setLoading(true);
    try {
      const token = await apiService.login(email);
      if (!token) {
        setError('Error: No se encontró el token de autorización');
      } else {
        localStorage.setItem('authToken', token);  
        setAuthToken(token);  
        navigate('/todo/dashboard'); 
      }
    } catch (err) {
      setError(err.message || 'Error al iniciar sesión');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container min-vh-100 d-flex align-items-center py-5">
        {/* Login Card */}
        <AuthCard
          imageUrl="https://images.unsplash.com/photo-1590402494628-9b9acf0b90ae?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title="Bienvenido a To-do de GSI"
          subtitle="Optimiza tu productividad"
        >
          <form onSubmit={handleSubmit}>
            {/* Email Input Field */}
            <EmailInput 
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
              loading={loading}
            />
            
            {/* Submit Button */}
            <AuthButton 
              loading={loading}
              text="Iniciar sesión"
              loadingText="Cargando..."
            />

            {/* Display Error Message */}
            {error && (
              <div className="alert alert-danger mt-4 mb-0 rounded">
                <i className="bi bi-exclamation-circle me-2"></i>
                {error}
              </div>
            )}
          </form>
        </AuthCard>
      </div>
    </>
  );
};

export default Login;
