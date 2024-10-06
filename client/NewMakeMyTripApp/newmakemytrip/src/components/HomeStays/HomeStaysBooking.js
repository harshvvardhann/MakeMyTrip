import React, { useState, useEffect } from 'react';
import './HomeStaysBooking.css';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

const HomestaysPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { city, checkInDate, checkOutDate, guests, numberOfDays } = location.state;

    const [city1, setCity] = useState('');
    const [checkInDate1, setCheckInDate] = useState('');
    const [checkOutDate1, setCheckOutDate] = useState('');
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    const [price, setPrice] = useState('');
    const [homestays, setHomestays] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const fetchHomestays = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`http://127.0.0.1:8000/homestays/homestays/?location=${city}`, {
                params: { city1, checkInDate1, checkOutDate1, adults, children, price }
            });
            setHomestays(response.data);
            setLoading(false);
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchHomestays();
    }, [city1, checkInDate1, checkOutDate1, adults, children, price]);

    const [filters, setFilters] = useState({
        roomViews: [],
        roomAmenities: [],
        chains: [],
        luxeSelection: false,
        houseRules: [],
    });

    const handleFilterChange = (category, value) => {
        setFilters((prevFilters) => {
            if (category === 'luxeSelection') {
                return { ...prevFilters, [category]: !prevFilters[category] };
            }

            const categoryValues = prevFilters[category];
            const newCategoryValues = categoryValues.includes(value)
                ? categoryValues.filter((item) => item !== value)
                : [...categoryValues, value];

            return { ...prevFilters, [category]: newCategoryValues };
        });
    };

    const handleSearch = (e) => {
        e.preventDefault();
        fetchHomestays();
    };

    const handleBookNow = (homestay) => {
        const token = localStorage.getItem('token');

        if (token) {
            navigate('/finalhomestaysbooking', {
                state: {
                    filters,  // Pass selected filters
                    homestay,  // Pass the homestay details that the user clicked
                    city, checkInDate, checkOutDate, guests, price, numberOfDays // Any other additional props
                }
            });
        } else {
            // Token doesn't exist, redirect to login page
            alert('Please login to continue with the booking.');
            navigate('/login');
        }
    };

    return (
        <div className="homestaysbooking-container">
            <div className="filter-options">
                <h4>Select Filters</h4>

                {/* ...Filter sections remain the same... */}

                <div className="filter-group">
                    <h5>Room Amenities</h5>
                    <label>
                        <input
                            type="checkbox"
                            value="Wi-Fi"
                            checked={filters.roomAmenities.includes('Wi-Fi')}
                            onChange={() => handleFilterChange('roomAmenities', 'Wi-Fi')}
                        />
                        Wi-Fi
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            value="Air Conditioning"
                            checked={filters.roomAmenities.includes('Air Conditioning')}
                            onChange={() => handleFilterChange('roomAmenities', 'Air Conditioning')}
                        />
                        Air Conditioning
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            value="Pool"
                            checked={filters.roomAmenities.includes('Pool')}
                            onChange={() => handleFilterChange('roomAmenities', 'Pool')}
                        />
                        Pool
                    </label>
                </div>

                <div className="filter-group">
                    <h5>House Rules</h5>
                    <label>
                        <input
                            type="checkbox"
                            value="Pet Friendly"
                            checked={filters.houseRules.includes('Pet Friendly')}
                            onChange={() => handleFilterChange('houseRules', 'Pet Friendly')}
                        />
                        Pet Friendly
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            value="No Smoking"
                            checked={filters.houseRules.includes('No Smoking')}
                            onChange={() => handleFilterChange('houseRules', 'No Smoking')}
                        />
                        No Smoking
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            value="Family Friendly"
                            checked={filters.houseRules.includes('Family Friendly')}
                            onChange={() => handleFilterChange('houseRules', 'Family Friendly')}
                        />
                        Family Friendly
                    </label>
                </div>

            </div>
            <h3 className='cityText'>Showing Properties in {city}</h3>
            <div className="homestays-list">
                {loading && <p>Loading...</p>}
                {error && <p>Error: {error}</p>}
                {homestays.map((homestay) => (
                    <div key={homestay.id} className="homestay-card">
                        <img src={homestay.image_url} alt={homestay.name} />
                        <div className="homestay-details">
                            <h5>{homestay.name}</h5>
                            <p>{homestay.location}</p>
                            <p>Rating: {homestay.rating} ★</p>
                            <p>Price: ₹{homestay.price_per_night} per night</p>
                            <p>Discount: {homestay.discount}</p>
                            <p>Amenities: {homestay.amenities}</p>
                            <p>EMI Offer: {homestay.emi_offer}</p>
                            <p>Distance to Beach: {homestay.distance_to_beach} km</p>
                            <button className="book-now-btn" onClick={() => handleBookNow(homestay)} >BOOK NOW</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomestaysPage;