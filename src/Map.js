import React, { useState } from 'react';
import './Map.css';


function LocationDisplay() {
  const [location, setLocation] = useState(null);

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  function showPosition(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    setLocation({ lat, lng });
  }

  return (
    <div className="location-container">
      <button onClick={getLocation}>Get Location</button>
      {location && (
        <div className="location-info">
          <p>Latitude: {location.lat}</p>
          <p>Longitude: {location.lng}</p>
        </div>
      )}
    </div>
  );
}

export default LocationDisplay;
