import { FC, useEffect } from 'react';
import { Header } from '../Header/Header.tsx';
import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store.ts';
import { checkAuth } from '../../store/auth/auth.slice.ts';

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
