'use client';
import React, { useState } from 'react';

const AddToCartButton: React.FC<{ bookId: number }> = ({ bookId }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleAddToCart = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('http://localhost:5162/api/CartAdd', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ bookId, quantity: 1 }),
      });

      if (!response.ok) {
        throw new Error('Failed to add book to cart');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleAddToCart}
      disabled={loading}
      className="p-[10px] bg-[#3e3840] text-white rounded hover:bg-[#4d3355]"
    >
      {loading ? 'Dodawanie...' : 'Dodaj do koszyka'}
    </button>
  );
};

export default AddToCartButton;
