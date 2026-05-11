import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { Hotel } from './src/models/hotel.models.js';
import { Room } from './src/models/room.models.js';
import { Package } from './src/models/package.models.js';
import { User } from './src/models/user.models.js';
import connectDB from './src/db/index.js';

dotenv.config({ path: './.env' });

const sampleHotels = [
  {
    name: 'Grand Taj Palace',
    description: 'A luxurious 5-star hotel with premium amenities, exceptional service, and stunning architecture. Experience royal hospitality in the heart of the city.',
    city: 'Mumbai',
    address: '123 Marine Drive, Mumbai, Maharashtra 400020',
    amenities: ['WiFi', 'Swimming Pool', 'Spa', 'Fine Dining Restaurant', 'Gym', 'Bar', 'Concierge', 'Room Service', 'Parking'],
    starRating: 5,
    images: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1582719508251-38ab359db457?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=2070&auto=format&fit=crop'
    ],
    currency: 'INR',
    rooms: [
      {
        type: 'Deluxe King Room',
        pricePerNight: 4500,
        maxOccupancy: 2,
        roomNumbers: [101, 102, 103, 104, 105],
        amenities: ['WiFi', 'AC', 'TV', 'Mini Bar', 'Balcony'],
        images: ['https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070&auto=format&fit=crop']
      },
      {
        type: 'Executive Suite',
        pricePerNight: 7500,
        maxOccupancy: 3,
        roomNumbers: [201, 202, 203],
        amenities: ['WiFi', 'AC', 'TV', 'Mini Bar', 'Living Area', 'Work Desk'],
        images: ['https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2070&auto=format&fit=crop']
      },
      {
        type: 'Presidential Suite',
        pricePerNight: 15000,
        maxOccupancy: 4,
        roomNumbers: [301, 302],
        amenities: ['WiFi', 'AC', 'TV', 'Mini Bar', 'Living Area', 'Dining Area', 'Jacuzzi', 'Butler Service'],
        images: ['https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=2074&auto=format&fit=crop']
      }
    ]
  },
  {
    name: 'Seaside Paradise Resort',
    description: 'Beautiful beachfront resort with stunning ocean views, private beach access, and world-class amenities. Perfect for a relaxing getaway.',
    city: 'Goa',
    address: '789 Baga Beach Road, North Goa, Goa 403516',
    amenities: ['Beach Access', 'Swimming Pool', 'Spa', 'Restaurant', 'Water Sports', 'Beach Bar', 'WiFi', 'Parking'],
    starRating: 4.5,
    images: [
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2080&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2070&auto=format&fit=crop'
    ],
    currency: 'INR',
    rooms: [
      {
        type: 'Beach View Room',
        pricePerNight: 3500,
        maxOccupancy: 2,
        roomNumbers: [101, 102, 103, 104, 105, 106],
        amenities: ['WiFi', 'AC', 'TV', 'Beach View', 'Balcony'],
        images: ['https://images.unsplash.com/photo-1596436889106-be35e843f974?q=80&w=2070&auto=format&fit=crop']
      },
      {
        type: 'Beach Villa',
        pricePerNight: 8500,
        maxOccupancy: 4,
        roomNumbers: [201, 202, 203],
        amenities: ['WiFi', 'AC', 'TV', 'Private Pool', 'Beach Access', 'Kitchenette'],
        images: ['https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2070&auto=format&fit=crop']
      }
    ]
  },
  {
    name: 'Heritage Grand Hotel',
    description: 'A blend of traditional architecture and modern luxury. Experience the rich cultural heritage with contemporary comfort.',
    city: 'Delhi',
    address: '456 Connaught Place, New Delhi, Delhi 110001',
    amenities: ['WiFi', 'Restaurant', 'Business Center', 'Gym', 'Spa', 'Parking', 'Concierge'],
    starRating: 4,
    images: [
      'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=2089&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2070&auto=format&fit=crop'
    ],
    currency: 'INR',
    rooms: [
      {
        type: 'Standard Room',
        pricePerNight: 3000,
        maxOccupancy: 2,
        roomNumbers: [101, 102, 103, 104, 105, 106, 107, 108],
        amenities: ['WiFi', 'AC', 'TV', 'Mini Bar'],
        images: ['https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070&auto=format&fit=crop']
      },
      {
        type: 'Deluxe Room',
        pricePerNight: 4500,
        maxOccupancy: 3,
        roomNumbers: [201, 202, 203, 204, 205],
        amenities: ['WiFi', 'AC', 'TV', 'Mini Bar', 'Work Desk'],
        images: ['https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2070&auto=format&fit=crop']
      },
      {
        type: 'Heritage Suite',
        pricePerNight: 8000,
        maxOccupancy: 4,
        roomNumbers: [301, 302],
        amenities: ['WiFi', 'AC', 'TV', 'Mini Bar', 'Living Area', 'Heritage Decor'],
        images: ['https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=2074&auto=format&fit=crop']
      }
    ]
  },
  {
    name: 'Mountain View Retreat',
    description: 'Cozy mountain lodge with breathtaking views, perfect for nature lovers and adventure seekers.',
    city: 'Manali',
    address: '101 Mall Road, Manali, Himachal Pradesh 175131',
    amenities: ['Mountain View', 'Fireplace', 'Hiking Trails', 'Restaurant', 'Free Parking', 'WiFi', 'Spa'],
    starRating: 3.5,
    images: [
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2080&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop'
    ],
    currency: 'INR',
    rooms: [
      {
        type: 'Mountain View Room',
        pricePerNight: 2500,
        maxOccupancy: 2,
        roomNumbers: [101, 102, 103, 104],
        amenities: ['WiFi', 'Heater', 'TV', 'Mountain View', 'Balcony'],
        images: ['https://images.unsplash.com/photo-1596436889106-be35e843f974?q=80&w=2070&auto=format&fit=crop']
      },
      {
        type: 'Cottage Suite',
        pricePerNight: 4500,
        maxOccupancy: 4,
        roomNumbers: [201, 202],
        amenities: ['WiFi', 'Heater', 'TV', 'Fireplace', 'Kitchenette', 'Mountain View'],
        images: ['https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2070&auto=format&fit=crop']
      }
    ]
  },
  {
    name: 'Royal Bengal Hotel',
    description: 'Modern luxury hotel in the heart of the city with panoramic views and exceptional service.',
    city: 'Kolkata',
    address: '234 Park Street, Kolkata, West Bengal 700016',
    amenities: ['City View', 'WiFi', 'Restaurant', 'Spa', 'Concierge', 'Gym', 'Bar', 'Parking'],
    starRating: 4,
    images: [
      'https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?q=80&w=2071&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=2089&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=2070&auto=format&fit=crop'
    ],
    currency: 'INR',
    rooms: [
      {
        type: 'City View Room',
        pricePerNight: 3500,
        maxOccupancy: 2,
        roomNumbers: [101, 102, 103, 104, 105],
        amenities: ['WiFi', 'AC', 'TV', 'City View', 'Mini Bar'],
        images: ['https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070&auto=format&fit=crop']
      },
      {
        type: 'Executive Room',
        pricePerNight: 5500,
        maxOccupancy: 3,
        roomNumbers: [201, 202, 203, 204],
        amenities: ['WiFi', 'AC', 'TV', 'Work Desk', 'Mini Bar', 'City View'],
        images: ['https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2070&auto=format&fit=crop']
      }
    ]
  },
  {
    name: 'Garden City Hotel',
    description: 'Serene hotel surrounded by lush gardens, offering a peaceful retreat in the bustling city.',
    city: 'Bangalore',
    address: '567 MG Road, Bangalore, Karnataka 560001',
    amenities: ['Garden View', 'WiFi', 'Restaurant', 'Swimming Pool', 'Gym', 'Spa', 'Parking'],
    starRating: 4,
    images: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2080&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2070&auto=format&fit=crop'
    ],
    currency: 'INR',
    rooms: [
      {
        type: 'Garden View Room',
        pricePerNight: 3200,
        maxOccupancy: 2,
        roomNumbers: [101, 102, 103, 104, 105, 106],
        amenities: ['WiFi', 'AC', 'TV', 'Garden View', 'Balcony'],
        images: ['https://images.unsplash.com/photo-1596436889106-be35e843f974?q=80&w=2070&auto=format&fit=crop']
      },
      {
        type: 'Deluxe Garden Suite',
        pricePerNight: 6000,
        maxOccupancy: 4,
        roomNumbers: [201, 202, 203],
        amenities: ['WiFi', 'AC', 'TV', 'Garden View', 'Living Area', 'Balcony'],
        images: ['https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2070&auto=format&fit=crop']
      }
    ]
  },
  {
    name: 'Pink City Palace',
    description: 'Heritage hotel showcasing the royal architecture and culture of Rajasthan with modern amenities.',
    city: 'Jaipur',
    address: '890 MI Road, Jaipur, Rajasthan 302001',
    amenities: ['Heritage Architecture', 'WiFi', 'Restaurant', 'Spa', 'Cultural Shows', 'Parking', 'Gym'],
    starRating: 4.5,
    images: [
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=2089&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1582719508251-38ab359db457?q=80&w=2070&auto=format&fit=crop'
    ],
    currency: 'INR',
    rooms: [
      {
        type: 'Heritage Room',
        pricePerNight: 4000,
        maxOccupancy: 2,
        roomNumbers: [101, 102, 103, 104, 105],
        amenities: ['WiFi', 'AC', 'TV', 'Heritage Decor', 'Mini Bar'],
        images: ['https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070&auto=format&fit=crop']
      },
      {
        type: 'Royal Suite',
        pricePerNight: 9000,
        maxOccupancy: 4,
        roomNumbers: [201, 202],
        amenities: ['WiFi', 'AC', 'TV', 'Royal Decor', 'Living Area', 'Butler Service'],
        images: ['https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=2074&auto=format&fit=crop']
      }
    ]
  },
  {
    name: 'Tech Hub Hotel',
    description: 'Modern business hotel designed for tech professionals and corporate travelers with high-speed internet and meeting facilities.',
    city: 'Hyderabad',
    address: '234 Hitech City, Hyderabad, Telangana 500081',
    amenities: ['High-Speed WiFi', 'Business Center', 'Meeting Rooms', 'Restaurant', 'Gym', 'Parking', 'Concierge'],
    starRating: 4,
    images: [
      'https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?q=80&w=2071&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop'
    ],
    currency: 'INR',
    rooms: [
      {
        type: 'Business Room',
        pricePerNight: 3800,
        maxOccupancy: 2,
        roomNumbers: [101, 102, 103, 104, 105, 106, 107, 108],
        amenities: ['High-Speed WiFi', 'AC', 'TV', 'Work Desk', 'Ergonomic Chair', 'Mini Bar'],
        images: ['https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2070&auto=format&fit=crop']
      },
      {
        type: 'Executive Suite',
        pricePerNight: 7000,
        maxOccupancy: 3,
        roomNumbers: [201, 202, 203],
        amenities: ['High-Speed WiFi', 'AC', 'TV', 'Work Desk', 'Meeting Area', 'Mini Bar'],
        images: ['https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=2074&auto=format&fit=crop']
      }
    ]
  }
];

