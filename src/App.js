import React, { useRef, useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import mapboxgl from 'mapbox-gl'
import 'bootstrap/dist/css/bootstrap.min.css';

// MapBox Token
mapboxgl.accessToken = 'pk.eyJ1IjoidGVsb3ciLCJhIjoiY2tsbzJrMzloMDZocTMwcXlqandzdm5xYyJ9.UBxSH925tP1N50Q-3HLHtQ';


function App() {

  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/telow/cklocfpit5n8017p7o8p4nv7h',
      center: [lng, lat],
      zoom: zoom
    });
  });

  return (
    <div className="App">
      <div ref={mapContainer} className="map-container" />
      <div className="incidents-container">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Incident #</th>
            <th scope="col">Address</th>
            <th scope="col">Unit Type</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td><button class="btn btn-danger" type="submit">Detail</button></td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td><button class="btn btn-danger" type="submit">Detail</button></td>
          </tr>
        </tbody>
      </table>
      </div>
    </div>
  );
}


export default App;
