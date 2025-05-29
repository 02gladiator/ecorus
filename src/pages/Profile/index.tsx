import React from 'react';
import styles from './index.module.scss';
import {UserCard} from "../../components/UserCard";

export const ProfilePage: React.FC = () => {
    return (
        <div className={styles.page}>
            <h1 className={styles.title}>Личный кабинет</h1>
            <div className={styles.content}>
                <UserCard />
            </div>
        </div>
    );
};
