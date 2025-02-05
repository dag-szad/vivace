"use client"
import { useState} from "react";

interface Category{
    name: string;
    icon?:"";
}

const BottomMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const categories: Category[] = [
        {name: "Biografie i Wspomnienia", },
        {name: "Dla Dzieci", },
        {name: "Dla Młodzieży", },
        {name: "Fantastyka", },
        {name: "Horror", },
        {name: "Komiks", },
        {name: "Kryminał", },
        {name: "Literatura Faktu, Publicystyka", },
        {name: "Poradniki", },
        {name: "Literatura piękna", },
        {name: "Popularnonaukowe", },
        {name: "Sensacja, thriller", },
    ];
    const toggleDropdown = () => {
        setIsOpen((prev) => !prev ); 
    };

    return (
        <div className="relative ">
          <button className="z-50 gap-2 px-20 py-2 m-1  rounded" onClick={toggleDropdown}>
            Kategoria {isOpen ? "▲" : "▼"}
          </button>
          {isOpen && (
            <ul className="absolute top-full mt-2 border   rounded shadow-lg z-50">
              {categories.map((category, index) => (
                <li
                  key={index}
                  className="flex text-white gap-2 pr-2 py-2 cursor-pointer"
                >
                  <span className="icon">{category.icon}</span>
                  <span className="name">{category.name}</span>
                </li>
              ))}
            </ul>
          )}
          <button className="p-2 m-1 px-20  rounded "> Bestsellery </button>
          <button className="p-2 m-1 px-20  rounded "> Nowości </button>
          <button className="p-2 m-1 px-20  rounded "> Zapowiedzi </button>
          <button className="p-2 m-1 px-20  rounded "> Promocje </button>
        </div>
      );
    };

export default BottomMenu;