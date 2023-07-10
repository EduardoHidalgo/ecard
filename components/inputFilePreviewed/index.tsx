import { FC } from "react";
import { PhotoIcon } from "@heroicons/react/24/outline";
import { FormElement, FormElementProps } from "../formElement";
import { InputFile, InputFileProps } from "../inputFile";

export interface InputFilePreviewedProps
  extends Omit<InputFileProps, "label">,
    Omit<FormElementProps, "children"> {
  inputLabel: string;
  src: string | null;
}

export const InputFilePreviewed: FC<InputFilePreviewedProps> = ({
  className,
  inputLabel,
  formName,
  label,
  mimeTypes,
  name,
  onChange,
  src,
}) => {
  return (
    <FormElement {...{ label, className, formName }}>
      <div className="w-full flex justify-center border-4 border-primary-500 px-6 py-8">
        {src !== null ? (
          <img className="w-full h-full bg-cover" src={src} />
        ) : (
          <div className="text-center">
            <PhotoIcon
              className="mx-auto h-12 w-12 text-primary-500 mb-2"
              aria-hidden="true"
            />
            <InputFile {...{ onChange, name, mimeTypes, label: inputLabel }} />
          </div>
        )}
      </div>
    </FormElement>
  );
};
