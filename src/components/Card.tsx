import React from "react";
import { IconType } from "react-icons";
import { TbCurrencyNaira } from "react-icons/tb";
type CardProps = {
  title: string;
  value: number;
  color: "red" | "green" | "blue";
  icon: IconType;
};

export default function Card({
  title,
  value,
  color,
  icon: Icon,
}: CardProps): React.JSX.Element {
  const colorClass = {
    red: "text-[#A50303]",
    green: "text-[#028402]",
    blue: "text-primaryMain",
  };
  return (
    <div className="flex rounded-lg bg-white border border-gray-200 p-4 gap-2">
      <div className="flex p-2">
        <Icon className={` self-center  ${colorClass[color]}`} size={25} />
      </div>
      <div className="flex flex-col  py-2  items-start min-w-[250px]">
        <h2 className="text-base  mb truncate text-textMain ">{title}</h2>
        <div className="flex ">
          <div className="">
            <TbCurrencyNaira className="" size={35} />
          </div>
          <div className="self-center">
            <p className={`text-3xl font-semibold ${colorClass[color]}`}>
              {value}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
