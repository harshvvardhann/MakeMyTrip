import React from 'react';
import { Card, Button, Form } from 'react-bootstrap';
import './CabsPayment.css';
import { useLocation } from 'react-router-dom';
import axios from 'axios';


const CabPayment = () => {
    const location = useLocation();
    const { fromLocation, toLocation, departureDate, pickupTime, cabType, fuelType, amenities, policies, cab } = location.state || {};
    
    console.log(fromLocation, toLocation, departureDate, pickupTime, cabType, fuelType, amenities, policies, cab);  // To verify data
    
    const HandlePayment = async (e) => {
        e.preventDefault();
    
        try {
            // Make a POST request to initiate the payment
            let res = await axios.post('http://localhost:8000/payment');
    
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
                                    <h5>{cab.cab_name || 'No Cabs available'}</h5>
                                </div>
                                <div className="flight-time">
                                    <p><strong>Cab Type:</strong> {cab.cab_type || 'N/A'}</p>
                                    <p><strong>Air Conditioning Facility:</strong> <span>{cab?.is_ac ? 'AC' : 'Non AC'}</span></p>
                                    <p><strong>Seating Capacity:</strong> {cab?.seating_capacity || 'N/A'}</p>
                                    <p><strong>Distance included:</strong> <span>{cab?.distance_included || 'N/A'}</span></p>
                                    <p><strong>Cab rating:</strong> {cab?.rating || 'N/A'}</p>
                                    <p><strong>Fuel Type:</strong> <span>{cab?.fuel_type || 'N/A'}</span></p>
                                </div>

                                {/* Services & Amenities */}
                                <div className="services-amenities">
                                    <h5>Selected Amenities</h5>
                                    <ul>
                                        <li>WiFi/Charging Ports: {amenities.length > 0 ? 'Yes' : 'No'}</li>
                                    </ul>
                                </div>

                                <div className="services-amenities">
                                    <h5>Policies</h5>
                                    <ul>
                                        <li>{policies || 'No policies available'}</li>
                                    </ul>
                                </div>

                                {/* Price */}
                                <div className="baggage-info">
                                    <span>Price: ₹{cab?.price || 'N/A'}</span>
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
                            <span>₹{cab?.price || 'N/A'}</span>
                        </div>
                        <div className="fare-item">
                            <span>Taxes and Surcharges</span>
                            <span>₹{120}</span>
                        </div>
                        <div className="total-amount">
                            <span>Total Amount</span>
                            <span>₹{Number(cab?.price || 0) + 120}</span>
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

export default CabPayment;
