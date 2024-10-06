// src/LoginPage.js

import React from 'react';
import { Carousel } from 'react-bootstrap';
import '../cssFiles/LoginPage.css';
import img1 from '../images/b1.jpg';
import img2 from '../images/b2.png';
import img3 from '../images/b3.jpg';
import img4 from '../images/b4.jpg';
import img5 from '../images/b5.jpg';
import img6 from '../images/b6.jpeg';

const LoginPage = () => {
  return (
    <div className="login-container">
      <div className="login-left">
        <Carousel controls={false} indicators={true} interval={3000}>
          <Carousel.Item>
            <div className="carousel-item-bg" style={{ backgroundImage: `url(${img1})` }}>
              <div className="carousel-caption">
                <h2>Sign up/Login now to</h2>
                <ul>
                  <li><i className="fas fa-plane"></i> Lock Flight Prices & Pay Later</li>
                  <li><i className="fas fa-hotel"></i> Book Hotels @ ₹0</li>
                  <li><i className="fas fa-money-bill-wave"></i> Get 3X refund, If your waitlisted train doesn’t get confirmed</li>
                </ul>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-item-bg" style={{ backgroundImage: `url(${img2})` }}>
              <div className="carousel-caption">
                <h2>Enjoy Amazing Deals</h2>
                <ul>
                  <li><i className="fas fa-tags"></i> Exclusive Discounts</li>
                  <li><i className="fas fa-gift"></i> Special Offers</li>
                </ul>
              </div>
            </div>
          </Carousel.Item>
          {/* Add more Carousel.Items as needed */}
        </Carousel>
      </div>
      <div className="login-right">
        <div className="account-toggle">
          <button className="account-button active">PERSONAL ACCOUNT</button>
          <button className="account-button">MYBIZ ACCOUNT</button>
        </div>
        <form>
          <div className="input-group">
            <label htmlFor="mobile-number">Mobile Number</label>
            <input type="text" id="mobile-number" placeholder="Enter Mobile Number" />
          </div>
          <button type="submit" className="continue-button" disabled>CONTINUE</button>
          <div className="login-options">
            <p>Or Login/Signup With</p>
            <div className="icons">
              <i className="fas fa-google"></i>
              <i className="fas fa-envelope"></i>
            </div>
          </div>
        </form>
        <p className="terms">
          By proceeding, you agree to MakeMyTrip's <a href="#">Privacy Policy</a>, <a href="#">User Agreement</a> and <a href="#">T&Cs</a>.
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
