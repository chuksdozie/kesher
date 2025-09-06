import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosNotifications } from "react-icons/io";
import Logo from "./Logo";

export default function Navbar({
  toggleOpen,
}: {
  toggleOpen: () => void;
  isOpen: boolean;
}) {
  return (
    <nav className="fixed top-0 left-0 z-20  h-16 w-full bg-[#EAF3FF] shadow-sm shadow-[#1A74EA] md:hidden">
      <div className=" flex items-center justify-between p-2 sm:px-4 md:px-6 lg:px-8 h-full ">
        <button onClick={toggleOpen} className="md:hidden">
          <RxHamburgerMenu className="w-10 h-9 border rounded-md text-[#1A74EA] " />
        </button>
        <Logo />
        <IoIosNotifications className="w-10 h-9  text-[#1A74EA] " />
      </div>
    </nav>
  );
}
