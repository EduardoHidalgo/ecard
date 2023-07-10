"use client";
import { ChangeEvent, FC, useState } from "react";

import { Button } from "@/components/button";
import { FormElement } from "@/components/formElement";
import { FormSection } from "@/components/formSection";
import { Input } from "@/components/input";
import { InputFilePreviewed } from "@/components/inputFilePreviewed";
import { MimeTypes } from "@/types/mimeTypes";
import { InputMultiFile } from "@/components/inputMultiFile";
import { InputServices } from "@/components/inputServices";

export interface EcardFormProps {}

export const EcardForm: FC<EcardFormProps> = ({}) => {
  const [backgroundImage, setBackgroundImage] = useState<string | null>(null);

  const onChangeLogo = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      const objectUrl = URL.createObjectURL(file);
      setBackgroundImage(objectUrl);
    }
  };

  return (
    <form>
      <FormSection
        description="Información del eCard del usuario. Esta información es pública y visible a través de la página eCard del usuario."
        title="Detalles del eCard"
      >
        <Input
          className="col-span-full"
          label="Rol en tu empresa"
          name="jobPosition"
          formName=""
          placeholder="Gerente"
          type="text"
        />
        <Input
          className="col-span-full"
          label="Teléfono de Contacto"
          name="phone"
          formName=""
          placeholder="9980123456"
          type="tel"
        />
        <Input
          className="col-span-full"
          label="Whatsapp"
          name="whatsapp"
          formName=""
          placeholder="9980123456"
          type="tel"
        />
        <Input
          className="col-span-full"
          label="Video de Youtube"
          name="video"
          formName=""
          placeholder="https://youtube.com/url_id"
          type="url"
        />
        <InputFilePreviewed
          className="col-span-full"
          inputLabel="Actualizar fondo"
          label="Imagen de fondo"
          mimeTypes={[MimeTypes[".png"]]}
          name="logo"
          onChange={onChangeLogo}
          src={backgroundImage}
        />
        <InputMultiFile
          className="col-span-full"
          label="Carusel de Fotos"
          mimeTypes={[MimeTypes[".png"]]}
          name="carousel"
          inputLabel="Añadir imagen"
        />
        <InputServices />
        <FormElement className="col-span-full">
          <Button label="Actualizar eCard" type="button" />
        </FormElement>
      </FormSection>
    </form>
  );
};
