import React,{useState} from 'react';
import './BusesBanner.css';
import { useNavigate } from 'react-router-dom';
import HomeStays from '../HomeStays/HomeStaysBanner.js';

const BusesBanner = () => {
    // State variables for user inputs
    const [fromCity, setFromCity] = useState("Delhi");
    const [toCity, setToCity] = useState("Ahmedabad");
    const [travelDate, setTravelDate] = useState("");

    const cities = [
        "Delhi", "Kanpur", "Mumbai", 
        "Bangalore", "Chennai","Kolkata","Ahmedabad","Jammu","Goa","Varanasi"
    ];

    const navigate = useNavigate();

    const handleSearch = () => {
        if (fromCity && toCity && travelDate) {
            navigate('/busbooking', {
                state: {
                    fromCity,
                    toCity,
                    travelDate
                }
            });
        } else {
            alert("Please enter all details");
        }
    };

    return (
        <>
        <div className="buses-banner">
            <div className="banner-options">
                <label className="radio-option">
                    <span>Bus Ticket Booking</span>
                </label>
                <span className="property-link">
                    <a href="#">Travelling with a group? Hire a bus</a>
                </span>
            </div>

            <div className="search-fields">
                <div className="field location">
                    <span className="label">From</span>
                    <span className="value">{fromCity}</span>
                    <select onChange={(e) => setFromCity(e.target.value)} className="dropdown">
                        {cities.map((city, index) => (
                            <option key={index} value={city}>{city}</option>
                        ))}
                    </select>
                    <span className="country">India</span>
                </div>

                <div className="field location">
                    <span className="label">To</span>
                    <span className="value">{toCity}</span>
                    <select onChange={(e) => setToCity(e.target.value)} className="dropdown">
                        {cities.map((city, index) => (
                            <option key={index} value={city}>{city}</option>
                        ))}
                    </select>
                    <span className="country">India</span>
                </div>

                <div className="field check-out">
                    <span className="label">Travel Date</span>
                    <span className="value">{new Date(travelDate).toLocaleDateString()}</span>
                    <span className="day">{new Date(travelDate).toLocaleDateString('en-US', { weekday: 'long' })}</span>
                    <input
                        type="date"
                        value={travelDate}
                        onChange={(e) => setTravelDate(e.target.value)}
                        className="date-input"
                    />
                </div>
            </div>

            <button className="search-button" onClick={handleSearch}>SEARCH</button>
        </div>
        <div className="Offers">
            <HomeStays/>
        </div>  
        </>
    );
};

export default BusesBanner;
