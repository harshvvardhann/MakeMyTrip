import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"; // Import the CSS file
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null); // Reset error state before login attempt
    try {
      const response = await axios.post('http://localhost:8000/login/login/', {
          username,
          password,
      });
      console.log('Login successful:', response.data);
      localStorage.setItem('token', response.data.access); // Store JWT token
      console.log(response.data.access);
      console.log(response.data.username);
      localStorage.setItem('username', response.data.username); // Store additional user info if needed
      alert("Login successful!");
      navigate("/"); // Redirect to homepage
    } catch (error) {
      // alert("Invalid Login Credentials!!");
      setError(error.response?.data?.detail || "An error occurred. Please try again.");
      console.error('Login error:', error.response.data);
    }
  };

    

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input-field"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-field"
          />
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
        <a
          className="signup-link"
          onClick={() => navigate("/signup")}
        >
          Don't have an account? Sign up here.
        </a>
      </div>
    </div>
  );
};

export default Login;
  