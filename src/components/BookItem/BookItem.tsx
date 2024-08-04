import { FC } from 'react';
import { IBook } from '../../models/IBook.ts';
import styles from './BookItem.module.scss';
import { useNavigate } from 'react-router-dom';

interface BookItemProps {
  book: IBook;
}

export const BookItem: FC<BookItemProps> = ({ book }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/books/${book._id}`);
  };

  const truncateTitle = (title: string, maxLength: number) => {
    if (title.length > maxLength) {
      return `${title.slice(0, maxLength)}...`;
    }
    return title;
  };

  return (
    <div className={styles.bookItemContainer}>
      {book ? (
        <div
          className={styles.bookItem}
          key={book._id}
          onClick={handleClick}
          style={{ cursor: 'pointer' }}
        >
          <div className={styles.coverImageWrapper}>
            <img className={styles.coverImage} src={book.coverImage} alt="Cover image" />
          </div>
          <h2 className={styles.title}>{truncateTitle(book.title, 20)}</h2>
          <p className={styles.author}>{book.author[0]}</p>
          <p className={styles.price}>{book.price} грн</p>
          <p className={`${styles.stock} ${book.stock > 0 ? styles.inStock : styles.outOfStock}`}>
            {book.stock > 0 ? 'В наличии' : 'Нет в наличии'}
          </p>
        </div>
      ) : (
        <div>Нет доступных книг</div>
      )}
    </div>
  );
};
