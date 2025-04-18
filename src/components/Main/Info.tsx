import Link from "next/link"
import { MAIN_INFO } from "@/constants/main-info"







export const InfoMain = () => {

    return (
        <section className="w-full lg:py-[80px] rounded-[20px] bg-[#F8F8F8]  lg:px-[40px] mt-[20px]">
            <div className="flex  flex-col lg:flex-row   lg:gap-[60px]">
                <div className="flex flex-col  justify-between flex-1">
                    <div className="flex flex-col lg:gap-[30px]">
                        <p className="lg:text-[46px] font-semibold">
                            INCARE LAB — это сеть лабораторий точной диагностики
                        </p>
                        <p className="lg:text-[18px]">
                            Диагностика основанная на инновациях, которые делают каждый результат максимально точными
                        </p>
                    </div>
                    <Link href={'/about'} className=" lg:mt-[62px] flex items-center py-2 justify-center lg:min-w-[245px] lg:max-w-[300px] rounded-full bg-[#434343] text-white lg:text-[18px]">
                    Узнать больше о нас
                    </Link>
                </div>
                {/*  statistic section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-[30px]">
                        {
                            MAIN_INFO.map((info  , index) => (
                                <div key={info.id + index} className="flex lg:min-h-[155px] lg:px-[22.25px] items-center justify-center rounded-[15px] bg-white ">
                                    <span className="lg:text-[18px] font-semibold">
                                        {info.title}
                                    </span>
                                </div>
                            ))
                        }
                </div>
            </div>
        </section>
            
    )
}