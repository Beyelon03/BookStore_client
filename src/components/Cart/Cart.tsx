import { useSelector } from 'react-redux';
import { selectUser } from '../../store/auth/auth.slice.ts';
import { useEffect, useState } from 'react';

interface CartItem {
  book: string;
  quantity: number;
}

export const Cart = () => {
  const user = useSelector(selectUser);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (user?.cart) {
      setCart(user.cart);
    } else {
      setCart([]);
    }
    setIsLoading(false);
  }, [user]);

  if (isLoading) {
    return 'Загрузка...';
  }

  return (
    <div>
      <p>Корзина</p>
      {cart.length === 0 ? (
        <p>Ваша корзина пуста</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              <p>Book: {item.book} </p>
              <p>Quantity: {item.quantity} </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
