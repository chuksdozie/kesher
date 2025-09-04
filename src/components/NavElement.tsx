"use client";
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
    <Link
      href={href}
      className={`text-2xl p-2 ${path === href ? "text-[#1A74EA]" : "text-gray-900"}`}
    >
      <button onClick={toggleOpen}>{text}</button>
    </Link>
  );
}
