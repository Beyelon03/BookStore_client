import { useEffect, useState } from 'react';
import { IBook } from '../models/IBook.ts';
import BookService from '../services/BookService.ts';
import { BookList } from '../components/BookList/BookList.tsx';

export const Home = () => {
  const [books, setBooks] = useState<IBook[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchBooks = async () => {
    try {
      const response = await BookService.fetchBooks();
      if (response && response.data) {
        setBooks(response.data);
      }
    } catch (error) {
      console.error('Ошибка при получении книг:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="app">
      <BookList books={books} isLoading={isLoading} />
    </div>
  );
};
