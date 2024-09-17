import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Maps = () => {
    const position = [-4.305159782293687, 15.305322997989641]; // Coordonnées pour Kinshasa, Gombe

    return (
        <MapContainer center={position} zoom={13} style={{ height: '400px', width: '100%' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={position}>
                <Popup>
                    Nous sommes ici, LC SOFT Gombe, Kinshasa !
                </Popup>
            </Marker>
        </MapContainer>
    );
};

export default Maps;
