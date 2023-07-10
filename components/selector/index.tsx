import { ChangeEvent, FC } from "react";
import { FormElement, FormElementProps } from "../formElement";

export interface SelectorProps extends Omit<FormElementProps, "children"> {
  name: string;
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
  options: Array<{ value: string; label: string }>;
}

export const Selector: FC<SelectorProps> = ({
  className,
  formName,
  label,
  name,
  onChange,
  options,
}) => {
  return (
    <FormElement {...{ className, formName, label }}>
      <select
        id={name}
        name={name}
        className="block w-full ring-1 ring-inset ring-primary-500 py-1.5 shadow-sm focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
        onChange={onChange}
      >
        {options.map((o) => (
          <option key={o.label} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </FormElement>
  );
};
