import styles from '../styles/Header.module.scss';

export const Header = () => {
  return (
    <header>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.logo}>Book|Store</div>

          <div className={styles.search}>
            <button className={styles.filter}>Категории книг</button>

            <div className={styles.searchForm}>
              <input type="search" placeholder="Найти книгу" />
              <button className={styles.searchButton}>Поиск</button>
            </div>
          </div>

          <div className={styles.profile}>
            <div className={styles.cart}>Корзина</div>
            <div className={styles.user}>Пользователь</div>
          </div>
        </div>
      </div>
    </header>
  );
};
