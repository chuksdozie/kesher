import Link from "next/link";

export default function Logo(): React.JSX.Element {
  return (
    <div className="mx-auto">
      <Link href={"/"}>
        <span className="font-black font-serif text-3xl sm:text-3xl md:text-4xl text-[#1A74EA] md:text-gray-50">
          Kesher
        </span>
      </Link>
    </div>
  );
}
