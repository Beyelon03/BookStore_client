import { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store/store.ts';
import { login } from '../store/auth/auth.slice.ts';

const LoginForm: FC = () => {
  const [loginInput, setLoginInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(login(loginInput, passwordInput));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={loginInput}
          onChange={(e) => setLoginInput(e.target.value)}
          placeholder="Login"
        />
        <input
          type="password"
          value={passwordInput}
          onChange={(e) => setPasswordInput(e.target.value)}
          placeholder="Password"
        />
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default LoginForm;
