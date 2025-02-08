'use client';
import React, { useEffect, useState } from 'react';
import AddToCartButton from './AddToCart';

type BookProps = {
  id: string;
};

type BookData = {
  title: string;
  author: string;
  price?: number;
  bookURL: string;
};

const Book: React.FC<BookProps> = ({ id }) => {
  const [book, setBook] = useState<BookData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`http://localhost:5162/api/Book/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Błąd podczas ładowania danych');
        }
        return response.json();
      })
      .then((data: BookData) => {
        setBook({
          ...data,
          price: data.price ?? Math.floor(Math.random() * 41) + 20,
          bookURL:
            data.bookURL && data.bookURL.trim() !== ''
              ? data.bookURL
              : 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg',
        });
      })
      .catch((err) => setError(err.message));
  }, [id]);

  if (error) return <p>Błąd: {error}</p>;
  if (!book) return <p>Ładowanie...</p>;

  return (
    <div className="flex w-48 flex-col gap-2">
      <img
        src={book.bookURL}
        alt={book.title}
        className="h-64 w-48 rounded object-fill"
      />
      <h2 className="text-lg font-semibold">{book.title}</h2>
      <p className="italic">{book.author}</p>
      <p className="font-semibold">{book.price} zł</p>
      <AddToCartButton bookId={parseInt(id)} />
    </div>
  );
};

export default Book;
