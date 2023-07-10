"use client";
import { ChangeEvent, FC, useState } from "react";

import { Button } from "@/components/button";
import { FormElement } from "@/components/formElement";
import { FormSection } from "@/components/formSection";
import { Input } from "@/components/input";
import { InputArea } from "@/components/inputArea";
import { InputFilePreviewed } from "@/components/inputFilePreviewed";
import { MimeTypes } from "@/types/mimeTypes";

export interface CompanyFormProps {}

export const CompanyForm: FC<CompanyFormProps> = ({}) => {
  const [logo, setLogo] = useState<string | null>(null);
  const [imageContent, setImageContent] = useState<string | null>(null);

  const onChangeLogo = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      const objectUrl = URL.createObjectURL(file);
      setLogo(objectUrl);
    }
  };

  const onChangeImageContent = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      const objectUrl = URL.createObjectURL(file);
      setImageContent(objectUrl);
    }
  };

  return (
    <form>
      <FormSection
        description="Información de la empresa vinculado a la cuenta de tipo empresarial. Todas las cuentas de empleados vinculadas a esta cuenta compartirán esta información aunque sin poder modificarla."
        title="Información de Compañia"
        bottomDivider
      >
        <Input
          className="col-span-full"
          label="Nombre de la Empresa"
          name="companyName"
          formName=""
          placeholder="Mi Empresa"
          type="text"
        />
        <Input
          className="col-span-full"
          label="Identificador de Compañia"
          name="companyUsername"
          formName=""
          placeholder="mi-empresa"
          type="text"
        />
        <Input
          className="col-span-full"
          label="Sitio web"
          name="website"
          formName=""
          placeholder="https://sitioweb.com"
          type="url"
        />
        <Input
          className="col-span-full"
          label="Eslogan"
          name="slogan"
          formName=""
          placeholder="La compañia que vende lo mejor"
          type="text"
        />
        <InputArea
          name="description"
          className="col-span-full"
          label="Descripción"
          placeholder="Descripción detallada de la compañia..."
        />
        <InputFilePreviewed
          className="col-span-full"
          inputLabel="Actualizar logo"
          label="Logo de la compañia"
          mimeTypes={[MimeTypes[".png"]]}
          name="logo"
          onChange={onChangeLogo}
          src={logo}
        />
        <InputFilePreviewed
          className="col-span-full"
          inputLabel="Actualizar imagen"
          label="Imagen principal de la compañia"
          mimeTypes={[MimeTypes[".png"]]}
          name="imageContent"
          onChange={onChangeImageContent}
          src={imageContent}
        />
        <FormElement className="col-span-full">
          <Button label="Actualizar compañia" type="button" />
        </FormElement>
      </FormSection>
    </form>
  );
};
