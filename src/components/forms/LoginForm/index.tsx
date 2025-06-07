import React from 'react';
import styles from './index.module.scss';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {login} from "../../../api/auth.ts";
import {useDispatch} from "react-redux";
import {loginSuccess} from "../../../store/slices/authSlice.ts";

interface LoginFormProps {
    switchToRegister: () => void;
    onClose: () => void;
}

type LoginFormData = {
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

export const LoginForm: React.FC<LoginFormProps> = ({ switchToRegister, onClose }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<LoginFormData>({
        resolver: yupResolver(schema),
    });

    const dispatch = useDispatch();

    const onSubmit = async (data: LoginFormData) => {
        try {
            const response = await login({
                email: data.email,
                password: data.password,
            });
            dispatch(
                loginSuccess({
                    user: {
                        id: response.id,
                        email: response.email,
                        balance: response.balance,
                    },
                    accessToken: response.accessToken,
                    refreshToken: response.refreshToken,
                })
            );
            onClose()
            reset();
        } catch (error) {
            console.error('Ошибка входа:', error);
            alert('Произошла ошибка при логине. Попробуйте ещё раз.');
        }
    };

    return (
        <>
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
                    <button type="button" className={styles.linkBtn} onClick={switchToRegister}>
                        Регистрация
                    </button>
                </div>

                <button type="button" className={styles.partnerBtn}>Вход для партнёров</button>
            </form>
        </>
    );
};
