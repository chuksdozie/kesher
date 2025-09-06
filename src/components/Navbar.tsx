import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoNotificationsCircleOutline } from "react-icons/io5";
import { RxAvatar } from "react-icons/rx";

export default function Navbar({
  toggleOpen,
}: {
  toggleOpen: () => void;
  isOpen: boolean;
}) {
  return (
    <div className="flex h-12 bg-gray-50 border-b border-gray-200">
      <div className=" flex items-center justify-end p-2 sm:px-4 md:px-6 lg:px-8 h-full  w-full">
        <button onClick={toggleOpen} className="md:hidden">
          <RxHamburgerMenu className="w-10 h-9 border rounded-md text-[#1A74EA] " />
        </button>

        <div className="flex items-center gap-2">
          <RxAvatar className="text-primaryMain" size={25} />
          <IoNotificationsCircleOutline
            className="text-primaryMain"
            size={25}
          />
        </div>
      </div>
    </div>
  );
}
