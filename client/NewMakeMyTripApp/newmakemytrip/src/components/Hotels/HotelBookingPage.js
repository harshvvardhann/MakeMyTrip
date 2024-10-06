import React, { useEffect, useState } from 'react';
import './HotelBookingPage.css';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const HotelBookingPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { city, checkInDate, checkOutDate, rooms, guests,numberOfDays } = location.state;
    const [hotels, setHotels] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [activeSort, setActiveSort] = useState('');

    // STATES FOR FILTERS
    const [selectedServices, setSelectedServices] = useState({
        meal: false,
        wifi: false,
        parking: false,
        roomService: false,
    });
    const [selectedAmenities, setSelectedAmenities] = useState({
        pool: false,
        spa: false,
        gym: false,
        ac: false,
        powerOutlet: false,
    });
    const [selectedHotel, setSelectedHotel] = useState(null);

    useEffect(() => {
        const fetchHotels = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/hotels/hotels/?city=${city}`, {
                    params: { city, checkInDate, checkOutDate, rooms, guests }
                });
                setHotels(response.data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchHotels();
    }, [city, checkInDate, checkOutDate, rooms, guests]);

    const handleBookNow = (hotel) => {
        const token=localStorage.getItem('token');
        if (token) {
        setSelectedHotel(hotel);
        navigate('/finalhotelbooking', { state: {hotel, filters: {selectedServices, selectedAmenities, city, checkInDate, checkOutDate, rooms, guests,numberOfDays } } });
    }else{
        // Token doesn't exist, redirect to login page
    alert('Please login to continue with the booking.');
    navigate('/login');
    }};

    const handleSort = (sortBy) => {
        setActiveSort(sortBy);

        const sortedHotels = [...hotels];
        if (sortBy === 'price') {
            sortedHotels.sort((a, b) => a.price - b.price);
        } else if (sortBy === 'rating') {
            sortedHotels.sort((a, b) => b.rating - a.rating);
        } else if (sortBy === 'distance') {
            sortedHotels.sort((a, b) => a.distance - b.distance);
        }
        setHotels(sortedHotels);
    };


    const handleServiceChange = (event) => {
        const { name, checked } = event.target;
        setSelectedServices((prev) => ({ ...prev, [name]: checked }));
    };

    const handleAmenityChange = (event) => {
        const { name, checked } = event.target;
        setSelectedAmenities((prev) => ({ ...prev, [name]: checked }));
    };
    return (
        <div className="hotel-booking-page">
            <div className="filters-section">
                <h1 className='heading1'>Filters</h1>
                <div className="filter">
                    <h4>Star Rating</h4>
                    <label> 5 Star </label>
                    <label> 4 Star </label>
                    <label> 3 Star </label>
                </div>
            
                {/* Selected Services */}
                <div className="filter">
                    <h4>Selected Services</h4>
                    <label>
                        <input
                            type="checkbox"
                            name="meal"
                            checked={selectedServices.meal}
                            onChange={handleServiceChange}
                        /> Meal
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="wifi"
                            checked={selectedServices.wifi}
                            onChange={handleServiceChange}
                        /> WiFi
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="parking"
                            checked={selectedServices.parking}
                            onChange={handleServiceChange}
                        /> Parking
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="roomService"
                            checked={selectedServices.roomService}
                            onChange={handleServiceChange}
                        /> Room Service
                    </label>
                </div>

                {/* Selected Amenities */}
                <div className="filter">
                    <h4>Selected Amenities</h4>
                    <label>
                        <input
                            type="checkbox"
                            name="pool"
                            checked={selectedAmenities.pool}
                            onChange={handleAmenityChange}
                        /> Swimming Pool
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="spa"
                            checked={selectedAmenities.spa}
                            onChange={handleAmenityChange}
                        /> Spa
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="gym"
                            checked={selectedAmenities.gym}
                            onChange={handleAmenityChange}
                        /> Gym
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="ac"
                            checked={selectedAmenities.ac}
                            onChange={handleAmenityChange}
                        /> Air Conditioning
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="powerOutlet"
                            checked={selectedAmenities.powerOutlet}
                            onChange={handleAmenityChange}
                        /> Power Outlet
                    </label>
                </div>

            </div>
            <div className="hotel-search-info">
                <h2>Hotels in {city} for Check-in on {checkInDate} and Check-out on {checkOutDate}</h2>
                <div className="sort-options">
                    <span className='px-2 my-2'>Sorted by:</span>
                    <button className={`sort-button ${activeSort === 'price' ? 'active' : ''}`} onClick={() => handleSort('price')}>Price ↓</button>
                    <button className={`sort-button ${activeSort === 'rating' ? 'active' : ''}`} onClick={() => handleSort('rating')}>Rating ↑</button>
                </div>
            </div>
            <div className="hotel-list">
                {hotels.length > 0 ? (
                    hotels.map((hotel, index) => (
                        <div key={index} className="hotel-card">
                            <img src={hotel.imageUrl} alt={hotel.name} className="hotel-image" />
                            <div className="hotel-details">
                                <h3>{hotel.name}</h3>
                                <p>{hotel.location}</p>
                                <p>Rating: {hotel.rating} ★</p>
                                <p>Bedrooms: {hotel.bedrooms}</p>
                                <p>Check-in: {checkInDate} | Check-out: {checkOutDate}</p>
                            </div>
                            <div className="hotel-pricing">
                                <h3>₹{hotel.price} /day</h3>
                                <p className="discount">{hotel.discount}</p>
                            </div>
                            <button className="book-now-button12" onClick={() => handleBookNow(hotel)}>BOOK NOW</button>
                        </div>
                    ))
                ) : (
                    <p>No hotels match your search criteria.</p>
                )}
            </div>


        </div>
    );
};

export default HotelBookingPage;
