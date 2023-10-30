// import React from 'react';
import GoogleMaps from 'simple-react-google-maps';
import './Map.css';

export default function Map({ lat, lng }) {
  const APIKEY = import.meta.env.VITE_API_KEY_MAP;

  const style = {
    margin: '50px',
    width: '400px',
    height: '400px',
  };

  const center = {
    lat: +lat,
    lng: +lng,
  };

  const marker = {
    lat: +lat,
    lng: +lng,
  };

  return (
    <div className="container-map">
      <GoogleMaps
        apiKey={APIKEY}
        style={style}
        zoom={20}
        center={center}
        markers={marker}
      />
    </div>
  );
}
