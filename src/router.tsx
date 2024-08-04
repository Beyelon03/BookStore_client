import { createBrowserRouter } from 'react-router-dom';
import { Layout } from './components/Layout/Layout.tsx';
import { Home } from './pages/Home.tsx';
import ErrorPage from './pages/Error.tsx';
import LoginForm from './components/LoginForm/LoginForm.tsx';
import { Profile } from './components/Profile/Profile.tsx';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute.tsx';
import { Cart } from './components/Cart/Cart.tsx';

const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: '*',
          element: <ErrorPage />,
        },
        {
          path: 'login',
          element: (
            <ProtectedRoute redirectTo="/" inverse>
        <LoginForm />
        </ProtectedRoute>
  ),
  },
  {
    path: 'profile',
    element: (
  <ProtectedRoute redirectTo="/login">
    <Profile />
    </ProtectedRoute>
),
},
{
  path: 'cart',
    element: (
  <ProtectedRoute redirectTo="/login">
    <Cart />
    </ProtectedRoute>
),
},
],
},
]);

export default router;
