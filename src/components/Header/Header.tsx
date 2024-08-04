import styles from '../styles/Header.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store.ts';
import { Link } from 'react-router-dom';

export const Header = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  const isAuth = useSelector((state: RootState) => state.auth.isAuthenticated);

  return (
    <header>
      <div className={styles.container}>
        <div className={styles.content}>
          <Link to="/" className={styles.logo}>
            Book|Store
          </Link>

          <div className={styles.search}>
            <button className={styles.filter}>Категории книг</button>

            <div className={styles.searchForm}>
              <input type="search" placeholder="Найти книгу" />
              <button className={styles.searchButton}>Поиск</button>
            </div>
          </div>

          <div className={styles.profile}>
            {isAuth && (
              <Link to="/cart" className={styles.cart}>
                Корзина
              </Link>
            )}

            <Link to={isAuth ? '/profile' : '/login'} className={styles.user}>
              {isAuth ? user?.username : 'Войти'}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
