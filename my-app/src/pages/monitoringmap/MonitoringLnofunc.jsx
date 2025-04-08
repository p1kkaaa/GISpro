import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import './MonitoringL.css';
import Person from './../../img/object/person.png';
import Car from './../../img/object/car.png';
import Bus from './../../img/object/bus.png';
import Truck from './../../img/object/truck.png';

const icons = {
  person: new L.Icon({ iconUrl: Person, iconSize: [30, 30] }),
  car: new L.Icon({ iconUrl: Car, iconSize: [30, 30] }),
  minibus: new L.Icon({ iconUrl: Bus, iconSize: [30, 30] }),
  truck: new L.Icon({ iconUrl: Truck, iconSize: [30, 30] }),
};

// Цвета следов для каждого типа объекта
const trailColors = {
  person: 'red',
  car: 'green',
  minibus: 'orange',
  truck: 'purple',
};

const initialData = [
  { id: 1, type: 'person', position: [51.505, -0.09], name: 'John', path: [] },
  { id: 2, type: 'car', position: [51.5, -0.11], name: 'Car A', path: [] },
  { id: 3, type: 'minibus', position: [51.51, -0.08], name: 'Minibus 1', path: [] },
  { id: 4, type: 'truck', position: [51.51, -0.15], name: 'Truck 1', path: [] },
];

function MonitoringLnofunc() {
  const [filter, setFilter] = useState([]);
  const [data, setData] = useState(initialData);

  const toggleFilter = (type) => {
    setFilter((prev) => {
      const isEnabled = prev.includes(type);
      const updatedFilter = isEnabled ? prev.filter((t) => t !== type) : [...prev, type];
  
      return updatedFilter;
    });
  };

  return (
    <div className="container">
      <div className="monitoring-container">
        <div className="sidebar">
          <h3>Фильтр объектов</h3>
          {['person', 'car', 'minibus', 'truck'].map((type) => (
            <label key={type}>
              <input
                type="checkbox"
                checked={filter.includes(type)}
                onChange={() => toggleFilter(type)}
              />{' '}
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </label>
          ))}
        </div>

        <MapContainer center={[51.505, -0.09]} zoom={13} className="map-area">
          <TileLayer
            attribution='&copy; OpenStreetMap contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {data
            .filter((obj) => filter.includes(obj.type))
            .map((obj) => (
              <React.Fragment key={obj.id}>
                <Marker position={obj.position} icon={icons[obj.type]}>
                  <Popup>
                    <strong>{obj.type.toUpperCase()}</strong>: {obj.name}
                  </Popup>
                </Marker>
                {obj.path.length > 1 && (
                  <Polyline
                    positions={obj.path}
                    color={trailColors[obj.type]}
                    weight={3}
                    opacity={0.6}
                  />
                )}
              </React.Fragment>
            ))}
        </MapContainer>
      </div>
    </div>
  );
}

export default MonitoringLnofunc;
