import { FC } from "react";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

export interface AccessSuccessProps {}

export const AccessSuccess: FC<AccessSuccessProps> = ({}) => {
  return (
    <div className="text-center font-normal text-lg">
      <div className="flex flex-col gap-2 items-center text-primary-400 mb-4">
        <CheckCircleIcon className="w-12 h-12" />
        <p className="text-2xl font-title">¡Listo!</p>
      </div>
      <p>
        ¡Listo! Te enviamos un mensaje al correo que proporcionaste con un
        enlace para acceder a tu cuenta.
      </p>
    </div>
  );
};
