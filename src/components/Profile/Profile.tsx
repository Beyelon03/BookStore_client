import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectAuth, selectUser } from '../../store/auth/auth.slice.ts';

export const Profile = () => {
  const isAuth = useSelector(selectAuth);
  const user = useSelector(selectUser);

  if (!isAuth) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <h1>Profile</h1>
      <p>Username: {user?.username}</p>
      <p>Email:{user?.email}</p>
      <p>Role: {user?.role}</p>
    </div>
  );
};
