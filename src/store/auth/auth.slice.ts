import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppDispatch, RootState } from '../store';
import { IUser } from '../../models/IUser';
import AuthService from '../../services/AuthService.ts';

export interface IAuthState {
  isAuthenticated: boolean;
  user: IUser | null;
  accessToken: string | null;
}

const initialState: IAuthState = {
  isAuthenticated: false,
  user: null,
  accessToken: null,
};

export const login = (login: string, password: string) => async (dispatch: AppDispatch) => {
  try {
    const data = await AuthService.login(login, password);
    dispatch(setCredentials(data));
  } catch (error) {
    console.error('Login failed:', error);
  }
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials(state, action: PayloadAction<{ user: IUser; accessToken: string }>) {
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
    },
    logOut(state) {
      state.isAuthenticated = false;
      state.user = null;
      state.accessToken = null;
    },
  },
});

export const { logOut, setCredentials } = authSlice.actions;

export const selectCurrentUser = (state: RootState) => state.auth.user;
export const selectCurrentToken = (state: RootState) => state.auth.accessToken;

export default authSlice.reducer;
