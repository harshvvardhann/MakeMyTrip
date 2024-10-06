import React from 'react';
import { Link } from 'react-router-dom';
import './LogoutPage.css';  // Import the CSS file

export default function LogoutPage() {
  return (
    <div className="logout-container">
      <div className="logout-message">
        <h1>You've successfully logged out!</h1>
        <p>We hope to see you again soon.</p>
        <div className="logout-actions">
          <Link to="/" className="logout-button mx-2">Go to Home</Link>
        </div>
        <div className='logout-actions'>
          <Link to="/login" className="login-button">Login Again</Link>
          </div>
      </div>
    </div>
  );
}
