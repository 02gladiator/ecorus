import axios from 'axios';

const api = axios.create({
    baseURL: 'http://ecoapp-itis.ru/',
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: false,
});

// ===== 📦 Request Interceptor (например, токен) =====
api.interceptors.request.use(
    config => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    error => Promise.reject(error)
);


api.interceptors.response.use(
    response => response,
    error => {
        if (error.response?.status === 401) {
            console.warn('Unauthorized!');
        }
        return Promise.reject(error);
    }
);

export default api;
