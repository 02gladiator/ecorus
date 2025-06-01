import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import styles from './index.module.scss';

export const CollectionPointsPage: React.FC = () => {
    return (
        <div className={styles.page}>
            <MapContainer
                center={[55.751244, 37.618423]} // координаты Москвы
                zoom={12}
                scrollWheelZoom={true}
                className={styles.map}
            >
                <TileLayer
                    attribution='&copy; OpenStreetMap'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <Marker position={[55.751244, 37.618423]}>
                    <Popup>Пример пункта сбора</Popup>
                </Marker>
            </MapContainer>
        </div>
    );
};
