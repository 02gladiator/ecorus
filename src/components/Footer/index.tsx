import styles from './index.module.scss';


export const Footer = () => {
    return (
        <footer className={styles.footer}>
                    <div className={styles.contacts}>
                        <div className={styles.contactItem}>
                            <img src="/src/assets/Mail.svg" className={styles.icon} />
                            <a href="mailto:info@ecorus.ru">info@ecorus.ru</a>
                        </div>
                        <div className={styles.contactItem}>
                            <img src="/src/assets/Call.svg" className={styles.icon} />
                            <a href="tel:+77777777777">+7 (880) 880-80-80</a>
                        </div>
                </div>
        </footer>
    );
};
