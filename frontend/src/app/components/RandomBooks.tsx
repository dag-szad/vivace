'use client';
import React, { useState, useEffect } from 'react';

import Book from './Book';

const RandomBooks: React.FC = () => {
  const [bookIds, setBookIds] = useState<number[]>([]);

  useEffect(() => {
    const generateUniqueIds = () => {
      const ids = new Set<number>();
      while (ids.size < 6) {
        ids.add(Math.floor(Math.random() * 60) + 1);
      }
      setBookIds(Array.from(ids));
    };

    generateUniqueIds();
  }, []);

  return (
    <div className="flex">
      {bookIds.map((id) => (
        <Book key={id} id={id.toString()} />
      ))}
    </div>
  );
};

export default RandomBooks;
