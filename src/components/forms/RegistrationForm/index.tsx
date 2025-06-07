import React from 'react';
import styles from './index.module.scss';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {registration} from "../../../api/auth.ts";
import * as yup from 'yup';
import {LanguageEnum} from "../../../types";
import {useDispatch} from 'react-redux';
import {loginSuccess} from "../../../store/slices/authSlice.ts";


interface RegisterFormProps {
    switchToLogin: () => void;
    onClose: () => void;
    onSuccess: (email: string) => void;
}


type RegisterFormData = {
    email: string;
    password: string;
    confirmPassword: string;
};

const schema = yup.object().shape({
    email: yup
        .string()
        .required('Введите email')
        .matches(
            /^[a-zA-Zа-яА-Я0-9._%+-]+@[a-zA-Zа-яА-Я0-9.-]+\.[a-zA-Zа-яА-Я]{2,}$/,
            'Введите корректный email'
        ),
    password: yup.string().required('Введите пароль').min(6, 'Минимум 6 символов'),
    confirmPassword: yup
        .string()
        .required('Подтвердите пароль')
        .oneOf([yup.ref('password')], 'Пароли не совпадают'),
});

export const RegisterForm: React.FC<RegisterFormProps> = ({switchToLogin, onClose, onSuccess}) => {
    const {
        register,
        handleSubmit,
        formState: {errors},
        reset,
    } = useForm<RegisterFormData>({
        resolver: yupResolver(schema),
    });

    const dispatch = useDispatch();

    const onSubmit = async (data: RegisterFormData) => {
        try {
            const response = await registration({
                email: data.email,
                password: data.password,
                language: LanguageEnum.RU
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
            onSuccess(data.email);
            reset();
        } catch (error) {
            console.error('Ошибка регистрации:', error);
            alert('Произошла ошибка при регистрации. Попробуйте ещё раз.');
        }
    }
    return (
        <>
            <div className={styles.header}>
                <h2>Регистрация</h2>
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

                <input
                    type="password"
                    placeholder="Подтвердите пароль"
                    {...register('confirmPassword')}
                    className={errors.confirmPassword ? styles.inputError : ''}
                />
                {errors.confirmPassword && (
                    <span className={styles.error}>{errors.confirmPassword.message}</span>
                )}

                <button type="submit" className={styles.loginBtn}>Зарегистрироваться</button>

                <div className={styles.links}>
                    <button type="button" className={styles.linkBtn} onClick={switchToLogin}>
                        Я уже зарегистировался(-ась)
                    </button>
                </div>

                <button type="button" className={styles.partnerBtn}>Вход для партнёров</button>
            </form>
        </>
    );
};
