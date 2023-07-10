import classNames from "classnames";
import { FC, ReactNode } from "react";

export interface FormSectionProps {
  bottomDivider?: boolean;
  children: ReactNode;
  description: string;
  title: string;
}

export const FormSection: FC<FormSectionProps> = ({
  bottomDivider,
  children,
  description,
  title,
}) => {
  return (
    <div
      className={classNames(
        "grid grid-cols-1 gap-x-8 gap-y-10 pb-8 md:grid-cols-3",
        bottomDivider && "border-b-4 border-primary-500"
      )}
    >
      <div>
        <h2 className="text-base font-semibold leading-7 text-gray-900">
          {title}
        </h2>
        <p className="mt-1 text-sm leading-6 text-gray-600">{description}</p>
      </div>
      <div className="grid max-w-2xl grid-cols-1 md:gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
        {children}
      </div>
    </div>
  );
};
