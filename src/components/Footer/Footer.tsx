import Link from "next/link";

import { FaFacebookF } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FOR_CLIENTS, FOOTER_ABOUT_COMPANY } from "@/constants/footer";

const SOCIALS = [
  {
    id: "00sf234",
    icon: <FaFacebookF className="text-white" />,
    url: "",
  },
  {
    id: "00s234!!f234",
    icon: <FaTelegramPlane className="text-white" />,
    url: "",
  },
  {
    id: "00s!ssf234",
    icon: <RiInstagramFill className="text-white" />,
    url: "",
  },
];

export const Footer = () => {
  return (
    <footer className="lg:mb-[40px] lg:px-[40px]">
      <div className="lg:py-[15px]">
        <div className="w-full bg-[#BBBBBB] h-[1px] " />

        <div className="lg:my-[40px] flex flex-row justify-between">
          <div className="flex flex-col gap-[20px]">
            {/* LOGO */}
            <p className="lg:text-[26px] font-semibold leading-[100%]">
              INCARE LAB
            </p>

            <div className="flex flex-col gap-2">
              <Link
                href={"tel:+998 00 000 00 00"}
                className="lg:text-[22px] text-[#434343] font-semibold"
              >
                +998 00 000 00 00
              </Link>
              <p className="lg:text-[16px] ">
                Ответим на любые вопросы по работе и услугам
              </p>
            </div>
            <div className="flex flex-row items-center gap-2">
              {SOCIALS.map((item) => (
                <Link
                  href={item.url}
                  key={item.id}
                  className="rounded-full w-[30px] h-[30px] flex items-center justify-center bg-[#434343]"
                >
                  {item.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* 1 */}
          <div className="flex flex-col gap-[5px]">
            <p className="lg:text-[18px]  font-semibold  lg:leading-[140%]">
              Клиентам
            </p>
            {FOR_CLIENTS.map((link) => (
              <Link
                href={link.url}
                key={link.id}
                className="lg:text-[16px] hover:text-black transition-colors font-semibold text-[#717171] lg:leading-[140%]"
              >
                {link.name}
              </Link>
            ))}
          </div>
          {/* 2 */}
          <div className="flex flex-col gap-[5px]">
            <p className="lg:text-[18px]  font-semibold  lg:leading-[140%]">
              Скидки и акции
            </p>
            <p className="lg:text-[16px]  font-semibold hover:text-black transition-colors text-[#717171] lg:leading-[140%]">
              Программа лояльности
            </p>
            <p className="lg:text-[16px]  font-semibold hover:text-black transition-colors  text-[#717171] lg:leading-[140%]">
              Акции
            </p>
          </div>

          {/* 3 */}
          <div className="flex flex-col gap-[5px]">
            <p className="lg:text-[18px]  font-semibold  lg:leading-[140%]">
              Скидки и акции
            </p>
            {FOOTER_ABOUT_COMPANY.map((link) => (
              <Link
                href={link.url}
                key={link.id}
                className="lg:text-[16px] font-semibold hover:text-black transition-colors text-[#717171] lg:leading-[140%]"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="w-full bg-[#BBBBBB] h-[1px] " />

        <div className="flex flex-row items-center justify-between lg:mt-[20px] font-semibold hover:text-black transition-colors">
          <p className="text-[#717171]  lg:text-[16px]">2025© INCARE LAB</p>
          <div className="flex lg:flex-row items-center  lg:gap-[30px]">
            <Link
              href={""}
              className="text-[#717171]  lg:text-[16px] font-semibold hover:text-black transition-colors"
            >
              Правовая информация
            </Link>
            <Link
              href={""}
              className="text-[#717171]  lg:text-[16px] font-semibold hover:text-black transition-colors"
            >
              Общие документы
            </Link>
            <Link
              href={""}
              className="text-[#717171]  lg:text-[16px] font-semibold hover:text-black transition-colors"
            >
              Обработка персональных данных
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
