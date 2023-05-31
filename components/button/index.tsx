import { FC } from "react";

export interface ButtonProps {
  label: string;
  onClick?: () => void;
  type?: "button" | "reset" | "submit";
  style?: "primary" | "contrast";
}

export const Button: FC<ButtonProps> = ({ label, onClick, style, type }) => {
  let className = "";
  switch (style) {
    case "contrast":
      className =
        "w-full bg-primary-100 px-2.5 py-1.5 text-sm font-semibold text-black shadow-sm hover:bg-primary-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-200";
      break;
    case "primary":
    default:
      className =
        "w-full bg-primary-500 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600";
      break;
  }

  return (
    <button type={type} className={className} onClick={onClick}>
      {label}
    </button>
  );
};
