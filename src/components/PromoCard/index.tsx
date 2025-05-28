import styles from './index.module.scss'

interface PromoCardProps {
    title: string
    description: string
    image: string;
}

export const PromoCard = ({title, description, image}: PromoCardProps) => {
    return (
        <div className={styles.card}>
            <div className={styles.text}>
                <h3>{title}</h3>
                <p>
                    {description.split('\n').map((line, index) => (
                        <span key={index}>
                            {line}
                            <br/>
                        </span>
                    ))}
                </p>
            </div>
            <button className={styles.button}>
                <img src="/src/assets/Arrows (1).svg"/>
            </button>
            {image && <img src={image} alt="promo" className={styles.image}/>}
        </div>
    )
}
