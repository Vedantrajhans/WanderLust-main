const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and the sound of waves from your private deck.",
    image: {
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?w=800",
      filename: "listingimage",
    },
    price: 1500,
    location: "Malibu, California",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-118.7798, 34.0259],
    },
    reviews: [],
  },
  {
    title: "Modern Loft in Downtown",
    description:
      "Stay in the heart of the city in this sleek and modern loft apartment. Perfect for exploring nearby restaurants, shops, and cultural attractions.",
    image: {
      url: "https://images.unsplash.com/photo-1501183638710-841dd1904471?w=800",
      filename: "listingimage",
    },
    price: 2500,
    location: "New York City, New York",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-74.006, 40.7128],
    },
    reviews: [],
  },
  {
    title: "Mountain View Cabin",
    description:
      "Unplug and unwind in this cozy mountain cabin. Surrounded by nature, it's the perfect spot for hiking and enjoying the great outdoors.",
    image: {
      url: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=800",
      filename: "listingimage",
    },
    price: 1000,
    location: "Manali, Himachal Pradesh",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [77.1892, 32.2396],
    },
    reviews: [],
  },
  {
    title: "Lakefront Paradise",
    description:
      "Wake up to serene lake views in this beautiful waterfront property. Ideal for kayaking, fishing, and sunset watching.",
    image: {
      url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=800",
      filename: "listingimage",
    },
    price: 3500,
    location: "Nainital, Uttarakhand",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [79.4636, 29.3919],
    },
    reviews: [],
  },
  {
    title: "Royal Heritage Haveli",
    description:
      "Experience the grandeur of Rajasthani royalty in this beautifully restored haveli. Features intricate mirror work, courtyards, and rooftop dining.",
    image: {
      url: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800",
      filename: "listingimage",
    },
    price: 4500,
    location: "Udaipur, Rajasthan",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [73.6833, 24.5854],
    },
    reviews: [],
  },
  {
    title: "Tropical Villa in Bali",
    description:
      "Relax in this stunning tropical villa with a private infinity pool overlooking lush rice terraces. Pure paradise.",
    image: {
      url: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800",
      filename: "listingimage",
    },
    price: 5000,
    location: "Ubud, Bali",
    country: "Indonesia",
    geometry: {
      type: "Point",
      coordinates: [115.2625, -8.5069],
    },
    reviews: [],
  },
  {
    title: "Charming Parisian Apartment",
    description:
      "Live like a local in this elegant Parisian apartment. Walking distance to the Eiffel Tower, cafés, and art galleries.",
    image: {
      url: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800",
      filename: "listingimage",
    },
    price: 3000,
    location: "Paris",
    country: "France",
    geometry: {
      type: "Point",
      coordinates: [2.3522, 48.8566],
    },
    reviews: [],
  },
  {
    title: "Houseboat in Kerala Backwaters",
    description:
      "Cruise through the tranquil Kerala backwaters in this traditional houseboat. Includes a personal chef and guided tour.",
    image: {
      url: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800",
      filename: "listingimage",
    },
    price: 2000,
    location: "Alleppey, Kerala",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [76.3388, 9.4981],
    },
    reviews: [],
  },
  {
    title: "Desert Camp Experience",
    description:
      "Spend a night under the stars in a luxury desert camp. Includes camel rides, folk music, and traditional Rajasthani dinner.",
    image: {
      url: "https://images.unsplash.com/photo-1542401886-65d6c61db217?w=800",
      filename: "listingimage",
    },
    price: 1800,
    location: "Jaisalmer, Rajasthan",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [70.9083, 26.9157],
    },
    reviews: [],
  },
  {
    title: "Santorini Cave House",
    description:
      "Stay in a traditional cave house carved into the cliffs of Santorini. Breathtaking sunset views over the caldera included.",
    image: {
      url: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800",
      filename: "listingimage",
    },
    price: 6000,
    location: "Oia, Santorini",
    country: "Greece",
    geometry: {
      type: "Point",
      coordinates: [25.3753, 36.4618],
    },
    reviews: [],
  },
  {
    title: "Swiss Alpine Chalet",
    description:
      "Cozy up in this traditional Swiss chalet with panoramic views of the Alps. Perfect for skiing in winter and hiking in summer.",
    image: {
      url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800",
      filename: "listingimage",
    },
    price: 7000,
    location: "Zermatt",
    country: "Switzerland",
    geometry: {
      type: "Point",
      coordinates: [7.7491, 46.0207],
    },
    reviews: [],
  },
  {
    title: "Tea Garden Bungalow",
    description:
      "Wake up to misty mountain views surrounded by rolling tea gardens. A peaceful retreat in the hills of Darjeeling.",
    image: {
      url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
      filename: "listingimage",
    },
    price: 1200,
    location: "Darjeeling, West Bengal",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [88.2627, 27.041],
    },
    reviews: [],
  },
  {
    title: "Tokyo Capsule Experience",
    description:
      "Experience the unique Japanese capsule hotel concept in modern Tokyo. Clean, efficient, and right in the heart of Shibuya.",
    image: {
      url: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800",
      filename: "listingimage",
    },
    price: 800,
    location: "Shibuya, Tokyo",
    country: "Japan",
    geometry: {
      type: "Point",
      coordinates: [139.7016, 35.6595],
    },
    reviews: [],
  },
  {
    title: "Treehouse Hideaway",
    description:
      "Live your childhood dream in this magical treehouse nestled among ancient trees. Complete with a rope bridge and forest views.",
    image: {
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800",
      filename: "listingimage",
    },
    price: 2200,
    location: "Munnar, Kerala",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [77.0595, 10.0889],
    },
    reviews: [],
  },
  {
    title: "London Penthouse Suite",
    description:
      "Luxury penthouse in central London with stunning skyline views. Walk to Big Ben, the London Eye, and West End theatres.",
    image: {
      url: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800",
      filename: "listingimage",
    },
    price: 8000,
    location: "Westminster, London",
    country: "United Kingdom",
    geometry: {
      type: "Point",
      coordinates: [-0.1276, 51.5074],
    },
    reviews: [],
  },
  {
    title: "Goa Beach Shack",
    description:
      "Chill vibes at this colourful beach shack steps from the Arabian Sea. Hammocks, bonfires, and fresh seafood every evening.",
    image: {
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",
      filename: "listingimage",
    },
    price: 900,
    location: "Palolem, Goa",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [74.023, 15.0101],
    },
    reviews: [],
  },
  {
    title: "Dubai Marina Apartment",
    description:
      "Ultra-modern apartment with floor-to-ceiling windows overlooking the Dubai Marina. Rooftop pool and gym access included.",
    image: {
      url: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800",
      filename: "listingimage",
    },
    price: 5500,
    location: "Dubai Marina, Dubai",
    country: "United Arab Emirates",
    geometry: {
      type: "Point",
      coordinates: [55.1413, 25.0805],
    },
    reviews: [],
  },
  {
    title: "Rishikesh Riverside Cottage",
    description:
      "Peaceful cottage on the banks of the Ganges. Perfect base for yoga retreats, white water rafting, and temple visits.",
    image: {
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800",
      filename: "listingimage",
    },
    price: 1100,
    location: "Rishikesh, Uttarakhand",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [78.2676, 30.0869],
    },
    reviews: [],
  },
  {
    title: "Sydney Harbour View Studio",
    description:
      "Compact but stunning studio apartment with unbeatable views of the Sydney Opera House and Harbour Bridge.",
    image: {
      url: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800",
      filename: "listingimage",
    },
    price: 3500,
    location: "The Rocks, Sydney",
    country: "Australia",
    geometry: {
      type: "Point",
      coordinates: [151.2093, -33.8688],
    },
    reviews: [],
  },
  {
    title: "Varanasi Heritage Home",
    description:
      "Stay in a centuries-old heritage home near the ghats of Varanasi. Experience the spiritual heart of India with Ganga aarti views.",
    image: {
      url: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=800",
      filename: "listingimage",
    },
    price: 950,
    location: "Varanasi, Uttar Pradesh",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [83.0007, 25.3176],
    },
    reviews: [],
  },
];

module.exports = { data: sampleListings };
