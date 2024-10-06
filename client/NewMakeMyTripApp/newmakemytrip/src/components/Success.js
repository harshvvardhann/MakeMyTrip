import React from 'react';
import { Link } from 'react-router-dom';
import './Success.css'; // Make sure to create this CSS file for styling

export default function Success() {
  return (
    <div className="success-container">
      <div className="success-content">
        <h1>Payment Successful!</h1>
        <p>Thank you for your Bookings! Your payment has been successfully processed.</p>
        <p>You can now sit back and relax while we prepare your bookings.</p>
        <Link to="/" className="home-link">
          <button className="home-button">Go Back to Home</button>
        </Link>
      </div>
    </div>
  );
}
