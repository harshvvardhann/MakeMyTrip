import React from 'react';
import { Card, Button, Form } from 'react-bootstrap';
import './HomeStaysPayment.css';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const HomeStaysPayment = () => {
    const location = useLocation();
    const {filters,homestay,city,checkInDate,checkOutDate,guests,price,numberOfDays} = location.state;
    console.log((homestay.discount).match(/\d+/g)[0]);
    const totalAmount= (homestay.price_per_night) * (numberOfDays) + (799) - (homestay.discount).match(/\d+/g)[0]
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
        <div className="booking-page1">
            <div className="booking-content">
                <h1 className='heading1' style={{ textAlign: "center" }}>Complete Your Booking</h1>

                <div className="ticket-info">
                    {/* Homestay Info Card */}
                    <Card className="flight-info-card">
                        <Card.Body>
                            <div className="flight-details">
                                <div className="flight-route">
                                    <img src={homestay.image_url} alt={homestay.name} style={{ height: "200px", objectFit: "cover", width: "100%", borderRadius: "10px" }}/>
                                    <h5>{homestay.name}</h5>
                                    <p>{checkInDate} - {checkOutDate}</p>
                                    <p>Rating: {homestay.rating} ★</p>
                                    <p>Price: ₹{homestay.price_per_night} per night</p>
                                    <p>Discount: {homestay.discount}</p>
                                    <p>Amenities: {homestay.amenities}</p>
                                    <p>EMI Offer: {homestay.emi_offer}</p>
                                    <p>Distance to Beach: {homestay.distance_to_beach} km</p>
                                </div>
                                <div className="flight-company">
                                    <span>Location: {homestay.location}</span>
                                </div>
                                <div className="flight-time">
                                    <p>Amenities: {homestay.amenities}</p>
                                </div>

                                {/* Filters & Selected Services */}
                                <div className="services-amenities">
                                    <h5>Selected Room View</h5>
                                    <ul>
                                        <li>Sea View: {filters.roomViews.includes('Sea View') ? 'Yes' : 'No'}</li>
                                        <li>Garden View:{filters.roomViews.includes('Garden View') ? 'Yes' : 'No'}</li>
                                        <li>City View:{filters.roomViews.includes('City View') ? 'Yes' : 'No'}</li>
                                    </ul>
                                </div>
                                <div className="services-amenities">
                                    <h5>Selected Room Aminities</h5>
                                    <ul>
                                        <li>Wifi:{filters.roomAmenities.includes('Wi-Fi') ? 'Yes' : 'No'}</li>
                                        <li>Air Conditioning:{filters.roomAmenities.includes('Air Conditioning') ? 'Yes' : 'No'}</li>
                                        <li>Pool:{filters.roomAmenities.includes('Pool') ? 'Yes' : 'No'}</li>
                                    </ul>
                                </div>
            
                                {/* Price */}
                                <div className="baggage-info">
                                    <span>Price: ₹{homestay.price_per_night} / Night</span>
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

                <div className="additional-info">
                    <Card className="important-info-cardhomestay">
                        <Card.Body>
                            <h5>Important Information</h5>
                            <ul>
                                <li>Check-in is available from {checkInDate}. Please contact the host if arriving earlier.</li>
                                <li>Contact the host for additional amenities or requests.</li>
                                <li>Ensure you have valid identification at the time of check-in.</li>
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
                            <span>₹{homestay.price_per_night}/Night</span>
                        </div>
                        <div className="fare-item">
                            <span>Days</span>
                            <span>{numberOfDays}</span>
                        </div>
                        <div className="fare-item">
                            <span>Taxes & Surcharges</span>
                            <span>₹{799}</span>
                        </div>
                        <div className="fare-item">
                            <span>Discount</span>
                            <span>−₹{homestay.discount}</span>
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

export default HomeStaysPayment;