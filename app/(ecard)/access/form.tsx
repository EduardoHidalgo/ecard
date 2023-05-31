import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { FC } from "react";

export interface AccessFormProps {
  setSubmitted: (state: boolean) => void;
}

export const AccessForm: FC<AccessFormProps> = ({ setSubmitted }) => {
  return (
    <form className="space-y-6" action="#" method="POST" name="login">
      <Input
        label="Correo"
        name="email"
        formName="login"
        placeholder="correo@mail.com"
        required={true}
        type="email"
      />
      <Button
        label="Enviar correo de acceso"
        type="submit"
        onClick={() => setSubmitted(true)}
      />
    </form>
  );
};
