"use client"
import Link from "next/link";
import { BiSolidMap } from "react-icons/bi";
import { YandexMapCustom } from "./Yandex";
import { useState } from "react";
import { LAB_LOCATIONS_WITH_COORDS } from "@/constants/yandex-map";






export const Map = () => {
  const [activeLab, setActiveLab] = useState<string | "">("");
  
  const handleLabSelect = (labId: string) => {
    setActiveLab(labId);
  };
  




  return (
    <section className="bg-[#F8F8F8] lg:py-[80px] lg:px-[40px]">
      <p className="lg:text-[46px] font-semibold">
        Найдите удобную лабораторию для вас
      </p>
      <div className="lg:mt-[40px] flex lg:flex-row lg:gap-[30px]">
        <div className="w-[65%] h-[800px]">
          {/* YANDEX MAP */}
          <YandexMapCustom activeLabId={activeLab} onLabSelect={handleLabSelect} />
        </div>
        
        <div className="flex-1">
          <p className="flex flex-row items-center gap-2">
            <BiSolidMap className="text-[#515151] lg:w-[22px] lg:h-[22px]" />
            <span className="font-semibold lg:text-[18px]">{LAB_LOCATIONS_WITH_COORDS.length} лабораторий</span>
          </p>
          
          <div className="labs-container mt-[15px] grid grid-cols-1 gap-[15px] lg:max-h-[800px] overflow-hidden overflow-y-auto">
            {LAB_LOCATIONS_WITH_COORDS.map((location) => (
              <div
                id={`lab-item-${location.id}`}
                key={location.id}
                className={`lg:p-[20px] flex flex-col gap-[20px] rounded-[15px] bg-white transition-all duration-300 ${
                  activeLab === location.id 
                    ? ' border-l-2 border-blue-500'
                    : 'hover:shadow-md'
                }`}
                onClick={() => handleLabSelect(location.id)}
              >
                <p className="lg:text-[18px] font-semibold">{location.title}</p>
                <div className="flex flex-col gap-[20px]">
                  <p className="lg:text-[16px]">{location.address}</p>
                  <p className="lg:text-[16px] whitespace-pre-wrap">
                    {location.schedule}
                  </p>
                </div>
                <div className="flex flex-row items-center gap-[12px]">
                  <Link
                    href={`/laboratory/${location.id}`}
                    className="rounded-full lg:py-[10px] uppercase lg:px-[15px] border-2 font-bold text-[12px] border-[#434343] text-[#434343] hover:bg-[#434343] hover:text-white transition-colors"
                  >
                    Подробнее о центре
                  </Link>
                  <p className="lg:text-[16px] font-semibold leading-[140%]">
                    {location.openTime}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};