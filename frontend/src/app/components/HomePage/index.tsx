import React from 'react';
import Image from 'next/image';
import CartButton from '../CartButton/CartButton';
import BottomMenu from '../BottomMenu/DropdownCategory';
import Book from '../Book';

const HomePage: React.FC = () => {
  return (
    <div className="">
       <div>
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />

          <div className="">
            <CartButton />
          </div>
        
            <div className="flex items-center justify-center ">
              <BottomMenu />
            </div>
        </div>
        
        <h2 className="ml-3 mt-4 text-xl font-semibold">Sprawdź również</h2>
        <main className="flex">
          <Book id="2" />
          <Book id="1" />
          <Book id="3" />
          <Book id="7" />
          <Book id="2" />
          <Book id="1" />
          <Book id="3" />
          <Book id="7" />
          <Book id="2" />
          <Book id="1" />
          <Book id="3" />
        </main>

    </div>
  );
};

export default HomePage;