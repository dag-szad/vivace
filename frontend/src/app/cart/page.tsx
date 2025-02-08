'use client';
import React, { useState, useEffect } from 'react';
import { fetchf } from 'fetchff';
import Link from 'next/link';
import CartButton from '../components/CartButton';
import DropdownCategory from '../components/DropdownCategory';
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

 const [selectedCategory, setSelectedCategory] = useState<string>('');

  const handleCategorySelect = (categoryName: string) => {
    setSelectedCategory(categoryName);
  };

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
    return (<header className="flex justify-center items-center m-5"> 
        <span className='italic font-bold text-3xl text-gray-200 font-serif'>Vivace</span>
        <div className="flex items-center justify-center">
          <DropdownCategory onCategorySelect={handleCategorySelect} />
        </div>
        <div className='bg-gray-200 p-3 rounded-lg'>
          <CartButton />
        </div>
      </header>);
  }

  if (!cartItems || cartItems.length === 0) {
    return (
      <div>
        <header className="flex justify-center items-center m-5"> 
        <span className='italic font-bold text-3xl text-gray-200 font-serif'>Vivace</span>
        <div className="flex items-center justify-center">
          <DropdownCategory onCategorySelect={handleCategorySelect} />
        </div>
        <div className='bg-gray-200 p-3 rounded-lg'>
          <CartButton />
        </div>
      </header>
      <div className='flex flex-col items-center justify-center'>
          <h1 className='text-5xl p-7'>Koszyk</h1>
          <p className='pb-6'>Koszyk jest pusty</p>
        <Link href="/">
          <button  className="p-[10px] bg-[#3e3840] text-white rounded hover:bg-[#4d3355]">
            Wróć do strony sklepu
          </button>
        </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <header className="flex justify-center items-center m-5"> 
        <span className='italic font-bold text-3xl text-gray-200 font-serif'>Vivace</span>
        <div className="flex items-center justify-center">
          <DropdownCategory onCategorySelect={handleCategorySelect} />
        </div>
        <div className='bg-gray-200 p-3 rounded-lg'>
          <CartButton />
        </div>
      </header>
      <div className='flex flex-col items-center justify-center'>
      <h1 className='text-5xl p-7'>Koszyk</h1>
      <ul>
        {cartItems.map((item) => (
          <li
            key={item.book.bookId}
            className="flex w-[1100px] items-center justify-between border-b p-2"
          >
            <div>
              <h3>{item.book.title}</h3>
              <p>Autor: {item.book.author}</p>
              <p>Cena: {item.book.price} zł</p>
            </div>
            <span>Ilość: {item.quantity}</span>
            <button
              onClick={() => removeFromCart(item.book.bookId)}
              className="rounded bg-red-500 p-2 text-white hover:bg-red-700"
            >
              Usuń
            </button>
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
};

export default Cart;
