import { createBrowserRouter } from 'react-router-dom';
import { Layout } from './components/Layout/Layout.tsx';
import { Home } from './pages/Home.tsx';
import ErrorPage from './pages/Error.tsx';
import LoginForm from './components/LoginForm/LoginForm.tsx';
import { Profile } from './components/Profile/Profile.tsx';
import { Cart } from './components/Cart/Cart.tsx';
import RegistrationForm from './components/RegistrationForm/RegistrationForm.tsx';
import { Book } from './pages/Book/Book.tsx';

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
        element: <LoginForm />,
      },
      {
        path: 'registration',
        element: <RegistrationForm />,
      },
      {
        path: 'profile',
        element: <Profile />,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
      { path: 'books/:id', element: <Book /> },
    ],
  },
]);

export default router;
