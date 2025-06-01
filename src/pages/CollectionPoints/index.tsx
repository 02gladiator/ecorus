import React, {useState} from 'react';
import {MapContainer, Marker, Popup, TileLayer} from 'react-leaflet';
import styles from './index.module.scss';
import {CollectionPointCard} from "../../components/PointCard";
import L from 'leaflet';
import defaultIconUrl from '../../assets/Group 33296.svg';
import activeIconUrl from '../../assets/Group 33295.svg';
import image from '../../assets/Frame 2042.jpg';
import {MapFlyToMarker} from "../../utils/MapFlyToMarker.tsx";

const defaultIcon = new L.Icon({
    iconUrl: defaultIconUrl,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
});

const activeIcon = new L.Icon({
    iconUrl: activeIconUrl,
    iconSize: [36, 36],
    iconAnchor: [18, 36],
});
const mockPoints = [
    {
        id: 1,
        image: image,
        address: 'г. Москва, ул. Тверская, 10',
        materials: 'Пластик, стекло, бумага',
        latitude: 55.7558,
        longitude: 37.6173,
    },
    {
        id: 2,
        image: image,
        address: 'г. Казань, ул. Баумана, 33',
        materials: 'Одежда, электроника',
        latitude: 55.7908,
        longitude: 49.1144,
    },
    {
        id: 3,
        image: image,
        address: 'г. СПб, Невский пр., 21',
        materials: 'Алюминий, батарейки, пластик',
        latitude: 59.9343,
        longitude: 30.3351,
    },
    {
        id: 4,
        image: image,
        address: 'г. Москва, ул. Тверская, 10',
        materials: 'Пластик, стекло, бумага',
        latitude: 55.7558,
        longitude: 37.6173,
    },
    {
        id: 5,
        image: image,
        address: 'г. Казань, ул. Баумана, 33',
        materials: 'Одежда, электроника',
        latitude: 55.7908,
        longitude: 49.1144,
    },
    {
        id: 6,
        image: image,
        address: 'г. СПб, Невский пр., 21',
        materials: 'Алюминий, батарейки, пластик',
        latitude: 59.9343,
        longitude: 30.3351,
    }
];


export const CollectionPointsPage: React.FC = () => {


    const [activePointId, setActivePointId] = useState<number | null>(null);

    return (
        <div className={styles.page}>
            <MapContainer
                center={[55.796289, 49.108795]}
                zoom={12}
                scrollWheelZoom={true}
                className={styles.map}
            >
                <TileLayer
                    attribution="&copy; OpenStreetMap"
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {mockPoints.map((point) => (
                    <Marker
                        key={point.id}
                        position={[point.latitude, point.longitude]}
                        icon={point.id === activePointId ? activeIcon : defaultIcon}
                        eventHandlers={{
                            click: () => setActivePointId(point.id),
                        }}
                    >
                        {activePointId === point.id && (
                            <Popup autoClose={false}>
                                <b>{point.address}</b><br/>
                                {point.materials}
                            </Popup>
                        )}
                    </Marker>
                ))}
                {activePointId && (
                    <MapFlyToMarker
                        lat={mockPoints.find((p) => p.id === activePointId)?.latitude || 0}
                        lng={mockPoints.find((p) => p.id === activePointId)?.longitude || 0}
                    />
                )}
            </MapContainer>

            <div className={styles.container}>
                <div className={styles.sidebar}>
                    <div className={styles.pointsList}>
                        {mockPoints.map((point) => (
                            <CollectionPointCard
                                key={point.id}
                                image={point.image}
                                address={point.address}
                                materials={point.materials}
                                active={point.id === activePointId}
                                onClick={() => setActivePointId(point.id)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
