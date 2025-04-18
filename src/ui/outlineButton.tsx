import React from "react";

interface IOutlineButton {
  name: {
    ru: string;
    uz: string;
    en: string;
  };
  onClick: () => void;
  icon?: React.ReactNode;
  className?: string;
}

export const OutLineButton: React.FC<IOutlineButton> = ({
  name,
  onClick,
  icon,
  className = "",
}) => {


  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-[10px] py-[10px] px-[15px] border border-[#434343] text-[#434343] rounded-full font-bold  transition-colors ${className}`}
    >
        {name.ru}
      {icon && <span className="w-5 h-5">{icon}</span>}
    </button>
  );
};
