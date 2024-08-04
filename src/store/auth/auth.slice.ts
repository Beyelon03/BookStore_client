import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppDispatch, RootState } from '../store';
import { IUser } from '../../models/IUser';
import AuthService from '../../services/AuthService';
import { AxiosError } from 'axios';

export interface IAuthState {
  isAuth: boolean;
  user: IUser | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: IAuthState = {
  isAuth: false,
  user: null,
  isLoading: false,
  error: null,
};

export const login = (login: string, password: string) => async (dispatch: AppDispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await AuthService.login(login, password);
    localStorage.setItem('token', response.data.accessToken);
    dispatch(setAuth(true));
    dispatch(setUser(response.data.user));
    dispatch(setError(null));
  } catch (error) {
    if (error instanceof AxiosError) {
      dispatch(setError(error.response?.data?.message || 'Ошибка при входе'));
    } else {
      dispatch(setError('Неизвестная ошибка'));
    }
  } finally {
    dispatch(setLoading(false));
  }
};

export const registration =
  (username: string, email: string, password: string) => async (dispatch: AppDispatch) => {
    dispatch(setLoading(true));
    try {
      const response = await AuthService.registration(username, email, password);
      localStorage.setItem('token', response.data.accessToken);
      dispatch(setAuth(true));
      dispatch(setUser(response.data.user));
      dispatch(setError(null));
    } catch (error) {
      if (error instanceof AxiosError) {
        dispatch(setError(error.response?.data?.message || 'Ошибка при регистрации'));
      } else {
        dispatch(setError('Неизвестная ошибка'));
      }
    } finally {
      dispatch(setLoading(false));
    }
  };

export const logout = () => async (dispatch: AppDispatch) => {
  dispatch(setLoading(true));
  try {
    await AuthService.logout();
    localStorage.removeItem('token');
    dispatch(setAuth(false));
    dispatch(setUser(null));
    dispatch(setError(null));
  } catch (error) {
    if (error instanceof AxiosError) {
      dispatch(setError(error.response?.data?.message || 'Ошибка при выходе'));
    } else {
      dispatch(setError('Неизвестная ошибка'));
    }
  } finally {
    dispatch(setLoading(false));
  }
};

export const checkAuth = () => async (dispatch: AppDispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await AuthService.getRefresh();
    localStorage.setItem('token', response.data.accessToken);
    dispatch(setAuth(true));
    dispatch(setUser(response.data.user));
    dispatch(setError(null));
  } catch (error) {
    if (error instanceof AxiosError) {
      dispatch(setError(error.response?.data?.message || 'Ошибка при проверке аутентификации'));
    } else {
      dispatch(setError('Неизвестная ошибка'));
    }
  } finally {
    dispatch(setLoading(false));
  }
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth(state, action: PayloadAction<boolean>) {
      state.isAuth = action.payload;
    },
    setUser(state, action: PayloadAction<IUser | null>) {
      state.user = action.payload;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
    },
  },
});

export const { setUser, setAuth, setLoading, setError } = authSlice.actions;

export const selectUser = (state: RootState) => state.auth.user;
export const selectAuth = (state: RootState) => state.auth.isAuth;
export const selectLoading = (state: RootState) => state.auth.isLoading;
export const selectError = (state: RootState) => state.auth.error;

export default authSlice.reducer;
