import {NavLink, Link} from 'react-router-dom';
import styles from './index.module.scss';
import {useState} from "react";
import {AuthModal} from "../AuthModal";

interface HeaderProps {
    token: string | null;
    points?: number;
}

export const Header = ({token, points}: HeaderProps) => {
    const [isAuthModalOpen, setAuthModalOpen] = useState(false);

    const handleOpenModal = () => setAuthModalOpen(true);
    const handleCloseModal = () => setAuthModalOpen(false);
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.left}>
                    <Link to="/" className={styles.logo}>
                        <img src="/src/assets/logo.svg" alt="Логотип" className={styles.logoIcon}/>
                    </Link>
                    <nav className={styles.nav}>
                        <NavLink
                            to="/"
                            className={({isActive}) =>
                                isActive ? `${styles.link} ${styles.active}` : styles.link
                            }
                        >
                            Главная
                        </NavLink>
                        <NavLink
                            to="/points"
                            className={({isActive}) =>
                                isActive ? `${styles.link} ${styles.active}` : styles.link
                            }
                        >
                            Пункты сбора
                        </NavLink>
                        <NavLink
                            to="/market"
                            className={({isActive}) =>
                                isActive ? `${styles.link} ${styles.active}` : styles.link
                            }
                        >
                            ЭкоМаркет
                        </NavLink>
                        <NavLink
                            to="/about"
                            className={({isActive}) =>
                                isActive ? `${styles.link} ${styles.active}` : styles.link
                            }
                        >
                            О сервисе
                        </NavLink>
                    </nav>
                </div>
                <div className={styles.actions}>
                    <div className={styles.item}>
                        <img src="/src/assets/pin.svg" alt="Пин" className={styles.pinIcon}/>
                        <span className={styles.cityName}>Казань</span>
                    </div>
                    {token ? (
                        <div className={styles.profile}>
                            <img src="/src/assets/score.svg" alt="Баллы"/>
                            <div className={styles.balance}>{points ?? 0}</div>
                            <Link to="/profile" className={styles.profileBtn}>Профиль</Link>
                        </div>
                    ) : (
                        <div className={styles.item}>
                            <img src="/src/assets/login.svg" alt="Логин"/>
                            <button onClick={handleOpenModal} className={styles.loginBtn}>
                                Войти
                            </button>
                        </div>
                        )}
                </div>
            </div>
            <AuthModal isOpen={isAuthModalOpen} onClose={handleCloseModal}/>
        </header>

    );
};
