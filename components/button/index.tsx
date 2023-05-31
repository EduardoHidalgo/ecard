import { FC } from "react";

export interface ButtonProps {
  label: string;
  onClick?: () => void;
  type?: "button" | "reset" | "submit";
}

export const Button: FC<ButtonProps> = ({ label, onClick, type }) => {
  return (
    <button
      type={type}
      className="w-full bg-primary-500 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
      onClick={onClick}
    >
      {label}
    </button>
  );
};
