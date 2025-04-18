"use client"
import { DefaultButton } from "@/ui/defaultButton"
import Image from "next/image"
import { useRouter } from "next/navigation"

import { SERVICES } from '@/constants/services'



export const Service = () => {
    const router = useRouter()

    const handleClickToRoute = (href: string) => {
        router.push(href)
    }

    return (
        <section className="bg-[#F8F8F8] mt-[20px] rounded-[20px] lg:px-[40px] lg:py-[80px]">
            <div>
                <h1 className="lg:text-[46px] font-semibold">Услуги и анализы</h1>
                <p className="lg:text-[26px] font-semibold">для вас и ваших близких</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[30px] lg:mt-[30px]">
                {SERVICES.map((service, idx) => (
                    <div key={idx} className="bg-[#FFFFFF] rounded-[15px] flex flex-col gap-[20px] p-[20px] lg:min-h-[160px]">
                        <div className="w-[20px] h-[20px]">
                            <Image
                                src={service.icon}
                                alt=""
                                width={30}
                                height={30}
                                quality={100}
                                className="w-full h-full"
                            />
                        </div>
                        <p className="lg:text-[18px] font-semibold">{service.title}</p>
                        <div>
 <DefaultButton
                            name={service.buttonText}
                            onClick={() => handleClickToRoute(service.route)}
                        />
                        </div>
                       
                    </div>
                ))}
            </div>
        </section>
    )
}
