import React, { useState } from 'react';
import './HolidaysBanner.css';
import { useNavigate } from 'react-router-dom';
import CardItems from '../Flights/CardItems.js';
import FooterData from './FooterData.js';
import Footer from '../Flights/Footer.js';
import { Carousel, Card } from 'react-bootstrap';
import Seychelles from './seychelles.avif'
import SouthAfrica from './SouthAfrica.jpg'
import TravelGuide from './TravelGuide.avif'
import UnitedStates from './UnitedStates.avif'
import Andaman from './Andaman.jpg';
import Maldives from './Maldives.avif';
import Europe from './Europe.jpg';
import Andaman2 from './Andaman2.avif';
import Rajasthan from './Rajasthan.avif';
import Goa from './Goa.avif';
import ViewAll2 from './ViewAll2.avif';
import Thailand from './Thailand.jpeg';
import Bali from './Bali.avif';


import ICICIbank from './ICICIbank.jpeg';
import Oberoihotel from './Oberoihotel.jpeg';
import Nextgen from './Nextgen.jpeg';
import Visafree from './Visafree.jpg';
import Ayodhya from './Ayodhya.avif';
import SBI from './SBI.avif';
import Rakhi from './Rakhi.webp';


import Delhi from './delhi.jpeg';
import Banglore from './banglore.webp';
import Ooty from './Ooty.jpeg';
import Mumbai from './Mumbai.jpeg';
import Shimla from './Shimla.jpeg';
import Jaipur from './Jaipur.jpeg';

