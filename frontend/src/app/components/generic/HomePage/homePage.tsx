import React from 'react';
import Image from 'next/image';
import CartButton from '../CartButton/CartButton';
import ProfileButton from '../ProfileButton/ProfileButton';
import SearchInput from '../SearchBar/SearchBar';
import BottomMenu from '../BottomMenu/DropdownCategory';
import Baner from '../Baner';


const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="bg-[#362328] flex w-full gap-8 p-5">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />

        <div className="flex items-center w-full justify-center border-yellow-500">
          <SearchInput />
        </div>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <ProfileButton />
          <CartButton />
        </div>
      </header>

      <nav className="py-2">
          <div className="flex items-center justify-center ">
            <BottomMenu />
          </div>
       </nav>

        <div>
            <Baner />
        </div>

        <h2 className='text-xl font-semibold ml-3 mt-4'>Sprawdź również</h2>
        <main className='flex'>
            <div className="bg-[#322d34] w-[135px] h-[230px] p-3 m-3 rounded-lg shadow-lg flex justify-between text-white">
                <div className="bg-gray-600 w-[115] h-[115]">

                </div>
            </div>
            <div className="bg-[#322d34] w-[135px] h-[230px] p-3 m-3 rounded-lg shadow-lg flex justify-between text-white">
            <div className="bg-gray-600 w-[115] h-[115]">
                    
                </div>
            </div>
            <div className="bg-[#322d34] w-[135px] h-[230px] p-3 m-3 rounded-lg shadow-lg flex justify-between text-white">
                <div className="bg-gray-600 w-[115] h-[115]">
                    
                </div>
            </div>
            <div className="bg-[#322d34] w-[135px] h-[230px] p-3 m-3 rounded-lg shadow-lg flex justify-between text-white">
                <div className="bg-gray-600 w-[115] h-[115]">

                </div>
            </div>
            <div className="bg-[#322d34] w-[135px] h-[230px] p-3 m-3 rounded-lg shadow-lg flex justify-between text-white">
                <div className="bg-gray-600 w-[115] h-[115]">
                    
                </div>
            </div>
            <div className="bg-[#322d34] w-[135px] h-[230px] p-3 m-3 rounded-lg shadow-lg flex justify-between text-white">
                <div className="bg-gray-600 w-[115] h-[115]">
                    
                </div>
            </div>
            <div className="bg-[#322d34] w-[135px] h-[230px] p-3 m-3 rounded-lg shadow-lg flex justify-between text-white">
                <div className="bg-gray-600 w-[115] h-[115]">
                    
                </div>
            </div>
            <div className="bg-[#322d34] w-[135px] h-[230px] p-3 m-3 rounded-lg shadow-lg flex justify-between text-white">
                <div className="bg-gray-600 w-[115] h-[115]">
                    
                </div>
            </div>
            <div className="bg-[#322d34] w-[135px] h-[230px] p-3 m-3 rounded-lg shadow-lg flex justify-between text-white">
                <div className="bg-gray-600 w-[115] h-[115]">
                    
                </div>
            </div>
            <div className="bg-[#322d34] w-[135px] h-[230px] p-3 m-3 rounded-lg shadow-lg flex justify-between text-white">
                <div className="bg-gray-600 w-[115] h-[115]">
                    
                </div>
            </div>
            <div className="bg-[#322d34] w-[135px] h-[230px] p-3 m-3 rounded-lg shadow-lg flex justify-between text-white">
                <div className="bg-gray-600 w-[115] h-[115]">
                    
                </div>
            </div>
            <div className="bg-[#322d34] w-[135px] h-[230px] p-3 m-3 rounded-lg shadow-lg flex justify-between text-white">
                <div className="bg-gray-600 w-[115] h-[115]">
                    
                </div>
            </div>
        </main>


        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/file.svg"
              alt="File icon"
              width={16}
              height={16}
            />
            Learn
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/window.svg"
              alt="Window icon"
              width={16}
              height={16}
            />
            Examples
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/globe.svg"
              alt="Globe icon"
              width={16}
              height={16}
            />
            Go to nextjs.org →
          </a>
        </footer>

    </div>
  );
};

export default HomePage;