import { FC } from "react";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

export interface SubscribeSuccessProps {}

export const SubscribeSuccess: FC<SubscribeSuccessProps> = ({}) => {
  return (
    <div className="text-center font-normal text-lg">
      <div className="flex flex-col gap-2 items-center text-primary-400 mb-4">
        <CheckCircleIcon className="w-12 h-12" />
        <p className="text-2xl font-title">¡Listo!</p>
      </div>
      <p>
        Te enviamos un mensaje al correo que proporcionaste con un enlace para
        verificar tu cuenta y llevarte al enlace de compra. Por favor revisa la
        bandeja de entrada de tu correo.
      </p>
    </div>
  );
};
