import { MdClose } from "react-icons/md";
import NavElement from "@/components/NavElement";

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
        className={`fixed z-30 h-full md:static top-16 left-0 w-80 bg-white shadow-lg md:translate-x-0 transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="relative flex flex-col p-4 h-full">
          <div className="w-full flex md:hidden">
            <button onClick={toggleOpen} className="ml-auto">
              <MdClose className={`w-9 h-9 text-[#1A74EA] ml-auto`} />
            </button>
          </div>
          <nav className="mt-20 flex flex-col justify-center ">
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
