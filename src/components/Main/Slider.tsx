"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Link from "next/link";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";



interface SliderTypeForProps  {
  title: string;
  description: string;
  rightTitle: string;
  rightDescription: string;
  buttonText: string;
  buttonLink: string;
};

interface IPromoSliderProps {
    slides: SliderTypeForProps[]
}

export const PromoSlider = ({slides}: IPromoSliderProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const goToSlide = (index: number) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
  };

  return (
    <div className="relative bg-[#F8F8F8] w-full h-[500px] rounded-[20px]">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        className="w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col pt-[30px] px-[30px] items-start lg:flex-row  justify-between lg:px-[80px] lg:pt-[60px]">
              <div className="lg:w-[600px] mb-8 md:mb-0">
                <h2 className="lg:text-[46px] mb-4 font-semibold">
                  {slide.title}
                </h2>
                <p className="lg:text-lg mb-[64px]">{slide.description}</p>
                <Link href={slide.buttonLink}>
                  <button className="bg-buttonBlack lg:min-w-[245px] text-white px-4 py-3 rounded-full text-sm font-medium hover:bg-gray-700 transition-colors mt-8">
                    {slide.buttonText}
                  </button>
                </Link>
              </div>
              <div className=" lg:w-[365px] h-auto bg-[#EAEAEA] p-5 rounded-lg">
                <h3 className="lg:text-[26px] font-semibold mb-3">
                  {slide.rightTitle}
                </h3>
                <p className="lg:text-[18px]">{slide.rightDescription}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom navigation buttons */}
      <div className="absolute inset-y-1/2 left-0 z-10 -translate-y-1/2">
        <button
          onClick={handlePrev}
          className="w-10 h-10 ml-4 flex items-center justify-center bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
          aria-label="Previous slide"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 19L8 12L15 5"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <div className="absolute inset-y-1/2 right-0 z-10 -translate-y-1/2">
        <button
          onClick={handleNext}
          className="w-10 h-10 mr-4 flex items-center justify-center bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
          aria-label="Next slide"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 5L16 12L9 19"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* Custom pagination */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors ${
              activeIndex === index ? "bg-buttonBlack" : "bg-[#BABABA]"
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
