import axios from 'axios';

const searchAPI = axios.create({
  baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
  params: {
    limit: 5,
    language: 'en',
    access_token:
      'pk.eyJ1IjoibmFjaG9tcDc1IiwiYSI6ImNsNWgxZmhxaTA1MW0zZXFoZzN6NXJ2a2UifQ.9mgIEXhahUJQkt1Nl_X5xQ',
  },
});

export default searchAPI;
