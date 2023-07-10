"use client";
import { ChangeEvent, FC, useState } from "react";
import { PhotoIcon } from "@heroicons/react/24/outline";

import { FormElement, FormElementProps } from "../formElement";
import { MimeTypes } from "@/types/mimeTypes";

export interface InputMultiFileProps
  extends Omit<FormElementProps, "children"> {
  inputLabel: string;
  name: string;
  mimeTypes: Array<MimeTypes>;
}

export const InputMultiFile: FC<InputMultiFileProps> = ({
  className,
  formName,
  inputLabel,
  label,
  mimeTypes,
  name,
  noLabel,
}) => {
  const accept = mimeTypes.join(", ");

  const [images, setImages] = useState<Array<string>>([]);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      const objectUrl = URL.createObjectURL(file);
      setImages([...images, objectUrl]);
    }
  };

  return (
    <FormElement {...{ className, formName, label, noLabel }}>
      <div className="grid grid-flow-row auto-rows-auto grid-cols-3 w-full gap-2">
        {images.map((image) => (
          <div
            className="h-32 sm:h-44 bg-contain bg-center border-4 border-primary-500 bg-no-repeat"
            style={{
              backgroundImage: `url(${image})`,
            }}
          ></div>
        ))}
        <div className="h-32 sm:h-44 flex justify-center items-center border-4 border-primary-500 p-2 sm:px-6 sm:py-8">
          <div className="text-center">
            <PhotoIcon
              className="hidden sm:block mx-auto h-12 w-12 text-primary-500 mb-2"
              aria-hidden="true"
            />
            <label
              htmlFor={name}
              className="flex bg-primary-500 px-1 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-600 cursor-pointer"
            >
              <span>{inputLabel}</span>
              <input
                accept={accept}
                className="sr-only"
                id={name}
                name={name}
                onChange={onChange}
                type="file"
              />
            </label>
          </div>
        </div>
      </div>
    </FormElement>
  );
};
