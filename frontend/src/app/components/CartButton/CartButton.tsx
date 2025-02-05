import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const CartButton: React.FC = () => {
  return (
    <Link href="/cart/cart">
      
        <Image
          src="/carticon.png"
          alt="cart"
          width={70}
          height={70}
        />
     
    </Link>
  );
};

export default CartButton;
