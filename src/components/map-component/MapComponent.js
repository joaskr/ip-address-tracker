import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./MapComponent.css";

const MapComponent = ({ lat, lng, city }) => {
  const locationData = [lat, lng];

  return (
    <MapContainer
      center={locationData}
      zoom={10}
      scrollWheelZoom={true}
      className="mapContainer"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={locationData}>
        <Popup>{city}</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
