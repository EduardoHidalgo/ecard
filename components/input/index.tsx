import { FC, HTMLInputTypeAttribute } from "react";

export interface InputProps {
  formName?: string;
  label: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  type?: HTMLInputTypeAttribute;
}

export const Input: FC<InputProps> = ({
  formName,
  label,
  name,
  placeholder,
  required,
  type,
}) => {
  return (
    <div className="flex w-full flex-col justify-start">
      <label
        className="block text-sm font-medium leading-6 text-gray-900"
        htmlFor={formName}
      >
        {label}
      </label>
      <div className="mt-2">
        <input
          className="block w-full border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-primary-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
          id={name}
          name={name}
          required={required}
          type={type}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};
