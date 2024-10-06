import React, { useEffect, useState } from 'react';
import './BusBookingPage.css'; // Updated CSS for more comprehensive styling
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

const BusBookingPage = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const { fromCity, toCity, travelDate } = location.state;
    console.log(fromCity)
    console.log(toCity)

    const [busData, setBusData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [filters, setFilters] = useState({
        busType: '',
        amenities: [],
        policies: [],
    });

    const [pickupLocation, setPickupLocation] = useState('');
    const [dropoffLocation, setDropoffLocation] = useState('');
    const [pickupSuggestions, setPickupSuggestions] = useState([]);
    const [dropoffSuggestions, setDropoffSuggestions] = useState([]);
    const [allLocations] = useState(['New York', 'Los Angeles', 'San Francisco', 'Chicago', 'Houston']); // Sample locations

    // Handle dynamic suggestions based on pickup location input
    const handlePickupInputChange = (e) => {
        const value = e.target.value;
        setPickupLocation(value);

        // Filter and prioritize matching suggestions for pickup location
        const filteredSuggestions = allLocations
            .filter((location) => location.toLowerCase().includes(value.toLowerCase()))
            .sort((a, b) => a.toLowerCase().indexOf(value.toLowerCase()) - b.toLowerCase().indexOf(value.toLowerCase()));

        setPickupSuggestions(filteredSuggestions);
    };

    // Handle dynamic suggestions based on drop-off location input
    const handleDropoffInputChange = (e) => {
        const value = e.target.value;
        setDropoffLocation(value);

        // Filter and prioritize matching suggestions for drop-off location
        const filteredSuggestions = allLocations
            .filter((location) => location.toLowerCase().includes(value.toLowerCase()))
            .sort((a, b) => a.toLowerCase().indexOf(value.toLowerCase()) - b.toLowerCase().indexOf(value.toLowerCase()));

        setDropoffSuggestions(filteredSuggestions);
    };

    // Set the selected suggestion for pickup
    const handlePickupSuggestionClick = (suggestion) => {
        setPickupLocation(suggestion);
        setPickupSuggestions([]); // Hide suggestions after selection
    };

    // Set the selected suggestion for drop-off
    const handleDropoffSuggestionClick = (suggestion) => {
        setDropoffLocation(suggestion);
        setDropoffSuggestions([]); // Hide suggestions after selection
    };

    // Simulate data fetching with random bus data
    useEffect(() => {
        const fetchBusData = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/buses/buses/?fromLocation=${fromCity}&toLocation=${toCity}`);
                setBusData(response.data);
                console.log(busData)
            } catch (error) {
                console.error('Error fetching bus data:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchBusData();
    }, []);

    const handleBookClick = (bus) => {
        const token = localStorage.getItem('token');

        if (token) {
            // Navigate to the booking page with the selected train and seat type
            navigate('/finalbusbooking', {
                state: {
                    fromCity, toCity, travelDate, filters, bus
                }
            });
        } else {
            // Token doesn't exist, redirect to login page
            alert('Please login to continue with the booking.');
            navigate('/login');
        }
    };

    const [dropdownOpen, setDropdownOpen] = useState({
        policies: false,
        photos: false,
        amenities: false,
        pickups_drops: false,
        reviews_texts: false,
    });

    const toggleDropdown = (busId, section) => {
        setDropdownOpen(prevState => ({
            ...prevState,
            [busId]: {
                ...prevState[busId],
                [section]: !prevState[busId]?.[section]
            }
        }));
    };





    // Handle filter changes
    const handleFilterChange = (filterType, value) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            [filterType]: value,
        }));
    };

    // Loading state
    if (isLoading) {
        return <div className="loading">Loading bus details...</div>;
    }

    return (
        <div className="bus-booking-page">

            {/* Filters Section */}
            <div className="main-content">
                <div className="filters-section">
                    <h2>Filter Buses</h2>

                    {/* Bus Type Filter */}
                    <div className="filter">
                        <label>Bus Type</label>
                        <select onChange={(e) => handleFilterChange('busType', e.target.value)}>
                            <option value="">All</option>
                            <option value="AC">AC</option>
                            <option value="Non-AC">Non-AC</option>
                            {/* Add more bus types */}
                        </select>
                    </div>

                    {/* Amenities Filter */}
                    <div className="filter">
                        <label>Amenities</label>
                        <div className='checkbox-value'>
                            <input type="checkbox" value="WiFi" onChange={(e) => handleFilterChange('amenities', e.target.value)} /> WiFi
                        </div>
                        <div>
                            <input type="checkbox" value="Charging Ports" onChange={(e) => handleFilterChange('amenities', e.target.value)} /> Charging Ports
                        </div>
                        {/* Add more amenities */}
                    </div>

                    {/* Policies Filter */}
                    <div className="filter">
                        <label>Policies</label>
                        <div>
                            <input type="checkbox" value="Free Cancellation" onChange={(e) => handleFilterChange('policies', e.target.value)} /> Free Cancellation
                        </div>
                        {/* Add more policies */}
                    </div>
                </div>

                {/* Bus Listings Section */}
                <div className="bus-list-section">
                    <div className="sorting-bar">
                        <span className='mx-2'>Sort by:</span>
                        <select>
                            <option value="price">Price</option>
                            <option value="rating">Rating</option>
                            <option value="departure">Departure Time</option>
                        </select>
                    </div>

                    {/* Mapping through bus data */}
                    {busData.map((bus) => (
                        <div key={bus.id} className="bus-card">
                            <div className="bus-header">
                                <div>
                                    <h2>{bus.name}</h2>
                                    <p>{bus.bus_type}</p>
                                </div>
                                <div className="bus-rating">
                                    <span className="rating-star">★ {bus.rating}</span>
                                    <span>{bus.reviews_texts[0]} <br /> {bus.reviews_texts[1]}</span>
                                </div>
                            </div>

                            <div className="bus-body">
                                <div className="bus-timing">
                                    <h3>{bus.departure_time} {bus.departure_date}</h3>
                                    <p>{bus.duration}</p>
                                    <h3>{bus.arrival_time} {bus.arrival_date}</h3>
                                </div>
                                <div className="bus-seats">
                                    <p>{bus.seats_left} Seats Left</p>
                                    <p>{bus.window_seats} Window Seats</p>
                                </div>
                                <div className="bus-price">
                                    <p className="original-price">₹{bus.original_price}</p>
                                    <h3 className="discounted-price">₹{bus.discounted_price}</h3>
                                    <p className="discount">Save ₹{bus.discount}</p>
                                </div>
                                <button className="select-seats-button" onClick={() => {
                                    handleBookClick(bus)
                                }}>BOOK NOW</button>
                            </div>

                            <div className="bus-footer">
                                {/* Policies Dropdown */}
                                <div className="dropdown">
                                    <p onClick={() => toggleDropdown(bus.id, 'policies')}>Policies</p>

                                    {dropdownOpen[bus.id]?.policies && (
                                        <ul>
                                            {bus.policies.map((policy, index) => (
                                                <li key={index}>{policy}</li>
                                            ))}
                                        </ul>
                                    )}

                                </div>

                                {/* Photos Dropdown */}
                                <div className="dropdown">
                                    <p onClick={() => toggleDropdown(bus.id, 'photos')}>Photos</p>
                                    {dropdownOpen[bus.id]?.photos && (
                                        <div className="photo-gallery">
                                            {bus.photos.map((photo, index) => (
                                                <img key={index} src={photo} alt={`Bus photo ${index + 1}`} style={{ width: '100px', margin: '5px' }} />
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {/* Amenities Dropdown */}
                                <div className="dropdown">
                                    <p onClick={() => toggleDropdown(bus.id, 'amenities')}>Amenities</p>
                                    {dropdownOpen[bus.id]?.amenities && (
                                        <ul>
                                            {bus.amenities.map((amenity, index) => (
                                                <li key={index}>{amenity}</li>
                                            ))}
                                        </ul>
                                    )}
                                </div>

                                {/* Pickup & Drops Dropdown */}
                                <div className="dropdown">
                                    <p onClick={() => toggleDropdown(bus.id, 'pickups_drops')}>Pickups & Drops</p>
                                    {dropdownOpen[bus.id]?.pickups_drops && (
                                        <ul>
                                            {bus.pickups_drops.map((location, index) => (
                                                <li key={index}>{location}</li>
                                            ))}
                                        </ul>
                                    )}
                                </div>

                                {/* Reviews Dropdown */}
                                <div className="dropdown">
                                    <p onClick={() => toggleDropdown(bus.id, 'reviews_texts')}>Reviews</p>
                                    {dropdownOpen[bus.id]?.reviews_texts && (
                                        <ul>
                                            {bus.reviews_texts.map((review, index) => (
                                                <li key={index}>{review}</li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BusBookingPage;
