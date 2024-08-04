import $api from '../http';
import { AuthResponse } from '../models/response/AuthResponse.ts';
import { AxiosResponse } from 'axios';

export interface ILogin {
  login: string;
  password: string;
}

export default class AuthService {
  static async login(login: string, password: string): Promise<AxiosResponse<AuthResponse>> {
    const response = await $api.post<AuthResponse>('/auth/login', { login, password });
    return response;
  }

  static async registration(
    username: string,
    email: string,
    password: string,
  ): Promise<AxiosResponse<AuthResponse>> {
    const response = await $api.post<AuthResponse>('/auth/registration', {
      email,
      username,
      password,
    });
    return response;
  }

  static async logout(): Promise<void> {
    await $api.post('/auth/logout');
  }

  static async getRefresh(): Promise<AxiosResponse<AuthResponse>> {
    const response = await $api.get<AuthResponse>('/auth/refresh');
    return response;
  }
}
