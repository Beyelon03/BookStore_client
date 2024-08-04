import { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { login, selectAuth, selectError, selectLoading } from '../../store/auth/auth.slice';
import { Link, Navigate } from 'react-router-dom';

const LoginForm: FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const isAuth = useSelector(selectAuth);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const [loginInput, setLoginInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  const handleLogin = () => {
    dispatch(login(loginInput, passwordInput));
  };

  if (isLoading) {
    return <p>Загрузка...</p>;
  }

  if (isAuth) {
    return <Navigate to="/" replace />;
  }

  return (
    <div>
      <label htmlFor="username">
        Имя пользователя или электронная почта:
        <input
          id="username"
          type="text"
          value={loginInput}
          onChange={(e) => setLoginInput(e.target.value)}
          placeholder="Login"
        />
      </label>
      <label htmlFor="password">
        Пароль:
        <input
          id="password"
          type="password"
          value={passwordInput}
          onChange={(e) => setPasswordInput(e.target.value)}
          placeholder="Password"
        />
      </label>
      <button onClick={handleLogin}>Логин</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <Link to="/registration">Регистрация</Link>
    </div>
  );
};

export default LoginForm;
