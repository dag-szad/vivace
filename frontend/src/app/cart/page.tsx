'use client';
import React, { useState, useEffect } from 'react';
import { fetchf } from 'fetchff';
interface CartItem {
  book: BookData;
  quantity: number;
}

interface BookData {
  author: string;
  bookId: number;
  bookURL: string;
  genre: string;
  price: number;
  publisher: string;
  stock: number;
  title: string;
  year: number;
}

type CartItems = CartItem[];

const Cart: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItems>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchCartItems = async () => {
      setIsLoading(true);

      try {
        const { data = [] } = await fetchf<CartItems>(
          'http://localhost:5162/api/Cart',
        );
        console.log('data', data);

        setCartItems(data);
      } catch (error) {
        console.error('Error during fetchCart:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCartItems();
  }, []);

  const removeFromCart = async (bookId: number) => {
    try {
      const response = await fetch(`http://localhost:5162/api/Cart/${bookId}`, {
        method: 'DELETE',
      });
      console.log('🚀 ~ removeFromCart ~ response:', response);
      if (!response.ok) {
        throw new Error(
          `Failed to remove from cart: ${response.status} ${response.statusText}`,
        );
      }
      setCartItems(cartItems.filter((item) => item.book.bookId !== bookId));
    } catch (error) {
      console.error('Error during removeFromCart:', error);
    }
  };

  if (isLoading) {
    return <p>Ładowanie...</p>;
  }

  if (!cartItems) {
    return <p>Nie ma nic w koszyku.</p>;
  }

  return (
    <div>
      <h1>Shopping Cart</h1>
      <ul>
        {cartItems.map((item) => (
          <li
            key={item.book.bookId}
            className="flex items-center justify-between border-b p-2"
          >
            <div>
              <h3>{item.book.title}</h3>
              <p>Autor: {item.book.author}</p>
              <p>Cena: {item.book.price} zł</p>
            </div>
            <span>Quantity: {item.quantity}</span>
            <button
              onClick={() => removeFromCart(item.book.bookId)}
              className="rounded bg-red-500 px-2 py-1 text-white hover:bg-red-700"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
