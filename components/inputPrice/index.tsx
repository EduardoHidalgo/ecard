import { FC, HTMLInputTypeAttribute } from "react";
import { FormElement, FormElementProps } from "../formElement";

export interface InputPriceProps
  extends Omit<FormElementProps, "children" | "noLabel"> {
  name: string;
  required?: boolean;
}

export const InputPrice: FC<InputPriceProps> = ({
  name,
  className,
  formName,
  label,
  required,
}) => {
  return (
    <FormElement {...{ className, formName, label }}>
      <div className="w-full relative mt-2 rounded-md shadow-sm">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <span className="text-gray-500 sm:text-sm">$</span>
        </div>
        <input
          className="block w-full border-1 py-1.5 pl-7 text-gray-900 shadow-sm ring-1 ring-inset ring-primary-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
          id={name}
          name={name}
          placeholder="0.00"
          required={required}
          type="text"
        />
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
          <span className="text-gray-500 sm:text-sm" id="price-currency">
            MXN
          </span>
        </div>
      </div>
    </FormElement>
  );
};
