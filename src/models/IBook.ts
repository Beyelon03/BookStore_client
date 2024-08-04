export interface IBook {
  _id: string;
  title: string;
  author: string[];
  description: string;
  price: number;
  categories: string[];
  isbn: string;
  publicationDate: Date;
  publisher: string[];
  language: string;
  format: string;
  pageCount: number;
  type: string;
  ageRating: string;
  averageRating: number;
  addedAt: Date;
  coverImage: string;
  stock: number;
  seller: string[];
  rating: 1 | 2 | 3 | 4 | 5;
}
