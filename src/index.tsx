import React from 'react';
import ReactDOM from 'react-dom/client';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import mapboxgl from '!mapbox-gl';

import { MapsApp } from './MapsApp';

mapboxgl.accessToken =
  'pk.eyJ1IjoibmFjaG9tcDc1IiwiYSI6ImNsNWgxZmhxaTA1MW0zZXFoZzN6NXJ2a2UifQ.9mgIEXhahUJQkt1Nl_X5xQ';

if (!navigator.geolocation) {
  alert('Your browser does not support geolocation');
  throw new Error('Your browser does not support geolocation');
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>
);
