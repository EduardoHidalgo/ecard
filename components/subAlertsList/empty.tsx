import { FC } from "react";
import { RocketLaunchIcon } from "@heroicons/react/24/outline";

export const EmptySubAlertList: FC = () => {
  return (
    <div className="relative block w-full border-2 border-primary-300 p-12 text-center">
      <RocketLaunchIcon className="mx-auto h-12 w-12 text-primary-500" />
      <span className="mt-2 block text-sm font-semibold text-gray-900">
        No hay ninguna suscripción que revisar, ¡Todo en orden!
      </span>
    </div>
  );
};
