import React, { useState,useEffect } from 'react';
import { Container, Row, Col, Form, Button, Card, Dropdown } from 'react-bootstrap';
import './TrainList.css';
import { useNavigate,useLocation } from 'react-router-dom';
import axios from 'axios';

const TrainsBooking = () => {
  const location=useLocation();
  const{fromStation,toStation,travelDate}=location.state;
  console.log(fromStation)
  
  const[trainsData,setTrainsData]=useState([])
  const [selectedSeat, setSelectedSeat] = useState({ trainIndex: null, seatType: null });
  const [visibleRouteBanner, setVisibleRouteBanner] = useState(null); // Track which banner is visible
  const [selectedFilters, setSelectedFilters] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/trains/trains/?arrivalStation=${fromStation}&departureStation=${toStation}`)
      .then(response => {
        setTrainsData(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  const handleCheckboxChange = (trainIndex, seatType) => {
    setSelectedSeat({ trainIndex, seatType });
  };

  const handleBookNowClick = (train) => {
    const token = localStorage.getItem('token');

  if (token) {
    // Navigate to the booking page with the selected train and seat type
    navigate('/finaltrainbooking', {
      state: {
        fromStation,toStation,travelDate,selectedFilters,selectedSeat,train
      }
    });
  }else {
    // Token doesn't exist, redirect to login page
    alert('Please login to continue with the booking.');
    navigate('/login');
  }
  };

  const toggleRouteBanner = (index) => {
    // Toggle the route banner visibility
    setVisibleRouteBanner(visibleRouteBanner === index ? null : index);
  };


  const handleFilterChange = (filterType, value) => {
    setSelectedFilters(prevFilters => ({
      ...prevFilters,
      [filterType]: value
    }));
  };


  return (
    <Container fluid className="train-list-container">
      {/* Banner Section */}
      <Row className="banner-section mb-4">
        <Col>
          <h3 className="banner-title">Selected Train & Destination</h3>
          <p className="banner-details">From: {fromStation} | To: {toStation} | Date: {travelDate}</p>
        </Col>
      </Row>

    
      {/* Filter Section */}
      <Row>
        <Col md={3} className="filters-section">

          {/* Additional Filters */}
          <div className="filter-group">
            <div className="filter-header">Additional Amenities</div>
            <div className="filter-option">
              <input
                type="checkbox"
                checked={selectedFilters.additional === 'WiFi'}
                onChange={() => handleFilterChange('additional', 'WiFi')}
              />
              <label>WiFi</label>
            </div>
            <div className="filter-option">
              <input
                type="checkbox"
                checked={selectedFilters.additional === 'Charging Point'}
                onChange={() => handleFilterChange('additional', 'Charging Point')}
              />
              <label>Charging Points</label>
            </div>
            <div className="filter-option">
              <input
                type="checkbox"
                checked={selectedFilters.additional === 'Food'}
                onChange={() => handleFilterChange('additional', 'Food')}
              />
              <label>Food</label>
            </div>
          </div>
        </Col>
        {/* Train List Section */}
        <Col md={9} className="train-list-section">
          <div className="sorting-options d-flex justify-content-end mb-3">
            <Dropdown>
              <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                Sort by: Availability
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/departure-time">Departure</Dropdown.Item>
                <Dropdown.Item href="#/travel-time">Travel Time</Dropdown.Item>
                <Dropdown.Item href="#/arrival-time">Arrival</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>

          {/* Rendering Train Cards */}
          {trainsData.map((train, index) => (
            <Card key={index} className="train-card mb-3">
              <Card.Body>
                <Row>
                  <Col md={9}>
                    <Row>
                      <Col md={6}>
                        <h5 className="train-name">{train.name}</h5>
                        <p><strong>From:</strong> {train.departureStation} ({train.departureCode})</p>
                        <p><strong>Departure Time:</strong> <span className="highlighted-text">{train.departureTime}</span>, {train.departureDay}</p>
                        <p><strong>To:</strong> {train.arrivalStation} ({train.arrivalCode})</p>
                        <p><strong>Arrival Time:</strong> <span className="highlighted-text">{train.arrivalTime}</span>, {train.arrivalDay}</p>
                      </Col>
                      <Col md={3}>
                        <div className="travel-time">
                          <p><strong>Travel Time:</strong> {train.travelTime}</p>
                        </div>
                        <div className="view-route">
                          <Button 
                            variant="primary" 
                            onClick={() => toggleRouteBanner(index)}
                          >
                            {visibleRouteBanner === index ? 'Hide Route' : 'View Route'}
                          </Button>
                          <Button className="book-now-button" onClick={()=>handleBookNowClick(train)}>BOOK NOW</Button>
                        </div>
                      </Col>
                    </Row>

                    {/* Inner banners for AC, Non-AC, Sleeper */}
                    <Row className="inner-banner-container">
                      <Col md={4} className="inner-banner">
                        <div className="banner-content">
                          <p>
                            <input
                              type="checkbox"
                              checked={selectedSeat.trainIndex === index && selectedSeat.seatType === 'AC'}
                              onChange={() => handleCheckboxChange(index, 'AC')}
                            />
                            <strong className="seat-info mx-2">AC</strong>
                          </p>
                          <p>Seat: <span className="highlighted-text">{train.acSeatNumber}</span></p>
                          <p>Coach: <span className="highlighted-text">{train.acCoachNumber}</span></p>
                          <p><strong className="price">Price: ₹{train.acPrice}</strong></p>
                        </div>
                      </Col>
                      <Col md={4} className="inner-banner">
                        <div className="banner-content">
                          <p>
                            <input
                              type="checkbox"
                              checked={selectedSeat.trainIndex === index && selectedSeat.seatType === 'Non-AC'}
                              onChange={() => handleCheckboxChange(index, 'Non-AC')}
                            />
                            <strong className="seat-info mx-2">Non-AC</strong>
                          </p>
                          <p>Seat: <span className="highlighted-text">{train.nonAcSeatNumber}</span></p>
                          <p>Coach: <span className="highlighted-text">{train.nonAcCoachNumber}</span></p>
                          <p><strong className="price">Price: ₹{train.nonAcPrice}</strong></p>
                        </div>
                      </Col>
                      <Col md={4} className="inner-banner">
                        <div className="banner-content">
                          <p>
                            <input
                              type="checkbox"
                              checked={selectedSeat.trainIndex === index && selectedSeat.seatType === 'Sleeper'}
                              onChange={() => handleCheckboxChange(index, 'Sleeper')}
                            />
                            <strong className="seat-info mx-2">Sleeper</strong>
                          </p>
                          <p>Seat: <span className="highlighted-text">{train.sleeperSeatNumber}</span></p>
                          <p>Coach: <span className="highlighted-text">{train.sleeperCoachNumber}</span></p>
                          <p><strong className="price">Price: ₹{train.sleeperPrice}</strong></p>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                  <Col md={3} className="train-image-column">
                    <div className="train-image-container">
                      <img
                        src={train.image} // Replace with actual train image URL
                        alt="Train"
                        className="train-image"
                      />
                    </div>
                  </Col>
                </Row>

                {/* Route Banner Section */}
                {visibleRouteBanner === index && (
                  <div className={`route-banner ${visibleRouteBanner === index ? 'show' : ''}`}>
                    <div className="route-banner-content">
                      <h5 style={{ textAlign: "center" }}>Route Details</h5>
                      <ul>
                        {train.route.map((station, routeIndex) => (
                          <li key={routeIndex}>{station}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </Card.Body>
            </Card>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default TrainsBooking;