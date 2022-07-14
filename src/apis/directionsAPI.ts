import axios from 'axios';

const directionsAPI = axios.create({
  baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
  params: {
    alternatives: false,
    geometries: 'geojson',
    overview: 'simplified',
    steps: false,
    access_token:
      'pk.eyJ1IjoibmFjaG9tcDc1IiwiYSI6ImNsNWgxZmhxaTA1MW0zZXFoZzN6NXJ2a2UifQ.9mgIEXhahUJQkt1Nl_X5xQ',
  },
});

export default directionsAPI;
