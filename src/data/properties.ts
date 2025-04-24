export interface Property {
  id: number;
  title: string;
  price: number;
  location: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  image: string;
  propertyType: string;
  featured: boolean;
  images: {
    main: string;
    living: string;
    kitchen: string;
    bedroom: string[];
    bathroom: string[];
    exterior: string[];
    additional?: string[];
  };
  details: {
    yearBuilt: number;
    garage: number;
    description: string;
    amenities: string[];
    heating: string;
    cooling: string;
    utilities: string[];
    schoolDistrict: string;
    neighborhood: string;
  };
  agent: {
    name: string;
    phone: string;
    email: string;
    photo: string;
    title: string;
    experience: number;
  };
}

export const properties: Property[] = [
  {
    id: 1,
    title: 'Modern Luxury Villa',
    price: 1250000,
    location: 'Beverly Hills, CA',
    bedrooms: 5,
    bathrooms: 4.5,
    area: 4200,
    image: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    propertyType: 'House',
    featured: true,
    images: {
      main: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      living: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
      kitchen: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg',
      bedroom: [
        'https://images.pexels.com/photos/3773575/pexels-photo-3773575.jpeg',
        'https://images.pexels.com/photos/3773577/pexels-photo-3773577.jpeg',
        'https://images.pexels.com/photos/3773574/pexels-photo-3773574.jpeg'
      ],
      bathroom: [
        'https://images.pexels.com/photos/6585757/pexels-photo-6585757.jpeg',
        'https://images.pexels.com/photos/6585758/pexels-photo-6585758.jpeg'
      ],
      exterior: [
        'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg',
        'https://images.pexels.com/photos/7061662/pexels-photo-7061662.jpeg',
        'https://images.pexels.com/photos/7061663/pexels-photo-7061663.jpeg'
      ]
    },
    details: {
      yearBuilt: 2020,
      garage: 3,
      description: 'This stunning modern villa offers the perfect blend of luxury and comfort. Featuring high-end finishes throughout, an open concept living area, and a gourmet kitchen with top-of-the-line appliances.',
      amenities: [
        'Smart Home System',
        'Wine Cellar',
        'Home Theater',
        'Infinity Pool',
        'Outdoor Kitchen',
        'Security System',
        'Solar Panels',
        'Electric Car Charging'
      ],
      heating: 'Central Heating',
      cooling: 'Central Air',
      utilities: ['Electricity', 'Gas', 'Water', 'Sewer', 'Cable'],
      schoolDistrict: 'Beverly Hills Unified',
      neighborhood: 'Beverly Hills Estates'
    },
    agent: {
      name: 'Sarah Johnson',
      phone: '+1 (555) 123-4567',
      email: 'sarah.johnson@luxeestates.com',
      photo: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
      title: 'Luxury Property Specialist',
      experience: 12
    }
  },
  {
    id: 2,
    title: 'Elegant Apartment',
    price: 425000,
    location: 'Manhattan, NY',
    bedrooms: 2,
    bathrooms: 2,
    area: 1200,
    image: 'https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    propertyType: 'Apartment',
    featured: false,
    images: {
      main: 'https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg',
      living: 'https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg',
      kitchen: 'https://images.pexels.com/photos/7031406/pexels-photo-7031406.jpeg',
      bedroom: [
        'https://images.pexels.com/photos/7534561/pexels-photo-7534561.jpeg',
        'https://images.pexels.com/photos/7534562/pexels-photo-7534562.jpeg'
      ],
      bathroom: [
        'https://images.pexels.com/photos/6492403/pexels-photo-6492403.jpeg',
        'https://images.pexels.com/photos/6492404/pexels-photo-6492404.jpeg'
      ],
      exterior: [
        'https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg',
        'https://images.pexels.com/photos/5997993/pexels-photo-5997993.jpeg'
      ]
    },
    details: {
      yearBuilt: 2018,
      garage: 1,
      description: 'Luxurious apartment in the heart of Manhattan featuring modern amenities, stunning city views, and premium finishes throughout. Perfect for urban professionals.',
      amenities: [
        'Doorman',
        'Fitness Center',
        'Rooftop Terrace',
        'Package Room',
        'Bike Storage',
        'Pet Friendly',
        'In-Unit Laundry'
      ],
      heating: 'Central Heating',
      cooling: 'Central Air',
      utilities: ['Electricity', 'Gas', 'Water', 'Trash'],
      schoolDistrict: 'NYC District 2',
      neighborhood: 'Upper East Side'
    },
    agent: {
      name: 'Michael Chen',
      phone: '+1 (555) 234-5678',
      email: 'michael.chen@luxeestates.com',
      photo: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg',
      title: 'Senior Real Estate Advisor',
      experience: 8
    }
  },
  {
    id: 3,
    title: 'Waterfront Property',
    price: 950000,
    location: 'Miami, FL',
    bedrooms: 4,
    bathrooms: 3,
    area: 3100,
    image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    propertyType: 'House',
    featured: true,
    images: {
      main: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg',
      living: 'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg',
      kitchen: 'https://images.pexels.com/photos/3935350/pexels-photo-3935350.jpeg',
      bedroom: [
        'https://images.pexels.com/photos/3773575/pexels-photo-3773575.jpeg',
        'https://images.pexels.com/photos/3773576/pexels-photo-3773576.jpeg'
      ],
      bathroom: [
        'https://images.pexels.com/photos/6585757/pexels-photo-6585757.jpeg',
        'https://images.pexels.com/photos/6585759/pexels-photo-6585759.jpeg'
      ],
      exterior: [
        'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg',
        'https://images.pexels.com/photos/7061662/pexels-photo-7061662.jpeg'
      ]
    },
    details: {
      yearBuilt: 2019,
      garage: 2,
      description: 'Stunning waterfront property with breathtaking ocean views. Features an open floor plan, private dock, and luxurious finishes throughout.',
      amenities: [
        'Private Dock',
        'Infinity Pool',
        'Outdoor Kitchen',
        'Smart Home System',
        'Hurricane Windows',
        'Wine Cellar',
        'Home Theater'
      ],
      heating: 'Central Heating',
      cooling: 'Central Air',
      utilities: ['Electricity', 'Gas', 'Water', 'Sewer', 'Cable'],
      schoolDistrict: 'Miami-Dade County',
      neighborhood: 'Miami Beach'
    },
    agent: {
      name: 'Emily Rodriguez',
      phone: '+1 (555) 345-6789',
      email: 'emily.rodriguez@luxeestates.com',
      photo: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg',
      title: 'Waterfront Property Specialist',
      experience: 10
    }
  },
  {
    id: 4,
    title: 'Cozy Townhouse',
    price: 375000,
    location: 'Seattle, WA',
    bedrooms: 3,
    bathrooms: 2.5,
    area: 1850,
    image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    propertyType: 'Townhouse',
    featured: false,
    images: {
      main: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg',
      living: 'https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg',
      kitchen: 'https://images.pexels.com/photos/7031406/pexels-photo-7031406.jpeg',
      bedroom: [
        'https://images.pexels.com/photos/7534561/pexels-photo-7534561.jpeg',
        'https://images.pexels.com/photos/7534563/pexels-photo-7534563.jpeg'
      ],
      bathroom: [
        'https://images.pexels.com/photos/6492403/pexels-photo-6492403.jpeg'
      ],
      exterior: [
        'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg',
        'https://images.pexels.com/photos/106400/pexels-photo-106400.jpeg'
      ]
    },
    details: {
      yearBuilt: 2015,
      garage: 1,
      description: 'Modern townhouse in a prime Seattle location. Features an open concept design, high-end finishes, and a private rooftop deck with city views.',
      amenities: [
        'Rooftop Deck',
        'Hardwood Floors',
        'Stainless Steel Appliances',
        'In-Unit Laundry',
        'Smart Thermostat',
        'Secure Parking'
      ],
      heating: 'Central Heating',
      cooling: 'Central Air',
      utilities: ['Electricity', 'Gas', 'Water', 'Trash'],
      schoolDistrict: 'Seattle Public Schools',
      neighborhood: 'Capitol Hill'
    },
    agent: {
      name: 'David Kim',
      phone: '+1 (555) 456-7890',
      email: 'david.kim@luxeestates.com',
      photo: 'https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg',
      title: 'Urban Property Specialist',
      experience: 5
    }
  },
  {
    id: 5,
    title: 'Mountain View Cabin',
    price: 550000,
    location: 'Aspen, CO',
    bedrooms: 3,
    bathrooms: 2,
    area: 2100,
    image: 'https://images.pexels.com/photos/2079234/pexels-photo-2079234.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    propertyType: 'House',
    featured: false,
    images: {
      main: 'https://images.pexels.com/photos/2079234/pexels-photo-2079234.jpeg',
      living: 'https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg',
      kitchen: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg',
      bedroom: [
        'https://images.pexels.com/photos/3773575/pexels-photo-3773575.jpeg',
        'https://images.pexels.com/photos/3773576/pexels-photo-3773576.jpeg'
      ],
      bathroom: [
        'https://images.pexels.com/photos/6585757/pexels-photo-6585757.jpeg'
      ],
      exterior: [
        'https://images.pexels.com/photos/2079234/pexels-photo-2079234.jpeg',
        'https://images.pexels.com/photos/2079235/pexels-photo-2079235.jpeg'
      ]
    },
    details: {
      yearBuilt: 2017,
      garage: 2,
      description: 'Charming mountain cabin with stunning views of the Rockies. Features rustic design elements, a cozy fireplace, and easy access to ski slopes.',
      amenities: [
        'Stone Fireplace',
        'Ski Storage',
        'Hot Tub',
        'Mountain Views',
        'Heated Floors',
        'Wood Deck'
      ],
      heating: 'Radiant Floor Heating',
      cooling: 'Natural Mountain Air',
      utilities: ['Electricity', 'Gas', 'Water', 'Internet'],
      schoolDistrict: 'Aspen School District',
      neighborhood: 'Aspen Mountain'
    },
    agent: {
      name: 'Robert Miller',
      phone: '+1 (555) 567-8901',
      email: 'robert.miller@luxeestates.com',
      photo: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
      title: 'Mountain Property Expert',
      experience: 15
    }
  },
  {
    id: 6,
    title: 'Beach House',
    price: 875000,
    location: 'Malibu, CA',
    bedrooms: 4,
    bathrooms: 3.5,
    area: 2800,
    image: 'https://images.pexels.com/photos/1876045/pexels-photo-1876045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    propertyType: 'House',
    featured: true,
    images: {
      main: 'https://images.pexels.com/photos/1876045/pexels-photo-1876045.jpeg',
      living: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
      kitchen: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg',
      bedroom: [
        'https://images.pexels.com/photos/3773575/pexels-photo-3773575.jpeg',
        'https://images.pexels.com/photos/3773576/pexels-photo-3773576.jpeg',
        'https://images.pexels.com/photos/3773577/pexels-photo-3773577.jpeg'
      ],
      bathroom: [
        'https://images.pexels.com/photos/6585757/pexels-photo-6585757.jpeg',
        'https://images.pexels.com/photos/6585758/pexels-photo-6585758.jpeg'
      ],
      exterior: [
        'https://images.pexels.com/photos/1876045/pexels-photo-1876045.jpeg',
        'https://images.pexels.com/photos/1876046/pexels-photo-1876046.jpeg'
      ]
    },
    details: {
      yearBuilt: 2021,
      garage: 2,
      description: 'Luxurious beach house with panoramic ocean views. Features high-end finishes, an infinity pool, and direct beach access.',
      amenities: [
        'Infinity Pool',
        'Beach Access',
        'Outdoor Shower',
        'Ocean Views',
        'Gourmet Kitchen',
        'Smart Home System',
        'Solar Panels'
      ],
      heating: 'Central Heating',
      cooling: 'Central Air',
      utilities: ['Electricity', 'Gas', 'Water', 'Sewer', 'Cable', 'Internet'],
      schoolDistrict: 'Malibu Unified',
      neighborhood: 'Malibu Beach'
    },
    agent: {
      name: 'Jessica Martinez',
      phone: '+1 (555) 678-9012',
      email: 'jessica.martinez@luxeestates.com',
      photo: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg',
      title: 'Luxury Beach Properties',
      experience: 9
    }
  },
  {
    id: 7,
    title: 'Modern Office Space',
    price: 2100000,
    location: 'Chicago, IL',
    bedrooms: 0,
    bathrooms: 4,
    area: 5200,
    image: 'https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    propertyType: 'Commercial',
    featured: false,
    images: {
      main: 'https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg',
      living: 'https://images.pexels.com/photos/3182759/pexels-photo-3182759.jpeg',
      kitchen: 'https://images.pexels.com/photos/3182765/pexels-photo-3182765.jpeg',
      bedroom: [],
      bathroom: [
        'https://images.pexels.com/photos/6585757/pexels-photo-6585757.jpeg',
        'https://images.pexels.com/photos/6585758/pexels-photo-6585758.jpeg'
      ],
      exterior: [
        'https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg',
        'https://images.pexels.com/photos/269078/pexels-photo-269078.jpeg'
      ],
      additional: [
        'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg',
        'https://images.pexels.com/photos/3182833/pexels-photo-3182833.jpeg'
      ]
    },
    details: {
      yearBuilt: 2019,
      garage: 50,
      description: 'State-of-the-art office space in downtown Chicago. Features modern amenities, flexible floor plans, and stunning city views.',
      amenities: [
        'Conference Rooms',
        'Break Room',
        'Reception Area',
        'High-Speed Internet',
        'Security System',
        'Parking Garage',
        'Bike Storage',
        'Shower Facilities'
      ],
      heating: 'Central Heating',
      cooling: 'Central Air',
      utilities: ['Electricity', 'Gas', 'Water', 'Internet', 'Security'],
      schoolDistrict: 'N/A',
      neighborhood: 'Chicago Loop'
    },
    agent: {
      name: 'William Thompson',
      phone: '+1 (555) 789-0123',
      email: 'william.thompson@luxeestates.com',
      photo: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
      title: 'Commercial Property Specialist',
      experience: 20
    }
  },
  {
    id: 8,
    title: 'Downtown Apartment',
    price: 390000,
    location: 'Austin, TX',
    bedrooms: 2,
    bathrooms: 2,
    area: 1150,
    image: 'https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    propertyType: 'Apartment',
    featured: false,
    images: {
      main: 'https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg',
      living: 'https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg',
      kitchen: 'https://images.pexels.com/photos/7031406/pexels-photo-7031406.jpeg',
      bedroom: [
        'https://images.pexels.com/photos/7534561/pexels-photo-7534561.jpeg',
        'https://images.pexels.com/photos/7534562/pexels-photo-7534562.jpeg'
      ],
      bathroom: [
        'https://images.pexels.com/photos/6492403/pexels-photo-6492403.jpeg',
        'https://images.pexels.com/photos/6492404/pexels-photo-6492404.jpeg'
      ],
      exterior: [
        'https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg',
        'https://images.pexels.com/photos/5997993/pexels-photo-5997993.jpeg'
      ]
    },
    details: {
      yearBuilt: 2020,
      garage: 1,
      description: 'Modern downtown apartment with city views and premium finishes. Walking distance to restaurants, shopping, and entertainment.',
      amenities: [
        'Fitness Center',
        'Rooftop Pool',
        'Dog Park',
        'Package Lockers',
        'Concierge',
        'Bike Storage',
        'Electric Car Charging'
      ],
      heating: 'Central Heating',
      cooling: 'Central Air',
      utilities: ['Electricity', 'Water', 'Trash', 'Internet'],
      schoolDistrict: 'Austin ISD',
      neighborhood: 'Downtown Austin'
    },
    agent: {
      name: 'Amanda Lee',
      phone: '+1 (555) 890-1234',
      email: 'amanda.lee@luxeestates.com',
      photo: 'https://images.pexels.com/photos/1181695/pexels-photo-1181695.jpeg',
      title: 'Urban Living Specialist',
      experience: 7
    }
  },
  {
    id: 9,
    title: 'Countryside Cottage',
    price: 285000,
    location: 'Portland, OR',
    bedrooms: 3,
    bathrooms: 1.5,
    area: 1750,
    image: 'https://images.pexels.com/photos/221024/pexels-photo-221024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    propertyType: 'House',
    featured: false,
    images: {
      main: 'https://images.pexels.com/photos/221024/pexels-photo-221024.jpeg',
      living: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
      kitchen: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg',
      bedroom: [
        'https://images.pexels.com/photos/3773575/pexels-photo-3773575.jpeg',
        'https://images.pexels.com/photos/3773576/pexels-photo-3773576.jpeg'
      ],
      bathroom: [
        'https://images.pexels.com/photos/6585757/pexels-photo-6585757.jpeg'
      ],
      exterior: [
        'https://images.pexels.com/photos/221024/pexels-photo-221024.jpeg',
        'https://images.pexels.com/photos/221025/pexels-photo-221025.jpeg'
      ]
    },
    details: {
      yearBuilt: 1985,
      garage: 1,
      description: 'Charming countryside cottage with modern updates. Features a beautiful garden, cozy fireplace, and peaceful rural setting.',
      amenities: [
        'Fireplace',
        'Garden',
        'Updated Kitchen',
        'Hardwood Floors',
        'Large Yard',
        'Storage Shed'
      ],
      heating: 'Forced Air',
      cooling: 'Central Air',
      utilities: ['Electricity', 'Gas', 'Water', 'Septic'],
      schoolDistrict: 'Portland Public Schools',
      neighborhood: 'West Hills'
    },
    agent: {
      name: 'Thomas Anderson',
      phone: '+1 (555) 901-2345',
      email: 'thomas.anderson@luxeestates.com',
      photo: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg',
      title: 'Rural Property Specialist',
      experience: 13
    }
  },
  {
    id: 10,
    title: 'Luxury Penthouse',
    price: 2750000,
    location: 'San Francisco, CA',
    bedrooms: 3,
    bathrooms: 3.5,
    area: 2800,
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
    propertyType: 'Penthouse',
    featured: true,
    images: {
      main: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
      living: 'https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg',
      kitchen: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg',
      bedroom: [
        'https://images.pexels.com/photos/3773575/pexels-photo-3773575.jpeg',
        'https://images.pexels.com/photos/3773576/pexels-photo-3773576.jpeg',
        'https://images.pexels.com/photos/3773577/pexels-photo-3773577.jpeg'
      ],
      bathroom: [
        'https://images.pexels.com/photos/6585757/pexels-photo-6585757.jpeg',
        'https://images.pexels.com/photos/6585758/pexels-photo-6585758.jpeg'
      ],
      exterior: [
        'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg',
        'https://images.pexels.com/photos/323781/pexels-photo-323781.jpeg'
      ]
    },
    details: {
      yearBuilt: 2022,
      garage: 2,
      description: 'Stunning penthouse with panoramic city views, featuring floor-to-ceiling windows, private elevator access, and a wraparound terrace.',
      amenities: [
        'Private Elevator',
        'Wraparound Terrace',
        'Wine Cellar',
        'Smart Home System',
        'City Views',
        'Chef\'s Kitchen',
        'Home Theater',
        'Private Pool'
      ],
      heating: 'Radiant Floor Heating',
      cooling: 'Central Air',
      utilities: ['Electricity', 'Gas', 'Water', 'Internet', 'Cable'],
      schoolDistrict: 'San Francisco Unified',
      neighborhood: 'Russian Hill'
    },
    agent: {
      name: 'Victoria Chang',
      phone: '+1 (555) 012-3456',
      email: 'victoria.chang@luxeestates.com',
      photo: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg',
      title: 'Luxury Penthouse Specialist',
      experience: 15
    }
  },
  {
    id: 11,
    title: 'Historic Brownstone',
    price: 1850000,
    location: 'Boston, MA',
    bedrooms: 4,
    bathrooms: 3,
    area: 3200,
    image: 'https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg',
    propertyType: 'Townhouse',
    featured: false,
    images: {
      main: 'https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg',
      living: 'https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg',
      kitchen: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg',
      bedroom: [
        'https://images.pexels.com/photos/3773575/pexels-photo-3773575.jpeg',
        'https://images.pexels.com/photos/3773576/pexels-photo-3773576.jpeg'
      ],
      bathroom: [
        'https://images.pexels.com/photos/6585757/pexels-photo-6585757.jpeg',
        'https://images.pexels.com/photos/6585758/pexels-photo-6585758.jpeg'
      ],
      exterior: [
        'https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg',
        'https://images.pexels.com/photos/1115805/pexels-photo-1115805.jpeg'
      ]
    },
    details: {
      yearBuilt: 1890,
      garage: 0,
      description: 'Beautifully restored historic brownstone featuring original architectural details, modern updates, and a private garden.',
      amenities: [
        'Original Hardwood Floors',
        'Crown Molding',
        'Marble Fireplaces',
        'Updated Kitchen',
        'Private Garden',
        'Wine Cellar',
        'Period Details'
      ],
      heating: 'Steam Radiators',
      cooling: 'Central Air',
      utilities: ['Electricity', 'Gas', 'Water', 'Internet'],
      schoolDistrict: 'Boston Public Schools',
      neighborhood: 'Back Bay'
    },
    agent: {
      name: 'James Sullivan',
      phone: '+1 (555) 123-4567',
      email: 'james.sullivan@luxeestates.com',
      photo: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
      title: 'Historic Properties Specialist',
      experience: 18
    }
  },
  {
    id: 12,
    title: 'Desert Oasis',
    price: 895000,
    location: 'Scottsdale, AZ',
    bedrooms: 3,
    bathrooms: 2.5,
    area: 2400,
    image: 'https://images.pexels.com/photos/32870/pexels-photo.jpg',
    propertyType: 'House',
    featured: false,
    images: {
      main: 'https://images.pexels.com/photos/32870/pexels-photo.jpg',
      living: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
      kitchen: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg',
      bedroom: [
        'https://images.pexels.com/photos/3773575/pexels-photo-3773575.jpeg',
        'https://images.pexels.com/photos/3773576/pexels-photo-3773576.jpeg'
      ],
      bathroom: [
        'https://images.pexels.com/photos/6585757/pexels-photo-6585757.jpeg'
      ],
      exterior: [
        'https://images.pexels.com/photos/32870/pexels-photo.jpg',
        'https://images.pexels.com/photos/32871/pexels-photo.jpg'
      ]
    },
    details: {
      yearBuilt: 2018,
      garage: 2,
      description: 'Modern desert home with stunning mountain views, featuring a resort-style pool, outdoor living spaces, and energy-efficient design.',
      amenities: [
        'Resort Pool',
        'Outdoor Kitchen',
        'Desert Landscaping',
        'Solar Panels',
        'Mountain Views',
        'Smart Home Features',
        'Covered Patio'
      ],
      heating: 'Heat Pump',
      cooling: 'Central Air',
      utilities: ['Electricity', 'Water', 'Gas', 'Internet'],
      schoolDistrict: 'Scottsdale Unified',
      neighborhood: 'North Scottsdale'
    },
    agent: {
      name: 'Lisa Martinez',
      phone: '+1 (555) 234-5678',
      email: 'lisa.martinez@luxeestates.com',
      photo: 'https://images.pexels.com/photos/1181695/pexels-photo-1181695.jpeg',
      title: 'Desert Properties Specialist',
      experience: 8
    }
  },
  {
    id: 13,
    title: 'Lakefront Estate',
    price: 3200000,
    location: 'Lake Tahoe, NV',
    bedrooms: 6,
    bathrooms: 5.5,
    area: 5800,
    image: 'https://images.pexels.com/photos/209315/pexels-photo-209315.jpeg',
    propertyType: 'House',
    featured: true,
    images: {
      main: 'https://images.pexels.com/photos/209315/pexels-photo-209315.jpeg',
      living: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
      kitchen: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg',
      bedroom: [
        'https://images.pexels.com/photos/3773575/pexels-photo-3773575.jpeg',
        'https://images.pexels.com/photos/3773576/pexels-photo-3773576.jpeg',
        'https://images.pexels.com/photos/3773577/pexels-photo-3773577.jpeg'
      ],
      bathroom: [
        'https://images.pexels.com/photos/6585757/pexels-photo-6585757.jpeg',
        'https://images.pexels.com/photos/6585758/pexels-photo-6585758.jpeg'
      ],
      exterior: [
        'https://images.pexels.com/photos/209315/pexels-photo-209315.jpeg',
        'https://images.pexels.com/photos/209316/pexels-photo-209316.jpeg'
      ]
    },
    details: {
      yearBuilt: 2016,
      garage: 3,
      description: 'Magnificent lakefront estate with private beach access, boat dock, and stunning views of Lake Tahoe and the Sierra Nevada mountains.',
      amenities: [
        'Private Beach',
        'Boat Dock',
        'Home Theater',
        'Wine Cellar',
        'Game Room',
        'Outdoor Kitchen',
        'Hot Tub',
        'Gym'
      ],
      heating: 'Radiant Floor Heating',
      cooling: 'Central Air',
      utilities: ['Electricity', 'Gas', 'Water', 'Internet', 'Cable'],
      schoolDistrict: 'Lake Tahoe Unified',
      neighborhood: 'Incline Village'
    },
    agent: {
      name: 'Alexander Ross',
      phone: '+1 (555) 345-6789',
      email: 'alexander.ross@luxeestates.com',
      photo: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
      title: 'Luxury Lake Properties',
      experience: 16
    }
  },
  {
    id: 14,
    title: 'Urban Loft',
    price: 750000,
    location: 'Portland, OR',
    bedrooms: 1,
    bathrooms: 2,
    area: 1600,
    image: 'https://images.pexels.com/photos/1743227/pexels-photo-1743227.jpeg',
    propertyType: 'Loft',
    featured: false,
    images: {
      main: 'https://images.pexels.com/photos/1743227/pexels-photo-1743227.jpeg',
      living: 'https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg',
      kitchen: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg',
      bedroom: [
        'https://images.pexels.com/photos/3773575/pexels-photo-3773575.jpeg'
      ],
      bathroom: [
        'https://images.pexels.com/photos/6585757/pexels-photo-6585757.jpeg',
        'https://images.pexels.com/photos/6585758/pexels-photo-6585758.jpeg'
      ],
      exterior: [
        'https://images.pexels.com/photos/1743227/pexels-photo-1743227.jpeg',
        'https://images.pexels.com/photos/1743228/pexels-photo-1743228.jpeg'
      ]
    },
    details: {
      yearBuilt: 2008,
      garage: 1,
      description: 'Stylish urban loft in a converted warehouse, featuring exposed brick walls, high ceilings, and industrial-chic design elements.',
      amenities: [
        'Exposed Brick',
        'High Ceilings',
        'Gourmet Kitchen',
        'Building Gym',
        'Rooftop Deck',
        'Bike Storage',
        'Package Room'
      ],
      heating: 'Forced Air',
      cooling: 'Central Air',
      utilities: ['Electricity', 'Gas', 'Water', 'Internet'],
      schoolDistrict: 'Portland Public Schools',
      neighborhood: 'Pearl District'
    },
    agent: {
      name: 'Sophie Chen',
      phone: '+1 (555) 456-7890',
      email: 'sophie.chen@luxeestates.com',
      photo: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg',
      title: 'Urban Living Specialist',
      experience: 6
    }
  },
  {
    id: 15,
    title: 'Golf Course Villa',
    price: 1450000,
    location: 'Naples, FL',
    bedrooms: 4,
    bathrooms: 3.5,
    area: 3600,
    image: 'https://images.pexels.com/photos/53610/large-home-residential-house-architecture-53610.jpeg',
    propertyType: 'House',
    featured: false,
    images: {
      main: 'https://images.pexels.com/photos/53610/large-home-residential-house-architecture-53610.jpeg',
      living: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
      kitchen: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg',
      bedroom: [
        'https://images.pexels.com/photos/3773575/pexels-photo-3773575.jpeg',
        'https://images.pexels.com/photos/3773576/pexels-photo-3773576.jpeg'
      ],
      bathroom: [
        'https://images.pexels.com/photos/6585757/pexels-photo-6585757.jpeg',
        'https://images.pexels.com/photos/6585758/pexels-photo-6585758.jpeg'
      ],
      exterior: [
        'https://images.pexels.com/photos/53610/large-home-residential-house-architecture-53610.jpeg',
        'https://images.pexels.com/photos/53611/large-home-residential-house-architecture-53611.jpeg'
      ]
    },
    details: {
      yearBuilt: 2019,
      garage: 3,
      description: 'Elegant villa overlooking the championship golf course, featuring a private pool, outdoor entertainment area, and luxury finishes throughout.',
      amenities: [
        'Golf Course Views',
        'Private Pool',
        'Outdoor Kitchen',
        'Wine Room',
        'Home Office',
        'Smart Home System',
        'Golf Cart Garage'
      ],
      heating: 'Central Heating',
      cooling: 'Central Air',
      utilities: ['Electricity', 'Gas', 'Water', 'Internet', 'Cable'],
      schoolDistrict: 'Collier County Schools',
      neighborhood: 'Pelican Bay'
    },
    agent: {
      name: 'Richard Palmer',
      phone: '+1 (555) 567-8901',
      email: 'richard.palmer@luxeestates.com',
      photo: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
      title: 'Golf Community Specialist',
      experience: 14
    }
  },
  {
    id: 16,
    title: 'Ski-In/Ski-Out Chalet',
    price: 4200000,
    location: 'Vail, CO',
    bedrooms: 5,
    bathrooms: 5.5,
    area: 4800,
    image: 'https://images.pexels.com/photos/2079234/pexels-photo-2079234.jpeg',
    propertyType: 'House',
    featured: true,
    images: {
      main: 'https://images.pexels.com/photos/2079234/pexels-photo-2079234.jpeg',
      living: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
      kitchen: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg',
      bedroom: [
        'https://images.pexels.com/photos/3773575/pexels-photo-3773575.jpeg',
        'https://images.pexels.com/photos/3773576/pexels-photo-3773576.jpeg',
        'https://images.pexels.com/photos/3773577/pexels-photo-3773577.jpeg'
      ],
      bathroom: [
        'https://images.pexels.com/photos/6585757/pexels-photo-6585757.jpeg',
        'https://images.pexels.com/photos/6585758/pexels-photo-6585758.jpeg'
      ],
      exterior: [
        'https://images.pexels.com/photos/2079234/pexels-photo-2079234.jpeg',
        'https://images.pexels.com/photos/2079235/pexels-photo-2079235.jpeg'
      ]
    },
    details: {
      yearBuilt: 2020,
      garage: 2,
      description: 'Luxurious ski-in/ski-out chalet with stunning mountain views, featuring a private spa, home theater, and direct access to world-class skiing.',
      amenities: [
        'Ski-In/Ski-Out Access',
        'Private Spa',
        'Home Theater',
        'Wine Cellar',
        'Heated Driveway',
        'Boot Room',
        'Mountain Views',
        'Outdoor Hot Tub'
      ],
      heating: 'Radiant Floor Heating',
      cooling: 'Central Air',
      utilities: ['Electricity', 'Gas', 'Water', 'Internet', 'Cable'],
      schoolDistrict: 'Eagle County Schools',
      neighborhood: 'Vail Village'
    },
    agent: {
      name: 'Catherine Snow',
      phone: '+1 (555) 678-9012',
      email: 'catherine.snow@luxeestates.com',
      photo: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg',
      title: 'Mountain Property Expert',
      experience: 12
    }
  },
  {
    id: 17,
    title: 'Vineyard Estate',
    price: 5500000,
    location: 'Napa Valley, CA',
    bedrooms: 5,
    bathrooms: 6,
    area: 6200,
    image: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg',
    propertyType: 'Estate',
    featured: true,
    images: {
      main: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg',
      living: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
      kitchen: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg',
      bedroom: [
        'https://images.pexels.com/photos/3773575/pexels-photo-3773575.jpeg',
        'https://images.pexels.com/photos/3773576/pexels-photo-3773576.jpeg'
      ],
      bathroom: [
        'https://images.pexels.com/photos/6585757/pexels-photo-6585757.jpeg',
        'https://images.pexels.com/photos/6585758/pexels-photo-6585758.jpeg'
      ],
      exterior: [
        'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg',
        'https://images.pexels.com/photos/1396133/pexels-photo-1396133.jpeg'
      ]
    },
    details: {
      yearBuilt: 2015,
      garage: 4,
      description: 'Spectacular vineyard estate on 20 acres, featuring a wine cellar, tasting room, guest house, and panoramic valley views.',
      amenities: [
        'Wine Cellar',
        'Tasting Room',
        'Guest House',
        'Pool',
        'Outdoor Kitchen',
        'Valley Views',
        'Olive Grove',
        'Horse Facilities'
      ],
      heating: 'Central Heating',
      cooling: 'Central Air',
      utilities: ['Electricity', 'Well Water', 'Septic', 'Solar', 'Internet'],
      schoolDistrict: 'Napa Valley Unified',
      neighborhood: 'St. Helena'
    },
    agent: {
      name: 'Marcus Wright',
      phone: '+1 (555) 789-0123',
      email: 'marcus.wright@luxeestates.com',
      photo: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
      title: 'Wine Country Specialist',
      experience: 20
    }
  },
  {
    id: 18,
    title: 'Waterfront Condo',
    price: 1150000,
    location: 'Seattle, WA',
    bedrooms: 2,
    bathrooms: 2.5,
    area: 1800,
    image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg',
    propertyType: 'Condo',
    featured: false,
    images: {
      main: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg',
      living: 'https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg',
      kitchen: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg',
      bedroom: [
        'https://images.pexels.com/photos/3773575/pexels-photo-3773575.jpeg',
        'https://images.pexels.com/photos/3773576/pexels-photo-3773576.jpeg'
      ],
      bathroom: [
        'https://images.pexels.com/photos/6585757/pexels-photo-6585757.jpeg',
        'https://images.pexels.com/photos/6585758/pexels-photo-6585758.jpeg'
      ],
      exterior: [
        'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg',
        'https://images.pexels.com/photos/323781/pexels-photo-323781.jpeg'
      ]
    },
    details: {
      yearBuilt: 2021,
      garage: 2,
      description: 'Modern waterfront condo with stunning Puget Sound views, featuring high-end finishes, a private balcony, and resort-style amenities.',
      amenities: [
        'Water Views',
        'Private Balcony',
        'Concierge',
        'Fitness Center',
        'Rooftop Lounge',
        'Pet Spa',
        'Wine Storage'
      ],
      heating: 'Central Heating',
      cooling: 'Central Air',
      utilities: ['Electricity', 'Gas', 'Water', 'Internet', 'Cable'],
      schoolDistrict: 'Seattle Public Schools',
      neighborhood: 'Downtown Seattle'
    },
    agent: {
      name: 'Rachel Kim',
      phone: '+1 (555) 890-1234',
      email: 'rachel.kim@luxeestates.com',
      photo: 'https://images.pexels.com/photos/1181695/pexels-photo-1181695.jpeg',
      title: 'Waterfront Condo Specialist',
      experience: 7
    }
  },
  {
    id: 19,
    title: 'Mediterranean Villa',
    price: 2950000,
    location: 'Santa Barbara, CA',
    bedrooms: 5,
    bathrooms: 5.5,
    area: 4500,
    image: 'https://images.pexels.com/photos/53610/large-home-residential-house-architecture-53610.jpeg',
    propertyType: 'House',
    featured: true,
    images: {
      main: 'https://images.pexels.com/photos/53610/large-home-residential-house-architecture-53610.jpeg',
      living: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
      kitchen: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg',
      bedroom: [
        'https://images.pexels.com/photos/3773575/pexels-photo-3773575.jpeg',
        'https://images.pexels.com/photos/3773576/pexels-photo-3773576.jpeg',
        'https://images.pexels.com/photos/3773577/pexels-photo-3773577.jpeg'
      ],
      bathroom: [
        'https://images.pexels.com/photos/6585757/pexels-photo-6585757.jpeg',
        'https://images.pexels.com/photos/6585758/pexels-photo-6585758.jpeg'
      ],
      exterior: [
        'https://images.pexels.com/photos/53610/large-home-residential-house-architecture-53610.jpeg',
        'https://images.pexels.com/photos/53611/large-home-residential-house-architecture-53611.jpeg'
      ]
    },
    details: {
      yearBuilt: 2017,
      garage: 3,
      description: 'Stunning Mediterranean villa with ocean views, featuring authentic architectural details, a courtyard with fountain, and luxurious outdoor living spaces.',
      amenities: [
        'Ocean Views',
        'Courtyard',
        'Wine Cellar',
        'Infinity Pool',
        'Outdoor Kitchen',
        'Guest House',
        'Mediterranean Garden'
      ],
      heating: 'Central Heating',
      cooling: 'Central Air',
      utilities: ['Electricity', 'Gas', 'Water', 'Internet', 'Cable'],
      schoolDistrict: 'Santa Barbara Unified',
      neighborhood: 'Montecito'
    },
    agent: {
      name: 'Isabella Garcia',
      phone: '+1 (555) 901-2345',
      email: 'isabella.garcia@luxeestates.com',
      photo: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg',
      title: 'Luxury Villa Specialist',
      experience: 15
    }
  },
  {
    id: 20,
    title: 'Smart Home Paradise',
    price: 1850000,
    location: 'Austin, TX',
    bedrooms: 4,
    bathrooms: 3.5,
    area: 3200,
    image: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg',
    propertyType: 'House',
    featured: false,
    images: {
      main: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg',
      living: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
      kitchen: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg',
      bedroom: [
        'https://images.pexels.com/photos/3773575/pexels-photo-3773575.jpeg',
        'https://images.pexels.com/photos/3773576/pexels-photo-3773576.jpeg'
      ],
      bathroom: [
        'https://images.pexels.com/photos/6585757/pexels-photo-6585757.jpeg',
        'https://images.pexels.com/photos/6585758/pexels-photo-6585758.jpeg'
      ],
      exterior: [
        'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg',
        'https://images.pexels.com/photos/1396133/pexels-photo-1396133.jpeg'
      ]
    },
    details: {
      yearBuilt: 2023,
      garage: 2,
      description: 'Ultra-modern smart home featuring cutting-edge technology, energy efficiency, and sophisticated design throughout.',
      amenities: [
        'Smart Home System',
        'Solar Panels',
        'EV Charging',
        'Home Automation',
        'Energy Storage',
        'Security System',
        'Home Office',
        'Media Room'
      ],
      heating: 'Smart Climate Control',
      cooling: 'Smart Climate Control',
      utilities: ['Electricity', 'Solar', 'Water', 'Internet', 'Cable'],
      schoolDistrict: 'Austin ISD',
      neighborhood: 'Westlake Hills'
    },
    agent: {
      name: 'Daniel Park',
      phone: '+1 (555) 012-3456',
      email: 'daniel.park@luxeestates.com',
      photo: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
      title: 'Smart Home Technology Expert',
      experience: 5
    }
  }
]; 