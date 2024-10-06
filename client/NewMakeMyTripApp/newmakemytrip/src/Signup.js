import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css"; // Import the CSS file
import axios from "axios";

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setError(null); // Reset error state before login attempt
    try {
      const response = await axios.post('http://localhost:8000/signup/signup/', {
          username,
          email,
          password,
      });
      console.log('Signup successful:');
      alert("Signup successful!");
      navigate("/login"); // Redirect to login page
  } catch (error) {
      setError(error.response?.data?.detail || "Signup failed. Please check your details.");
      console.error('Signup error:', error.response.data);
  }
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>Signup</h2>
        <form onSubmit={handleSignup}>
        <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input-field"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
          <button type="submit" className="signup-button">
            Signup
          </button>
        </form>
        <a
          className="login-link"
          onClick={() => navigate("/login")}
        >
          Already have an account? Log in here.
        </a>
      </div>
    </div>
  );
};

export default Signup;
