import { FC, useState } from 'react';

const LoginForm: FC = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
      <input
        onChange={(e) => setLogin(e.target.value)}
        value={login}
        type="text"
        placeholder="Логин"
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"
        placeholder="Пароль"
      />
      <button>Логин</button>
      <button>Регистрация</button>
    </div>
  );
};

export default LoginForm;
