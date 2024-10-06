import React from 'react';
import '../cssFiles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="social-media">
        <a href="https://www.facebook.com/makemytrip" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
        <a href="https://twitter.com/makemytrip" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
        <a href="https://www.instagram.com/makemytrip/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
        <a href="https://www.youtube.com/user/makemytrip" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a>
        <a href="https://www.linkedin.com/company/makemytrip-com" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
      </div>
      <div className="copyright">
        <p>© 2024 MakeMyTrip Pvt Ltd. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
