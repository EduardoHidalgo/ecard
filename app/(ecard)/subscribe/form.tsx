import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { FC } from "react";

export interface SubscribeFormProps {
  setSubmitted: (state: boolean) => void;
}

export const SubscribeForm: FC<SubscribeFormProps> = ({ setSubmitted }) => {
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
        label="Enviar correo de verificación"
        type="submit"
        onClick={() => setSubmitted(true)}
      />
    </form>
  );
};
