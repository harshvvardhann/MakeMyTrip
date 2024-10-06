const trainsData=[
    {
      "name": "Rajdhani Express",
      "departureTime": "06:10",
      "departureDay": "Monday",
      "departureStation": "New Delhi",
      "departureCode": "NDLS",
      "arrivalTime": "18:25",
      "arrivalDay": "Monday",
      "arrivalStation": "Kanpur Central",
      "arrivalCode": "CNB",
      "travelTime": "12h 15m",
      "acSeatNumber": "A1-21",
      "acCoachNumber": "A1",
      "acPrice": 2500,
      "nonAcSeatNumber": "S1-43",
      "nonAcCoachNumber": "S1",
      "nonAcPrice": 1500,
      "sleeperSeatNumber": "SL-5",
      "sleeperCoachNumber": "SL",
      "sleeperPrice": 800,
      "availability": "Available",
      "route": ["New Delhi", "Aligarh", "Tundla", "Kanpur Central"],
      "image": "https://th.bing.com/th/id/OIP.QR-HNrnTN_H9iqYYI6jOJAHaEK?w=326&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7"
    },
    {
      "name": "Shatabdi Express",
      "departureTime": "07:00",
      "departureDay": "Wednesday",
      "departureStation": "Mumbai Central",
      "departureCode": "BCT",
      "arrivalTime": "12:30",
      "arrivalDay": "Wednesday",
      "arrivalStation": "Ahmedabad Junction",
      "arrivalCode": "ADI",
      "travelTime": "5h 30m",
      "acSeatNumber": "C1-14",
      "acCoachNumber": "C1",
      "acPrice": 2200,
      "nonAcSeatNumber": "S2-35",
      "nonAcCoachNumber": "S2",
      "nonAcPrice": 1400,
      "sleeperSeatNumber": "SL-12",
      "sleeperCoachNumber": "SL",
      "sleeperPrice": 750,
      "availability": "Available",
      "route": ["Mumbai Central", "Surat", "Vadodara", "Ahmedabad"],
      "image": "https://th.bing.com/th/id/OIP.YgelQgb3X-HLVlips4Kt2AHaE6?w=254&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
    },
    {
      "name": "Duronto Express",
      "departureTime": "08:30",
      "departureDay": "Thursday",
      "departureStation": "Sealdah",
      "departureCode": "SDAH",
      "arrivalTime": "20:45",
      "arrivalDay": "Thursday",
      "arrivalStation": "Bhubaneswar",
      "arrivalCode": "BBS",
      "travelTime": "12h 15m",
      "acSeatNumber": "B1-16",
      "acCoachNumber": "B1",
      "acPrice": 2800,
      "nonAcSeatNumber": "S3-27",
      "nonAcCoachNumber": "S3",
      "nonAcPrice": 1700,
      "sleeperSeatNumber": "SL-7",
      "sleeperCoachNumber": "SL",
      "sleeperPrice": 900,
      "availability": "Waitlisted",
      "route": ["Sealdah", "Kharagpur", "Cuttack", "Bhubaneswar"],
      "image": "https://th.bing.com/th/id/OIP.l-hjk8r04Gfji2f8gF5dDgHaEY?w=260&h=169&c=7&r=0&o=5&dpr=1.3&pid=1.7"
    },
    {
      "name": "Garib Rath",
      "departureTime": "22:10",
      "departureDay": "Friday",
      "departureStation": "Yeshwantpur",
      "departureCode": "YPR",
      "arrivalTime": "07:45",
      "arrivalDay": "Saturday",
      "arrivalStation": "Kochi",
      "arrivalCode": "ERS",
      "travelTime": "9h 35m",
      "acSeatNumber": "A2-19",
      "acCoachNumber": "A2",
      "acPrice": 1800,
      "nonAcSeatNumber": "S5-55",
      "nonAcCoachNumber": "S5",
      "nonAcPrice": 1000,
      "sleeperSeatNumber": "SL-23",
      "sleeperCoachNumber": "SL",
      "sleeperPrice": 600,
      "availability": "Available",
      "route": ["Yeshwantpur", "Erode", "Coimbatore", "Kochi"],
      "image": "https://th.bing.com/th/id/OIP.MjfxwvMQrk4VQqGB6LPYkwHaEK?w=263&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7"
    },
    {
      "name": "Jan Shatabdi Express",
      "departureTime": "05:45",
      "departureDay": "Sunday",
      "departureStation": "Howrah",
      "departureCode": "HWH",
      "arrivalTime": "12:10",
      "arrivalDay": "Sunday",
      "arrivalStation": "Puri",
      "arrivalCode": "PURI",
      "travelTime": "6h 25m",
      "acSeatNumber": "C3-09",
      "acCoachNumber": "C3",
      "acPrice": 1300,
      "nonAcSeatNumber": "S8-88",
      "nonAcCoachNumber": "S8",
      "nonAcPrice": 700,
      "sleeperSeatNumber": "SL-9",
      "sleeperCoachNumber": "SL",
      "sleeperPrice": 450,
      "availability": "Available",
      "route": ["Howrah", "Kharagpur", "Balasore", "Puri"],
      "image": "https://th.bing.com/th/id/OIP.vuk7CbVx86--PQ01KX2uTAHaEK?w=276&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
    },
    {
      "name": "Vande Bharat Express",
      "departureTime": "06:00",
      "departureDay": "Tuesday",
      "departureStation": "Chennai Central",
      "departureCode": "MAS",
      "arrivalTime": "12:45",
      "arrivalDay": "Tuesday",
      "arrivalStation": "Bangalore City",
      "arrivalCode": "SBC",
      "travelTime": "6h 45m",
      "acSeatNumber": "A1-31",
      "acCoachNumber": "A1",
      "acPrice": 2400,
      "nonAcSeatNumber": "S4-24",
      "nonAcCoachNumber": "S4",
      "nonAcPrice": 1600,
      "sleeperSeatNumber": "SL-15",
      "sleeperCoachNumber": "SL",
      "sleeperPrice": 850,
      "availability": "Waitlisted",
      "route": ["Chennai Central", "Katpadi", "Jolarpettai", "Bangalore City"],
      "image": "https://th.bing.com/th/id/OIP.ceSGfExNJavpBjCMl676uwHaEK?w=276&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
    },
    {
      "name": "Humsafar Express",
      "departureTime": "23:30",
      "departureDay": "Thursday",
      "departureStation": "Guwahati",
      "departureCode": "GHY",
      "arrivalTime": "09:15",
      "arrivalDay": "Friday",
      "arrivalStation": "Dimapur",
      "arrivalCode": "DMV",
      "travelTime": "9h 45m",
      "acSeatNumber": "B2-11",
      "acCoachNumber": "B2",
      "acPrice": 2100,
      "nonAcSeatNumber": "S9-72",
      "nonAcCoachNumber": "S9",
      "nonAcPrice": 1100,
      "sleeperSeatNumber": "SL-18",
      "sleeperCoachNumber": "SL",
      "sleeperPrice": 600,
      "availability": "Available",
      "route": ["Guwahati", "Lumding", "Diphu", "Dimapur"],
      "image": "https://th.bing.com/th/id/OIP.IYuFylaQ2843qn7bpPxgmAHaE8?w=286&h=191&c=7&r=0&o=5&dpr=1.3&pid=1.7"
    },
    {
      "name": "Karnataka Express",
      "departureTime": "20:20",
      "departureDay": "Wednesday",
      "departureStation": "Bangalore City",
      "departureCode": "SBC",
      "arrivalTime": "13:35",
      "arrivalDay": "Thursday",
      "arrivalStation": "New Delhi",
      "arrivalCode": "NDLS",
      "travelTime": "17h 15m",
      "acSeatNumber": "A3-06",
      "acCoachNumber": "A3",
      "acPrice": 3200,
      "nonAcSeatNumber": "S6-18",
      "nonAcCoachNumber": "S6",
      "nonAcPrice": 1900,
      "sleeperSeatNumber": "SL-14",
      "sleeperCoachNumber": "SL",
      "sleeperPrice": 950,
      "availability": "Available",
      "route": ["Bangalore City", "Nagpur", "Bhopal", "New Delhi"],
      "image": "https://th.bing.com/th/id/OIP.u4Oi6DPbFNxast_94-p8xwHaE8?w=269&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
    },
    {
      "name": "Sampark Kranti Express",
      "departureTime": "11:45",
      "departureDay": "Saturday",
      "departureStation": "Hazrat Nizamuddin",
      "departureCode": "NZM",
      "arrivalTime": "08:30",
      "arrivalDay": "Sunday",
      "arrivalStation": "Goa Madgaon",
      "arrivalCode": "MAO",
      "travelTime": "20h 45m",
      "acSeatNumber": "A4-10",
      "acCoachNumber": "A4",
      "acPrice": 3400,
      "nonAcSeatNumber": "S7-32",
      "nonAcCoachNumber": "S7",
      "nonAcPrice": 1800,
      "sleeperSeatNumber": "SL-22",
      "sleeperCoachNumber": "SL",
      "sleeperPrice": 950,
      "availability": "Waitlisted",
      "route": ["Hazrat Nizamuddin", "Kota", "Pune", "Goa Madgaon"],
      "image": "https://th.bing.com/th/id/OIP.g0UOJTYlGL050rQkGl1SHAHaE8?w=221&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
    },
    {
      "name": "Tejas Express",
      "departureTime": "16:45",
      "departureDay": "Monday",
      "departureStation": "Mumbai Central",
      "departureCode": "BCT",
      "arrivalTime": "22:55",
      "arrivalDay": "Monday",
      "arrivalStation": "Surat",
      "arrivalCode": "ST",
      "travelTime": "6h 10m",
      "acSeatNumber": "C5-22",
      "acCoachNumber": "C5",
      "acPrice": 2700,
      "nonAcSeatNumber": "S3-51",
      "nonAcCoachNumber": "S3",
      "nonAcPrice": 1500,
      "sleeperSeatNumber": "SL-30",
      "sleeperCoachNumber": "SL",
      "sleeperPrice": 900,
      "availability": "Available",
      "route": ["Mumbai Central", "Vapi", "Valsad", "Surat"],
      "image": "https://th.bing.com/th/id/OIP.fEgeNsri47Cvdsfe8-x2QwHaHa?w=129&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
    },
    {
      "name": "Howrah Mail",
      "departureTime": "22:15",
      "departureDay": "Wednesday",
      "departureStation": "Chennai Central",
      "departureCode": "MAS",
      "arrivalTime": "07:25",
      "arrivalDay": "Thursday",
      "arrivalStation": "Howrah",
      "arrivalCode": "HWH",
      "travelTime": "9h 10m",
      "acSeatNumber": "A2-05",
      "acCoachNumber": "A2",
      "acPrice": 2300,
      "nonAcSeatNumber": "S8-38",
      "nonAcCoachNumber": "S8",
      "nonAcPrice": 1300,
      "sleeperSeatNumber": "SL-28",
      "sleeperCoachNumber": "SL",
      "sleeperPrice": 700,
      "availability": "Available",
      "route": ["Chennai Central", "Vijayawada", "Bhubaneswar", "Howrah"],
      "image": "https://th.bing.com/th/id/OIP.HwIrM94jSNFHKGIR-WwoRQHaD3?w=333&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
    },
    {
      "name": "Mandovi Express",
      "departureTime": "06:55",
      "departureDay": "Thursday",
      "departureStation": "Chhatrapati Shivaji Maharaj Terminus",
      "departureCode": "CSMT",
      "arrivalTime": "19:45",
      "arrivalDay": "Thursday",
      "arrivalStation": "Goa Madgaon",
      "arrivalCode": "MAO",
      "travelTime": "12h 50m",
      "acSeatNumber": "B4-23",
      "acCoachNumber": "B4",
      "acPrice": 2500,
      "nonAcSeatNumber": "S4-49",
      "nonAcCoachNumber": "S4",
      "nonAcPrice": 1600,
      "sleeperSeatNumber": "SL-13",
      "sleeperCoachNumber": "SL",
      "sleeperPrice": 800,
      "availability": "Waitlisted",
      "route": ["Chhatrapati Shivaji Maharaj Terminus", "Ratnagiri", "Kudal", "Goa Madgaon"],
      "image": "https://th.bing.com/th?q=Beautiful+Railway+Station+in+India&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247"
    },
    {
        "name": "Gatimaan Express",
        "departureTime": "08:10",
        "departureDay": "Tuesday",
        "departureStation": "New Delhi",
        "departureCode": "NDLS",
        "arrivalTime": "09:50",
        "arrivalDay": "Tuesday",
        "arrivalStation": "Agra Cantt",
        "arrivalCode": "AGC",
        "travelTime": "1h 40m",
        "acSeatNumber": "C1-12",
        "acCoachNumber": "C1",
        "acPrice": 1600,
        "nonAcSeatNumber": "S2-32",
        "nonAcCoachNumber": "S2",
        "nonAcPrice": 900,
        "sleeperSeatNumber": "SL-5",
        "sleeperCoachNumber": "SL",
        "sleeperPrice": 600,
        "availability": "Available",
        "route": ["New Delhi", "Agra Cantt"],
        "image": "https://th.bing.com/th?q=Indian+Railway+Station+Platform&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247"
      },
      {
        "name": "Konark Express",
        "departureTime": "15:05",
        "departureDay": "Monday",
        "departureStation": "Bhubaneswar",
        "departureCode": "BBS",
        "arrivalTime": "11:45",
        "arrivalDay": "Tuesday",
        "arrivalStation": "Mumbai CST",
        "arrivalCode": "CSTM",
        "travelTime": "20h 40m",
        "acSeatNumber": "A2-22",
        "acCoachNumber": "A2",
        "acPrice": 2700,
        "nonAcSeatNumber": "S4-58",
        "nonAcCoachNumber": "S4",
        "nonAcPrice": 1500,
        "sleeperSeatNumber": "SL-8",
        "sleeperCoachNumber": "SL",
        "sleeperPrice": 850,
        "availability": "Waitlisted",
        "route": ["Bhubaneswar", "Vizianagaram", "Nagpur", "Mumbai CST"],
        "image": "https://th.bing.com/th/id/OIP.-7W-CDUJ9bUOkiFr_AG_QgHaEn?w=253&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
      },
      {
        "name": "Coromandel Express",
        "departureTime": "07:05",
        "departureDay": "Friday",
        "departureStation": "Chennai Central",
        "departureCode": "MAS",
        "arrivalTime": "05:30",
        "arrivalDay": "Saturday",
        "arrivalStation": "Howrah",
        "arrivalCode": "HWH",
        "travelTime": "22h 25m",
        "acSeatNumber": "A1-18",
        "acCoachNumber": "A1",
        "acPrice": 2800,
        "nonAcSeatNumber": "S2-41",
        "nonAcCoachNumber": "S2",
        "nonAcPrice": 1500,
        "sleeperSeatNumber": "SL-19",
        "sleeperCoachNumber": "SL",
        "sleeperPrice": 900,
        "availability": "Available",
        "route": ["Chennai Central", "Vijayawada", "Visakhapatnam", "Howrah"],
        "image": "https://th.bing.com/th/id/OIP.Fq1BGRnoD70358vhVrBj9QHaEp?w=294&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7"
      },
      {
        "name": "Mysuru Express",
        "departureTime": "21:30",
        "departureDay": "Saturday",
        "departureStation": "Bangalore City",
        "departureCode": "SBC",
        "arrivalTime": "04:45",
        "arrivalDay": "Sunday",
        "arrivalStation": "Mysuru Junction",
        "arrivalCode": "MYS",
        "travelTime": "7h 15m",
        "acSeatNumber": "A3-25",
        "acCoachNumber": "A3",
        "acPrice": 1700,
        "nonAcSeatNumber": "S7-53",
        "nonAcCoachNumber": "S7",
        "nonAcPrice": 900,
        "sleeperSeatNumber": "SL-6",
        "sleeperCoachNumber": "SL",
        "sleeperPrice": 500,
        "availability": "Available",
        "route": ["Bangalore City", "Mandya", "Channapatna", "Mysuru"],
        "image": "https://th.bing.com/th/id/OIP.3nkfk4UBhwXxpYrbBhWGNQHaES?w=259&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
      },
      {
        "name": "Punjab Mail",
        "departureTime": "17:40",
        "departureDay": "Sunday",
        "departureStation": "Mumbai CST",
        "departureCode": "CSTM",
        "arrivalTime": "19:10",
        "arrivalDay": "Monday",
        "arrivalStation": "Firozpur Cantonment",
        "arrivalCode": "FZR",
        "travelTime": "25h 30m",
        "acSeatNumber": "A4-21",
        "acCoachNumber": "A4",
        "acPrice": 3200,
        "nonAcSeatNumber": "S3-56",
        "nonAcCoachNumber": "S3",
        "nonAcPrice": 1700,
        "sleeperSeatNumber": "SL-12",
        "sleeperCoachNumber": "SL",
        "sleeperPrice": 950,
        "availability": "Available",
        "route": ["Mumbai CST", "Vadodara", "Ambala Cantt", "Firozpur Cantonment"],
        "image": "https://th.bing.com/th/id/OIP.gmI7nECdjbkzB7IiquNGuAHaE6?w=252&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
      },
      {
        "name": "Goa Express",
        "departureTime": "15:45",
        "departureDay": "Tuesday",
        "departureStation": "Vasco da Gama",
        "departureCode": "VSG",
        "arrivalTime": "19:20",
        "arrivalDay": "Wednesday",
        "arrivalStation": "Hazrat Nizamuddin",
        "arrivalCode": "NZM",
        "travelTime": "27h 35m",
        "acSeatNumber": "A1-17",
        "acCoachNumber": "A1",
        "acPrice": 3100,
        "nonAcSeatNumber": "S9-68",
        "nonAcCoachNumber": "S9",
        "nonAcPrice": 1800,
        "sleeperSeatNumber": "SL-21",
        "sleeperCoachNumber": "SL",
        "sleeperPrice": 950,
        "availability": "Waitlisted",
        "route": ["Vasco da Gama", "Londa", "Pune", "Hazrat Nizamuddin"],
        "image": "https://th.bing.com/th/id/OIP.xa8vTZ-NgDyRwTSE_cpcjwHaEK?w=257&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
      },
      {
        "name": "Gorakhpur Express",
        "departureTime": "05:20",
        "departureDay": "Thursday",
        "departureStation": "Lucknow",
        "departureCode": "LKO",
        "arrivalTime": "09:30",
        "arrivalDay": "Thursday",
        "arrivalStation": "Gorakhpur",
        "arrivalCode": "GKP",
        "travelTime": "4h 10m",
        "acSeatNumber": "B3-28",
        "acCoachNumber": "B3",
        "acPrice": 1200,
        "nonAcSeatNumber": "S2-39",
        "nonAcCoachNumber": "S2",
        "nonAcPrice": 600,
        "sleeperSeatNumber": "SL-3",
        "sleeperCoachNumber": "SL",
        "sleeperPrice": 400,
        "availability": "Available",
        "route": ["Lucknow", "Barabanki", "Basti", "Gorakhpur"],
        "image": "https://th.bing.com/th/id/OIP.sPOxOPuB2-C2M7PAve8anwHaFj?w=228&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7"
      },
      {
        "name": "Ajmer Shatabdi",
        "departureTime": "06:05",
        "departureDay": "Friday",
        "departureStation": "Delhi Sarai Rohilla",
        "departureCode": "DEE",
        "arrivalTime": "12:45",
        "arrivalDay": "Friday",
        "arrivalStation": "Ajmer Junction",
        "arrivalCode": "AII",
        "travelTime": "6h 40m",
        "acSeatNumber": "C2-14",
        "acCoachNumber": "C2",
        "acPrice": 1900,
        "nonAcSeatNumber": "S4-41",
        "nonAcCoachNumber": "S4",
        "nonAcPrice": 1100,
        "sleeperSeatNumber": "SL-8",
        "sleeperCoachNumber": "SL",
        "sleeperPrice": 700,
        "availability": "Available",
        "route": ["Delhi Sarai Rohilla", "Gurgaon", "Jaipur", "Ajmer Junction"],
        "image": "https://th.bing.com/th/id/OIP.WNZYt2Uu8GHxBFro15-rdQAAAA?w=189&h=189&c=7&r=0&o=5&dpr=1.3&pid=1.7"
      }
  ]

export default trainsData;