import React,{useEffect} from 'react';
import { Card, Button, Form } from 'react-bootstrap';
import './FlightPayment.css';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const FlightPayment = () => {
    const location = useLocation();
    const {flight, selectedServices, selectedAmenities, departureDate, selectedFare,travellersClass } = location.state || {};

    const fareDiscounts = {
        "Regular": 0,
        "Student": 100,
        "Senior Citizen": 600,
        "Armed Forces": 600,
        "Doctor and Nurses": 600
    };

    const discount = fareDiscounts[selectedFare] || 0;
    console.log(travellersClass)
    const baseFare = Number(flight.price) * Number(travellersClass);
    const taxesAndSurcharges = 781;
    const totalAmount = baseFare + taxesAndSurcharges - discount;

    const HandlePayment = async (e) => {
        e.preventDefault();
    
        try {
            // Make a POST request to initiate the payment
            let res = await axios.post('http://localhost:8001/payment',{
                amount : totalAmount,
            });
            console.log("Result:",res)
            // Check if we got the response with data
            if (res && res.data) {
                // PayPal returns multiple links; we need to find the one for the approval URL
                const approvalUrl = res.data.links.find(link => link.rel === 'approval_url').href;
    
                // Redirect the user to PayPal for payment approval
                window.location.href = approvalUrl;
            }
        } catch (error) {
            console.error('Error initiating PayPal payment:', error);
        }
    };
    
    return (
        <div className="booking-page">
            <div className="booking-content">
                <h1 className='heading1' style={{ textAlign: "center" }}>Complete Your Booking</h1>
                
                <div className="ticket-info">
                    {/* Ticket Info Card */}
                    <Card className="flight-info-card">
                        <Card.Body>
                            <div className="flight-details">
                                <div className="flight-route">
                                    <h5>{flight.from_location} → {flight.to_location}</h5>
                                    <p>{departureDate} • {flight.duration}</p>
                                </div>
                                <div className="flight-company">
                                    <span>{flight.airline}</span>
                                </div>
                                <div className="flight-time">
                                    <p>Departure Time: {flight.departure_time}</p>
                                    <p>Arrival Time: {flight.arrival_time}</p>
                                </div>

                                {/* Services & Amenities */}
                                <div className="services-amenities">
                                    <h5>Selected Services</h5>
                                    <ul>
                                        <li>Meal: {selectedServices.meal ? 'Yes' : 'No'}</li>
                                        <li>Baggage: {selectedServices.baggage ? 'Yes' : 'No'}</li>
                                        <li>Seat: {selectedServices.seat ? 'Yes' : 'No'}</li>
                                        <li>Insurance: {selectedServices.insurance ? 'Yes' : 'No'}</li>
                                    </ul>
                                    <h5>Selected Amenities</h5>
                                    <ul>
                                        <li>WiFi: {selectedAmenities.wifi ? 'Yes' : 'No'}</li>
                                        <li>Priority Boarding: {selectedAmenities.priority ? 'Yes' : 'No'}</li>
                                        <li>Extra Legroom: {selectedAmenities.legroom ? 'Yes' : 'No'}</li>
                                    </ul>
                                </div>

                                {/* Price */}
                                <div className="baggage-info">
                                    <span>Price: ₹{flight.price} / Adult</span>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                    
                    {/* User Inputs */}
                    <div className="user-inputs">
                        <Form>
                            <Form.Group controlId="passengerName">
                                <Form.Label>Passenger Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter passenger name" required/>
                            </Form.Group>
                            <Form.Group controlId="contactNumber">
                                <Form.Label>Contact Number</Form.Label>
                                <Form.Control type="text" placeholder="Enter contact number" required/>
                            </Form.Group>
                            <Form.Group controlId="specialRequests">
                                <Form.Label>Special Requests</Form.Label>
                                <Form.Control as="textarea" rows={3} placeholder="Enter any special requests" />
                            </Form.Group>
                        </Form>
                    </div>
                </div>

                <div className="additional-info">
                    <Card className="important-info-card">
                        <Card.Body>
                            <h5>Important Information</h5>
                            <ul>
                                <li>Arrive at the airport 2 hours before departure.</li>
                                <li>Check-in online to avoid queues.</li>
                                <li>Passport and visa are required for international flights.</li>
                            </ul>
                        </Card.Body>
                    </Card>
                </div>
            </div>

            {/* Sidebar Section with Payment */}
            <div className="sidebar">
                <Card className="fare-summary-card">
                    <Card.Body>
                        <h5>Fare Summary</h5>
                        <div className="fare-item">
                            <span>Base Fare</span>
                            <span>₹{baseFare} ({travellersClass} Person)</span>
                        </div>
                        <div className="fare-item">
                            <span>Taxes & Surcharges</span>
                            <span>₹{taxesAndSurcharges}</span>
                        </div>
                        <div className="fare-item">
                            <span>Discount ({selectedFare})</span>
                            <span>−₹{discount}</span>
                        </div>
                        <hr />
                        <div className="total-amount">
                            <span>Total Amount</span>
                            <span>₹{totalAmount}</span>
                        </div>
                    </Card.Body>
                </Card>

                {/* Payment Section */}
                <Card className="payment-card">
                    <Card.Body>
                        <h5>Payment</h5>
                            <Button variant="primary" type="submit" className="pay-btn" onClick={HandlePayment}> 
                                Pay Now
                            </Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default FlightPayment;
