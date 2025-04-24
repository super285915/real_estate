import { properties } from '../data/properties';

export const getUniqueLocations = () => {
  const locations = properties.map(property => {
    // Split location into city and state
    const [city, state] = property.location.split(', ');
    return {
      label: property.location,
      city,
      state
    };
  });

  // Remove duplicates
  return Array.from(new Set(locations.map(loc => JSON.stringify(loc))))
    .map(str => JSON.parse(str))
    .sort((a, b) => a.city.localeCompare(b.city));
};

export const uniqueLocations = getUniqueLocations(); 