const samplePackages = [
  {
    name: 'Golden Triangle Tour',
    description: 'Explore the iconic Golden Triangle covering Delhi, Agra, and Jaipur. Experience the rich history, culture, and architectural marvels of India.',
    destinations: ['Delhi', 'Agra', 'Jaipur'],
    duration: { days: 6, nights: 5 },
    price: 35000,
    images: [
      'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=2071&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=2089&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop'
    ],
    itinerary: [
      { day: 1, title: 'Arrival in Delhi', description: 'Arrive at Delhi airport, transfer to hotel. Evening free for leisure. Overnight stay in Delhi.' },
      { day: 2, title: 'Delhi Sightseeing', description: 'Full day tour of Delhi covering Red Fort, Jama Masjid, India Gate, Qutub Minar, and Lotus Temple.' },
      { day: 3, title: 'Delhi to Agra', description: 'Drive to Agra (4 hours). Visit the magnificent Taj Mahal and Agra Fort. Overnight stay in Agra.' },
      { day: 4, title: 'Agra to Jaipur', description: 'Drive to Jaipur via Fatehpur Sikri (5 hours). Evening free for shopping at local markets.' },
      { day: 5, title: 'Jaipur Sightseeing', description: 'Visit Amber Fort, City Palace, Jantar Mantar, and Hawa Mahal. Experience local culture and cuisine.' },
      { day: 6, title: 'Departure', description: 'After breakfast, transfer to airport for departure with beautiful memories.' }
    ]
  },
  {
    name: 'Goa Beach Paradise',
    description: 'Relax and rejuvenate in the beautiful beaches of Goa. Enjoy water sports, nightlife, and delicious seafood.',
    destinations: ['North Goa', 'South Goa'],
    duration: { days: 5, nights: 4 },
    price: 25000,
    images: [
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2080&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2070&auto=format&fit=crop'
    ],
    itinerary: [
      { day: 1, title: 'Arrival in Goa', description: 'Arrive at Goa airport, transfer to beach resort. Evening free to relax on the beach.' },
      { day: 2, title: 'North Goa Exploration', description: 'Visit Baga Beach, Calangute Beach, and Anjuna Beach. Enjoy water sports and beach activities.' },
      { day: 3, title: 'South Goa Tour', description: 'Explore Colva Beach, Palolem Beach, and visit Old Goa churches. Experience Portuguese heritage.' },
      { day: 4, title: 'Adventure Activities', description: 'Enjoy water sports, dolphin watching, and sunset cruise. Evening party at beach shacks.' },
      { day: 5, title: 'Departure', description: 'After breakfast, transfer to airport with unforgettable memories of Goa.' }
    ]
  },
  {
    name: 'Kerala Backwaters & Hills',
    description: 'Experience the serene backwaters, lush green hills, and rich culture of God\'s Own Country.',
    destinations: ['Kochi', 'Munnar', 'Alleppey'],
    duration: { days: 7, nights: 6 },
    price: 40000,
    images: [
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2080&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop'
    ],
    itinerary: [
      { day: 1, title: 'Arrival in Kochi', description: 'Arrive at Kochi airport, transfer to hotel. Evening visit to Fort Kochi and Chinese fishing nets.' },
      { day: 2, title: 'Kochi to Munnar', description: 'Drive to Munnar (4 hours) through tea plantations. Check-in at hill resort. Evening free.' },
      { day: 3, title: 'Munnar Sightseeing', description: 'Visit tea gardens, Eravikulam National Park, Mattupetty Dam, and Echo Point.' },
      { day: 4, title: 'Munnar to Alleppey', description: 'Drive to Alleppey (5 hours). Check-in at houseboat for overnight stay in backwaters.' },
      { day: 5, title: 'Backwater Cruise', description: 'Full day cruise through backwaters, visiting local villages and paddy fields. Overnight on houseboat.' },
      { day: 6, title: 'Alleppey to Kochi', description: 'Return to Kochi. Visit Jewish Synagogue, Dutch Palace, and spice markets.' },
      { day: 7, title: 'Departure', description: 'After breakfast, transfer to airport for departure.' }
    ]
  },
  {
    name: 'Himachal Hill Station Tour',
    description: 'Explore the beautiful hill stations of Himachal Pradesh - Manali, Shimla, and Dharamshala.',
    destinations: ['Shimla', 'Manali', 'Dharamshala'],
    duration: { days: 8, nights: 7 },
    price: 45000,
    images: [
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2080&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop'
    ],
    itinerary: [
      { day: 1, title: 'Arrival in Shimla', description: 'Arrive at Shimla, transfer to hotel. Evening walk on Mall Road. Overnight stay.' },
      { day: 2, title: 'Shimla Sightseeing', description: 'Visit Jakhu Temple, Kufri, Christ Church, and Viceregal Lodge. Enjoy toy train ride.' },
      { day: 3, title: 'Shimla to Manali', description: 'Drive to Manali (8 hours) through scenic routes. Check-in at hotel. Evening free.' },
      { day: 4, title: 'Manali Local', description: 'Visit Hadimba Temple, Vashisht Hot Springs, Old Manali, and Manu Temple.' },
      { day: 5, title: 'Solang Valley', description: 'Day trip to Solang Valley for adventure activities like paragliding, zorbing, and skiing.' },
      { day: 6, title: 'Manali to Dharamshala', description: 'Drive to Dharamshala (6 hours). Visit McLeod Ganj and Tibetan markets.' },
      { day: 7, title: 'Dharamshala Sightseeing', description: 'Visit Dalai Lama Temple, Bhagsunath Temple, and enjoy trekking in the hills.' },
      { day: 8, title: 'Departure', description: 'After breakfast, transfer to airport for departure.' }
    ]
  },
  {
    name: 'Rajasthan Royal Experience',
    description: 'Discover the royal heritage of Rajasthan visiting Jaipur, Udaipur, Jodhpur, and Jaisalmer.',
    destinations: ['Jaipur', 'Udaipur', 'Jodhpur', 'Jaisalmer'],
    duration: { days: 10, nights: 9 },
    price: 55000,
    images: [
      'https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=2089&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1582719508251-38ab359db457?q=80&w=2070&auto=format&fit=crop'
    ],
    itinerary: [
      { day: 1, title: 'Arrival in Jaipur', description: 'Arrive at Jaipur, transfer to hotel. Evening visit to Hawa Mahal and local markets.' },
      { day: 2, title: 'Jaipur Sightseeing', description: 'Visit Amber Fort, City Palace, Jantar Mantar, and enjoy elephant ride.' },
      { day: 3, title: 'Jaipur to Udaipur', description: 'Drive to Udaipur (6 hours). Evening boat ride on Lake Pichola.' },
      { day: 4, title: 'Udaipur Exploration', description: 'Visit City Palace, Jagdish Temple, Saheliyon ki Bari, and enjoy cultural show.' },
      { day: 5, title: 'Udaipur to Jodhpur', description: 'Drive to Jodhpur (4 hours). Visit Mehrangarh Fort and Jaswant Thada.' },
      { day: 6, title: 'Jodhpur to Jaisalmer', description: 'Drive to Jaisalmer (5 hours). Evening camel safari in Thar Desert.' },
      { day: 7, title: 'Jaisalmer Fort', description: 'Visit Jaisalmer Fort, Patwon ki Haveli, and enjoy desert camping with cultural program.' },
      { day: 8, title: 'Desert Safari', description: 'Full day desert safari, camel ride, and overnight stay in desert camp.' },
      { day: 9, title: 'Return to Jodhpur', description: 'Return to Jodhpur. Visit Umaid Bhawan Palace and local markets.' },
      { day: 10, title: 'Departure', description: 'After breakfast, transfer to airport for departure.' }
    ]
  },
  {
    name: 'Mumbai & Pune City Tour',
    description: 'Explore the vibrant cities of Mumbai and Pune, experiencing the blend of modernity and tradition.',
    destinations: ['Mumbai', 'Pune'],
    duration: { days: 5, nights: 4 },
    price: 28000,
    images: [
      'https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?q=80&w=2071&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop'
    ],
    itinerary: [
      { day: 1, title: 'Arrival in Mumbai', description: 'Arrive at Mumbai airport, transfer to hotel. Evening visit to Marine Drive and Gateway of India.' },
      { day: 2, title: 'Mumbai Sightseeing', description: 'Visit Elephanta Caves, Chhatrapati Shivaji Terminus, Haji Ali Dargah, and enjoy local street food.' },
      { day: 3, title: 'Mumbai to Pune', description: 'Drive to Pune (3 hours). Visit Shaniwar Wada, Aga Khan Palace, and Osho Ashram.' },
      { day: 4, title: 'Pune Exploration', description: 'Visit Sinhagad Fort, Pataleshwar Caves, and enjoy shopping at local markets.' },
      { day: 5, title: 'Departure', description: 'After breakfast, transfer to Mumbai airport for departure.' }
    ]
  }
];

