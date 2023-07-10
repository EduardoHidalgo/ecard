import { MimeTypes } from "@/types/mimeTypes";
import { ChangeEvent, FC } from "react";

export interface InputFileProps {
  label: string;
  mimeTypes: Array<MimeTypes>;
  name: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const InputFile: FC<InputFileProps> = ({
  label,
  mimeTypes,
  name,
  onChange,
}) => {
  const accept = mimeTypes.join(", ");

  return (
    <label
      htmlFor={name}
      className="bg-primary-500 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-600 cursor-pointer"
    >
      <span>{label}</span>
      <input
        accept={accept}
        className="sr-only"
        id={name}
        name={name}
        onChange={onChange}
        type="file"
      />
    </label>
  );
};
