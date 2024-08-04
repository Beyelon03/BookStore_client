import { FC } from 'react';
import { IBook } from '../../models/IBook.ts';
import styles from './BookItem.module.scss';

interface BookItemProps {
  books: IBook[];
}

export const BookItem: FC<BookItemProps> = ({ books }) => {
  return (
    <div className={styles.cardBookContainer}>
      {books.length > 0 &&
        books.map((book) => (
          <div className={styles.cardBook} key={book._id}>
            <h2>Title:{book.title}</h2>
            <p>Author:{book.author[0]}</p>
            <p>Price:{book.price}</p>
            <p>In Stock: {book.stock}</p>
          </div>
        ))}
    </div>
  );
};
