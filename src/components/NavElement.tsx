import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
type NavElementProps = {
  href: string;
  text: string;
  toggleOpen: () => void;
};

export default function NavElement({
  href,
  text,
  toggleOpen,
}: NavElementProps): React.JSX.Element {
  const path = usePathname();
  return (
    <Link href={href} className=" mt-1 border-b border-gray-600">
      <button
        className={`text-base p-2  ${path === href ? "text-primaryLight font-bold" : "text-white font-extralight "}  cursor-pointer`}
        onClick={toggleOpen}
      >
        {text}
      </button>
    </Link>
  );
}
