import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useNavigate, Route, Routes } from 'react-router-dom';
import CardItems from './CardItems';
import Booking from './Booking';
import '../cssFiles/Banner.css';
import sampleImage from '../images/Quatar.jpg';
import startAir from '../images/startAir.jpg'
import hdfc from '../images/hdfc.jpeg'
import taj from '../images/taj.jpg'
import santa from '../images/santa.webp'
import alia from '../images/alia.avif'
import khana from '../images/khana.webp'
import vande from '../images/vande.avif'
import chennai from '../images/chennai.jpg';
import bangalore from '../images/banglore.webp';
import delhi from '../images/delhi.jpeg';
import goa from '../images/goa.jpeg';
import hyderabar from '../images/hyderabad.jpg';
import jaipur from '../images/jaipur.jpg';
import kolkata from '../images/kolkata.jpg';
import mumbai from '../images/mumbai.jpeg';
import pune from '../images/pune.jpg';
import LoginPage from './LoginPage';
import BannerLower from './BannerLower';
import Footer from './Footer';

const Banner = () => {
    const [origin, setOrigin] = useState("Delhi");
    const [destination, setDestination] = useState("Mumbai");
    const [departureDate, setDepartureDate] = useState("");
    const [travellersClass, setTravellersClass] = useState("1");
    const [message, setMessage] = useState("");
    const navigate = useNavigate(); // Hook to navigate programmatically
    const [flights, setFlights] = useState([]);

    const handleSearch = () => {
        if (origin && destination && departureDate) {
            navigate('/booking', {
                state: {
                    origin,
                    destination,
                    departureDate,
                    travellersClass,
                    selectedFare,
                },
            });
        } else {
            alert("Please enter all details");
        }
    };
    const [selectedFare, setSelectedFare] = useState("Regular");
    const handleFareChange = (e) => {
        setSelectedFare(e.target.value);
    };
    const airportInfo = {
        "Delhi": "DEL, Delhi Airport India",
        "Mumbai": "BOM, Chhatrapati Shivaji International Airport India",
        "Bangalore": "BLR, Kempegowda International Airport India",
        "Chennai": "MAA, Chennai International Airport India",
        "Hyderabad": "HYD, Rajiv Gandhi International Airport India",
        "Kolkata": "CCU, Netaji Subhas Chandra Bose International Airport India",
        "Pune": "PNQ, Pune Airport India",
        "Jaipur": "JAI, Jaipur International Airport India",
        "Goa": "GOI, Dabolim Airport India",
        "Bangkok": "Bangkok",
        "Dubai": "Dubai International"

    };

    return (
        <>
            <div className="banner">
                <div className="banner-options">
                    <span className="property-link">Book International and Domestic Flights</span>
                </div>

                <div className="search-fields">
                    <div className="field location">
                        <span className="label">From</span>
                        <span className="value">{origin}</span>
                        <span className="country">{airportInfo[origin]}</span>
                        <select onChange={(e) => setOrigin(e.target.value)} className="dropdown">
                            <option value="Delhi">Delhi</option>
                            <option value="Mumbai">Mumbai</option>
                            <option value="Bangalore">Bangalore</option>
                            <option value="Chennai">Chennai</option>
                            <option value="Hyderabad">Hyderabad</option>
                            <option value="Kolkata">Kolkata</option>
                            <option value="Pune">Pune</option>
                            <option value="Jaipur">Jaipur</option>
                            <option value="Goa">Goa</option>
                            <option value="Bangko">Bangkok</option>
                            <option value="Dubai">Dubai</option>
                        </select>
                    </div>
                    <div className="field check-in">
                        <span className="label">To</span>
                        <span className="value">{destination}</span>
                        <span className="day">{airportInfo[destination]}</span>
                        <select onChange={(e) => setDestination(e.target.value)} className="dropdown">
                            <option value="Mumbai">Mumbai</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Bangalore">Bangalore</option>
                            <option value="Chennai">Chennai</option>
                            <option value="Hyderabad">Hyderabad</option>
                            <option value="Kolkata">Kolkata</option>
                            <option value="Pune">Pune</option>
                            <option value="Jaipur">Jaipur</option>
                            <option value="Goa">Goa</option>
                            <option value="Bangko">Bangkok</option>
                            <option value="Dubai">Dubai</option>
                        </select>
                    </div>
                    <div className="field check-out">
                        <span className="label">Departure</span>
                        <span className="value">{departureDate}</span>
                        <span className="day">{new Date(departureDate).toLocaleDateString('en-US', { weekday: 'long' })}</span>
                        <input
                            type="date"
                            onChange={(e) => setDepartureDate(e.target.value)}
                            className="date-input"
                        />
                    </div>
                    
                    <div className="field price-per-night">
                        <span className="label">Travellers & Class</span>
                        <span className="value">{travellersClass}</span>
                        <select onChange={(e) => setTravellersClass(e.target.value)} className="dropdown">
                            <option value="1">1 Traveller</option>
                            <option value="2">2 Travellers</option>
                            <option value="3">3 Travellers</option>
                        </select>
                    </div>
                </div>
                <div className="trending-searches">
                    <span className="value" style={{ fontSize: "16px" }}>Select a <br />Special Fare <span className="new-badge">new</span> <span className='space'></span> </span>
                    <div className="fare-options">
                        <label className={`fare-option ${selectedFare === "Regular" ? "selected" : ""}`}>
                            <input type="radio" name="fare-type" value="Regular" onChange={handleFareChange} />
                            <span>Regular</span><br />
                            <small>Regular fares</small>
                        </label>
                        <label className={`fare-option ${selectedFare === "Student" ? "selected" : ""}`}>
                            <input type="radio" name="fare-type" value="Student" onChange={handleFareChange} />
                            <span>Student</span><br />
                            <small>Extra discounts/baggage</small>
                            <div className="extra-info">Applicable only for students above 12 years of age. Valid student ID cards and student visas (where applicable) are required to avail this. </div>
                        </label>
                        <label className={`fare-option ${selectedFare === "Senior Citizen" ? "selected" : ""}`}>
                            <input type="radio" name="fare-type" value="Senior Citizen" onChange={handleFareChange} />
                            <span>Senior Citizen</span><br />
                            <small>up to ₹600 off</small>
                            <div className="extra-info">Applicable only for senior citizens above the age of 60 years. A valid proof of Date of Birth is required at the airport to avail this.</div>
                        </label>
                        <label className={`fare-option ${selectedFare === "Armed Forces" ? "selected" : ""}`}>
                            <input type="radio" name="fare-type" value="Armed Forces" onChange={handleFareChange} />
                            <span>Armed Forces</span><br />
                            <small>up to ₹600 off</small>
                            <div className="extra-info">Applicable only for serving/retired Indian Armed Forces personnel & their dependents. A valid Armed Forces ID or dependent card is required at the airport to avail this.</div>
                        </label>
                        <label className={`fare-option ${selectedFare === "Doctor and Nurses" ? "selected" : ""}`}>
                            <input type="radio" name="fare-type" value="Doctor and Nurses" onChange={handleFareChange} />
                            <span>Doctor and Nurses</span><br />
                            <small>up to ₹600 off</small>
                            <div className="extra-info">Applicable only for medical personnel. A valid ID is required at the airport to avail this.</div>
                        </label>
                    </div>


                </div>
                <button className="search-button" onClick={handleSearch}>SEARCH</button>
            </div>
            <div className='card-one'>
                <div className="container my-3">
                    <h2 className='heading1'>All Offers</h2>
                    <div className='horizontal-line'></div>
                    <div className="row">
                        <div className="col-md-3">
                            <CardItems title="Independence Day Sale by Qatar Airways!" description="with up to 25% OFF* on Qatar Airways flight fares." url={sampleImage} url1="https://www.makemytrip.com/promos/qatar-airways-sale-08082024.html?detail_image=no" />
                        </div>
                        <div className="col-md-3">
                            <CardItems title="LIVE NOW: Freedom Sale by StarAir " description="with flight fares starting @ ₹1999*." url={startAir} url1="https://www.makemytrip.com/promos/star-air-sale-050824.html?detail_image=no" />
                        </div>
                        <div className="col-md-3">
                            <CardItems title="Grab Up to Rs. 7500 OFF*" description="on domestic & international flights." url={hdfc} url1="https://www.makemytrip.com/promos/hdfc-emi-22062023.html?detail_image=no" />
                        </div>
                        <div className="col-md-3">
                            <CardItems title="Enjoy FLAT 10% Savings* on Stays at the Taj" description="Get a Taj Experience Gift Card worth up to ₹3000. " url={taj} url1="https://www.makemytrip.com/promos/taj-offer-190324.html?detail_image=no" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <CardItems title="Chase the Northern Lights on Your Next Holiday!" description="Explore special packages with husky sledding, snowmobile & more." url={santa} url1="https://holidayz.makemytrip.com/holidays/india/search?campaign=International%20NorthernLights&mcat=International%20NorthernLights&detail_image=no" />
                        </div>
                        <div className="col-md-3">
                            <CardItems title="FOR YOUR INTERNATIONAL TRIPS:  " description="Grab HUGE SAVINGS on International Hotels " url={alia} url1="https://www.makemytrip.com/promos/star-air-sale-050824.html?detail_image=no" />
                        </div>
                        <div className="col-md-3">
                            <CardItems title="Meals for Your Flights @ up to 20% Lower Prices!" description="Now book your meal in advance & save BIG bucks on your journey." url={khana} url1="https://www.makemytrip.com/promos/ancillary-meals.html?detail_image=no" />
                        </div>
                        <div className="col-md-3">
                            <CardItems title="Exciting NEWS: Book Tickets for Vande Bharat Expre..." description="with us hassle-free & get set for a train journey." url={vande} url1="https://www.makemytrip.com/promos/vande-bharat-express-trains-050523.html?detail_image=no" />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="banner-container my-4">
                    <div className="state-item">
                        <img src={chennai} alt="Chennai Flights" className="state-image" />
                        <div className="state-info">
                            <h4>Chennai Flights</h4>
                            <a href="">Via - Delhi, Mumbai, Coimbatore, Madurai</a>
                        </div>
                    </div>
                    <div className="state-item">
                        <img src={goa} alt="Goa Flights" className="state-image" />
                        <div className="state-info">
                            <h4>Goa Flights</h4>
                            <a href="">Via - Delhi, Mumbai, Bangalore, Ahmedabad</a>
                        </div>
                    </div>
                    <div className="state-item">
                        <img src={mumbai} alt="Mumbai Flights" className="state-image" />
                        <div className="state-info">
                            <h4>Mumbai Flights</h4>
                            <a href="">Via - Delhi, Bangalore, Chennai, Ahmedabad</a>
                        </div>
                    </div>
                    <div className="state-item">
                        <img src={hyderabar} alt="Hyderabad Flights" className="state-image" />
                        <div className="state-info">
                            <h4>Hyderabad Flights</h4>
                            <a href="">Via - Chennai, Mumbai, Bangalore, Delhi</a>
                        </div>
                    </div>
                    <div className="state-item">
                        <img src={delhi} alt="Delhi Flights" className="state-image" />
                        <div className="state-info">
                            <h4>Delhi Flights</h4>
                            <a href="">Via - Mumbai, Pune, Bangalore, Chennai</a>
                        </div>
                    </div>
                    <div className="state-item">
                        <img src={pune} alt="Pune Flights" className="state-image" />
                        <div className="state-info">
                            <h4>Pune Flights</h4>
                            <a href="">Via - Delhi, Bangalore, Chennai, Ahmedabad</a>
                        </div>
                    </div>
                    <div className="state-item">
                        <img src={kolkata} alt="Kolkata Flights" className="state-image" />
                        <div className="state-info">
                            <h4>Kolkata Flights</h4>
                            <a href="">Via - Delhi, Mumbai, Bangalore, Pune</a>
                        </div>
                    </div>
                    <div className="state-item">
                        <img src={bangalore} alt="Bangalore Flights" className="state-image" />
                        <div className="state-info">
                            <h4>Bangalore Flights</h4>
                            <a href="">Via - Delhi, Pune, Mumbai, Kolkata</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='Banner-Footer'>
                <BannerLower />
            </div>
            <div className='footerr'>
                <Footer />
            </div>

            {message && <div className="no-flights-message">{message}</div>}
        </>
    );
};

export default Banner;
