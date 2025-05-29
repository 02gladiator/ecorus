import React from 'react';
import styles from './index.module.scss';
import avatar from '../../assets/1600733939_preview_mujfe2yk0nc51.jpg';

export const UserCard: React.FC = () => {
    return (
        <div className={styles.card}>
            <img className={styles.avatar} src={avatar} alt="avatar" />
            <p className={styles.name}>Алексей Петрович</p>
            <p className={styles.email}>ivanov@gmail.com</p>
            <button className={styles.editBtn}>Редактировать</button>
        </div>
    );
};
