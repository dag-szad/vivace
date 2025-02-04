import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const CartButton: React.FC = () => {
  return (
    <Link href="/cart">
      
        <Image
          src="/carticon.png"
          alt="profile"
          width={70}
          height={70}
        />
    </Link>
  );
};

export default CartButton;
