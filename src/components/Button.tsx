import React from "react";

type ButtonProps = {
  variant?: "primary" | "secondary";
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
  text?: string;
  icon?: React.ReactNode;
};

export default function Button({
  variant = "primary",
  onClick,
  type = "button",
  disabled = false,
  className = "",
  text = "Button Text",
  icon = "",
}: ButtonProps) {
  const baseStyles =
    "px-4 py-2 rounded-md font-extraLight transition-colors duration-200 focus:outline-none text-xs font-extraBold cursor-pointer";

  const primaryStyles = `bg-blue-800 text-white hover:bg-blue-700 disabled:bg-blue-300`;
  const secondaryStyles =
    "bg-white text-gray-600 hover:bg-gray-300 disabled:bg-gray-100 border border-gray-300";

  const buttonStyles =
    variant === "primary"
      ? `${baseStyles} ${primaryStyles}`
      : `${baseStyles} ${secondaryStyles}`;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${buttonStyles} ${className}`}
    >
      {icon}
      {text}
    </button>
  );
}
