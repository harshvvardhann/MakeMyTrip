import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import './Booking.css';

function Booking() {

  const location = useLocation();
  const navigate = useNavigate();
  const { origin, destination, departureDate, travellersClass, selectedFare } = location.state || {};


  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortOption, setSortOption] = useState('departure');

  // State to hold checkbox/radio selections
  const [services, setServices] = useState({
    meal: false,
    baggage: false,
    seat: false,
    insurance: false
  }); 
  const [amenities, setAmenities] = useState({
    wifi: false,
    entertainment: false,
    priority: false,
    legroom: false,
    powerOutlet: false
  });

  // Handling checkbox changes for additional services
  const handleServiceChange = (e) => {
    setServices({
      ...services,
      [e.target.id]: e.target.checked
    });
  };

  // Handling checkbox changes for amenities
  const handleAmenitiesChange = (e) => {
    setAmenities({
      ...amenities,
      [e.target.id]: e.target.checked
    });
  };

  const handleBookNow = (flight) => {
    const token = localStorage.getItem('token');

  if (token) {
    console.log(token);
    // Token exists, navigate to final booking page
    navigate('/finalbooking', {
      state: {
        flight,
        departureDate,
        selectedServices: services,
        selectedAmenities: amenities,
        selectedFare,
        travellersClass,
      }
    });
  } else {
    // Token doesn't exist, redirect to login page
    alert('Please login to continue with the booking.');
    navigate('/login');
  }
  };


  useEffect(() => {
    const fetchFlights = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/flights/flight-details/?from_location=${origin}&to_location=${destination}`);
        setFlights(response.data);
        setLoading(false);
        console.log(response.data)
      } catch (error) {
        
        setError(error);
        setLoading(false);
      }
    };

    fetchFlights();
  }, [origin,destination]);

  const sortFlights = (flights, option) => {
    switch (option) {
      case 'departure':
        return flights.slice().sort((a, b) => a.departure_time.localeCompare(b.departure_time));
      case 'duration':
        return flights.slice().sort((a, b) => {
          const parseDuration = (str) => {
            const [hours, minutes] = str.split(' h ').map(Number);
            return (hours || 0) * 60 + (minutes || 0);
          };
          return parseDuration(a.arrival_time) - parseDuration(b.departure_time);
        });
      case 'arrival':
        return flights.slice().sort((a, b) => a.arrival_time.localeCompare(b.arrival_time));
      case 'price':
        return flights.slice().sort((a, b) => parseInt(a.price.replace('/-', '').replace(',', '')) - parseInt(b.price.replace('/-', '').replace(',', '')));
      default:
        return flights;
    }
  };

  const sortedFlights = sortFlights(flights, sortOption);

  return (
    <div className="flight-search-results">
      <div className="filters">
        <h1 className='heading1'>Flight Preferences</h1>
        <h4>Additional Services</h4>
        <ul>
          <li>
            <input type="checkbox" id="meal" onChange={handleServiceChange} />
            <label htmlFor="meal"> Meal Preference</label>
          </li>
          <li>
            <input type="checkbox" id="baggage" onChange={handleServiceChange} />
            <label htmlFor="baggage"> Extra Baggage</label>
          </li>
          <li>
            <input type="checkbox" id="seat" onChange={handleServiceChange} />
            <label htmlFor="seat"> Preferred Seat</label>
          </li>
          <li>
            <input type="checkbox" id="insurance" onChange={handleServiceChange} />
            <label htmlFor="insurance"> Travel Insurance</label>
          </li>
        </ul>

        <h4>Flight Amenities</h4>
        <ul>
          <li>
            <input type="checkbox" id="wifi" onChange={handleAmenitiesChange} />
            <label htmlFor="wifi"> In-Flight WiFi</label>
          </li>
          <li>
            <input type="checkbox" id="entertainment" onChange={handleAmenitiesChange} />
            <label htmlFor="entertainment"> In-Flight Entertainment</label>
          </li>
          <li>
            <input type="checkbox" id="priority" onChange={handleAmenitiesChange} />
            <label htmlFor="priority"> Priority Boarding</label>
          </li>
          <li>
            <input type="checkbox" id="legroom" onChange={handleAmenitiesChange} />
            <label htmlFor="legroom"> Extra Legroom</label>
          </li>
          <li>
            <input type="checkbox" id="powerOutlet" onChange={handleAmenitiesChange} />
            <label htmlFor="powerOutlet"> Power Outlet</label>
          </li>
        </ul>
      </div>

      <div className="results">
        <h4>Flights from {origin} to {destination}</h4>
        <div className="important-info">
          <input type="checkbox" /> 
          <span>Important Advisories & State Guidelines</span>
        </div>
        <div className="sort-options">
          <span className='mx-2 my-2'>Sorted by:</span>
          <button
            onClick={() => setSortOption('departure')}
            className={sortOption === 'departure' ? 'active' : ''}
          >
            Departure ↓
          </button>
          <button
            onClick={() => setSortOption('duration')}
            className={sortOption === 'duration' ? 'active' : ''}
          >
            Duration ↓
          </button>
          <button
            onClick={() => setSortOption('arrival')}
            className={sortOption === 'arrival' ? 'active' : ''}
          >
            Arrival ↓
          </button>
          <button
            onClick={() => setSortOption('price')}
            className={sortOption === 'price' ? 'active' : ''}
          >
            Price ↓
          </button>
        </div>
        {/* {loading ? (
          <p>Loading flights...</p>
        ) : error ? (
          <p>Error fetching flights: {error.message}</p>
        ) : flights.length === 0 ? (
          <p>No flights available from {origin} to {destination}</p>
        ) : ( */}
          {sortedFlights.map((flight, index) => (
            <div key={index} className="flight-card">
              <div className="flight-info">
                <div>
                  <h5>{flight.airline}</h5>
                  <p>{flight.departure_time ? `${flight.departure_time} → ${flight.arrival_time}` : 'N/A'}</p>
                </div>
                <div>
                <p>{flight.to_location ? `${flight.from_location} → ${flight.to_location}` : 'Locations not available'}</p>
                <p>{flight.duration || 'Duration not available'}</p>
                </div>
              </div>
              <div className="flight-price">  
              <p>₹{flight.price || 'Price not available'}</p>
        <button onClick={() => handleBookNow(flight)}>BOOK NOW</button>
        <p className="discount">{flight.market || ''}</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Booking;


