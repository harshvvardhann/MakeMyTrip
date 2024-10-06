import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './HomeStaysBanner.css'
import CardItems from '../Flights/CardItems.js';
import Footer from '../Flights/Footer'
import Goa from './goa.jpeg';
import Delhi from './delhi.jpeg';
import Mumbai from './Mumbai.jpeg';
import Mukteshwar from './Mukteshwar.jpeg';
import Gokarna from './Gokarna.jpeg';
import Coonoor from './Coonoor.webp';
import Kasol from './Kasol.jpeg';
import Malvan from './Malvan.jpeg';
import Jibhi from './jibhi.jpeg';

import ICICIbank from './ICICIbank.jpeg';
import Oberoihotel from './Oberoihotel.jpeg';
import Nextgen from './Nextgen.jpeg';
import Visafree from './Visafree.jpg';
import Ayodhya from './Ayodhya.avif';
import SBI from './SBI.avif';
import Europe from './Europe.jpg';
import Rakhi from './Rakhi.webp';

export default function Banner() {
    const [city, setCity] = useState("Goa");
    const [checkInDate, setCheckInDate] = useState("");
    const [checkOutDate, setCheckOutDate] = useState("");
    const [guests, setGuests] = useState("2 Adults");

    // List of available cities
    const cities = [
        "Goa", "Rajasthan", "Kerala", "Himachal Pradesh", "Tamil Nadu", 
        "Karnataka", "Uttarakhand", "Maharashtra", "West Bengal", "Andhra Pradesh","Gujarat","Punjab"
    ];
    const navigate = useNavigate();

    const handleSearch = () => {
         // Convert dates to Date objects for comparison
         const checkIn = new Date(checkInDate);
         const checkOut = new Date(checkOutDate);
 
         const timeDifference = checkOut - checkIn; // Difference in milliseconds
         const numberOfDays = timeDifference / (1000 * 3600 * 24); // Convert to days
 
        if (city && checkInDate && checkOutDate && guests) {
            // Validate the check-out date
            if (checkOut <= checkIn) {
                alert("Check-Out date must be after Check-In date.");
                return; // Stop further execution
            }
          navigate('/homestaysbooking', {  state: {
            city,
            checkInDate,
            checkOutDate,
            guests,
            numberOfDays,
        }, });
        } else {
          alert("Please enter all details");
        }
      };
    return (
        <>
        <div>
        <div className="homestays-banner">
                <div className="banner-options">
                    <span className="property-link">Book your ideal Homestay - Villas, Apartments & more</span>
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
                        <span className="value">{new Date(checkInDate).toLocaleDateString('en-US', { weekday: 'long', day: 'numeric', month: 'short', year: 'numeric' })}</span>
                        <span className="day">{new Date(checkInDate).toLocaleDateString('en-US', { weekday: 'long' })}</span>
                        <input
                            type="date"
                            value={checkInDate}
                            onChange={(e) => setCheckInDate(e.target.value)}
                            className="date-input"
                        />
                    </div>
                    <div className="field check-out">
                        <span className="label">Check-Out</span>
                        <span className="value">{new Date(checkOutDate).toLocaleDateString('en-US', { weekday: 'long', day: 'numeric', month: 'short', year: 'numeric' })}</span>
                        <span className="day">{new Date(checkOutDate).toLocaleDateString('en-US', { weekday: 'long' })}</span>
                        <input
                            type="date"
                            value={checkOutDate}
                            onChange={(e) => setCheckOutDate(e.target.value)}
                            className="date-input"
                        />
                    </div>
                    <div className="field guests">
                        <span className="label">Guests</span>
                        <span className="value">{guests}</span>
                        <select onChange={(e) => setGuests(e.target.value)} className="dropdown">
                            <option value="2 Adults">2 Adults</option>
                            <option value="4 Adults">4 Adults</option>
                            <option value="6 Adults">6 Adults</option>
                            <option value="8 Adults">8 Adults</option>
                        </select>
                    </div>
                </div>

                <button className="search-button" onClick={handleSearch}>SEARCH</button>
                <div>
                    <div className="homestays-container my-4">
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
                            <img src={Mumbai} alt="Mumbai Flights" className="state-image" />
                            <div className="state-info">
                                <h4>Banglore</h4>
                                <a href="">Via - Delhi, Bangalore, Chennai, Ahmedabad</a>
                            </div>
                        </div>
                        <div className="state-item">
                            <img src={Mukteshwar} alt="Hyderabad Flights" className="state-image" />
                            <div className="state-info">
                                <h4>Ooty</h4>
                                <a href="">Via - Chennai, Mumbai, Bangalore, Delhi</a>
                            </div>
                        </div>
                        <div className="state-item">
                            <img src={Gokarna} alt="Delhi Flights" className="state-image" />
                            <div className="state-info">
                                <h4>Mumbai</h4>
                                <a href="">Via - Mumbai, Pune, Bangalore, Chennai</a>
                            </div>
                        </div>
                        <div className="state-item">
                            <img src={Coonoor} alt="Pune Flights" className="state-image" />
                            <div className="state-info">
                                <h4>Shimla</h4>
                                <a href="">Via - Delhi, Bangalore, Chennai, Ahmedabad</a>
                            </div>
                        </div>
                        <div className="state-item">
                            <img src={Kasol} alt="Kolkata Flights" className="state-image" />
                            <div className="state-info">
                                <h4>Jaipur</h4>
                                <a href="">Via - Delhi, Mumbai, Bangalore, Pune</a>
                            </div>
                        </div>
                        <div className="state-item">
                            <img src={Malvan} alt="Bangalore Flights" className="state-image" />
                            <div className="state-info">
                                <h4>Manali</h4>
                                <a href="">Via - Delhi, Pune, Mumbai, Kolkata</a>
                            </div>
                        </div>
                        <div className="state-item">
                            <img src={Jibhi} alt="Bangalore Flights" className="state-image" />
                            <div className="state-info">
                                <h4>Dubai</h4>
                                <a href="">Via - Delhi, Pune, Mumbai, Kolkata</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='homestays-harsh'>
                <div className="container my-3">
                    <p className='heading1'>All Offers</p>
                    <div className='horizontal-line'></div>
                    <div className="row">
                        <div className="col-md-3">
                            <CardItems title="Grab FLAT 15% OFF* on 3, 4 & 5-Star Stays" description="for your next international trip." url={ICICIbank} url1="https://www.makemytrip.com/promos/ih-icici-02012023.html?detail_image=no" />
                        </div>
                        <div className="col-md-3">
                            <CardItems title="Recharge Yourself with a Relaxing Stay:" description="Grab Up to 25% Savings* on Stays @ Trident Hotels!" url={Oberoihotel} url1="https://www.makemytrip.com/promos/star-air-sale-050824.html?detail_image=no" />
                        </div>
                        <div className="col-md-3">
                            <CardItems title="Introducing NEXT-GEN ADVENTURES!" description="Fun group holidays with like-minded people, for 18-35 year olds." url={Nextgen} url1="https://www.makemytrip.com/promos/offers/next-gen-adventures-090724.html?detail_image=no" />
                        </div>
                        <div className="col-md-3">
                            <CardItems title="Take a Quick Trip to Visa-Free Destinations NOW" description="with our holiday packages." url={Visafree} url1="https://holidayz.makemytrip.com/holidays/india/search?campaign=VISA%20Free&mcat=VISA%20Free&detail_image=no" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <CardItems title="INTRODUCING: Bus Tours of India!" description="Explore our bus exclusive group packages NOW. " url={Ayodhya} url1="https://holidayz.makemytrip.cohttps://holidayz.makemytrip.com/holidays/india/search?campaign=Bus&mcat=Bus&detail_image=nom/holidays/india/search?campaign=International%20NorthernLights&mcat=International%20NorthernLights&detail_image=no" />
                        </div>
                        <div className="col-md-3">
                            <CardItems title="INSIDE: BIG Discounts on Flights, Hotels, Holidays" description="& more, with SBI Credit Card for your next refreshing break. " url={SBI} url1="https://www.makemytrip.com/promos/sbi-offers-07012021.html?lob=all&detail_image=no" />
                        </div>
                        <div className="col-md-3">
                            <CardItems title="Book our special Europe rail packages" description="& get set to ride through Europe’s beautiful scenery!" url={Europe} url1="https://www.makemytrip.com/promos/euro-rail-packages-220524.html?detail_image=no" />
                        </div>
                        <div className="col-md-3">
                            <CardItems title="Grab up to 17% OFF* " description="on Buses, Cabs & Trains for Your Rakhi Trip!" url={Rakhi} url1="https://www.makemytrip.com/promos/gt-suhana-safar-rakhi-16082024.html?detail_image=no" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="faq-container">
                <div className="faq-item">
                    <h2>Why Book Hotels on the Country's Best Travel Site?</h2>
                    <p>Planning a vacation or business trip, and haven't found a hotel yet? Then use our web portal to find a hotel, which suits you in every way. The best travel site in India, Makemytrip has the largest database of hotels in the country and outside. Our user-friendly website makes online hotel booking an easy task, which can be completed in mere minutes.</p>
                </div>

                <div className="faq-item">
                    <h2>How to book hotels on Makemytrip.com?</h2>
                    <p>Now, suppose you are travelling to Goa. All you have to do is click on the 'Hotels' tab on the homepage, and press the 'Domestic' button. After typing Goa under the 'I WANT TO GO' header, select your option. Then, enter the check-in and check-out dates, and tell us the number of adults and children, for whom the booking is to be made. On clicking the 'Search Hotels' button, all the accommodation options are displayed on a single page. To make your task easier, our portal is provided with filters that you can use to narrow down your search. You can refine the results on the basis of star category, location, area, price range and even the facilities you want.</p>
                </div>

                <div className="faq-item">
                    <h2>What Makemytrip.com has in store for you?</h2>
                    <p>We have all sorts of hotels, ranging from luxury to cheap, so whatever be your requirement, you will get the accommodation. When you find the hotel of your choice, just click on its name to see its detailed description. Apart from Goa, our database includes myriad properties in all holiday and business destinations in India. Our payment gateway is totally secure, so all your bank details are safe. A smooth transfer process means that making payment is as swift as searching the hotel. So, whether you are looking for budget or upscale hotels in Delhi, Shimla, Mumbai, Chennai or any other destination, visit Makemytrip, and get the best deal.</p>
                </div>
            </div>
        </div>
        <div>
            <Footer/>
        </div>
        </>
    )
}
