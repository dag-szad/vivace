'use client';
import React, { useEffect, useState } from 'react';

import Book from './Book';

type CategoryBooksProps = {
  category: string;
};

type BookData = {
  bookId: number;
  title: string;
  author: string;
  price: number;
  stock: number;
  publisher: string;
  year: number;
  genre: string;
  bookURL: string;
};

const CategoryBooks: React.FC<CategoryBooksProps> = ({ category }) => {
  const [books, setBooks] = useState<BookData[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch(
          `http://localhost:5162/api/Book/genre/${category}`,
        );
        if (!response.ok) {
          throw new Error('Błąd podczas ładowania książek');
        }
        const data = await response.json();
        setBooks(data);
      } catch (err: any) {
        setError(err.message);
      }
    };

    if (category) {
      fetchBooks();
    }
  }, [category]);

  if (error) return <p>Błąd: {error}</p>;
  if (books.length === 0) return <p>Brak książek w tej kategorii...</p>;

  return (
    <div>
      <h2 className="ml-3 mt-4 text-xl font-semibold">Kategoria: {category}</h2>
      <div className="flex flex-row flex-wrap">
        {books.map((book) => (
          <div key={book.bookId} className="flex">
            <Book id={book.bookId.toString()} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryBooks;
