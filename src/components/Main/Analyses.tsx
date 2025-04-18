"use client"
import { useState,  } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import { ChevronLeft, ChevronRight, ShoppingCart } from "lucide-react"
import { cn } from "@/lib/utils"
import useSwiperNavigation from "@/hooks/sliderButton"
import "swiper/css"
import "swiper/css/navigation"
import { DefaultButton } from "@/ui/defaultButton"
import { analyses } from "@/constants/slider-analiz"


export default function MedicalAnalysisSlider() {

const { swiperRef, handlePrev, handleNext } = useSwiperNavigation()
  const [activeCategory, setActiveCategory] = useState("covid")



  const categories = [
    { id: "covid", name: "Коронавирус COVID-19" },
    { id: "women", name: "Для женщин" },
    { id: "men", name: "Для мужчин" },
    { id: "vitamins", name: "Витамины и минералы" },
    { id: "heart", name: "Сердце и сосуды" },
  ]



 const handleAddToCart = (analysis: { id: string; title: string; price: number; currency: string }) => {
    const existingCart = JSON.parse(localStorage.getItem("cart") || "[]")
    const analysisInCart = existingCart.find((item: { id: string }) => item.id === analysis.id)

    if (!analysisInCart) {
      existingCart.push(analysis)
      localStorage.setItem("cart", JSON.stringify(existingCart))
    }

  }
  

  return (
    <div className="w-full lg:py-[80px]  lg:px-[40px] mt-[20px]">
      <div className="flex items-center justify-between mb-8">
        <h2 className="lg:text-[46px] font-bold">Самые важные анализы</h2>
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

      <div className="flex flex-wrap gap-2 mb-[35px]">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium transition-colors",
              activeCategory === category.id
                ? "bg-[#4C4C4C] text-white"
                : "bg-[#EFEFEF] text-[#4C4C4C] hover:bg-gray-200",
            )}
          >
            {category.name}
          </button>
        ))}
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
        {analyses.map((analysis) => (
          <SwiperSlide key={analysis.id}>
            <div className="bg-[#F8F8F8] rounded-[20px] p-6 min-h-[260px] flex flex-col justify-between">
              <div>
<h3 className="font-medium text-lg mb-4">{analysis.title}</h3>
               <p className="font-bold text-lg mb-4">
                  {analysis.price.toLocaleString()} {analysis.currency}
                </p>
              </div>
              


              <div >
                <DefaultButton
                  onClick={() => handleAddToCart(analysis)}
                  icon={<ShoppingCart className="w-full h-full" />}
                  name={{ ru: "Добавить в корзину", uz: "", en: "" }}
                  className="hover:bg-[#3a3a3a] transition-colors"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="mt-8 w-full">
        <a
          href="/catalog"
          className="border-2  lg:min-w-[313px] lg:text-[15.1px] font-bold border-[#4C4C4C] text-[#4C4C4C] py-3 px-6 rounded-full uppercase hover:bg-gray-100 transition-colors"
        >
          Перейти в каталог анализов
        </a>
      </div>
    </div>
  )
}
