import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './login.css'; // Your CSS file for styling

const LoginPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/login', {
        email,
        password,
      });

      const { userrole } = response.data;

      setSuccessMessage('Login successful!');
      setErrorMessage('');

      if (remember) {
        localStorage.setItem('user', JSON.stringify(response.data));
      }

      // Redirect based on userrole
      if (userrole === 'admin') {
        navigate('/admin-dashboard');
      } else if (userrole === 'intern') {
        navigate('/interndashboard');
      } else {
        navigate('/dashboard');
      }
    } catch (error) {
      setErrorMessage(
        error.response?.data?.message || 'Login failed. Please try again.'
      );
      setSuccessMessage('');
    }
  };

  return (
    <div className="login-page-wrapper">
      <div className="login-container">
        <div className="login-header">
          <h1>Welcome Back</h1>
          <p>Sign in to your account</p>
        </div>

        {errorMessage && <div className="error-message">{errorMessage}</div>}
        {successMessage && <div className="success-message">{successMessage}</div>}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              className="form-input"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="form-input"
              placeholder="Enter your password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="checkbox-group">
            <input
              type="checkbox"
              id="remember"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
            />
            <label htmlFor="remember">Remember me</label>
          </div>

          <button type="submit" className="loginbtn">
            Sign In
          </button>
        </form>

        <div className="register-link">
          <p>
            Don't have an account? <a href="/signup">Create an account</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
