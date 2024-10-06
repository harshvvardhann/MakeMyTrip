import React, { useState, useEffect } from 'react';
import MYTicon from '../images/logo.png';
import { MenuItems } from './MenuItems';
import '../cssFiles/NavbarStyles.css';
import { Link, useNavigate, useLocation} from 'react-router-dom'; 
import originalLogo from '../images/originalLogo.avif';

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeItem, setActiveItem] = useState('flights'); 

  // State to track whether the user is logged in (based on token presence)
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check if token exists in localStorage on component mount
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);  // If token exists, user is logged in
    } else {
      setIsLoggedIn(false); // If token doesn't exist, user is not logged in
    }
  }, [location]);  // Add location as a dependency to re-run the effect when the URL changes
  const handleItemClick = (id) => {
    setActiveItem(id);
  };

  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) { 
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Handle login/logout logic based on the isLoggedIn state
  const handleLoginLogout = () => {
    if (isLoggedIn) {
      // If user is logged in, log them out
      localStorage.removeItem('token');
      localStorage.removeItem('refreshToken');
      setIsLoggedIn(false); // Update state to reflect logged out status
      navigate('/logout');
    } else {
      // If user is not logged in, navigate to the login page
      navigate('/login');
    }
  };

  return (
    <>
      <img src={originalLogo} alt="Logo" className='img-logo' />
      <div className='search1'>
        <button 
          className="search-button" 
          onClick={handleLoginLogout}
        >
          {isLoggedIn ? 'Logout' : 'Login'}
        </button>
      </div>
      <nav className={`NavbarItems ${sticky ? 'sticky' : ''}`}>
        <h1>Make<img className='imageLogo' src={MYTicon} alt="Not Available" />Trip</h1>
        <ul className='nav-menu'>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link
                  className={`nav-links ${activeItem === item.id ? 'active' : ''}`}
                  to={item.url} 
                  onClick={() => handleItemClick(item.id)}
                >
                  <i className={item.icon}></i><br />{item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
