import { AxiosResponse } from 'axios';
import { IBook } from '../models/IBook.ts';
import $api from '../http';

export default class BookService {
  static async fetchBooks(): Promise<AxiosResponse<IBook[]>> {
    const response = await $api.get<IBook[]>('/books');
    return response;
  }

  static async fetchBook(bookId: string) {
    const response = await $api.get<IBook>(`/books${bookId}`);
    return response;
  }
}
