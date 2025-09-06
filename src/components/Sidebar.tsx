import Logo from "./Logo";
import { MdClose } from "react-icons/md";
import NavElement from "@/components/NavElement";
import { IoIosNotifications } from "react-icons/io";

export default function Sidebar({
  toggleOpen,
  isOpen,
}: {
  toggleOpen: () => void;
  isOpen: boolean;
}) {
  return (
    <>
      {isOpen && (
        <div className=" fixed inset-0 bg-blue-950 opacity-50 z-10 md:hidden" />
      )}
      <aside
        className={`fixed z-30 h-full md:static top-16 md:top-0 left-0 w-80 bg-[#1A74EA] shadow-lg md:translate-x-0 transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="relative flex flex-col p-4 h-full">
          <div className=" mx-auto hidden md:block">
            <Logo />
          </div>
          <hr className=" hidden border-gray-50 my-4 w-full md:block" />
          <div className="hidden md:block mt-5">
            {" "}
            <IoIosNotifications className="w-10 h-9  text-gray-50 " />
          </div>
          <div className="w-full flex md:hidden">
            <button onClick={toggleOpen} className="ml-auto">
              <MdClose className={`w-9 h-9 text-white ml-auto`} />
            </button>
          </div>
          <nav className="mt-10 flex flex-col justify-center ">
            <NavElement
              href={"/dashboard"}
              text={"Dashboard"}
              toggleOpen={toggleOpen}
            />
            <NavElement
              href={"/events"}
              text={"Events"}
              toggleOpen={toggleOpen}
            />
            <NavElement
              href={"/admin"}
              text={"Admin"}
              toggleOpen={toggleOpen}
            />
          </nav>
        </div>
      </aside>
    </>
  );
}
