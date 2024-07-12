import $api from '../http';
import { AxiosResponse } from 'axios';
import { AuthResponse } from '../models/response/AuthResponse.ts';

export interface ILogin {
  login: string;
  password: string;
}

export default class AuthService {
  static async login(login: string, password: string): Promise<AuthResponse> {
    const response = await $api.post<AuthResponse>('/auth/login', { login, password });
    return response.data;
  }

  static async registration(
    username: string,
    email: string,
    password: string,
  ): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>('/auth/registration', { email, username, password });
  }

  static async logout(): Promise<void> {
    return $api.post('/auth/logout');
  }
}
