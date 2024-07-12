export interface IUser {
  email: string;
  _id: string;
  username: string;
  role: UserRoles;
  name: string;
  address: IAddress;
  phoneNumber: string;
  birthDate: Date;
  createdAt: Date;
  orders: {
    items: IOrderItem[];
    orderDate: Date;
    orderId: string;
    totalAmount: number;
  }[];
  favorites: string[];
  cart: {
    book: string;
    quantity: number;
  }[];
  comments: string[];
  books: string[];
}

export interface IOrderItem {
  book: string;
  quantity: number;
}

export interface IAddress {
  country: string;
  city: string;
  street: string;
  zipCode: string;
}

export enum UserRoles {
  admin = 'admin',
  user = 'user',
}
