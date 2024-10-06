import React, { useState } from 'react';
import './CabsBanner.css';
import { useNavigate } from 'react-router-dom';
import HomeStays from '../HomeStays/HomeStaysBanner.js';

const CabsBanner = () => {
    const [bookingType, setBookingType] = useState("");
    const [fromLocation, setFromLocation] = useState("Delhi");
    const [toLocation, setToLocation] = useState("Vrindavan");
    const [departureDate, setDepartureDate] = useState("");
    const [pickupTime, setPickupTime] = useState("");
    const [returnDate, setReturnDate] = useState("");
    const [stops, setStops] = useState([]);
    const [newStop, setNewStop] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);

    const cities1 = ["Vrindavan",'Mumbai', 'Pune', 'Delhi', 'Bangalore', 'Hyderabad',"Goa","Chennai","Varanasi","Jammu"];

    // Function to add a stop
    const addStop = (city) => {
        setStops([...stops, city]);
        setShowDropdown(false);
    };

    // Function to remove a stop
    const removeStop = (index) => {
        const updatedStops = stops.filter((_, stopIndex) => stopIndex !== index);
        setStops(updatedStops);
    };

    const cities = [
        "Delhi", "Kanpur", "Mumbai",
        "Bangalore", "Chennai","Goa","Chennai","Varanasi","Vrindavan","Jammu"
    ];
    const navigate = useNavigate();

    const handleSearch = () => {
        if (fromLocation && toLocation && departureDate && pickupTime) {
            navigate('/cabbooking', {
                state: {
                    fromLocation,
                    toLocation,
                    departureDate,
                    pickupTime
                }
            });
        } else {
            alert("Please enter all details");
        }
    };

    return (
        <>
            <div className="cabs-banner">
                <div className="banner-options">
                    <label className="radio-option">
                        {/* <input
                            type="radio"
                            name="booking-type"
                            checked={bookingType === "OutStation One-Way"}
                            onChange={() => setBookingType("OutStation One-Way")}
                        /> */}
                        <span>OutStation One-Way</span>
                    </label>
                    <label className="radio-option">
                        {/* <input
                            type="radio"
                            name="booking-type"
                            checked={bookingType === "OutStation Round-Trip"}
                            onChange={() => setBookingType("OutStation Round-Trip")}
                        /> */}
                        <span>OutStation Round-Trip</span>
                    </label>
                    <label className="radio-option">
                        {/* <input
                            type="radio"
                            name="booking-type"
                            checked={bookingType === "Airport Transfers"}
                            onChange={() => setBookingType("Airport Transfers")}
                        /> */}
                        <span>Airport Transfers</span>
                    </label>
                    <label className="radio-option">
                        {/* <input
                            type="radio"
                            name="booking-type"
                            checked={bookingType === "Hourly Rentals"}
                            onChange={() => setBookingType("Hourly Rentals")}
                        /> */}
                        <span>Hourly Rentals</span>
                        <span className="new-badge">new</span>
                    </label>
                    <span className="property-link">Online Cab Booking</span>
                </div>

                <div className="search-fields">
                    <div className="field location">
                        <span className="label">From</span>
                        <span className="value">{fromLocation}</span>
                        <select onChange={(e) => setFromLocation(e.target.value)} className="dropdown">
                            {cities.map((city, index) => (
                                <option key={index} value={city}>{city}</option>
                            ))}
                        </select>
                        <span className="country">Delhi, India</span>
                    </div>
                    <div className="field location">
                        <span className="label">To</span>
                        <span className="value">{toLocation}</span>
                        <select onChange={(e) => setToLocation(e.target.value)} className="dropdown">
                            {cities1.map((city, index) => (
                                <option key={index} value={city}>{city}</option>
                            ))}
                        </select>
                        <span className="country">Uttar Pradesh, India</span>
                    </div>
                    <div className="field check-out">
                        <span className="label">Departure</span>
                        <span className="value">{new Date(departureDate).toLocaleDateString()}</span>
                        <span className="day">{new Date(departureDate).toLocaleDateString('en-US', { weekday: 'long' })}</span>
                        <input
                            type="date"
                            value={departureDate}
                            onChange={(e) => setDepartureDate(e.target.value)}
                            className="date-input"
                        />
                    </div>
                    <div className="field check-out">
                        <span className="label">Return</span>
                        <span className="value">{new Date(returnDate).toLocaleDateString()}</span>
                        <span className="day">{new Date(returnDate).toLocaleDateString('en-US', { weekday: 'long' })}</span>
                        <input
                            type="date"
                            value={returnDate}
                            onChange={(e) => setReturnDate(e.target.value)}
                            className="date-input"
                        />
                    </div>
                    <div className="field check-out">
                        <span className="label">Pickup-Time</span>
                        <span className="value">{pickupTime}</span>
                        <input
                            type="time"
                            value={pickupTime}
                            onChange={(e) => setPickupTime(e.target.value)}
                            className="date-input"
                        />
                    </div>
                </div>
                <div className="route-stops">
                    <p>Your multi-city one-way plan:</p>
                    <div className="stops-container">
                        {stops.map((stop, index) => (
                            <div key={index} className="stop">
                                <span className='index mx-2'>Stop {index + 1}: </span>
                                <span className="city-name mx-5">{stop}</span>
                                {/* <button onClick={() => removeStop(index)} className="remove-stop">x</button> */}
                            </div>
                        ))}
                    </div>
                    {showDropdown && (
                        <div className="city-dropdown">
                            <select onChange={(e) => setNewStop(e.target.value)} value={newStop} className="styled-dropdown">
                                <option value="">Select City</option>
                                {cities.map((city, index) => (
                                    <option key={index} value={city}>{city}</option>
                                ))}
                            </select>
                            <button onClick={() => addStop(newStop)} disabled={!newStop} className="add-button">Add</button>
                        </div>
                    )}
                    </div>
                <a href="#" style={{ textDecoration: "none" }} onClick={() => setShowDropdown(true)} className="add-stop">+ Add Stops <span className="new-badge">new</span></a>
                <button className="search-button" onClick={handleSearch}>SEARCH</button>
            </div>

            <div className="Offers">
                <HomeStays />
            </div>
        </>
    );
};

export default CabsBanner;
