import { SubAlert } from "@/types/models";
import { FC } from "react";
import { ButtonLink } from "../buttonLink";
import { StatusAlertLabel } from "./statusAlertLabel";
import { EmptySubAlertList } from "./empty";

export interface SubAlerts {
  subAlerts: Array<SubAlert>;
}

export const SubAlertsList: FC<SubAlerts> = ({ subAlerts }) => {
  const baseUrl = `${process.env.NEXT_PUBLIC_APP_URL}admin/users/`;

  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-base font-semibold leading-6 text-gray-900">
        Alertas de Suscripciones
      </h2>
      {subAlerts.length === 0 && <EmptySubAlertList />}
      {subAlerts.length > 0 && (
        <ul
          role="list"
          className="divide-y-2 divide-primary-400 border-primary-400 border-2"
        >
          {subAlerts.map((sub) => (
            <li
              key={sub.username}
              className="flex items-center justify-between gap-x-6 py-3 px-2"
            >
              <div className="flex gap-x-4">
                <img
                  className="h-12 w-12 flex-none rounded-full bg-gray-50"
                  src={sub.avatar}
                  alt={sub.username}
                />
                <div className="min-w-0 flex-auto">
                  <p className="text-sm font-semibold leading-6 text-gray-900">
                    {sub.fullname}
                    {sub.type === "company" && (
                      <span className="inline-flex ml-2 items-center rounded-md bg-primary-200 px-1.5 py-0.5 text-xs font-medium text-white">
                        Empresa
                      </span>
                    )}
                  </p>
                  <div className="mt-1 truncate text-sm leading-5 flex flex-row gap-2">
                    <StatusAlertLabel status={sub.status} />
                    {/* TODO: create a dateShortener function for this abbrv. */}
                    <p className="text-gray-900 font-semibold">&bull;</p>
                    <p className="text-gray-500">hace 3d</p>
                  </div>
                </div>
              </div>
              <ButtonLink href={`${baseUrl}${sub.username}`} label="Ver" />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
