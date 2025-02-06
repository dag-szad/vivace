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
      <div className="flex gap-5 justify-center flex-wrap">
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
