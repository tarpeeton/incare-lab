"use client"
import Link from "next/link";
import { PiShoppingCartThin } from "react-icons/pi";
import { NAV_ITEMS } from "@/constants/nav-items";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useState , useEffect  } from "react";

export const Header = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setOpenIndex(index);
  };

  const handleMouseLeave = () => {
    setOpenIndex(null);
  };


  return (
    <header className="px-[20px] lg:px-[40px] max-h-fit">
      {/* Top section */}
      <div className="flex flex-row lg:py-[15px] border-b border-[#EBEBEB] items-center justify-between">
        <div className="flex flex-row items-center lg:gap-[30px]">
          <Link href="/" className="lg:text-[26px] font-bold">
            INCARE LAB
          </Link>
          <p className="lg:text-[16px]">г. Ташкент</p>
        </div>

        <div className="flex flex-row items-center gap-[30px]">
          <div className="flex flex-row items-center lg:gap-[30px]">
            <div className="flex flex-col gap-0">
              <p className="lg:text-[14px] mb-[-3px] text-buttonBlack">
                Горячая линия:
              </p>
              <Link href="tel:+998000000000" className="lg:text-[18px] font-semibold">
                +998 00 000 00 00
              </Link>
            </div>
            <button className="lg:w-[30px] relative lg:h-[30px] ">
              <PiShoppingCartThin className="w-[25px] h-[25px]" />
              <p className="absolute top-[-10px] text-[14px] text-red-700 rounded-full right-[-5px]  flex justify-center items-center ">
                4
              </p>
            </button>
          </div>

          <div className="flex flex-row items-center gap-[15px]">
            <button className="bg-buttonBlack font-bold text-white rounded-full py-[10px] px-[15px]">
              Личный кабинет
            </button>
            <button className="border font-bold border-buttonBlack text-buttonBlack rounded-full py-[10px] px-[15px]">
              Результаты анализов
            </button>
          </div>
        </div>
      </div>

      {/* Navigation menu */}
     <nav className="flex w-full flex-row items-center justify-between mt-[15px] relative z-10">
        {NAV_ITEMS.map((nav, index) => {
          if (nav?.options) {
            return (
              <div
                key={index}
                onMouseEnter={() => handleMouseEnter(index)}
              
                className="relative cursor-pointer"
              >
                <div className="flex flex-row items-center gap-1 text-[18px] font-semibold text-black">
                  <span>{nav.name.ru}</span>
                  <MdKeyboardArrowDown className="text-xl" />
                </div>
                {openIndex === index && (
                  <div   onMouseLeave={handleMouseLeave} className="absolute flex flex-col min-w-[200px] bg-white shadow-lg border border-gray-200 mt-2 py-2 rounded-md z-20">
                    {nav.options.map((option, idx) => (
                      <Link
                        key={option.href + idx}
                        href={option.href}
                        className="px-4 py-2 text-[16px] text-black hover:bg-gray-100 transition-colors"
                      >
                        {option.name.ru}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          }

          return (
            <Link
              key={nav.href + index}
              href={nav.href}
              className="text-[18px] font-semibold text-black"
            >
              {nav.name.ru}
            </Link>
          );
        })}
      </nav>
    </header>
  );
};
