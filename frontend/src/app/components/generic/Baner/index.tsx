"use client";

import React, { useEffect, useState } from "react";

const Baner: React.FC = () => {
  const [book, setBook] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("http://localhost:5162/api/Book") // Pobieranie danych z API
      .then((response) => {
        if (!response.ok) {
          throw new Error("Błąd podczas ładowania danych");
        }
        return response.json();
      })
      .then((data) => {
        if (data.length > 0) {
          const randomBook = data[Math.floor(Math.random() * data.length)]; // Wybór losowej książki
          setBook(randomBook);
        }
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="text-white text-center">Ładowanie...</p>;
  }

  if (error) {
    return <p className="text-red-500 text-center">Błąd: {error}</p>;
  }

  if (!book) {
    return <p className="text-white text-center">Brak dostępnych książek.</p>;
  }

  return (
    <div className="m-1 font-serif">
      <div className="flex items-center justify-center">
        <div className="bg-[#362328] w-screen h-96 m-2 flex overflow-auto rounded-3xl p-6">
          {/* Blok okładki */}
          <div className="bg-gray-600 min-w-96 h-4/5 m-6 flex flex-col items-center justify-center p-4 rounded-lg">
            {book.BookURL && book.BookURL !== "No cover" ? (
              <img
                src={book.BookURL}
                alt={book.Title}
                className="w-full h-full object-cover rounded-lg"
              />
            ) : (
              <p className="text-white">Brak okładki</p>
            )}
            <p className="text-white text-lg font-bold mt-2">{book.Title}</p>
            <p className="text-white text-sm">by {book.Author}</p>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
              Odkryj
            </button>
          </div>

          {/* Blok opisu książki */}
          <div className="m-5 text-white h-4/5 flex flex-col justify-center">
            <h2 className="text-xl font-bold">{book.Title}</h2>
            <p className="mt-2">Autor: {book.Author}</p>
            <p className="mt-2">Gatunek: {book.Genre}</p>
            <p className="mt-2">Wydawca: {book.Publisher} ({book.Year})</p>
            <p className="mt-4">Cena: ${book.Price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Baner;
