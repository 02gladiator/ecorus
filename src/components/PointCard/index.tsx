import React from 'react';
import styles from './index.module.scss';

interface CollectionPointCardProps {
    image: string;
    address: string;
    materials: string[];
    active?: boolean;
    onClick?: () => void;
}

export const CollectionPointCard: React.FC<CollectionPointCardProps> = ({
                                                                            image,
                                                                            address,
                                                                            materials,
                                                                            active = false,
                                                                            onClick,
                                                                        }) => {

    return (
        <div
            className={`${styles.card} ${active ? styles.active : ''}`}
            onClick={onClick}
        >
            <div className={styles.imageWrapper}>
                <img src={image} alt="Пункт сбора" />
            </div>
            <div className={styles.info}>
                <p className={styles.address}>{address}</p>
                <p className={styles.materials}>{materials.join(",")}</p>
            </div>
        </div>
    );
};

