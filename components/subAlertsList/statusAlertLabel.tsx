import { FC } from "react";
import { Subscription } from "@/types/models";

export interface StatusAlertLabelProps {
  status: Subscription["status"];
}

export const StatusAlertLabel: FC<StatusAlertLabelProps> = ({ status }) => {
  switch (status) {
    case "banned":
      return <p className="text-gray-600 font-bold">Baneado</p>;
    case "canceled":
      return <p className="text-red-600 font-bold">Cancelado</p>;
    case "deleted":
      return <p className="text-primary-400 font-bold">Eliminado</p>;
    case "payPending":
      return <p className="text-yellow-600 font-bold">Pago Pendiente</p>;
    case "payRejected":
      return <p className="text-orange-600 font-bold">Pago Rechazado</p>;

    default:
      return <p className="">Exception</p>;
  }
};
