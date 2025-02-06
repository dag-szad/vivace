'use client';
import { useState } from 'react';

interface Category {
  name: string;
  icon?: string;
}

interface DropdownCategoryProps {
  onCategorySelect: (categoryName: string) => void;
}

const DropdownCategory: React.FC<DropdownCategoryProps> = ({
  onCategorySelect,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const categories: Category[] = [
    { name: 'Fantasy' },
    { name: 'Fiction' },
    { name: 'Mystery' },
    { name: 'Classic' },
    { name: 'Horror' },
    { name: 'Dystopian' },
    { name: 'Historical Fiction' },
    { name: 'History' },
    { name: 'Drama' },
  ];

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleCategorySelect = (categoryName: string) => {
    onCategorySelect(categoryName);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        className="z-50 m-1 gap-2 rounded px-20 py-2"
        onClick={toggleDropdown}
      >
        Kategoria {isOpen ? '▲' : '▼'}
      </button>
      {isOpen && (
        <ul className="absolute top-full z-50 mt-2 rounded border shadow-lg bg-[#3e3840]">
          {categories.map((category, index) => (
            <li
              key={index}
              className="flex cursor-pointer gap-2 py-2 pr-2 text-white hover:bg-[#4d3355]"
              onClick={() => handleCategorySelect(category.name)}
            >
              <span className="icon">{category.icon}</span>
              <span className="name">{category.name}</span>
            </li>
          ))}
        </ul>
      )}
      <a className="m-1 rounded p-2 px-20" href="#bestsellers">
        Bestsellery
      </a>
      <a className="m-1 rounded p-2 px-20">Nowości</a>
      <a className="m-1 rounded p-2 px-20">Zapowiedzi</a>
      <a className="m-1 rounded p-2 px-20">Promocje</a>
    </div>
  );
};

export default DropdownCategory;
