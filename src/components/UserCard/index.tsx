import React from 'react';
import styles from './index.module.scss';
import avatar from '../../assets/1600733939_preview_mujfe2yk0nc51.jpg';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/slices/authSlice';


export const UserCard: React.FC = () => {
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
        window.location.href = '/';
    };
    return (
        <div className={styles.card}>
            <img className={styles.avatar} src={avatar} alt="avatar" />
            <p className={styles.name}>Алексей Петрович</p>
            <p className={styles.email}>ivanov@gmail.com</p>
            <button className={styles.editBtn} onClick={handleLogout}>
                Выйти
            </button>
        </div>
    );
};
