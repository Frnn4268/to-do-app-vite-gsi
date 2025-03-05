import React, { useState } from 'react';
import { login } from '../services/apiClient';

const Login = ({ setAuthToken }) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (email.trim().toLowerCase() !== 'test@gmail.com') {
      setError('Only test@gmail.com is allowed to log in.');
      return;
    }

    setLoading(true);
    try {
      const token = await login(email);
      if (!token) {
        setError('Error: Authorization token not found');
      } else {
        setAuthToken(token);
      }
    } catch (err) {
      setError(err.message || 'Error in login');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Log In</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="email" 
          placeholder="Insert your email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required 
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default Login;