function HolidaysBanner() {
  const [activeTab, setActiveTab] = useState('Search');
  const [fromCity, setFromCity] = useState("Simon's Town");
  const [toCity, setToCity] = useState("Somerset West");
  const [departureDate, setDepartureDate] = useState('');
  const [roomsGuests, setRoomsGuests] = useState('1 Room,1 Guest');

  const availableCities = ["Simon's Town",'Lisbon', 'Shimokitazawa', 'Abu Hail','Mitte','Wiedikon','Sisli','Mumbai','Rochester','Central'];
  const availableToCities = ['Somerset West','Porto','Haramachida','Al Barsha','Pankow','Langstrasse','Beyoglu','Goa','Yonkers','Ngong Ping'];
  const availableRoomsGuests = ['1 Room, 1 Guest', '1 Room, 2 Guests', '2 Rooms, 4 Guests'];


  const navigate = useNavigate();

    const handleSearch = () => {
      if(fromCity && toCity && departureDate && roomsGuests){
            navigate('/holidaybooking', {
              state:{
                fromCity
                ,toCity,
                departureDate,
                roomsGuests,
              }
            });
          } else {
            alert("Please enter all details");
        }
    };

  const renderContent = () => {
    if (activeTab === 'Search') {
      return (
        <><div className="search-fields">
          <div className="field from-city">
            <span className="label">From City</span>
            <span className="value">{fromCity}</span>
            <select
              value={fromCity}
              onChange={(e) => setFromCity(e.target.value)}
              className="dropdown"
            >
              {availableCities.map((city, index) => (
                <option key={index} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>

          <div className="field to-city">
            <span className="label">To City/Country/Category</span>
            <span className="value">{toCity}</span>
            <select
              value={toCity}
              onChange={(e) => setToCity(e.target.value)}
              className="dropdown"
            >
              {availableToCities.map((city, index) => (
                <option key={index} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>

          <div className="field departure-date">
            <span className="label">Departure Date</span>
            <span className="value">
              {new Date(departureDate).toLocaleDateString('en-US', {
                weekday: 'long',
                day: 'numeric',
                month: 'short',
                year: 'numeric',
              })}
            </span>
            <input
              type="date"
              value={departureDate}
              onChange={(e) => setDepartureDate(e.target.value)}
              className="date-input" />
          </div>

          <div className="field rooms-guests">
            <span className="label">Rooms & Guests</span>
            <span className="value">{roomsGuests}</span>
            <select
              value={roomsGuests}
              onChange={(e) => setRoomsGuests(e.target.value)}
              className="dropdown"
            >
              {availableRoomsGuests.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div><button className="search-button" onClick={handleSearch}>SEARCH</button></>
      );
} else if (activeTab === 'Trending') {
  return (
    <div className="dropdown-content">
      <div className="new-routes">New Routes For You</div>
      <div className="routes-list">
        <ul>
          <li>Georgia</li>
          <li>South Korea</li>
          <li>Kenya</li>
          <li>Azerbaijan</li>
          <li>Canada</li>
          <li>Philippines</li>
          <li>Kazakhstan</li>
          <li>Japan</li>
          <li>Uzbekistan</li>
          <li>Egypt</li>
        </ul>
      </div>
      <div className="trending-images">
        <div className="image-item">
          <img src={Seychelles} alt="Seychelles" />
          Seychelles
        </div>
        {/* <div className="image-item">
                <img src={SouthAfrica} alt="South Africa" />
                South Africa
              </div>
              <div className="image-item">
                <img src={UnitedStates} alt="United States" />
                United States
              </div>
              <div className="image-item">
                <img src={TravelGuide} alt="Travel Guide" />
                Travel Guide
              </div> */}
      </div>
      <button className="search-button">SEARCH</button>
    </div>
  );
} else if (activeTab === 'Honeymoon') {
  return (
    <div className="dropdown-content">
      <div className="new-routes">MakeMyTrip Honeymoon Packages</div>
      <div className="routes-list">
        <ul>
          <li>Bali</li>
          <li>Thailand</li>
          <li>Malaysia</li>
          <li>Mauritius</li>
          <li>Dubai</li>
          <li>North East</li>
          <li>Rajasthan</li>
          <li>Himachal</li>
          <li>Goa</li>
          <li>Kerela</li>
        </ul>
      </div>
      <div className="trending-images">
        <div className="image-item">
          <img src={Maldives} alt="Maldives" />
          Maldives
        </div>
        {/* <div className="image-item">
                <img src={Andaman} alt="Andaman" />
                Andaman
              </div>
              <div className="image-item">
                <img src={Europe} alt="Europe" />
                Europe
              </div>
              <div className="image-item">
                <img src={ViewsAll} alt="ViewAll" />
                View All
              </div> */}
      </div>
      <button className="search-button">SEARCH</button>
    </div>
  );
}
else if (activeTab === 'Luxe Holidays') {
  return (
    <div className="dropdown-content">
      <div className="new-routes">MMT Holidays Premium Packages</div>
      <div className="routes-list">
        <ul>
          <li>Kerela</li>
          <li>Kashmir</li>
          <li>Kenya</li>
          <li>North East</li>
          <li>Himachal</li>
          <li>Uttarakhand</li>
          <li>Dubai</li>
          <li>Thailand</li>
          <li>Mauritius</li>
          <li>Africa</li>
          <li>Maldives</li>
        </ul>
      </div>
      <div className="trending-images">
        <div className="image-item">
          <img src={Andaman2} alt="Andaman" />
          Andaman
        </div>
        {/* <div className="image-item">
                <img src={Rajasthan} alt="Rajasthan" />
                Rajasthan
              </div>
              <div className="image-item">
                <img src={Goa} alt="Goa" />
                Goa
              </div>
              <div className="image-item">
                <img src={ViewAll2} alt="View All" />
                View All
              </div> */}
      </div>
      <button className="search-button">SEARCH</button>
    </div>
  );
}
else if (activeTab === 'Party Packages') {
  return (
    <div className="dropdown-content">
      <div className="new-routes">Group Tours With Like Minded People</div>
      <div className="routes-list">
        <ul>
          <li>Bali</li>
          <li>Ladakh</li>
          <li>Meghalaya</li>
          <li>Goa</li>
          <li>Rajasthan</li>
          <li>Veitnam</li>
        </ul>
      </div>
      <div className="trending-images">
        {/* <div className="image-item">
              <img src={Thailand} alt="Thailand" />
              Thailand
            </div> */}
        <div className="image-item">
          <img src={Bali} alt="Bali" />
          Bali
        </div>
        {/*<div className="image-item">
              <img src={ViewAll3} alt="View All" />
              View All
            </div> */}
      </div>
      <button className="search-button">SEARCH</button>
    </div>
  );
} else if (activeTab === 'Air India Express Holidays') {
  return (
    <div className="dropdown-content">
      <div className="new-routes">Domestic & International</div>
      <div className="routes-list">
        <ul>
          <li>NorthEast</li>
          <li>Kashmir</li>
          <li>Goa</li>
          <li>Kerela</li>
          <li>SouthIndia</li>
          <li>Singapore</li>
          <li>Dubai</li>
          <li>Qatar</li>
          <li>Saudi Arabia</li>
          <li>Bahrain</li>
          <li>Oman</li>
        </ul>
      </div>
      <button className="search-button">SEARCH</button>
    </div>
  );
};
  }
// console.log("bye")
const destinations = [
  { name: 'Rajasthan', price: '₹4,400', image: Rajasthan },
  { name: 'Goa', price: '₹4,000', image: Goa },
  { name: 'South India', price: '₹18,700', image: SouthAfrica },
  { name: 'Thailand', price: '₹98,900', image: Thailand },
  { name: 'Kerala', price: '₹31,600', image: Maldives },
  { name: 'Andaman', price: '₹47,600', image: Andaman },
  { name: 'Kashmir', price: '₹4,300', image: Europe },
  { name: 'North-East', price: '₹11,500', image: Seychelles },
  { name: 'Bali', price: '₹10,500', image: Bali },
  { name: 'United States', price: '₹23,500', image: UnitedStates },
  { name: 'Maldives', price: '₹90,500', image: Maldives },
  { name: 'Europe', price: '₹8,500', image: Europe },
  { name: 'South Africa', price: '₹67,500', image: SouthAfrica },
];

const destinations2 = [
  { name: 'Andaman', price: '₹9,400', image: Andaman2 },
  { name: 'Maldives', price: '₹10,000', image: Maldives },
  { name: 'Malaysia', price: '₹18,700', image: TravelGuide },
  { name: 'South America', price: '₹9,900', image: SouthAfrica },
  { name: 'Bali', price: '₹3,600', image: Bali },
  { name: 'Europe', price: '₹29,600', image: Europe },
  { name: 'Spain', price: '₹20,300', image: ViewAll2 },
  { name: 'North-East', price: '₹11,500', image: Seychelles },
  { name: 'Bali', price: '₹10,500', image: Bali },
  { name: 'United States', price: '₹23,500', image: UnitedStates },
  { name: 'Maldives', price: '₹90,500', image: Maldives },
  { name: 'Europe', price: '₹8,500', image: Europe },
  { name: 'South Africa', price: '₹67,500', image: SouthAfrica },
];

const destinations3 = [
  { name: 'South Africa', price: '₹67,400', image: SouthAfrica },
  { name: 'Europe', price: '₹8,500', image: Europe },
  { name: 'Maldives', price: '₹90,000', image: Maldives },
  { name: 'United States', price: '₹23,000', image: UnitedStates },
  { name: 'Thailand', price: '₹23,600', image: Thailand },
  { name: 'Canada', price: '₹2,600', image: Seychelles },
  { name: 'Taiwan', price: '₹90,300', image: Andaman2 },
  { name: 'North-East', price: '₹11,500', image: Seychelles },
  { name: 'Bali', price: '₹10,500', image: Bali },
  { name: 'United States', price: '₹23,500', image: UnitedStates },
  { name: 'Maldives', price: '₹90,500', image: Maldives },
  { name: 'Europe', price: '₹8,500', image: Europe },
  { name: 'South Africa', price: '₹67,500', image: SouthAfrica },
];


return (
  <>
    <div className="banner1">
      <nav className="navbar">
        <div className="nav-list nav-item" onClick={() => setActiveTab('Search')}>
          Search
        </div>
        <div className="nav-list nav-item" onClick={() => setActiveTab('Trending')}>
          Trending
        </div>
        <div className="nav-list nav-item" onClick={() => setActiveTab('Air India Express Holidays')}>Air India Express Holidays</div>
        <div className="nav-list nav-item" onClick={() => setActiveTab('Honeymoon')}>Honeymoon</div>
        <div className="nav-list nav-item" onClick={() => setActiveTab('Luxe Holidays')}>Luxe Holidays</div>
        <div className="nav-list nav-item" onClick={() => setActiveTab('Party Packages')}>Party Packages</div>
      </nav>
      <div className="search-section">
        {renderContent()}
      </div>
    </div>
    <div className="holiday-banner">
      <h1>Biggest price drop sale begins 21st Aug</h1>
      <p>Flat 30*% off On Holiday Packages</p>
      <div className="carousel-wrapper">
        <Carousel fade={true} controls={false} indicators={true} interval={3000} pause={false} className="destination-carousel">
          <Carousel.Item>
            <div className="cards-wrapper">
              {destinations.map((destination, index) => (
                <Card className="destination-card" key={index}>
                  <Card.Img variant="top" src={destination.image} alt={destination.name} />
                  <Card.Body>
                    <Card.Title>{destination.name}</Card.Title>
                    <Card.Text>Starting at {destination.price}<br />Per person</Card.Text>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>

    <div className="holiday-banner2">
      <h1>Jackpot Deals on Top Selling Packages</h1>
      <p>Save extra with our exclusive deals!</p>
      <div className="carousel-wrapper">
        <Carousel indicators={false} interval={null} className="destination-carousel">
          <Carousel.Item>
            <div className="cards-wrapper">
              {destinations2.map((destination, index) => (
                <Card className="destination-card" key={index}>
                  <Card.Img variant="top" src={destination.image} alt={destination.name} />
                  <Card.Body>
                    <Card.Title>{destination.name}</Card.Title>
                    <Card.Text>Starting at {destination.price}<br />Per person</Card.Text>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </Carousel.Item>
          {/* Add more Carousel.Item as needed */}
        </Carousel>
      </div>
    </div>

    <div className="holiday-banner2">
      <h1>Jackpot Deals on Top Selling Packages</h1>
      <p>Save extra with our exclusive deals!</p>
      <div className="carousel-wrapper">
        <Carousel indicators={false} interval={null} className="destination-carousel">
          <Carousel.Item>
            <div className="cards-wrapper">
              {destinations2.map((destination, index) => (
                <Card className="destination-card" key={index}>
                  <Card.Img variant="top" src={destination.image} alt={destination.name} />
                  <Card.Body>
                    <Card.Title>{destination.name}</Card.Title>
                    <Card.Text>Starting at {destination.price}<br />Per person</Card.Text>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </Carousel.Item>
          {/* Add more Carousel.Item as needed */}
        </Carousel>
      </div>
    </div>

    <div className="holiday-banner3">
      <h1>International Destinations!</h1>
      <div className="carousel-wrapper">
        <Carousel indicators={false} interval={null} className="destination-carousel">
          <Carousel.Item>
            <div className="cards-wrapper">
              {destinations3.map((destination, index) => (
                <Card className="destination-card" key={index}>
                  <Card.Img variant="top" src={destination.image} alt={destination.name} />
                  <Card.Body>
                    <Card.Title>{destination.name}</Card.Title>
                    <Card.Text>Starting at {destination.price}<br />Per person</Card.Text>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </Carousel.Item>
          {/* Add more Carousel.Item as needed */}
        </Carousel>
      </div>
    </div>

    <div className='holidays-harsh'>
      <div className="container my-3">
        <h2 className='heading1'>All Offers</h2>
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

    <div>
      <div className="hotels-container my-4">
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
      </div>
    </div>
    <div className="FooterData1">
      <FooterData />
    </div>
    <div className="footer2">
      <Footer />
    </div>
  </>
);
}

export default HolidaysBanner;
