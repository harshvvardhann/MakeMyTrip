import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Flights/Navbar';
import BackgroundCarousel from './components/Flights/BackgroundCarousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hotels from './components/Hotels/Hotels.js';
import HotelBookingPage from './components/Hotels/HotelBookingPage.js';
import Holidays from './components/Holidays/Holidays.js';
import Trains from './components/Trains/Trains.js';
import Buses from './components/Buses/Buses.js';
import Cabs from './components/Cabs/Cabs.js';
import HomeStaysandvillas from './components/HomeStays/HomeStaysandvillas';
import Banner from './components/Flights/Banner.js';
import Booking from './components/Flights/Booking.js';
import HomeStaysBooking from './components/HomeStays/HomeStaysBooking.js';
import TrainsBooking from './components/Trains/TrainsBooking.js';
import BusBookingPage from './components/Buses/BusBookingPage.js';
import CabsBooking from './components/Cabs/CabsBooking.js';
import HolidaysBooking from './components/Holidays/HolidaysBooking.js'
import FlightPayment from './components/FinalBooking/FlightPayment.js';
import HotelPayment from './components/FinalBooking/HotelPayment.js';
import HomeStaysPayment from './components/FinalBooking/HomeStaysPayment.js';
import HolidayPayment from './components/FinalBooking/HolidayPayment.js';
import TrainsPayment from './components/FinalBooking/TrainsPayment.js'
import BusPayment from './components/FinalBooking/BusPayment.js';
import CabPayment from './components/FinalBooking/CabPayment.js'
import Success from './components/Success.js'
import Failed from './components/Failed.js'
import Login from './Login.js';
import Signup from './Signup.js';
import LogoutPage from './components/LogoutPage.js';

function App() {
    return (    
        <Router>
            <div className="App">
                <Navbar /> {/* Navbar visible on all pages */}
                <div className="carousel-container">
                    <BackgroundCarousel /> {/* Carousel visible on all pages */}
                    <div className="overlay-content">
                        <Routes>
                            <Route path="/logout" element={<LogoutPage />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/signup" element={<Signup />} />
                            <Route path="/" element={<Banner />} />
                            <Route path="/flights" element={<Banner />} />
                            <Route path="/booking" element={<Booking />} />
                            <Route path="/hotels" element={<Hotels />} />
                            <Route path="/hotelsbooking" element={<HotelBookingPage/>}/>
                            <Route path="/homestaysandvillas" element={<HomeStaysandvillas />} />
                            <Route path="/homestaysbooking" element={<HomeStaysBooking />} />
                            <Route path="/holidays" element={<Holidays />} />
                            <Route path="/trains" element={<Trains />} />
                            <Route path="/trainbooking" element={<TrainsBooking />} />
                            <Route path="/buses" element={<Buses />} />
                            <Route path="/cabs" element={<Cabs />} />
                            <Route path="/busbooking" element={<BusBookingPage />} />
                            <Route path="/cabbooking" element={<CabsBooking />} />
                            <Route path="/holidaybooking" element={<HolidaysBooking />} />
                            <Route path="/finalbooking" element={<FlightPayment />} />
                            <Route path="/finalhotelbooking" element={<HotelPayment />} />
                            <Route path="/finalhomestaysbooking" element={<HomeStaysPayment />} />
                            <Route path="/finalholidaybooking" element={<HolidayPayment />} />
                            <Route path="/finaltrainbooking" element={<TrainsPayment />} />
                            <Route path="/finalbusbooking" element={<BusPayment />} />
                            <Route path="/finalcabbooking" element={<CabPayment />} />
                            <Route path="/success" element={<Success />} />
                            <Route path="/failed" element={<Failed />} />
                        </Routes>
                    </div>  
                </div>
            </div>
        </Router>
    );
}   

export default App;