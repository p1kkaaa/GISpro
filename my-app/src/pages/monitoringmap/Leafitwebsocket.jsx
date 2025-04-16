import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import './MonitoringL.css';
import Person from './../../img/object/person.png';

const icon = new L.Icon({
  iconUrl: Person,
  iconSize: [30, 30],
});

function MonitoringL() {
  const [personData, setPersonData] = useState({
    id: 1,
    type: 'person',
    position: [51.505, -0.09],
    name: 'John Doe',
  });


  useEffect(() => {
    // подключить WebSocket или использовать API для получения координат в реальном времени
    const interval = setInterval(() => {
      // Пример получения новых данных о местоположении (от сервера)
      const newLatLng = [
        personData.position[0] + (Math.random() - 0.5) * 0.001, // случайное движение для демонстрации
        personData.position[1] + (Math.random() - 0.5) * 0.001,
      ];

      // Обновляем состояние с новыми координатами
      setPersonData((prevData) => ({
        ...prevData,
        position: newLatLng,
      }));
    }, 1000); // обновляем положение каждую секунду

    return () => clearInterval(interval); // очищаем интервал при размонтировании компонента
  }, [personData]);

  return (
    <div className="container">
      <div className="monitoring-container">
        <MapContainer center={[51.505, -0.09]} zoom={13} className="map-area">
          <TileLayer
            attribution='&copy; OpenStreetMap contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={personData.position} icon={icon}>
            <Popup>
              <strong>{personData.type.toUpperCase()}</strong>: {personData.name}
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}

export default MonitoringL;
