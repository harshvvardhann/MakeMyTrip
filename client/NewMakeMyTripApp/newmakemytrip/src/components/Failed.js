import React from 'react';
import { Link } from 'react-router-dom';
import './Failed.css'; // Make sure to create this CSS file for styling

export default function Failed() {
  return (
    <div className="failed-container">
      <div className="failed-content">
        <h1>Payment Failed</h1>
        <p>Unfortunately, your payment was not successful. Please try again or check your payment details.</p>
        <p>If you continue experiencing issues, feel free to contact our support team.</p>
        <div className="button-group">
          <Link to="/" className="home-link">
            <button className="home-button">Go Back to Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
