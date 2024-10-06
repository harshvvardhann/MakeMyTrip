import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './TrainsBanner.css';
import FooterData from './FooterData';
import Footer from '../Flights/Footer.js'
import CardItems from '../Flights/CardItems';
import train from './train.avif';
import Oberoihotel from './Oberoihotel.jpeg';
import Nextgen from './Nextgen.jpeg';
import Visafree from './Visafree.jpg';
import Ayodhya from './ayodhya.avif';
import SBI from './SBI.avif';
import Europe from './Europe.jpg';
import Rakhi from './Rakhi.webp';

const TrainsBanner = () => {
    const [fromStation, setFromStation] = useState("Mumbai Central");
    const [toStation, setToStation] = useState("Ahmedabad Junction");
    const [travelDate, setTravelDate] = useState("");

    // Example stations for dropdown
    const stations = [
        {name: "New Delhi" },
        {name: "Ahmedabad Junction" },
        {name: "Bhubaneshwar" },
        {name: "Mysuru Junction" },
        {name: "Kochi" },
        {name: "Mumbai CST" },
        {name: "Puri" },
        {name: "Howrah" },
        {name: "Agra Cantt" },
        {name: "Chennai Centra;" },
        {name: "Surat" },
        {name: "Goa Madgaon" },
        {name: "Mumbai Central" },
        {name: "Kanpur Central" },
    ];
    const navigate = useNavigate();
    
    const handleSearch = () => {
        console.log(fromStation)
        console.log(toStation)
        if (fromStation && toStation && travelDate) {
          navigate('/trainbooking', {  state: {
            fromStation,
            toStation,
            travelDate,
        }, });
        } else {
          alert("Please enter all details");
        }
      };
    return (
        <>
        <div className="hotels-banner">
            <div className="banner-options">
                {/* Radio buttons for booking type */}
                {/* {["Book Train Tickets"].map((label, idx) => (
                    <label key={idx} className="radio-option">
                        <input
                            type="radio"
                            name="booking-type"
                            checked={bookingType === label}
                            onChange={() => setBookingType(label)}
                        />
                        <span>{label}</span>
                    </label>
                ))} */}
                <span className="property-link">Train Ticket Booking - IRCTC Authorized e-ticketing</span>
            </div>

            <div className="search-fields">
                <div className="field location">
                    <span className="label">From</span>
                    <span className='value'>{fromStation}</span>
                    <select
                        className="dropdown"
                        value={fromStation}
                        onChange={(e) => setFromStation(e.target.value)}
                    >
                        {stations.map((station, idx) => (
                            <option key={idx} value={`${station.name}`}>
                                {station.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="field check-in">
                    <span className="label">To</span>
                    <span className='value'>{toStation}</span>
                    <select
                        className="dropdown"
                        value={toStation}
                        onChange={(e) => setToStation(e.target.value)}
                    >
                        {stations.map((station, idx) => (
                            <option key={idx} value={`${station.name}`}>
                                {station.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="field check-out">
                    <span className="label">Travel Date</span>
                    <span className="value">{travelDate}</span>
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
        <div className='trainsBannerharsh'>
                <div className="container my-3">
                    <h2 className='heading1'>All Offers</h2>
                    <div className='horizontal-line'></div>
                    <div className="row">
                        <div className="col-md-3">
                            <CardItems title="DIWALI WEEK TRAIN BOOKINGS OPEN" description="Book by paying 25% of the fare* with our Seat Lock feature." url={train} url1="https://www.makemytrip.com/promos/ih-icici-02012023.html?detail_image=no" />
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
            <div className="FooterData">
                <FooterData/>
            </div>
            <div className="Footer2">
                <Footer/>
            </div>
        </>
    );
};

export default TrainsBanner;
