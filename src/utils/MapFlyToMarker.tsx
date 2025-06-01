import { useMap } from 'react-leaflet';
import { useEffect } from 'react';

interface Props {
    lat: number;
    lng: number;
}

export const MapFlyToMarker: React.FC<Props> = ({ lat, lng }) => {
    const map = useMap();

    useEffect(() => {
        if (lat && lng) {
            map.flyTo([lat, lng], 14, { duration: 1.2 });
        }
    }, [lat, lng, map]);

    return null;
};
