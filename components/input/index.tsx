import { ChangeEvent, FC, HTMLInputTypeAttribute } from "react";
import { FormElement, FormElementProps } from "../formElement";

export interface InputProps extends Omit<FormElementProps, "children"> {
  name: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  type?: HTMLInputTypeAttribute;
  value?: string;
}

export const Input: FC<InputProps> = ({
  className,
  formName,
  label,
  name,
  noLabel,
  onChange,
  placeholder,
  required,
  type,
  value,
}) => {
  return (
    <FormElement {...{ className, formName, label, noLabel }}>
      <input
        className="block w-full border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-primary-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
        id={name}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        type={type}
        value={value}
      />
    </FormElement>
  );
};
