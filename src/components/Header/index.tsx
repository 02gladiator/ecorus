import {NavLink, Link} from 'react-router-dom';
import styles from './index.module.scss';
import {useState,useEffect} from "react";
import {AuthModal} from "../AuthModal";
import type {CitiesEntity} from "../../types";
import {fetchCities} from "../../api/cities.ts";
import { useDispatch } from 'react-redux';
import { setCity } from '../../store/slices/citySlice';


interface HeaderProps {
    token: string | null;
    balance?: number;
}

export const Header = ({token, balance}: HeaderProps) => {



    const [isAuthModalOpen, setAuthModalOpen] = useState(false);
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [cities, setCities] = useState<CitiesEntity[]>([]);
    const [selectedCity, setSelectedCity] = useState<CitiesEntity | null>(null);

    const handleOpenModal = () => setAuthModalOpen(true);
    const handleCloseModal = () => setAuthModalOpen(false);
    const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);
    const closeMobileMenu = () => setMobileMenuOpen(false);

    useEffect(() => {
        fetchCities()
            .then((data) => {
                setCities(data);
                const savedId = localStorage.getItem('cityId');
                const savedCity = data.find(c => c.id === Number(savedId)) || data[0];
                setSelectedCity(savedCity);
            })
            .catch((err) => console.error('Ошибка загрузки городов', err));
    }, []);

    const dispatch = useDispatch();

    const handleCityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const cityId = Number(e.target.value);
        const city = cities.find(c => c.id === cityId);
        if (city) {
            setSelectedCity(city);
            dispatch(setCity({ id: city.id, name: city.name }));
        }
    };

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.left}>
                    <Link to="/" className={styles.logo}>
                        <img src="/src/assets/logo.svg" alt="Логотип" className={styles.logoIcon}/>
                    </Link>
                    <nav className={styles.nav}>
                        <NavLink to="/"
                                 className={({isActive}) => isActive ? `${styles.link} ${styles.active}` : styles.link}>
                            Главная
                        </NavLink>
                        <NavLink to="/points"
                                 className={({isActive}) => isActive ? `${styles.link} ${styles.active}` : styles.link}>
                            Пункты сбора
                        </NavLink>
                        <NavLink to="/market"
                                 className={({isActive}) => isActive ? `${styles.link} ${styles.active}` : styles.link}>
                            ЭкоМаркет
                        </NavLink>
                        <NavLink to="/about"
                                 className={({isActive}) => isActive ? `${styles.link} ${styles.active}` : styles.link}>
                            О сервисе
                        </NavLink>
                    </nav>
                </div>

                <div className={styles.actions}>
                    <div className={styles.item}>
                        <img src="/src/assets/pin.svg" alt="Пин" className={styles.pinIcon}/>
                        <select
                            value={selectedCity?.id ?? ''}
                            onChange={handleCityChange}
                            className={styles.citySelect}
                        >
                            {cities.map(city => (
                                <option key={city.id} value={city.id}>{city.name}</option>
                            ))}
                        </select>
                    </div>

                    {token ? (
                        <>
                            <div className={styles.profile}>
                                <img src="/src/assets/score.svg" alt="Баллы"/>
                                <div className={styles.balance}>{balance ?? 0}</div>
                                <Link to="/profile" className={styles.profileBtn}>Профиль</Link>
                            </div>
                            <button onClick={toggleMobileMenu} className={styles.burgerButton}>
                                <img src="/src/assets/Menu.svg" alt="Меню"/>
                            </button>
                        </>
                    ) : (
                        <>
                            <div className={styles.item}>
                                <img src="/src/assets/login.svg" alt="Логин"/>
                                <button onClick={handleOpenModal} className={styles.loginBtn}>
                                    Войти
                                </button>
                            </div>
                            <button onClick={toggleMobileMenu} className={styles.burgerButton}>
                                <img src="/src/assets/Menu.svg" alt="Меню"/>
                            </button>
                        </>
                    )}
                </div>
            </div>
            <div className={`${styles.mobileNav} ${isMobileMenuOpen ? styles.open : ''}`}>
                <button onClick={closeMobileMenu} className={styles.closeButton}>
                    ✕
                </button>

                {token && (
                    <Link to="/profile" className={styles.profileLink} onClick={closeMobileMenu}>
                        <img
                            src="/src/assets/1600733939_preview_mujfe2yk0nc51.jpg"
                            alt="Аватар"
                            className={styles.avatar}
                        />
                        <div className={styles.userInfo}>
                            <div className={styles.name}>Алексей Петрович</div>
                            <div className={styles.points}>
                                <img src="/src/assets/score.svg" alt="Баллы"/>
                                {balance ?? 0}
                            </div>
                        </div>
                    </Link>
                )}

                <div className={styles.navLinks}>
                    <NavLink to="/" onClick={closeMobileMenu}>Главная</NavLink>
                    <NavLink to="/points" onClick={closeMobileMenu}>Пункты сбора</NavLink>
                    <NavLink to="/market" onClick={closeMobileMenu}>ЭкоМаркет</NavLink>
                    <NavLink to="/about" onClick={closeMobileMenu}>О сервисе</NavLink>
                </div>
                <div className={styles.cityFooter}>
                    <div className={styles.item}>
                        <img src="/src/assets/pin.svg" alt="Пин" className={styles.pinIcon}/>
                        <span className={styles.cityName}>Казань</span>
                    </div>
                    {!token &&
                        <div className={styles.item}>
                            <img src="/src/assets/login.svg" alt="Логин"/>
                            <button onClick={handleOpenModal} className={styles.loginBtn}>
                                Войти
                            </button>
                        </div>
                    }

                </div>
            </div>
            <AuthModal isOpen={isAuthModalOpen} onClose={handleCloseModal}/>
        </header>
    );
};