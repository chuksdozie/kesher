import Logo from "./Logo";
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
        className={`fixed z-30 h-full md:static top-16 md:top-0 left-0 w-[300px] bg-primaryMain shadow-lg md:translate-x-0 transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="relative flex flex-col p-4 h-full">
          <Logo />

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
