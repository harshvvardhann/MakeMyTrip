import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../Flights/Footer.js';
import './HotelsBanner.css';
import Banner2Luxe from './Banner2Luxe.avif';
import Banner2Luxe2 from './Banner2Luxe2.avif';
import Banner2Luxe3 from './Banner2Luxe3.avif';
import CardItems from '../Flights/CardItems';
import Taj from './Taj.jpg';
import Trident from './Trident.jpg';
import Mobikwick from './Mobikwik.jpg';
import ITCnarmada from './ITCnarmada.webp';
import MMT from './MMT.jpg';
import BestWestern from './BestWestern.jpeg'
import Alia from './Alia.jpg';
import YesBank from './YesBank.jpg';
import Goa from './goa.jpeg';
import Delhi from './delhi.jpeg';
import Banglore from './banglore.webp';
import Ooty from './Ooty.jpeg';
import Mumbai from './Mumbai.jpeg';
import Shimla from './Shimla.jpeg';
import Jaipur from './Jaipur.jpeg';
import Manali from './Manali.jpeg';
import Dubai from './Dubai.jpeg';
import Singapore from './Singapore.jpeg';
import Bangkok from './Bangkok.jpeg';
import Pattaya from './Pattaya.jpeg';

const HotelsBanner = () => {
    // State variables for user inputs
    const [city, setCity] = useState("Goa");
    const [checkInDate, setCheckInDate] = useState("");
    const [checkOutDate, setCheckOutDate] = useState("");
    const [rooms, setRooms] = useState("1 Room");
    const [guests, setGuests] = useState("1 Adult");

    // Handlers for input changes
    const handleCheckInDateChange = (e) => setCheckInDate(e.target.value);
    const handleCheckOutDateChange = (e) => setCheckOutDate(e.target.value);
    const handleRoomsChange = (e) => setRooms(e.target.value);
    const handleGuestsChange = (e) => setGuests(e.target.value);

    const cities = [
        "Goa", "Delhi", "Mumbai", "Bangalore", "Chennai",
        "Hyderabad", "Kolkata", "Pune", "Jaipur", "Agra"
    ];

    const navigate = useNavigate(); // Use useNavigate instead of useHistory

    const handleSearch = () => {
        // Convert dates to Date objects for comparison
        const checkIn = new Date(checkInDate);
        const checkOut = new Date(checkOutDate);

        const timeDifference = checkOut - checkIn; // Difference in milliseconds
        const numberOfDays = timeDifference / (1000 * 3600 * 24); // Convert to days

        if (city && checkInDate && checkOutDate && rooms && guests) {
            // Validate the check-out date
            if (checkOut <= checkIn) {
                alert("Check-Out date must be after Check-In date.");
                return; // Stop further execution
            }
            navigate('/hotelsbooking', {
                state: {
                    city,
                    checkInDate,
                    checkOutDate,
                    rooms,
                    guests,
                    numberOfDays,
                },
            });
        } else {
            alert("Please enter all details");
        }
    };

    return (
        <>
            <div className="hotels-banner1">
                <div className="banner-options">
                    <label className="radio-option">
                        <input type="radio" name="booking-type" defaultChecked />
                        <span>Upto 4 Rooms</span>
                    </label>
                    <label className="radio-option">
                        <input type="radio" name="booking-type" />
                        <span>Group Deals</span>
                        <span className="new-badge">new</span>
                    </label>
                    <span className="property-link">Book Domestic and International Property Online. To list your property <a href="/">Click Here</a></span>
                </div>

                <div className="search-fields">
                    <div className="field location">
                        <span className="label">City, Property Name Or Location</span>
                        <span className="value">{city}</span>
                        <span className="country">India</span>
                        <select onChange={(e) => setCity(e.target.value)} className="dropdown">
                            {cities.map((cityName, index) => (
                                <option key={index} value={cityName}>{cityName}</option>
                            ))}
                        </select>
                    </div>
                    <div className="field check-in">
                        <span className="label">Check-In</span>
                        <span className="value">{new Date(checkInDate).toLocaleDateString()}</span>
                        <span className="day">{new Date(checkInDate).toLocaleDateString('en-US', { weekday: 'long' })}</span>
                        <input
                            type="date"
                            value={checkInDate}
                            onChange={handleCheckInDateChange}
                            className="date-input"
                        />
                    </div>
                    <div className="field check-out">
                        <span className="label">Check-Out</span>
                        <span className="value">{new Date(checkOutDate).toLocaleDateString()}</span>
                        <span className="day">{new Date(checkOutDate).toLocaleDateString('en-US', { weekday: 'long' })}</span>
                        <input
                            type="date"
                            value={checkOutDate}
                            onChange={handleCheckOutDateChange}
                            className="date-input"
                        />
                    </div>
                    <div className="field rooms-guests">
                        <span className="label">Rooms & Guests</span>
                        <span className="value">{rooms} {guests}</span>
                        <div className="dropdown-container">
                            <select onChange={handleRoomsChange} className="dropdown">
                                <option value="1 Room">1 Room</option>
                                <option value="2 Rooms">2 Rooms</option>
                                <option value="3 Rooms">3 Rooms</option>
                                <option value="4 Rooms">4 Rooms</option>
                            </select>
                            <select onChange={handleGuestsChange} className="dropdown">
                                <option value="1 Adult">1 Adult</option>
                                <option value="2 Adults">2 Adults</option>
                                <option value="3 Adults">3 Adults</option>
                                <option value="4 Adults">4 Adults</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="trending-searches">
                    <span className="label">Trending Searches:</span>
                    <button className="trending-button">Singapore, Singapore</button>
                    <button className="trending-button">London, United Kingdom</button>
                    <button className="trending-button">New York, United States</button>
                </div>

                <button className="search-button" onClick={handleSearch}>SEARCH</button>
            </div>
            {/* BANNER-2 */}
            <div className="hotels-banner2">
                {/* Left part */}
                <div className='inner-div'>
                    <span className="property-link2">INTRODUCING</span> <br />
                    <span className='property-link3'>MMT Luxe Selections</span> <br />
                    <span className="property-link4">Escape to the epitome of luxury,packed with signature eminites and services</span>
                </div>
                {/* Right part */}
                <div className="card-deck">
                    <div className="card">
                        <img src={Banner2Luxe} className="card-img-top" alt="Card 1" />
                        <div className="card-body">
                            <p className='card-innerText1'>Luxe properties in India</p>
                            <p className="card-innerText2">Explore by Luxiry brands,themes & top picks</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={Banner2Luxe2} className="card-img-top" alt="Card 2" />
                        <div className="card-body">
                            <p className='card-innerText1'>Luxe Villas</p>
                            <p className="card-innerText2">Premium Villas with Superlative Experiance</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={Banner2Luxe3} className="card-img-top" alt="Card 3" />
                        <div className="card-body">
                            <p className='card-innerText1'>Luxe International</p>
                            <p className="card-innerText2">Dubai, Maldives, Thailand, Paris & More</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='card-harsh'>
                <div className="container my-3">
                    <h2 className='heading1'>All Offers</h2>
                    <div className='horizontal-line'></div>
                    <div className="row">
                        <div className="col-md-3">
                            <CardItems title="Enjoy FLAT 10% Savings* on Stays at the Taj" description="+ Get a Taj Experience Gift Card worth up to ₹3000." url={Taj}  url1="" />
                        </div>
                        <div className="col-md-3">
                            <CardItems title="Recharge Yourself with a Relaxing Stay:" description="Grab Up to 25% Savings* on Stays @ Trident Hotels!" url={Trident} url1="https://www.makemytrip.com/promos/star-air-sale-050824.html?detail_image=no" />
                        </div>
                        <div className="col-md-3">
                            <CardItems title="FOR MEMORABLE TRIPS IN INDIA:" description="Grab Up to 16% OFF* on domestic flights + hotels" url={Mobikwick} url1="https://www.makemytrip.com/promos/hdfc-emi-22062023.html?detail_image=no" />
                        </div>
                        <div className="col-md-3">
                            <CardItems title="Up to 20% OFF* on Stay + 20% OFF* on F&B" description="at ITC, Welcomhotel, Storii and Fortune Hotels" url={ITCnarmada} url1="https://www.makemytrip.com/promos/taj-offer-190324.html?detail_image=no" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <CardItems title="Presenting MMT Luxe Selections" description="Ultra-indulgent stays with handpicked services, for your rare taste." url={MMT} url1="https://holidayz.makemytrip.com/holidays/india/search?campaign=International%20NorthernLights&mcat=International%20NorthernLights&detail_image=no" />
                        </div>
                        <div className="col-md-3">
                            <CardItems title="FOR YOUR INTERNATIONAL TRIPS:  " description="Grab HUGE SAVINGS on International Hotels " url={BestWestern} url1="https://www.makemytrip.com/promos/star-air-sale-050824.html?detail_image=no" />
                        </div>
                        <div className="col-md-3">
                            <CardItems title="Travel Plans Can Change. We Get It!" description="Book hotels with no payment now and pay later. " url={Alia} url1="https://www.makemytrip.com/promos/ancillary-meals.html?detail_image=no" />
                        </div>
                        <div className="col-md-3">
                            <CardItems title="Avail Interest-free EMI* + Up to 35% OFF*" description="on flights, hotels & holiday packages in India & abroad." url={YesBank} url1="https://www.makemytrip.com/promos/vande-bharat-express-trains-050523.html?detail_image=no" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="hotels-container1 my-4">
                <div className="state-item">
                    <img src={Goa} alt="Chennai Flights" className="state-image" />
                    <div className="state-info">
                        <h4>Goa</h4>
                        <a href="">Hotels,Budget Hotels,Resorts,Best Hotels,North Goa</a>
                    </div>
                </div>
                <div className="state-item">
                    <img src={Delhi} alt="Goa Flights" className="state-image" />
                    <div className="state-info">
                        <h4>Delhi</h4>
                        <a href="">Via - Delhi, Mumbai, Bangalore, Ahmedabad</a>
                    </div>
                </div>
                <div className="state-item">
                    <img src={Banglore} alt="Mumbai Flights" className="state-image" />
                    <div className="state-info">
                        <h4>Banglore</h4>
                        <a href="">Via - Delhi, Bangalore, Chennai, Ahmedabad</a>
                    </div>
                </div>
                <div className="state-item">
                    <img src={Ooty} alt="Hyderabad Flights" className="state-image" />
                    <div className="state-info">
                        <h4>Ooty</h4>
                        <a href="">Via - Chennai, Mumbai, Bangalore, Delhi</a>
                    </div>
                </div>
                <div className="state-item">
                    <img src={Mumbai} alt="Delhi Flights" className="state-image" />
                    <div className="state-info">
                        <h4>Mumbai</h4>
                        <a href="">Via - Mumbai, Pune, Bangalore, Chennai</a>
                    </div>
                </div>
                <div className="state-item">
                    <img src={Shimla} alt="Pune Flights" className="state-image" />
                    <div className="state-info">
                        <h4>Shimla</h4>
                        <a href="">Via - Delhi, Bangalore, Chennai, Ahmedabad</a>
                    </div>
                </div>
                <div className="state-item">
                    <img src={Jaipur} alt="Kolkata Flights" className="state-image" />
                    <div className="state-info">
                        <h4>Jaipur</h4>
                        <a href="">Via - Delhi, Mumbai, Bangalore, Pune</a>
                    </div>
                </div>
                <div className="state-item">
                    <img src={Manali} alt="Bangalore Flights" className="state-image" />
                    <div className="state-info">
                        <h4>Manali</h4>
                        <a href="">Via - Delhi, Pune, Mumbai, Kolkata</a>
                    </div>
                </div>
                <div className="state-item">
                    <img src={Dubai} alt="Bangalore Flights" className="state-image" />
                    <div className="state-info">
                        <h4>Dubai</h4>
                        <a href="">Via - Delhi, Pune, Mumbai, Kolkata</a>
                    </div>
                </div>
                <div className="state-item">
                    <img src={Singapore} alt="Bangalore Flights" className="state-image" />
                    <div className="state-info">
                        <h4>Singapore</h4>
                        <a href="">Via - Delhi, Pune, Mumbai, Kolkata</a>
                    </div>
                </div>
                <div className="state-item">
                    <img src={Bangkok} alt="Bangalore Flights" className="state-image" />
                    <div className="state-info">
                        <h4>Bangkok</h4>
                        <a href="">Via - Delhi, Pune, Mumbai, Kolkata</a>
                    </div>
                </div>
                <div className="state-item">
                    <img src={Pattaya} alt="Bangalore Flights" className="state-image" />
                    <div className="state-info">
                        <h4>Pattaya</h4>
                        <a href="">Via - Delhi, Pune, Mumbai, Kolkata</a>
                    </div>
                </div>
            </div>
            <div className='footer-qnas'>
                <div className='inner-footer'>
                    <p className='heading'>Product Offering</p>
                    <p className='para'>Flights, International Flights, Charter Flights, Hotels, International Hotels, Homestays and Villas, Activities, Holidays In India, International Holidays, Book Hotels From UAE, myBiz for Corporate Travel, Book Online Cabs, Book Bus Tickets, Book Train Tickets, Cheap Tickets to India, Book Flights From US, Book Flights From UAE, Trip Planner, Forex Card, Buy Foreign Currency, Gift Cards, Gift, Wedding Gift, Anniversary Gift, Birthday Gift, Diwali Gift, Valentines Gift, Farewell Gift, Christmas Gift, New Year Gift, Trip Money, Trip Ideas, Travel Blog, PNR Status, MakeMyTrip Advertising Solutions, One Way Cab</p>
                </div>
                <div className="inner-footer">
                    <p className='heading'>MakeMyTrip</p>
                    <p className='para'>About Us, Investor Relations, Careers, MMT Foundation, Legal Notices, CSR Policy, myPartner - Travel Agent Portal, Foreign Exchange, List your hotel, Partners- Redbus, Partners- Goibibo, Advertise with Us, Holiday-Franchise</p>
                </div>
                <div className='inner-footer'>
                    <p className='heading'>About the Site</p>
                    <p className='para'>Customer Support, Payment Security, Privacy Policy, Cookie Policy, User Agreement, Terms of Service, Franchise Offices, Make A Payment, Work From Home, Escalation Channel</p>
                </div>
                <div className='inner-footer'>
                    <p className='heading'>Top Cities</p>
                    <p className='para'>Hotels in Thailand, Hotels In Goa, Hotels In Mumbai, Hotels In Mahabaleshwar, Hotels In Matheran, Hotels In Lonavala, Hotels In Delhi, Hotels In Shimla, Hotels In Lansdowne, Hotels In Digha, Hotels In Puri, Hotels In Nainital, Hotels In Shirdi, Hotels In Bangalore, Hotels In Mussoorie, Hotels In Manali, Hotels Near Me, Cheap Hotels, Hotels In Jaipur, Hotels In Udaipur, Hotels In Pune, Hotels In Pondicherry, Hotels In Ooty, Hotels In Kodaikanal, Hotels In Darjeeling, Hotels In Chandigarh, Hotels In Mount abu, Hotels In Ahmedabad, Hotels In Kolkata, Hotels In Ranthambore, Jaisalmer Hotels, Mysore Hotels</p>
                </div>
                <div className='inner-footer'>
                    <p className='heading'>Top Properties</p>
                    <p className='para'>W Goa, The Leela Goa, The Tamara Coorg, Evolve Back Coorg, Grand Hyatt Goa, Taj Lake Palace Udaipur, The Leela Palace Udaipur, Grand Hyatt Mumbai, Jw Marriott Chandigarh, Alila Diwa Goa, Evolve Back Hampi, Evolve Back Kabini, Hyatt Regency Mumbai, Le Meridien Delhi, Itc Grand Chola Chennai, Rambagh Palace Jaipur, Le Meridien Goa, Taj Lands End Mumbai, Jai Mahal Palace Jaipur, Vythiri Resort Wayanad, Red Earth Kabini, Taj Mahal Tower Mumbai, The Serai Bandipur, Wildflower Hall Shimla, Azaya Beach Resort Goa, Four Seasons Hotel Mumbai, Taj Fort Aguada Resort & Spa Goa, Itc Maratha Mumbai, Park Hyatt Chennai, Sea Shell Havelock, Spice Tree Munnar</p>
                </div>
                <div className='inner-footer'>
                    <p className='heading'>Trending Resort Cities</p>
                    <p>Mahabaleshwar Resorts, Resorts In Agra, Resorts In Bhimtal, Resorts In Bordi, GraResorts In Br Hills, Resorts In Chikmagalur, Resorts In Cochin, Resorts In Darjeeling, Resorts In Dehradun, Resorts In Dharamshala, Resorts In Gorai, Resorts In Jaipur, Resorts In Jaisalmer, Resorts In Jodhpur, Resorts In Kanakapura, Resorts In Kollam, Resorts In Kotagiri, Resorts In Lucknow, Resorts In Madikeri, Resorts In Mahabaleshwar, Resorts In Masinagudi, Resorts In Matheran, Resorts In Mount Abu, Resorts In Mumbai, Resorts In Munnar, Resorts In Mussoorie, Resorts In Mysore, Resorts In Nainital, Resorts In Neemrana, Resorts In Kodaikanal</p>
                </div>
            </div>
            <div className='footerr1'>
                <Footer />
            </div>

        </>
    );
};

export default HotelsBanner;
