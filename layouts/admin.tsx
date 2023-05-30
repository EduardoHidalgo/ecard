import { FC } from "react";

import { Modules } from "@/types/modules";
import { Dashboard, DashboardProps } from "@/components/dashboard";
import { AdminConfigContainer } from "@/containers/admin/config";
import { AdminHomeContainer } from "@/containers/admin/home";
import { AdminUsersContainer } from "@/containers/admin/users";

export interface AdminLayoutProps {
  dashboard: Omit<DashboardProps, "children">;
}

export const AdminLayout: FC<AdminLayoutProps> = ({ dashboard }) => {
  return (
    <Dashboard {...dashboard}>
      {dashboard.currentModule === Modules.config && <AdminConfigContainer />}
      {dashboard.currentModule === Modules.home && <AdminHomeContainer />}
      {dashboard.currentModule === Modules.users && <AdminUsersContainer />}
    </Dashboard>
  );
};
