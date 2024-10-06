import React, { useState, useEffect } from 'react';
import './CabsBooking.css';
import Cab from './sedan_new.png';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

const CabsBooking = () => {
  const location = useLocation();
  const { fromLocation, toLocation, departureDate, pickupTime } = location.state;
  const [cabs, setCabs] = useState([]);
  const [filteredCabs, setFilteredCabs] = useState([]);
  const [fromLocation1, setFromLocation] = useState(fromLocation || 'Mumbai');
  const [toLocation1, setToLocation] = useState(toLocation || 'Pune');
  const [sortOption, setSortOption] = useState('');
  const [cabType, setCabType] = useState('');
  const [fuelType, setFuelType] = useState('');
  const [amenities, setAmenities] = useState([]);
  const [policies, setPolicies] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/cabs/cabs/?fromLocation=${fromLocation1}&toLocation=${toLocation1}`)
      .then((response) => {
        setCabs(response.data);
        setFilteredCabs(response.data); // Set filteredCabs to all cabs initially
      })
      .catch((error) => {
        console.error('Error fetching the cab data!', error);
      });
  }, [fromLocation1, toLocation1]);

  useEffect(() => {
    // Filter the cabs based on selected filters
    const filtered = cabs.filter((cab) => {
      const matchesCabType = cabType ? cab.cab_type === cabType : true;
      const matchesFuelType = fuelType ? cab.fuel_type === fuelType : true;
      return matchesCabType && matchesFuelType;
    });
    setFilteredCabs(filtered);
  }, [cabType, fuelType, cabs]);

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const handleCabTypeChange = (e) => {
    setCabType(e.target.value);
  };

  const handleFuelTypeChange = (e) => {
    setFuelType(e.target.value);
  };

  const handleAmenities = (e) => {
    const value = e.target.value;
    setAmenities((prev) => {
      if (prev.includes(value)) {
        return prev.filter((amenity) => amenity !== value);
      } else {
        return [...prev, value];
      }
    });
  };

  const handleCancellation = (e) => {
    setPolicies(e.target.value);
  };

  const handleBooking = (cab) => {
    const token = localStorage.getItem('token');

    if (token) {
      console.log(cab);
      navigate('/finalcabbooking', {
        state: {
          fromLocation,
          toLocation,
          departureDate,
          pickupTime,
          cabType,
          fuelType,
          amenities,
          policies,
          cab
        }
      });
    } else {
      // Token doesn't exist, redirect to login page
      alert('Please login to continue with the booking.');
      navigate('/login');
    }
  };

  return (
    <div className="app-container">
      {/* Header Section */}
      <div className="header">
        <div className="header-row">

          <div className="form-group">
            <label>From</label>
            <select className="input-text" value={fromLocation1} onChange={(e) => setFromLocation(e.target.value)}>
              <option value="Mumbai">Mumbai</option>
              <option value="Pune">Pune</option>
              <option value="Delhi">Delhi</option>
              <option value="Bangalore">Bangalore</option>
              <option value="Chennai">Chennai</option>
            </select>
          </div>
          <div className="form-group">
            <label>To</label>
            <select className="input-text" value={toLocation1} onChange={(e) => setToLocation(e.target.value)}>
              <option value="Pune">Pune</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Delhi">Delhi</option>
              <option value="Bangalore">Bangalore</option>
              <option value="Chennai">Chennai</option>
            </select>
          </div>

        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Filters */}
        <div className="filters">
          <h5>Select Filters</h5>
          <div className="form-group">
            <label>Cab Type</label>
            <div>
              <input type="radio" name="cabType" value="Sedan" onChange={handleCabTypeChange} /> Sedan
            </div>
            <div>
              <input type="radio" name="cabType" value="SUV" onChange={handleCabTypeChange} /> SUV
            </div>
          </div>
          <div className="form-group">
            <label>Fuel Type</label>
            <div>
              <input type="radio" name="fuelType" value="CNG" onChange={handleFuelTypeChange} /> CNG
            </div>
            <div>
              <input type="radio" name="fuelType" value="Petrol" onChange={handleFuelTypeChange} /> Petrol
            </div>
            <div>
              <input type="radio" name="fuelType" value="Diesel" onChange={handleFuelTypeChange} /> Diesel
            </div>
          </div>
          <div className="form-group">
            <label>Amenities</label>
            <div>
              <input type="checkbox" name="amenities" value="WiFi" onChange={handleAmenities} /> WiFi
            </div>
            <div>
              <input type="checkbox" name="amenities" value="Charging Ports" onChange={handleAmenities} /> Charging Ports
            </div>
          </div>
          <div className="form-group">
            <label>Policies</label>
            <div>
              <input type="checkbox" name="policies" value="Free Cancellation" onChange={handleCancellation} /> Free Cancellation
            </div>
          </div>
        </div>

        {/* Cab Cards */}
        <div className="cab-list">
          {filteredCabs.map((cab, index) => (
            <div className="cab-card" key={index}>
              <div className="card-content">
                <div className="card-image">
                  <img src={Cab} alt="Car" className="image" />
                </div>
                <div className="card-details">
                  <h5>{cab.cab_name}</h5>
                  <p>
                    {cab.cab_type} • {cab.is_ac ? 'AC' : 'Non AC'} • {cab.seating_capacity} Seats • {cab.distance_included} kms included
                    <span className="cab-new-badge">{cab.rating}★</span>
                  </p>
                  <p>Fuel Type: {cab.fuel_type} • Extra km fare: ₹{cab.extra_km_fare}/km</p>
                </div>
                <div className="cab-card-price">
                  <p className="cab-price">₹{cab.price}</p>
                  <button className="view-button" onClick={() => handleBooking(cab)}>BOOK NOW</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CabsBooking;
