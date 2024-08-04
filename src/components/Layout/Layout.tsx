import { FC, useEffect } from 'react';
import { Header } from '../Header/Header.tsx';
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../store/store.ts';
import { checkAuth, selectLoading } from '../../store/auth/auth.slice.ts';

export const Layout: FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(checkAuth());
    }
  }, [dispatch]);

  if (isLoading) {
    return <div>Загрузка страницы...</div>;
  }

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};
