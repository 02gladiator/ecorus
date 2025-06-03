import React, {useState} from 'react';
import styles from './index.module.scss';
import {MapContainer, Marker, Popup, TileLayer} from 'react-leaflet';
import {CollectionPointCard} from "../../components/PointCard";
import {MapFlyToMarker} from "../../utils/MapFlyToMarker.tsx";
import {MapFilters} from "../../components/MapFilter";
import L from 'leaflet';
import defaultIconUrl from '../../assets/Group 33296.svg';
import activeIconUrl from '../../assets/Group 33295.svg';
import image from '../../assets/Frame 2042.jpg';
import {PointDetailCard} from "../../components/DeteildPointCard";


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
        materials: ['пластик','бумага'],
        latitude: 55.7558,
        longitude: 37.6173,
        storeName: 'nike',
        phone: '+7 (999) 123-45-67',
        schedule: 'Пн-Вс: 10:00–20:00',
    },
    {
        id: 2,
        image: image,
        address: 'г. Казань, ул. Баумана, 33',
        materials: ['стекло', 'бумага'],
        latitude: 55.7908,
        longitude: 49.1144,
        storeName: 'adidas',
        phone: '+7 (999) 123-45-67',
        schedule: 'Пн-Вс: 10:00–20:00',
    },
    {
        id: 3,
        image: image,
        address: 'г. СПб, Невский пр., 21',
        materials: ['пластик', 'стекло',],
        latitude: 59.9343,
        longitude: 30.3351,
        storeName: 'hm',
        phone: '+7 (999) 123-45-67',
        schedule: 'Пн-Вс: 10:00–20:00',
    },
];


export const CollectionPointsPage: React.FC = () => {


    const [activePointId, setActivePointId] = useState<number | null>(null);
    const [selectedStores, setSelectedStores] = useState<string[]>([]);
    const [selectedMaterials, setSelectedMaterials] = useState<string[]>([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [isMobileListOpen, setIsMobileListOpen] = useState(false);

    const filteredPoints = mockPoints.filter((point) => {
        const storeMatch =
            !selectedStores.length || selectedStores.includes(point.storeName);

        const materialMatch =
            !selectedMaterials.length ||
            selectedMaterials.some((mat) =>
                point.materials?.join(',').toLowerCase().includes(mat.toLowerCase())
            );

        const searchMatch = point.address
            .toLowerCase()
            .includes(searchQuery.toLowerCase());

        return storeMatch && materialMatch && searchMatch;
    });




    return (
        <main className={styles.page}>
            <MapFilters
                selectedStores={selectedStores}
                setSelectedStores={setSelectedStores}
                selectedMaterials={selectedMaterials}
                setSelectedMaterials={setSelectedMaterials}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
            />
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
                {filteredPoints.map((point) => (
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
                    {activePointId ? (
                        <PointDetailCard
                            {...filteredPoints.find((p) => p.id === activePointId)!}
                            onClose={() => setActivePointId(null)}
                        />
                    ) : (
                        <div className={styles.pointsList}>
                            {filteredPoints.map((point) => (
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
                    )}
                </div>
            </div>
            {!activePointId && (
                <button
                    className={styles.showListBtn}
                    onClick={() => setIsMobileListOpen(true)}
                >
                    Показать пункты сбора
                </button>
            )}
            {isMobileListOpen && (
                <div className={styles.mobileModal}>
                    <div className={styles.modalHeader}>
                        <span>Пункты сбора</span>
                        <button className={styles.closeButton} onClick={() => setIsMobileListOpen(false)}>Закрыть</button>
                    </div>
                    <div className={styles.pointsList}>
                        {filteredPoints.map((point) => (
                            <CollectionPointCard
                                key={point.id}
                                image={point.image}
                                address={point.address}
                                materials={point.materials}
                                active={point.id === activePointId}
                                onClick={() => {
                                    setActivePointId(point.id);
                                    setIsMobileListOpen(false);
                                }}
                            />
                        ))}
                    </div>
                </div>
            )}
        </main>
    );
}
