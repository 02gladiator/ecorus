import React, {useEffect} from 'react';
import styles from './index.module.scss';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

type FormData = {
    email: string;
    password: string;
};

const schema = yup.object().shape({
    email: yup
        .string()
        .required('Введите email')
        .matches(
            /^[a-zA-Zа-яА-Я0-9._%+-]+@[a-zA-Zа-яА-Я0-9.-]+\.[a-zA-Zа-яА-Я]{2,}$/,
            'Введите корректный email'
        ),
    password: yup.string().required('Введите пароль'),
});


interface AuthModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({isOpen, onClose}) => {
    const {
        register,
        handleSubmit,
        formState: {errors},
        reset
    } = useForm<FormData>({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data: FormData) => {
        console.log('Отправка данных:', data);
        onClose();
        reset();
    };

    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        if (isOpen) window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <div className={styles.header}>
                    <h2>Вход</h2>
                    <button onClick={onClose} className={styles.close}>×</button>
                </div>

                <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                    <input
                        type="email"
                        placeholder="Email"
                        {...register('email')}
                        className={errors.email ? styles.inputError : ''}
                        />
                    {errors.email && <span className={styles.error}>{errors.email.message}</span>}

                    <input
                        type="password"
                        placeholder="Пароль"
                        {...register('password')}
                        className={errors.password ? styles.inputError : ''}
                    />
                    {errors.password && <span className={styles.error}>{errors.password.message}</span>}

                    <button type="submit" className={styles.loginBtn}>Войти</button>

                    <div className={styles.links}>
                        <button type="button" className={styles.linkBtn}>Войти с помощью СМС</button>
                        <button type="button" className={styles.linkBtn}>Регистрация</button>
                    </div>

                    <button type="button" className={styles.partnerBtn}>Вход для партнёров</button>
                </form>
            </div>
        </div>
    );
};
