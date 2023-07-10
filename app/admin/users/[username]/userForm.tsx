"use client";
import { ChangeEvent, FC, useState } from "react";
import { UserCircleIcon } from "@heroicons/react/24/outline";

import { Button } from "@/components/button";
import { FormElement } from "@/components/formElement";
import { FormSection } from "@/components/formSection";
import { Input } from "@/components/input";
import { InputFile } from "@/components/inputFile";
import { Selector } from "@/components/selector";
import { MimeTypes } from "@/types/mimeTypes";

export interface UserFormProps {}

export const UserForm: FC<UserFormProps> = ({}) => {
  const [avatar, setAvatar] = useState<string | null>(null);

  const onChangeAvatar = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      const objectUrl = URL.createObjectURL(file);
      setAvatar(objectUrl);
    }
  };

  return (
    <form>
      <FormSection
        description="Información general de la cuenta del usuario."
        title="Información de Usuario"
        bottomDivider
      >
        <FormElement className="col-span-2" label="Tipo de cuenta">
          Empresarial
        </FormElement>
        <FormElement className="col-span-2" label="Fecha de creación">
          {new Date().toLocaleDateString()}
        </FormElement>
        <FormElement className="col-span-2" label="Última actualización">
          {new Date().toLocaleDateString()}
        </FormElement>
        <Selector
          className="col-span-full"
          label="Estatus"
          name="status"
          options={[
            { label: "Baneado", value: "banned" },
            { label: "Activo", value: "active" },
          ]}
        />
        <Input
          className="col-span-full"
          label="Correo"
          name="email"
          formName=""
          placeholder="https://usuario@mail.com"
          type="email"
        />
        <Input
          className="col-span-full"
          label="Nombre Completo"
          name="fullname"
          formName=""
          placeholder="Juan Pérez"
          type="text"
        />
        <Input
          className="col-span-full"
          label="Identificador de Usuario"
          name="username"
          formName=""
          placeholder="juan-perez"
          type="text"
        />
        <FormElement className="col-span-full" label="Avatar">
          {avatar ? (
            <img src={avatar} className="h-12 w-12 rounded-full" />
          ) : (
            <UserCircleIcon
              className="h-12 w-12 text-primary-500"
              aria-hidden="true"
            />
          )}
          <InputFile
            label="Actualizar avatar"
            mimeTypes={[MimeTypes[".png"]]}
            name="avatar"
            onChange={onChangeAvatar}
          />
        </FormElement>
        <FormElement className="col-span-full">
          <Button label="Actualizar usuario" type="button" />
        </FormElement>
      </FormSection>
    </form>
  );
};
