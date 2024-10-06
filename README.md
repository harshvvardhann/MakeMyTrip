# MakeMyTrip

![MakeMyTrip Logo](path/to/logo.png) <!-- Replace with actual path to logo image -->

## Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)

## Project Overview
**MakeMyTrip** is a comprehensive travel booking application that allows users to book flights, hotels, homestays, holidays, trains, buses, and cabs. The application provides a seamless experience for travelers, enabling them to search, compare, and book their travel options with ease.

## Features
- **User Authentication:** Secure registration and login using JWT authentication.
- **Flight Booking:** Search for flights with various filters including price and duration.
- **Hotel & Homestay Booking:** Browse and book hotels and homestays with detailed descriptions and reviews.
- **Holiday Packages:** Discover exciting holiday packages tailored to different preferences.
- **Transportation Services:** Book trains, buses, and cabs with real-time availability.
- **Payment Integration:** Secure payments through PayPal with sandbox mode for testing.
- **Responsive Design:** Optimized for both desktop and mobile devices.

## Technologies Used
- **Frontend:** React, HTML, CSS
- **Backend:** Django, Django REST Framework
- **Database:** SQLite (or any other database you choose)
- **Authentication:** JSON Web Tokens (JWT)
- **Payment Gateway:** PayPal

## Installation
### Prerequisites
- **Node.js** and **npm** installed on your machine.
- **Python** and **Django** installed.

### Clone the Repository
git clone https://github.com/yourusername/MakeMyTrip.git

<br>

## Snapshots 📷

1. Home Page

![Landing Page](https://github.com/shreevalikushe/Make-my-trip-clone/blob/master/frontend/src/images/landing.png)

2. Flights Page

![Flight Page](https://github.com/shreevalikushe/Make-my-trip-clone/blob/master/frontend/src/images/flights.png)

3. Hotels Page

![Hotel Page](https://github.com/shreevalikushe/Make-my-trip-clone/blob/master/frontend/src/images/hotels.png)

4. Login Popup Form

![Login](https://github.com/shreevalikushe/Make-my-trip-clone/blob/master/frontend/src/images/login.png)

## Usage
Open your browser and navigate to http://localhost:3000 to access the MakeMyTrip application.
Explore the various sections and use the search functionality to find travel options.
Log in or register to start booking.

## Requirements for backend
asgiref==3.8.1
Django==5.1
django-cors-headers==4.4.0
django-filter==24.3
djangorestframework==3.15.2
djangorestframework-simplejwt==5.3.1
PyJWT==2.9.0
rest-framework-simplejwt==0.0.2
sqlparse==0.5.1
tzdata==2024.1


## Package.json

Here is the `package.json` for the **New MakeMyTrip** project:

```json
{
  "name": "newmakemytrip",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.17.0",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "axios": "^1.7.4",
    "bootstrap": "^5.3.3",
    "react": "^18.3.1",
    "react-bootstrap": "^2.10.4",
    "react-datepicker": "^7.3.0",
    "react-dom": "^18.3.1",
    "react-router-dom": "^6.26.0",
    "react-scripts": "5.0.1",
    "web-vitals": "^2.1.4"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}
