"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function NavElement({
  href,
  text,
}: {
  href: string;
  text: string;
}): React.JSX.Element {
  const path = usePathname();
  return (
    <Link
      href={href}
      className={`text-2xl p-2 ${path === href ? "text-[#1A74EA]" : "text-gray-900"}`}
    >
      {text}
    </Link>
  );
}
