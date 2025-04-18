import React from "react";

interface IDefaultButtonProps {
  name: {
    ru: string;
    uz: string;
    en: string;
  };
  onClick: () => void;
  icon?: React.ReactNode;
  className?: string;
}

export const DefaultButton: React.FC<IDefaultButtonProps> = ({
  name,
  onClick,
  icon,
  className = "",
}) => {


  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-[10px] py-[10px] px-[15px] bg-[#434343] text-white font-bold rounded-full hover:bg-[#2e2e2e] transition-colors ${className}`}
    >
        {name.ru}
      {icon && <span className="w-5 h-5">{icon}</span>}
    </button>
  );
};
