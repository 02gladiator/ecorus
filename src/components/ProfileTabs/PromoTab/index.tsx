import React from 'react';
import styles from './index.module.scss';
import {PromocodeCard} from "../../PromocodeCard";

export const PromoTab: React.FC = () => {
    const promoList = [
        {
            amount: 1000,
            date: '25.09.2021',
            link: 'https://adidas.com/clothes/WddfJfsf7dt6fsHFluj5ndfsZFu',
            active: true,
        },
        {
            amount: 100,
            date: '25.09.2021',
            link: 'https://adidas.com/clothes/WddfJfsf7dt6fsHFluj5ndfsZFu',
            active: false,
        },
        {
            amount: 400,
            date: '25.09.2021',
            link: 'https://adidas.com/clothes/WddfJfsf7dt6fsHFluj5ndfsZFu',
            active: false,
        },
        {
            amount: 400,
            date: '25.09.2021',
            link: 'https://adidas.com/clothes/WddfJfsf7dt6fsHFluj5ndfsZFu',
            active: false,
        },
        {
            amount: 400,
            date: '25.09.2021',
            link: 'https://adidas.com/clothes/WddfJfsf7dt6fsHFluj5ndfsZFu',
            active: false,
        },
        {
            amount: 400,
            date: '25.09.2021',
            link: 'https://adidas.com/clothes/WddfJfsf7dt6fsHFluj5ndfsZFu',
            active: false,
        },
    ];
    return (
        <div className={styles.wrapper}>
            {promoList.map((promo, index) => (
                <PromocodeCard
                    key={index}
                    amount={promo.amount}
                    date={promo.date}
                    link={promo.link}
                    active={promo.active}
                />
            ))}
        </div>
    );
};
