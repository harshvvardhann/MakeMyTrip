import React, { useState, useEffect } from 'react';
import './HolidaysBooking.css';  // Importing the CSS file
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

const HolidaysBooking = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { fromCity, toCity, departureDate, roomGuests } = location.state || {};
  const [holidays, setHolidays] = useState([]);
  const [budget, setBudget] = useState(50000); // Initialize state to track slider value
  const [flightOption, setFlightOption] = useState("With Flight");
  const [hotelCategory, setHotelCategory] = useState('4 Star');

  // Fetch holidays data based on city
  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/holidays/holidays/?fromCity=${fromCity}&toCity=${toCity}`)
      .then(response => {
        console.log(response.data)
        setHolidays(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the data!", error);
      });
  }, [fromCity, toCity]);

  // Handler for slider value change (Budget)
  const handleChange = (event) => {
    setBudget(event.target.value); // Update state with slider value
  };

  // Filter holidays based on the budget and hotel category
  const filteredHolidays = holidays.filter((holiday) => {
    const pricePerPerson = parseInt(holiday.price.replace(/[^0-9]/g, ''), 10); // Extract price as integer
    // Debugging: console log the price and category to ensure correct comparison
    console.log('Price per person:', pricePerPerson, 'Hotel Category:', holiday.highlights[1]);
    return pricePerPerson <= budget && parseInt(holiday.highlights[1]) === parseInt(hotelCategory);
  });

  // Handle booking
  const handleBookNow = (holiday) => {
    const token = localStorage.getItem('token');

    if (token) {
      navigate('/finalholidayBooking', {
        state: {
          holiday,
          fromCity,
          toCity,
          departureDate,
          roomGuests,
          flightOption,
          budget,
          hotelCategory
        }
      });
    } else {
      // Token doesn't exist, redirect to login page
      alert('Please login to continue with the booking.');
      navigate('/login');
    }
  };

  return (
    <div className="holidays-container container mt-5">
      {/* Search Header */}
      <header className="holidays-search-header mb-4">
        <h1><center>Make Your Holiday Plans</center></h1>
      </header>

      <div className="row">
        {/* Filters Section */}
        <aside className="holidays-filters mb-4">
          <h3>Filters</h3>

          <div className="filter-section mb-4">
            <label>Flights</label>
            <div className="filter-buttons">
              <button
                className={`btn ${flightOption === "With Flight" ? "holidays-btn-primary" : "btn-outline-primary"} me-2`}
                onClick={() => setFlightOption("With Flight")}
              >
                With Flight
              </button>
              <button
                className={`btn ${flightOption === "Without Flight" ? "holidays-btn-primary" : "btn-outline-primary"}`}
                onClick={() => setFlightOption("Without Flight")}
              >
                Without Flight
              </button>
            </div>
          </div>

          <div className="filter-section mb-4">
            <label>Budget (per person)</label>
            <input
              type="range"
              className="form-range"
              min="0"
              max="140000"
              value={budget} // Set slider value
              onChange={handleChange} // Handle slider value changes
            />
            <small>₹{budget} - ₹1,40,000</small>
          </div>

          <div className="filter-section mb-4">
            <label>Hotel Category</label>
            <div className="filter-group">
              <input
                type="radio"
                id="star4"
                name="star"
                value="4 Star"
                checked={hotelCategory === '4 Star'}
                onChange={(e) => setHotelCategory(e.target.value)}
              />
              <label htmlFor="star4">4 Star</label>
            </div>
            <div className="filter-group">
              <input
                type="radio"
                id="star5"
                name="star"
                value="5 Star"
                checked={hotelCategory === '5 Star'}
                onChange={(e) => setHotelCategory(e.target.value)}
              />
              <label htmlFor="star5">5 Star</label>
            </div>
          </div>
        </aside>

        {/* Holiday Cards */}
        <main className="holidays-cards-section">
          {filteredHolidays.map((holiday) => (
            <div key={holiday.id} className="holidays-card">
              <img src={holiday.image} className="card-img-top" alt={holiday.title} />
              <div className="card-body">
                <h5 className="card-title">{holiday.title}</h5>
                <p className="card-text">{holiday.description}</p>
                <ul className="card-highlights">
                  {holiday.highlights.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                  ))}
                </ul>
                <p className="card-price"><strong>{holiday.price}</strong></p>
                <button className='holidays-btn-primary' onClick={() => handleBookNow(holiday)}>BOOK NOW</button>
              </div>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
};

export default HolidaysBooking;
