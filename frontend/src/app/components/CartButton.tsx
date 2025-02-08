import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const CartButton: React.FC = () => {
  return (
    <Link href="/cart" className='bg-gray-200'>
      <Image src="/carticon.png" alt="cart" width={30} height={30} />
    </Link>
  );
};

export default CartButton;
