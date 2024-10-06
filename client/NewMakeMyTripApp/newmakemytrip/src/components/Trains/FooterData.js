import React from 'react';
import './TrainsBanner.css';
// New Footer Data

// Main Footer Component
const footerSection = [
  {
    title: 'PRODUCT OFFERING',
    links: [
      'Flights', 'International Flights', 'Charter Flights', 'Hotels', 'International Hotels',
      'Villas & Stays', 'Homestays', 'Activities', 'Holidays In India', 'International Holidays',
      'Book Hotels From UAE', 'myBiz for SME Travel', 'Book Online Cabs', 'Book Bus Tickets', 
      'Book Train Tickets', 'Vande Bharat Train', 'Cheap Tickets to India', 'Europe Trip Planner'
    ]
  },
  {
    title: 'MAKEMYTRIP',
    links: [
      'About Us', 'Investor Relations', 'Careers', 'Corporate Travel', 'MMT Foundation', 
      'CSR Policy', 'myPartner - Travel Agent Portal', 'Foreign Exchange', 
      'List your hotel', 'Partners- Redbus', 'Partners- Goibibo', 'Advertise with Us', 
      'Become an Affiliate', 'Gift Cards', 'MakeMyTrip Advertising Solutions', 
      'MakeMyTrip Franchise', 'Update Profile'
    ]
  },
  {
    title: 'ABOUT THE SITE',
    links: [
      'Customer Support', 'Payment Security', 'Privacy Policy', 'User Agreement', 
      'Terms of Service', 'More Offices', 'Make A Payment', 'Work From Home', 
      'Work From Home Jobs', 'Work From Home in India', 'Job From Home', 
      'Part Time Jobs From Home'
    ]
  },
  {
    title: 'QUICK LINKS',
    links: [
      'Delhi Chennai Flights', 'Delhi Mumbai Flights', 'Delhi Goa Flights', 'Chennai Mumbai flights',
      'Mumbai Hyderabad flights', 'Kolkata to Rupsi Flights', 'Delhi to Khajuraho Flights', 
      'Goa to Pune flights', 'Mumbai to Colombo Flights', 'Delhi to Toronto Flights', 
      'Patna to Bangalore Flights', 'Mangalore to Bangalore Flights', 'Bangalore to Kannur Flights',
      'Kolkata to Bangalore Flights', 'Lucknow to Kanpur Flights'
    ]
  },
  {
    title: 'IMPORTANT LINKS',
    links: [
      'Cheap Flights', 'Flight Status', 'Kumbh Mela', 'Domestic Airlines', 'Indigo',
      'GoAir', 'AirAsia', 'Oman Air', 'Air Arabia', 'Air India', 'Flight Schedule', 
      'Lowest Airfare Calendar', 'Domestic Flight Offers', 'Customer Service', 
      'Hotels near me', 'International Flight Offers', 'Trip Ideas', 'Travel Blog'
    ]
  },
  {
    title: 'CORPORATE TRAVEL',
    links: [
      'Corporate Travel', 'Corporate Hotel Booking', 'Business Travel', 
      'myBiz - Best Business Travel Platform', 'Corporate Travel Solutions', 
      'Corporate Flight Booking', 'Group Travel', 'Insta Loyalty', 'myBiz for Small Business'
    ]
  }
];
const FooterData = () => {
  return (
    <footer>
      {footerSection.map((section, index) => (
        <div key={index} className="footer-section">
          <h4>{section.title}</h4>
          <ul>
            {section.links.map((link, i) => (
              <li key={i}>{link}</li>
            ))}
          </ul>
        </div>
      ))}

      {/* Static Content Sections */}
      <div className="footer-section">
        <h3>Book Train Tickets Without Any Hassle</h3>
        <p>
          Traveling by train is a popular choice for both short commutes and longer journeys, and for a good reason.
          With over a thousand routes connecting cities in India, traveling by train is the most convenient mode of travel.
          The combination of price, convenience, and speed makes train travel a sweet spot for discerning travelers.
          Travelers can now search routes, check fares, and book train tickets with MakeMyTrip’s train booking system.
          Moreover, you can also use the MakeMyTrip’s app for easy access...
        </p>
      </div>

      <div className="footer-section">
        <h3>Easy IRCTC Train Booking</h3>
        <p>
          Indian Railways is among the world’s largest rail networks with an operating route length of more than 65,000 km.
          IRCTC (Indian Railway Catering and Tourism Corporation) is the face of India's online train tickets booking system.
          MakeMyTrip is the leading portal for booking IRCTC train tickets online which is offering the most convenient ways
          to book train tickets, check train schedule, train availability, and view live train status...
        </p>
      </div>

      <div className="footer-section">
        <h3>How to Book Train Tickets Online with MakeMyTrip</h3>
        <p>
          Having confusion on how to book your train tickets online? Here's the process of booking your tickets in simple easy steps:
          <br />Step 1: Log in to our website and select the train icon...
        </p>
      </div>

      <div className="footer-section">
        <h3>Check Your PNR Status</h3>
        <p>
          Apart from providing e-tickets by mail, MakeMyTrip also sends you the relevant updates on your registered number over text and WhatsApp.
          When you book train tickets each ticket holder gets a unique PNR, an acronym for Passenger Name Record, to check the status...
        </p>
      </div>

      <div className="footer-section">
        <h3>Why Should You Book Train Tickets with MakeMyTrip</h3>
        <p>
          MakeMyTrip can provide you the most reliable and secure way of train booking and all you need to do is plan your itinerary.
          The portal provides a user-friendly experience to our customers. Instead of waiting or queueing up in lines for hours to book a train ticket,
          you can visit the website...
        </p>
      </div>

      <div className="footer-section">
        <h3>Hassle-free Train Ticket Booking on MakeMyTrip</h3>
        <p>
          Counted among the world’s largest rail networks, Indian Railways is the most popular mode of transport for passengers.
          MakeMyTrip is the leading portal for making your IRCTC ticket booking within a few minutes...
        </p>
      </div>

      <div className="footer-section">
        <h3>Frequently Asked Questions About IRCTC Ticket Booking</h3>
        <p>
          <strong>Q. Why Book Train Tickets Online With MakeMyTrip?</strong><br />
          A. MakeMyTrip, India's leading travel portal is the best way to book train tickets online...
        </p>
        <p>
          <strong>Q. What is the process for booking online train tickets?</strong><br />
          A. For booking train tickets from MakeMyTrip, enter the name of the city, station name or station code of the cities you will depart from and arrive at...
        </p>
        <p>
          <strong>Q. How many people can I book in a single train ticket booking?</strong><br />
          A. In one IRCTC ticket booking, there can be a maximum of only six passengers...
        </p>
        <p>
          <strong>Q. How can I cancel my rail tickets at MakeMyTrip?</strong><br />
          A. If you have to cancel your train ticket that you have booked, it is easy to do it on the app and our website...
        </p>
        <p>
          <strong>Q. Are children charged for train tickets booking?</strong><br />
          A. Children under five years of age are not charged for train reservation...
        </p>
        <p>
          <strong>Q. What documents or ID Cards are required for online train ticket booking?</strong><br />
          A. While you are booking your railway ticket online, you are not required to provide any photo identity card detail...
        </p>
        <p>
          <strong>Q. What is the cancellation policy for train bookings? Will I get any refund?</strong><br />
          A. Canceling a train ticket on the MakeMyTrip app or website is a hassle-free experience...
        </p>
        <p>
          <strong>Q. How can I book my train ticket on mobile?</strong><br />
          A. You can book your train ticket using MakeMyTrip. All you have to do is enter your source and destination...
        </p>
        <p>
          <strong>Q. How can I check the reservation status of my train ticket?</strong><br />
          A. MakeMyTrip allows you to check the reservation status of your train ticket by simply typing your 10-digit PNR number...
        </p>
        <p>
          <strong>Q. Do children get any discount on IRCTC train tickets?</strong><br />
          A. IRCTC doesn’t charge children below the age of 5. For children who are above 5 years, you’d have to pay the full ticket fare...
        </p>
        <p>
          <strong>Q. How many days in advance can the rail tickets be booked?</strong><br />
          A. You can make your IRCTC train ticket booking 120 days in advance...
        </p>
        <p>
          <strong>Q. What is a PNR number?</strong><br />
          A. Passenger Name Record is abbreviated as PNR number. PNR is a unique 10-digit number that contains all the details...
        </p>
        <p>
          <strong>Q. How do I get the rail ticket confirmation alert?</strong><br />
          A. You will receive an email or a message on the mobile number that you entered when you booked your rail tickets...
        </p>
      </div>
    </footer>
  );
};

export default FooterData;