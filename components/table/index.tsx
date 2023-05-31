import { FC, ReactNode } from "react";
import { Button } from "../button";
import { ButtonLink } from "../buttonLink";

export interface TableProps {
  children: ReactNode;
  hasAction: boolean;
  headers: Array<string>;
}

export const Table: FC<TableProps> = ({ children, hasAction, headers }) => {
  return (
    <div className="mt-8 flow-root shadow">
      <div className="overflow-x-auto">
        <div className="inline-block min-w-full align-middle">
          <div className="overflow-hidden border-2 border-primary-400">
            <table className="min-w-full divide-y divide-gray-300">
              <thead className="bg-primary-400">
                <tr>
                  {headers.map((header) => (
                    <th
                      scope="col"
                      className="px-3 py-4 text-left text-sm font-semibold text-white"
                    >
                      {header}
                    </th>
                  ))}
                  {hasAction && (
                    <th scope="col" className="relative py-4 px-3">
                      <span className="sr-only">Edit</span>
                    </th>
                  )}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {children}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export interface TableRowProps {
  children: ReactNode;
  hrefEdit: string;
  index: number | string;
}

export const TableRow: FC<TableRowProps> = ({ children, hrefEdit, index }) => {
  return (
    <tr key={index} className="">
      {children}
      {hrefEdit && (
        <td className="whitespace-nowrap px-3 py-4">
          <ButtonLink label="Editar" href={hrefEdit} />
        </td>
      )}
    </tr>
  );
};

export interface TableDataProps {
  children: ReactNode;
}

export const TableData: FC<TableDataProps> = ({ children }) => {
  return <td className="whitespace-nowrap px-3 py-4">{children}</td>;
};
