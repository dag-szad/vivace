import React from 'react';
import Image from 'next/image';

const ProfileButton: React.FC = () => {
  return (
    <a
      className="flex h-10 w-14 items-center justify-center gap-2 rounded-full border border-solid border-transparent bg-foreground px-4 text-sm text-background transition-colors hover:bg-[#383838] sm:h-12 sm:px-5 sm:text-base dark:hover:bg-[#ccc]"
      href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
      target="_blank"
    >
      <Image src="/profile.png" alt="profile" width={20} height={20} />
    </a>
  );
};

export default ProfileButton;
