import React from 'react';
import { Card, Button, Form } from 'react-bootstrap';
import './HolidayPayment.css';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const HolidayPayment = () => {
    const location = useLocation();
    const {holiday, fromCity, toCity, departureDate, roomGuests, flightOption, budget, hotelCategory } = location.state;

    const baseFare = Number(holiday.price.match(/\d+/)[0]);
    const taxes = Number(799);
    const discount = Number(1100);
    const totalAmount = baseFare + Number(taxes) - Number(discount);

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
                    {/* Holiday Info Card */}
                    <Card className="flight-info-card">
                        <Card.Body>
                            <div className="flight-details">
                                <div className="flight-route">
                                    <img 
                                        src={holiday.image} 
                                        alt={holiday.title} 
                                        style={{ height: "200px", objectFit: "cover", width: "100%", borderRadius: "10px" }}
                                    />
                                    <h5 className="card-title">{holiday.title}</h5>
                                    <p className="card-text">{holiday.description}</p>
                                </div>
                                <div className="flight-company">
                                    <span>Location: {toCity}</span>
                                </div>

                                {/* Filters & Selected Services */}
                                <div className="services-amenities">
                                    <h5>Flight Prescription</h5>
                                    <ul>
                                        <li>{flightOption}</li>
                                    </ul>
                                </div>
                                <div className="services-amenities">
                                    <h5>Budget</h5>
                                    <ul>
                                        <li>₹{budget}</li>
                                    </ul>
                                </div>
                                <div className="services-amenities">
                                    <h5>Hotel Category</h5>
                                    <ul>
                                        <li>{hotelCategory}</li>
                                    </ul>
                                </div>
                                {/* Price */}
                                <div className="baggage-info">
                                    <span>Price: {holiday.price}</span>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>

                    {/* User Inputs */}
                    <div className="user-inputs">
                        <Form>
                            <Form.Group controlId="passengerName">
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

                {/* Additional Information */}
                <div className="additional-info">
                    <Card className="important-info-cardholiday">
                        <Card.Body>
                            <h5>Important Information</h5>
                            <ul>
                                <li>Check-in available from {departureDate}. Please contact the host if arriving earlier.</li>
                                <li>Contact the host for additional amenities or requests.</li>
                                <li>Ensure you have valid identification at the time of check-in.</li>
                            </ul>
                        </Card.Body>
                    </Card>
                </div>
            </div>

            {/* Sidebar Section with Payment */}
              {/* Sidebar Section with Payment */}
              <div className="sidebar">
                <Card className="fare-summary-card">
                    <Card.Body>
                        <h5>Fare Summary</h5>
                        <div className="fare-item">
                            <span>Base Fare</span>
                            <span>{holiday.price}</span>
                        </div>
                        <div className="fare-item">
                            <span>Taxes & Surcharges</span>
                            <span>₹{799}</span>
                        </div>
                        <div className="fare-item">
                            <span>Discount</span>
                            <span>−₹{1100}</span>
                        </div>
                        <hr />
                        <div className="total-amount">
                            <span>Total Amount</span>
                            <span>₹{holiday.price.match(/\d+/) + Number(799) - Number(1100)}</span>
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

export default HolidayPayment;
