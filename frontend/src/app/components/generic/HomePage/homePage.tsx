import React from 'react';
import Image from 'next/image';
import CartButton from '../CartButton/CartButton';
import ProfileButton from '../ProfileButton/ProfileButton';
import SearchInput from '../SearchInput/SearchInput';
import BottomMenu from '../BottomMenu/DropdownCategory';


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

        <div className="m-1 font-serif ">
            <div className='flex items-center justify-center'>
                {/* Blok nr 1 */}
                <div className="bg-[#362328] w-4/12 h-96 m-2 flex overflow-auto rounded-3xl">
                    <div className='bg-gray-600 w-64 h-4/5 m-6'>
                        {/* <Image> wtedy ten szary blok się wywali </Image> */}
                    </div>

                        <div className='m-5 text-white w-80 h-4/5'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                            and more recently with desktop
                        </div>
                </div>
                {/* Blok nr 2 */}
                <div className="bg-[#362328] w-4/12 h-96 m-2 flex overflow-auto rounded-3xl">              
                    <div className='bg-gray-600 w-64 h-4/5 m-6'>
                        {/* <Image> wtedy ten szary blok się wywali </Image> */}
                    </div>
                        <div className='m-5 text-white w-80 h-4/5'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                            and more recently with desktop
                        </div>
                </div>
                {/* Blok nr 3 */}
                <div className="bg-[#362328] w-4/12 h-96 m-2 flex overflow-auto rounded-3xl">
                    <div className='bg-gray-600 w-64 h-4/5 m-6'>
                        {/* <Image> wtedy ten szary blok się wywali </Image> */}
                    </div>
                        <div className='m-5 text-white w-80 h-4/5'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                            and more recently with desktop
                        </div>
                </div>
            </div>
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