async function seedDatabase() {
  try {
    // Connect to MongoDB
    await connectDB();
    console.log('✓ Connected to MongoDB');

    // Find or create admin user
    let adminUser = await User.findOne({ role: 'admin' });
    if (!adminUser) {
      console.log('Creating admin user...');
      adminUser = await User.create({
        fullName: 'Admin User',
        age: 30,
        gender: 'Male',
        username: 'admin',
        email: 'admin@smartstay.com',
        password: 'Admin@123', // Will be hashed by pre-save hook
        role: 'admin',
        verification: {
          status: 'Verified'
        }
      });
      console.log('✓ Admin user created');
    } else {
      console.log('✓ Using existing admin user');
    }

    const adminId = adminUser._id;

    // Clear existing data
    console.log('\nClearing existing data...');
    await Hotel.deleteMany({});
    await Room.deleteMany({});
    await Package.deleteMany({});
    console.log('✓ Cleared existing hotels, rooms, and packages');

    // Seed hotels with rooms
    console.log('\nSeeding hotels and rooms...');
    const insertedHotels = [];

    for (const hotelData of sampleHotels) {
      const { rooms, ...hotelInfo } = hotelData;
      const hotel = await Hotel.create({
        ...hotelInfo,
        adminId
      });

      // Create rooms for this hotel
      const createdRooms = [];
      for (const roomData of rooms) {
        const room = await Room.create({
          ...roomData,
          hotelId: hotel._id,
          status: 'Available'
        });
        createdRooms.push(room._id);
      }

      // Update hotel with room references
      hotel.rooms = createdRooms;
      await hotel.save();

      insertedHotels.push(hotel);
      console.log(`  ✓ Created hotel: ${hotel.name} with ${createdRooms.length} rooms`);
    }

    console.log(`\n✓ Inserted ${insertedHotels.length} hotels`);

    // Seed packages
    console.log('\nSeeding packages...');
    const insertedPackages = [];

    for (const packageData of samplePackages) {
      const travelPackage = await Package.create({
        ...packageData,
        createdBy: adminId
      });
      insertedPackages.push(travelPackage);
      console.log(`  ✓ Created package: ${travelPackage.name}`);
    }

    console.log(`\n✓ Inserted ${insertedPackages.length} packages`);

    // Display summary
    console.log('\n' + '='.repeat(60));
    console.log('DATABASE SEEDING SUMMARY');
    console.log('='.repeat(60));

    const cities = [...new Set(insertedHotels.map(hotel => hotel.city))];
    console.log(`\nHotels: ${insertedHotels.length}`);
    console.log(`Cities: ${cities.join(', ')}`);

    const totalRooms = await Room.countDocuments();
    console.log(`Total Rooms: ${totalRooms}`);

    console.log(`\nPackages: ${insertedPackages.length}`);
    const allDestinations = [...new Set(insertedPackages.flatMap(pkg => pkg.destinations))];
    console.log(`Destinations: ${allDestinations.join(', ')}`);

    console.log('\n✓ Database seeded successfully!');
    console.log('='.repeat(60));

    process.exit(0);
  } catch (error) {
    console.error('\n✗ Error seeding database:', error);
    process.exit(1);
  }
}

// Run the seed function
seedDatabase();