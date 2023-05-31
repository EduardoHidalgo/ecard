import { FC } from "react";
import Link from "next/link";

import { AdminUserRow, AdminUsersList } from "@/types/models";
import { Table, TableData, TableRow } from "@/components/table";

export interface AdminUsersTableProps {
  list: AdminUsersList;
}

export const AdminUsersTable: FC<AdminUsersTableProps> = ({ list }) => {
  const headers = [
    "usuario",
    "estatus",
    "compañia",
    "correo",
    "creado el",
    "tipo",
  ];

  const statusBadge = (status: AdminUserRow["status"]) => {
    const className =
      "inline-flex items-center rounded-md px-2 py-1 text-xs font-semibold";

    switch (status) {
      case "banned":
        return (
          <span className={`${className} bg-black text-white`}>baneado</span>
        );
      case "deleted":
        return (
          <span className={`${className} bg-red-500 text-white`}>
            eliminado
          </span>
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

  const userType = (type: AdminUserRow["type"]) => {
    switch (type) {
      case "enterprise":
        return "Empresarial";
      case "individual":
        return "Individual";
      case "nested":
        return "Empleado";
    }
  };

  return (
    <>
      <Table headers={headers} hasAction>
        {list.map((user) => (
          <TableRow
            key={user.username}
            index={user.username}
            hrefEdit={`/admin/users/${user.username}`}
          >
            <TableData>
              <div className="flex items-center">
                <div className="h-12 w-12 flex-shrink-0">
                  <img
                    className="h-12 w-12 rounded-full"
                    src={user.avatar}
                    alt={user.username}
                  />
                </div>
                <div className="ml-4">
                  <div className="font-medium text-gray-900">
                    {user.fullname}
                  </div>
                  <Link
                    className="mt-1 text-primary-500 underline underline-offset-1 cursor-pointer"
                    href={
                      user.type === "individual"
                        ? `/${user.username}`
                        : `/${user.companyUsername}/${user.username}`
                    }
                  >
                    {user.username}
                  </Link>
                </div>
              </div>
            </TableData>
            <TableData>{statusBadge(user.status)}</TableData>
            <TableData>{user.companyName}</TableData>
            <TableData>{user.email}</TableData>
            <TableData>{user.createdAt.toLocaleDateString()}</TableData>
            <TableData>{userType(user.type)}</TableData>
          </TableRow>
        ))}
      </Table>
    </>
  );
};
