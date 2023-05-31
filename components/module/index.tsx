import { FC, ReactNode } from "react";

export interface ModuleProps {
  children: ReactNode;
  title: string;
}

export const Module: FC<ModuleProps> = ({ children, title }) => {
  return (
    <div className="py-6">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <h1 className="font-title text-2xl font-semibold text-primary-700 border-b-4 border-primary-500">
          {title}
        </h1>
      </div>
      <div className="mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </div>
  );
};
