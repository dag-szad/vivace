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
      <header className="flex justify-center items-center m-5"> 
        <span className='italic font-bold text-3xl text-gray-200 font-serif'>Vivace</span>
        <div className="flex items-center justify-center">
          <DropdownCategory onCategorySelect={handleCategorySelect} />
        </div>
        <div className='bg-gray-200 p-3 rounded-lg'>
          <CartButton />
        </div>
      </header>

      <main>
        {selectedCategory ? (
          <div>
            <h2 className="m-5 text-2xl font-semibold">
              {selectedCategory}
            </h2>
            <CategoryBooks category={selectedCategory} />
          </div>
        ) : (
          <>
            <h2 className="m-5 text-2xl font-semibold">
              Polecane
            </h2>
            <RandomBooks />
          </>
        )}
        <h2 id="bestsellers" className="m-5 text-2xl font-semibold">
          Bestsellery
        </h2>
        <RandomBooks />
      </main>
    </div>
  );
};

export default HomePage;
