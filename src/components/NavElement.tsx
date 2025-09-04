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
      className={`text-2xl p-2 border-b border-gray-50 ${path === href ? "text-[#b29e2b] font-bold" : "text-gray-50 "}`}
    >
      <button onClick={toggleOpen}>{text}</button>
    </Link>
  );
}
