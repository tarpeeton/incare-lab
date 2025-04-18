"use client"

import { useState , useEffect } from "react"
import { FAQ_DATA } from "@/constants/faq"




export const Faq = () => {
    const [activeFaq , setActiveFaq] = useState("1b4e28ba-2fa1-11d2-883f-0016d3cca427")



    const handleActiveFaq = (id: string) => setActiveFaq(id)


    return (
        <section className="lg:py-[80px] lg:px-[40px] mt-[20px] rounded-[20px] bg-[#F8F8F8] ">
            <p className="lg:text-[46px] font-semibold lg:mb-[30px]">
                Вопросы, которые чаще всего задают новые клиенты:
            </p>

            <div className="flex flex-col gap-[10px] lg:w-[65%]">
                {
                    FAQ_DATA.map((faq) => (
                        <button onClick={() => handleActiveFaq(faq.id)} className={`flex text-left flex-wrap  p-[15px] bg-white rounded-[5px] flex-row ${activeFaq !== faq.id ? "h-[55px]" : ""} items-center justify-between `}>
                            
                            <p className="lg:text-[18px] font-semibold">
                                {faq.question}
                            </p>
                            <div className={`rounded-full bg-[#434343] text-center flex items-center justify-center text-white  w-[25px] h-[25px]`}>
                                <p className="lg:text-[22px] -mt-[3px]">
                                {faq.id === activeFaq ? "-" : "+"}
                                </p>
                            </div>


                        {faq.id === activeFaq && (
                            <div className="lg:mt-[11px] ">
                                <p className="lg:text-[16px]">
                                    {faq.answer}
                                </p>
                            </div>
                        )}
                        </button>
                    ))
                }
            </div>
        </section>

    )
}