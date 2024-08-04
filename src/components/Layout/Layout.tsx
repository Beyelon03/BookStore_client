import { FC, useEffect } from 'react';
import { Header } from '../Header/Header.tsx';
import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { checkAuth } from '../../store/auth/auth.slice.ts';
import { AppDispatch } from '../../store/store.ts';

export const Layout: FC = () => {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(checkAuth());
    }
  }, [dispatch]);

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};
