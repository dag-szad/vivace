'use client';
import React, { useState } from 'react';

import CartButton from './CartButton';
import DropdownCategory from './DropdownCategory';
import CategoryBooks from './CategoryBooks';
import RandomBooks from './RandomBooks';

const HomePage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  const handleCategorySelect = (categoryName: string) => {
    setSelectedCategory(categoryName);
  };

  return (
    <div>
      <header>
        <span>Vivace</span>
        <div className="flex items-center justify-center">
          <DropdownCategory onCategorySelect={handleCategorySelect} />
        </div>
        <div>
          <CartButton />
        </div>
      </header>

      <main>
        {selectedCategory ? (
          <div>
            <h2 id="bestsellers" className="ml-3 mt-4 text-xl font-semibold">
              {selectedCategory}
            </h2>
            <CategoryBooks category={selectedCategory} />
          </div>
        ) : (
          <>
            <h2 id="bestsellers" className="ml-3 mt-4 text-xl font-semibold">
              Polecane
            </h2>
            <RandomBooks />
          </>
        )}
        <h2 id="bestsellers" className="ml-3 mt-4 text-xl font-semibold">
          Bestsellery
        </h2>
        <RandomBooks />
      </main>
    </div>
  );
};

export default HomePage;
