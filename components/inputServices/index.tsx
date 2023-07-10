"use client";
import { ChangeEvent, FC, useState } from "react";
import { PhotoIcon } from "@heroicons/react/24/outline";

import { FormElement } from "../formElement";
import { MimeTypes } from "@/types/mimeTypes";
import { Input } from "../input";
import { Button } from "../button";
import { Service } from "@/types/models";

export interface InputServicesProps {}

export const InputServices: FC<InputServicesProps> = ({}) => {
  const accept = [MimeTypes[".png"]].join(", ");

  const [services, setServices] = useState<Array<Service>>([]);
  const [image, setImage] = useState<string | null>(null);
  const [label, setLabel] = useState<string>("");
  const [link, setLink] = useState<string>("");

  const onChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      const objectUrl = URL.createObjectURL(file);
      setImage(objectUrl);
    }
  };

  const onChangeLabel = (e: ChangeEvent<HTMLInputElement>) => {
    setLabel(e.target.value);
  };

  const onChangeLink = (e: ChangeEvent<HTMLInputElement>) => {
    setLink(e.target.value);
  };

  const onClickSubmit = () => {
    if (image !== null && label.length > 0 && link.length > 0) {
      setServices([
        ...services,
        {
          image,
          label,
          link,
        },
      ]);

      setImage(null);
      setLabel("");
      setLink("");
    }
  };

  return (
    <FormElement className="col-span-full" label="Servicios">
      <div className="flex flex-col gap-4">
        {services.map((service) => (
          <div className="grid grid-flow-row auto-rows-auto grid-cols-3 w-full gap-2">
            <div className="col-span-1 flex justify-center items-center border-4 border-primary-500 p-2 sm:px-6 sm:py-8">
              <img src={service.image} />
            </div>
            <div className="col-span-2 flex flex-col w-full justify-between gap-2">
              <Input
                className="col-span-full"
                label="Nombre"
                name="label"
                formName=""
                placeholder="Nombre de tu servicio"
                type="text"
                value={service.label}
              />
              <Input
                className="col-span-full"
                label="Enlace"
                name="link"
                formName=""
                placeholder="https://my-company/my-service"
                type="url"
                value={service.link}
              />
              <div className="flex flex-row gap-2">
                <Button label="Actualizar" />
                <Button label="Eliminar" style="danger" />
              </div>
            </div>
          </div>
        ))}

        <div className="grid grid-flow-row auto-rows-auto grid-cols-3 w-full gap-2">
          <div className="col-span-1 flex justify-center items-center border-4 border-primary-500 p-2 sm:px-6 sm:py-8">
            {image !== null ? (
              <img className="w-full h-full bg-cover" src={image} />
            ) : (
              <div className="text-center">
                <PhotoIcon
                  className="hidden sm:block mx-auto h-12 w-12 text-primary-500 mb-2"
                  aria-hidden="true"
                />
                <label
                  htmlFor={"serviceImage"}
                  className="flex bg-primary-500 px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-600 cursor-pointer"
                >
                  <span>Añadir Imagen</span>
                  <input
                    accept={accept}
                    className="sr-only"
                    id={"serviceImage"}
                    name={"serviceImage"}
                    onChange={onChangeImage}
                    type="file"
                  />
                </label>
              </div>
            )}
          </div>
          <div className="col-span-2 flex flex-col w-full justify-between gap-2">
            <Input
              className="col-span-full"
              label="Nombre"
              name="serviceLabel"
              onChange={onChangeLabel}
              placeholder="Nombre de tu servicio"
              type="text"
              value={label}
            />
            <Input
              className="col-span-full"
              label="Enlace"
              name="serviceLink"
              onChange={onChangeLink}
              placeholder="https://my-company/my-service"
              type="url"
              value={link}
            />
            <Button
              label="Añadir servicio"
              onClick={onClickSubmit}
              type="button"
            />
          </div>
        </div>
      </div>
    </FormElement>
  );
};
