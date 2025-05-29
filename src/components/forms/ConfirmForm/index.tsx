import React from 'react';
import styles from './index.module.scss';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

interface ConfirmEmailFormProps {
    email: string;
    onClose: () => void;
}

type FormData = {
    code: string;
};

const schema = yup.object().shape({
    code: yup.string().required('Введите код'),
});

export const ConfirmEmailForm: React.FC<ConfirmEmailFormProps> = ({ email, onClose }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data: FormData) => {
        console.log('Подтверждение email с кодом:', data.code);
        onClose();
    };

    return (
        <>
            <div className={styles.header}>
                <h2>Ввести код</h2>
                <button onClick={onClose} className={styles.close}>×</button>
            </div>

            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <p className={styles.subtext}>
                    Введите код, отправленный на почту <strong>{email}</strong>
                </p>

                <input
                    type="text"
                    placeholder="Код"
                    {...register('code')}
                    className={errors.code ? styles.inputError : ''}
                />
                {errors.code && <span className={styles.error}>{errors.code.message}</span>}

                <button type="submit" className={styles.loginBtn}>Отправить</button>

                <div className={styles.links}>
                    <button type="button" className={styles.linkBtn}>Не получил(-а) код</button>
                </div>
            </form>
        </>
    );
};
