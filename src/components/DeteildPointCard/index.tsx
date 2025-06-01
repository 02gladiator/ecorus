import styles from './index.module.scss';

interface Props {
    image: string;
    address: string;
    phone: string;
    schedule: string;
    storeName: string;
    materials: string[];
    onClose: () => void;
}

export const PointDetailCard: React.FC<Props> = ({
                                                     image,
                                                     address,
                                                     phone,
                                                     schedule,
                                                     storeName,
                                                     materials,
                                                     onClose,
                                                 }) => {
    return (
        <div className={styles.card}>

            <img src={image} alt="Пункт" className={styles.image}/>
            <div className={styles.content}>
                <button onClick={onClose} className={styles.backBtn}>← Назад к списку</button>
                <h3>{address}</h3>
                <p><b>Телефон:</b> {phone}</p>
                <p><b>Время работы:</b> {schedule}</p>
                <p><b>Магазин:</b> {storeName}</p>
                <p><b>Принимает:</b> {materials.join(', ')}</p>
            </div>
        </div>
    );
};
