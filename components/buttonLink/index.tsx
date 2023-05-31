import { FC } from "react";

export interface ButtonLinkProps {
  href: string;
  label: string;
}

export const ButtonLink: FC<ButtonLinkProps> = ({ href, label }) => {
  return (
    <a
      className="font-sans bg-primary-500 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
      type="button"
      href={href}
    >
      {label}
    </a>
  );
};
