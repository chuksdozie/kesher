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
    blue: "text-[#131373]",
  };
  return (
    <div className="flex shadow-md rounded-lg bg-blue-50">
      <div className="flex p-2">
        <Icon className={` self-center w-14 h-14 ${colorClass[color]}`} />
      </div>
      <div className="flex flex-col h-20pace-y-2  p-4 ">
        <h2 className="text-xl font-bold mb-2 truncate self-center">{title}</h2>
        <div className="flex space-x-2">
          <div className=" self-center">
            <TbCurrencyNaira className="w-10 h-12" />
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
