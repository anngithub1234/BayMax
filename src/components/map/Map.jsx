import React, { useEffect, useState } from 'react';
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS
import L from 'leaflet';

function Map() {
  const [status, setStatus] = useState('');
  const [map, setMap] = useState(null);

  const success = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    setStatus('');
    const map = L.map('map').setView([latitude, longitude], 18);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    L.marker([latitude, longitude]).addTo(map)
      .bindPopup(`Latitude: ${latitude} °, Longitude: ${longitude} °`)
      .openPopup();

    setMap(map);
  };

  const error = () => {
    setStatus('Unable to retrieve your location');
  };

  const geoFindMe = () => {
    if (!navigator.geolocation) {
      setStatus('Geolocation is not supported by your browser');
    } else {
      setStatus('Locating…');
      navigator.geolocation.getCurrentPosition(success, error);
    }
  };

  useEffect(() => {
    // Add event listener when the component mounts
    document.querySelector('#find-me').addEventListener('click', geoFindMe);

    // Remove event listener when the component unmounts
    return () => {
      document.querySelector('#find-me').removeEventListener('click', geoFindMe);
    };
  }, []);

  return (
    <div>
      <p id="status">{status}</p>
      <div id="map" style={{ width: '300px', height: '300px'}}></div>
      <button id="find-me" className='text-green-800'>Find Me</button>
    </div>
  );
}

export default Map;
