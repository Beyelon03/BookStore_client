import { FC } from 'react';
import { IBook } from '../../models/IBook.ts';
import styles from './BookList.module.scss';
import { BookItem } from '../BookItem/BookItem.tsx';
import { BookItemLoader } from '../BookItemLoader/BookItemLoader.tsx';

interface BookListProps {
  books: IBook[];
  isLoading: boolean;
}

export const BookList: FC<BookListProps> = ({ books, isLoading }) => {
  return (
    <div className={styles.bookListContainer}>
      {isLoading
        ? Array.from({ length: 10 }).map((_, index) => <BookItemLoader key={index} />)
        : books.map((book) => <BookItem key={book._id} book={book} />)}
    </div>
  );
};
