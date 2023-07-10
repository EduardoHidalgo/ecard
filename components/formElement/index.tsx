import classNames from "classnames";
import { FC, ReactNode } from "react";

export interface FormElementProps {
  children: ReactNode;
  className?: string;
  formName?: string;
  label?: string;
  noLabel?: boolean;
}

export const FormElement: FC<FormElementProps> = ({
  children,
  className,
  label,
  formName,
  noLabel,
}) => {
  return (
    <div
      className={classNames("flex w-full flex-col justify-start", className)}
    >
      {!noLabel && (
        <label
          className="block text-sm font-medium leading-6 text-gray-900"
          htmlFor={formName}
        >
          {label}
        </label>
      )}
      <div className="flex items-center gap-x-3">{children}</div>
    </div>
  );
};
