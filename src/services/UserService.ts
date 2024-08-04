import $api from '../http';
import { IUser } from '../models/IUser.ts';
import { AxiosResponse } from 'axios';

export default class UserService {
  static async fetchUsers(): Promise<AxiosResponse<IUser[]>> {
    const response = await $api.get<IUser[]>('/users');
    return response;
  }

  static async fetchUser(userId: string) {
    const response = await $api.get<IUser>(`/users${userId}`);
    return response;
  }
}
