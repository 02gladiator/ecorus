import api from './axios';
import type {AuthUserDto, CreateUserDto, LoginUserDto} from "../types";

export const registration = async (data: CreateUserDto): Promise<AuthUserDto> => {
    const response = await api.post('api/auth/register', data);
    return response.data;
};

export const login = async (data: LoginUserDto): Promise<AuthUserDto> => {
    const response = await api.post('api/auth/login', data);
    return response.data;
};
