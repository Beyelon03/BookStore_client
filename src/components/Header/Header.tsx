import styles from './Header.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { Link, Navigate } from 'react-router-dom';
import { FaBook, FaListUl } from 'react-icons/fa';
import { CiSearch } from 'react-icons/ci';
import { IoCartOutline } from 'react-icons/io5';
import { CgProfile } from 'react-icons/cg';
import { logout, selectAuth, selectUser } from '../../store/auth/auth.slice';

export const Header = () => {
  const user = useSelector(selectUser);
  const isAuth = useSelector(selectAuth);
  const dispatch: AppDispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <header>
      <div className={styles.container}>
        <div className={styles.content}>
          <Link to="/" className={styles.logo}>
            Book
            <FaBook size={24} />
            Store
          </Link>

          <div className={styles.search}>
            <button type="button" className={styles.categoryBtn}>
              <FaListUl />
              Категории книг
            </button>

            <form className={styles.searchForm}>
              <div className={styles.searchWrapper}>
                <CiSearch className={styles.searchIcon} />
                <input
                  className={styles.searchInput}
                  type="search"
                  placeholder="Найти книгу"
                  maxLength={48}
                />
                <button type="submit" className={styles.searchButton}>
                  Поиск
                </button>
              </div>
            </form>
          </div>

          <div className={styles.profile}>
            {isAuth ? (
              <Link to="/cart" className={styles.cart}>
                <IoCartOutline />
                Корзина
              </Link>
            ) : (
              <Navigate to="/" />
            )}

            {isAuth ? (
              <>
                <Link to="/profile" className={styles.user}>
                  <CgProfile />
                  {user?.username}
                </Link>
                <button onClick={handleLogout} className={styles.logoutBtn}>
                  Выйти
                </button>
              </>
            ) : (
              <Link to="/login" className={styles.user}>
                <CgProfile />
                Войти
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
