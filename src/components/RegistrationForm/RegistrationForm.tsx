import { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { registration, selectAuth, selectError, selectLoading } from '../../store/auth/auth.slice';
import { Link, Navigate } from 'react-router-dom';

const RegistrationForm: FC = () => {
  const isAuth = useSelector(selectAuth);
  const isLoading = useSelector(selectLoading);
  const dispatch: AppDispatch = useDispatch();
  const error = useSelector(selectError);

  const [loginInput, setLoginInput] = useState('User');
  const [passwordInput, setPasswordInput] = useState('password123');
  const [emailInput, setEmailInput] = useState('user@example.com');

  const handleRegistration = () => {
    dispatch(registration(loginInput, emailInput, passwordInput));
  };

  if (isLoading) {
    return <p>Загрузка...</p>;
  }

  if (isAuth) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      {!isAuth && (
        <div>
          <label htmlFor="username">
            Имя пользователя:
            <input
              id="username"
              type="text"
              value={loginInput}
              onChange={(e) => setLoginInput(e.target.value)}
              placeholder="Username"
            />
          </label>
          <label htmlFor="email">
            Электронная почта:
            <input
              id="email"
              type="email"
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              placeholder="username@example.com"
            />
          </label>
          <label htmlFor="password">
            Пароль:
            <input
              id="password"
              type="password"
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
              placeholder="password"
            />
          </label>
          <button onClick={handleRegistration}>Регистрация</button>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <Link to="/login">Войти</Link>
        </div>
      )}
    </>
  );
};

export default RegistrationForm;
