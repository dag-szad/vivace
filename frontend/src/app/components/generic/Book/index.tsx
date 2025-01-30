'use client';

import React, { useEffect, useState } from 'react';

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
            data.bookURL ??
            'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg',
        });
      })
      .catch((err) => setError(err.message));
  }, [id]);

  if (error) return <p>Błąd: {error}</p>;
  if (!book) return <p>Ładowanie...</p>;

  return (
    <div>
      <img
        src={book.bookURL
          .replace('github.com', 'raw.githubusercontent.com')
          .replace('/blob/', '/')}
        alt={book.title}
        width={150}
      />
      <h2>{book.title}</h2>
      <p>Autor: {book.author}</p>
      <p>Cena: {book.price} zł</p>
    </div>
  );
};

export default Book;
