import React from 'react';
import Image from 'next/image';
import CartButton from '../CartButton/CartButton';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="">
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
      </header>

    </div>
  );
};

export default HomePage;