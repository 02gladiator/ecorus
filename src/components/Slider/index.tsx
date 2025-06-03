import {useEffect, useRef, useState} from 'react';
import styles from './index.module.scss';
import bg1 from "../../assets/bg1.jpg"
import bg2 from "../../assets/bg2.jpg"
import bg3 from "../../assets/bg3.jpg"

const slides = [
    {
        title: 'Сделаем мир чище',
        text: 'Сдай макулатуру или старую одежду и получи скидку на покупку товаров из переработанных материалов',
        buttonText: 'Условия сервиса',
        image: bg1,
    },
    {
        title: 'А вы знали...',
        text: 'что среднее время разложения пластмассовых изделий колеблется от 400 до 700 лет, а полиэтиленовых пакетов — от 100 до 200 лет?',
        buttonText: 'Узнать больше',
        image: bg2,
    },
    {
        title: 'Что с масками?',
        text: 'Медицинские маски не обязательно должны становиться отходами. Их тоже можно сдать на переработку.',
        buttonText: 'Пункты сбора масок',
        image: bg3,
    },
];

export const Slider = () => {
    const [current, setCurrent] = useState(0);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const isMobile = window.innerWidth <= 768;

    const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };
    const resetAutoScroll = () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        if (isMobile) {
            intervalRef.current = setInterval(nextSlide, 5000);
        }
    };

    useEffect(() => {
        if (isMobile) {
            intervalRef.current = setInterval(nextSlide, 5000);
        }
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, []);

    return (
        <div className={styles.sliderWrapper}>
            <div className={styles.slider}>
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`${styles.slide} ${index === current ? styles.active : ''}`}
                        style={{ backgroundImage: `url(${slide.image})` }}
                    >
                        <div className={styles.content}>
                            <h2>{slide.title}</h2>
                            <p>{slide.text}</p>
                            <button className={styles.button}>{slide.buttonText}</button>
                        </div>
                    </div>
                ))}
            </div>

            <button
                className={`${styles.arrow} ${styles.left}`}
                onClick={() => {
                    prevSlide();
                    resetAutoScroll();
                }}
            >
                <img src="/src/assets/Arrows.svg" />
            </button>
            <button
                className={`${styles.arrow} ${styles.right}`}
                onClick={() => {
                    nextSlide();
                    resetAutoScroll();
                }}
            >
                <img src="/src/assets/Arrows (1).svg" />
            </button>
        </div>
    );
};