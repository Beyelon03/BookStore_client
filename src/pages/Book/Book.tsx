import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IBook } from '../../models/IBook.ts';
import BookService from '../../services/BookService.ts';
import styles from './Book.module.scss';

export const Book: FC = () => {
  const { id } = useParams<{ id: string }>(); // Получаем id из параметров URL
  const [book, setBook] = useState<IBook | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        if (!id) {
          return;
        }
        const response = await BookService.fetchBook(id);
        setBook(response.data);
      } catch (e) {
        setError('Не удалось загрузить данные о книге');
      } finally {
        setLoading(false);
      }
    };

    fetchBook();
  }, [id]);

  if (loading) return <p>Загрузка страницы товара...</p>;
  if (error) return <p>{error}</p>;
  if (!book) return <p>Книга не найдена</p>;

  return (
    <div className={styles.container}>
      <div className={styles.imageAndDetails}>
        <img src={book.coverImage} alt={book.title} className={styles.coverImage} />
        <div className={styles.details}>
          <h1 className={styles.title}>{book.title}</h1>
          <p className={styles.author}>Автор: {book.author.join(', ')}</p>
          <p className={styles.description}>{book.description}</p>
          <div className={styles.info}>
            <div className={styles.infoItem}>ISBN: {book.isbn}</div>
            <div className={styles.infoItem}>
              Дата публикации: {new Date(book.publicationDate).toLocaleDateString()}
            </div>
            <div className={styles.infoItem}>Издатель: {book.publisher.join(', ')}</div>
            <div className={styles.infoItem}>Язык: {book.language}</div>
            <div className={styles.infoItem}>Формат: {book.format}</div>
            <div className={styles.infoItem}>Количество страниц: {book.pageCount}</div>
            <div className={styles.infoItem}>Тип: {book.type}</div>
            <div className={styles.infoItem}>Возрастной рейтинг: {book.ageRating}</div>
            <div className={styles.infoItem}>Средний рейтинг: {book.averageRating}</div>
            <div className={styles.infoItem}>В наличии: {book.stock}</div>
            <div className={styles.infoItem}>Продавец: {book.seller.join(', ')}</div>
            <div className={styles.infoItem}>Рейтинг: {book.rating}</div>
          </div>
          <p className={styles.price}>Цена: {book.price} грн</p>
        </div>
      </div>
    </div>
  );
};
