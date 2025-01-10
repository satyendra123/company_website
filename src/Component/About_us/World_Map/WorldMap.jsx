import React, { useState } from 'react';
import Map from './map.png';
import MapMarker from './MapMarker.png';

function WorldMap() {
  const [hoveredCity, setHoveredCity] = useState(null);

  // Example cities with positions on the map
  const cities = [
    { name: 'New York', x: '50%', y: '30%' },
    { name: 'London', x: '40%', y: '20%' },
    { name: 'Tokyo', x: '70%', y: '80%' },
    { name: 'South Africa', x: '80%', y: '30%' },
    { name: 'Nepal', x: '20%', y: '50%' },
  ];

  const handleMouseEnter = (city) => {
    setHoveredCity(city);
  };

  const handleMouseLeave = () => {
    setHoveredCity(null);
  };

  return (
    <div style={{ position: 'relative', textAlign: 'center', marginTop:"100px" }}>
      <h1 className="text-center">We’re here for you</h1>
      <h1 className="text-center" style={{ color: '#0079FF' }}>
        no matter where you are
      </h1>
      <div style={{ position: 'relative', display: 'inline-block' }}>
        {/* Map Image */}
        <img src={Map} alt="World Map" className="img-fluid" />

        {/* Markers */}
        {cities.map((city, index) => (
          <div
            key={index}
            style={{
              position: 'absolute',
              left: city.x,
              top: city.y,
              transform: 'translate(-50%, -50%)',
            }}
            onMouseEnter={() => handleMouseEnter(city)}
            onMouseLeave={handleMouseLeave}
          >
            {/* Dot Marker */}
            <img
              src={MapMarker}
              alt={city.name}
              style={{
                cursor: 'pointer',
                width: '40px',
                height: '40px',
              }}
            />

            {/* Hover Card */}
            {hoveredCity?.name === city.name && (
              <div
                style={{
                  position: 'absolute',
                  bottom: '100%', // Position card above the dot
                  left: '50%',
                  transform: 'translate(-50%, -10px)',
                  padding: '10px',
                  background: '#fff',
                  border: '1px solid #ccc',
                  borderRadius: '5px',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  whiteSpace: 'nowrap',
                }}
              >
                {city.name}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default WorldMap;
