"use client";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight, ShoppingCart } from "lucide-react";
import { cn } from "@/lib/utils";
import useSwiperNavigation from "@/hooks/sliderButton";
import "swiper/css";
import "swiper/css/navigation";
import { DefaultButton } from "@/ui/defaultButton";
import { REVIEWS } from "@/constants/reviews";
import { FaStar } from "react-icons/fa6";

export default function Reviews() {
  const { swiperRef, handlePrev, handleNext } = useSwiperNavigation();

  return (
    <div className="w-full lg:py-[80px]  lg:px-[40px] mt-[20px]">
      <div className="flex items-center justify-between mb-8">
        <div className="flex flex-row items-center gap-4">
<h2 className="lg:text-[46px] font-bold">
            Что говорят наши пациенты
          </h2>
          <div className="lg:bg-[#6F6F6F] lg:mt-[10px] lg:h-[35px] flex flex-row items-center rounded-[5px] py-[8px] px-[10px] ">
            <p className="lg:text-[18px] lg:leading-[140%] text-white ">
              Средняя оценка: 4.9/5
            </p>
            <div className="ml-3 flex flex-row items-center gap-1">
{[...Array(5)].map((_, index) => (
              <FaStar key={index + "xwq11"} className="text-white " />
            ))}
            </div>
            
          </div>
        </div>

        <div className="flex gap-2">
          <button
            onClick={handlePrev}
            className="p-2 rounded-full border border-gray-200 hover:bg-gray-100 transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="p-2 rounded-full border border-gray-200 hover:bg-gray-100 transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <Swiper
        modules={[Navigation]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        spaceBetween={16}
        slidesPerView={1}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
      >
        {REVIEWS.map((review) => (
          <SwiperSlide key={review.id}>
            <div className="bg-[#F8F8F8] lg:p-[20px] rounded-[15px]">
              <p className="lg:text-[16px] lg:leading-[140%] lg:tracking-[0]">
                {review.text}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
