import { User } from "@/types/models";
import { FC } from "react";

export interface StatusBadgeProps {
  status: User["status"];
}

export const StatusBadge: FC<StatusBadgeProps> = ({ status }) => {
  const className =
    "inline-flex items-center rounded-md px-2 py-1 text-xs font-semibold";

  switch (status) {
    case "banned":
      return (
        <span className={`${className} bg-black text-white`}>baneado</span>
      );
    case "deleted":
      return (
        <span className={`${className} bg-red-500 text-white`}>eliminado</span>
      );
    case "disabled":
      return (
        <span className={`${className} bg-gray-500 text-white`}>
          deshabilitado
        </span>
      );
    case "missingData":
      return (
        <span className={`${className} bg-orange-500 text-white`}>
          incompleto
        </span>
      );
    case "show":
      return (
        <span className={`${className} bg-green-500 text-gray-900`}>
          activo
        </span>
      );
  }
};
