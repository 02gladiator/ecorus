import styles from './index.module.scss'
import { PromoCard } from "../PromoCard"
import bg1 from "../../assets/Frame 1997.jpg"
import bg2 from "../../assets/Illustration.jpg"

export const HomePromoSection = () => {
    return (
        <section className={styles.section}>
                <div className={styles.wrapper}>
                    <PromoCard
                        title="Пункты сбора"
                        description={`Посмотри, где в твоем городе\nможно сдать вторсырье\n на переработку`}
                        image={bg1}
                    />
                    <PromoCard
                        title="ЭкоМаркет"
                        description={"Используй заработанные\nэкокоины для покупки товаров\nиз переработанных материалов"}
                        image={bg2}
                    />
                </div>
        </section>
    )
}