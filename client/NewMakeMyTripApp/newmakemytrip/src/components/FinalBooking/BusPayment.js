import React from 'react';
import { Card, Button, Form } from 'react-bootstrap';
import './TrainsPayment.css';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const BusPayment = () => {
    const location = useLocation();
    const {fromCity,toCity,travelDate,filters,bus} = location.state;

    const totalAmount = Number(bus.discounted_price) + Number(500) - Number(bus.discount);
    console.log(totalAmount)
    const HandlePayment = async (e) => {
        e.preventDefault();
    
        try {
            // Make a POST request to initiate the payment
            let res = await axios.post('http://localhost:8000/payment',{
                amount : totalAmount,
            });
    
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
                                    <h5>{bus.name ? bus.name : 'No Buses available'}</h5>
                                </div>
                                <div className="flight-time">
                                    <p><strong>Bus Type:</strong> {bus.bus_type}</p>
                                    <p><strong>Ratings:</strong> <span>{bus.rating}</span></p>
                                    <p><strong>Arrival Time:</strong> {bus.arrival_time}</p>
                                    <p><strong>Arrival Date:</strong> <span >{bus.arrival_date}</span></p>
                                    <p><strong>Departure Time:</strong> {bus.departure_time}</p>
                                    <p><strong>Departure Date:</strong> <span >{bus.departure_date}</span></p>
                                </div>

                                {/* Services & Amenities */}
                                <div className="services-amenities">
                                    <h5>Selected Services</h5>
                                    <ul>
                                        <li>Reviews: {bus.reviews_texts[0]} <br /> {bus.reviews_texts[1]}</li>
                                    </ul>
                                    <h5>Selected Amenities</h5>
                                    <ul>
                                        <li>WiFi: {filters.amenities.includes('WiFi') ? 'Yes' : 'No'}</li>
                                        <li>Charging Ports: {filters.amenities.includes("Charging Ports") ? 'Yes' : 'No'}</li>
                                    </ul>
                                </div>

                                <div className="services-amenities">
                                    <h5>Policies</h5>
                                    <ul>
                                        <li>{filters.policies.includes("Free Cancellation")}</li>
                                    </ul>
                                </div>
                                {/* Price */}
                                <div className="baggage-info">
                                    <span>
                                        Price: ₹{bus.original_price}
                                    </span>

                                </div>
                            </div>
                        </Card.Body>
                    </Card>

                    {/* User Inputs */}
                    <div className="user-inputs">
                        <Form>
                            <Form.Group controlId="guestName">
                                <Form.Label>Guest Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter guest name" />
                            </Form.Group>
                            <Form.Group controlId="contactNumber">
                                <Form.Label>Contact Number</Form.Label>
                                <Form.Control type="text" placeholder="Enter contact number" />
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
                                <li>Check-in time is usually 2:00 PM, and check-out is 12:00 PM.</li>
                                <li>Please carry a valid ID proof for all guests.</li>
                                <li>Contact the hotel for special requests like early check-in.</li>
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
                            <span>₹{bus.discounted_price}</span>
                        </div>
                        <div className="fare-item">
                            <span>Taxes and Surcharges</span>
                            <span>₹{500}</span>
                        </div>
                        <div className="fare-item">
                            <span>Discounts:</span>
                            <span>₹{Number(bus.discount)}</span>
                        </div>
                        <div className="total-amount">
                            <span>Total Amount <span></span></span>
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

export default BusPayment;
