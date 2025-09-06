import React from "react";
import Navbar from "@/components/Navbar";
import Siderbar from "@/components/Sidebar";
import { useState } from "react";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="h-screen flex flex-col ">
      <header>
        <Navbar isOpen={isOpen} toggleOpen={toggleOpen} />
      </header>
      <div className="flex flex-1 overflow-hidden">
        <Siderbar isOpen={isOpen} toggleOpen={toggleOpen} />
        <main className="flex-1 overflow-y-auto ">{children}</main>
      </div>
    </div>
  );
}
