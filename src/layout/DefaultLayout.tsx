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
    <div className="h-screen flex ">
      <Siderbar isOpen={isOpen} toggleOpen={toggleOpen} />
      <div className="flex-1 flex flex-col">
        <Navbar isOpen={isOpen} toggleOpen={toggleOpen} />
        <div className="flex-1 p-6 overflow-y-auto w-full bg-gray-50">
          {children}
        </div>
      </div>
    </div>
  );
}
