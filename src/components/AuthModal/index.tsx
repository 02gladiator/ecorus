import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import {LoginForm} from "../forms/LoginForm";
import {RegisterForm} from "../forms/RegistrationForm";
import {ConfirmEmailForm} from "../forms/ConfirmForm";


interface AuthModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
    const [mode, setMode] = useState<'login' | 'register' | 'confirm'>('login');
    const [emailForConfirm, setEmailForConfirm] = useState('');

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
                {mode === 'login' && (
                    <LoginForm
                        onClose={onClose}
                        switchToRegister={() => setMode('register')}
                    />
                )}
                {mode === 'register' && (
                    <RegisterForm
                        onClose={onClose}
                        switchToLogin={() => setMode('login')}
                        onSuccess={(email) => {
                            setEmailForConfirm(email);
                            setMode('confirm');
                        }}
                    />
                )}
                {mode === 'confirm' && (
                    <ConfirmEmailForm
                        email={emailForConfirm}
                        onClose={onClose}
                    />
                )}
            </div>
        </div>
    );
};
