import { FC } from "react";
import { FormElement, FormElementProps } from "../formElement";

export interface InputAreaProps extends Omit<FormElementProps, "children"> {
  name: string;
  placeholder?: string;
  required?: boolean;
}

export const InputArea: FC<InputAreaProps> = ({
  className,
  formName,
  label,
  name,
  placeholder,
  required,
}) => {
  return (
    <FormElement {...{ className, formName, label }}>
      <textarea
        className="block w-full border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-primary-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
        id={name}
        name={name}
        required={required}
        rows={3}
        placeholder={placeholder}
      />
    </FormElement>
  );
};
