import React from "react";
import Link from "next/link";
import { BiLogoBaidu } from "react-icons/bi";

export default function Logo(): React.JSX.Element {
  return (
    <Link href={"/"} className="flex items-center ">
      <span className=" flex  items-center font-bold text-left w-full text-xl sm:text-3xl md:text-2xl text-[#1A74EA] md:text-gray-50">
        <BiLogoBaidu className=" mr-1 " size={40} /> kesher
      </span>
    </Link>
  );
}
