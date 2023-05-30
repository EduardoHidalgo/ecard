"use client";
import { ReactNode, useState } from "react";
import { useRouter } from "next/navigation";
import { CogIcon, HomeIcon, UsersIcon } from "@heroicons/react/24/outline";
import "../../global.css";

import { AdminModules } from "@/types/modules";
import { Dashboard, DashboardProps } from "@/components/dashboard";

export interface AdminPageProps {
  children: ReactNode;
}

export default function AdminPage({ children }: AdminPageProps) {
  const router = useRouter();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentModule, setCurrentModule] = useState<AdminModules>(
    AdminModules.home
  );

  const items = [
    { name: "Panel Principal", icon: HomeIcon, module: AdminModules.home },
    { name: "Usuarios", icon: UsersIcon, module: AdminModules.users },
    { name: "Analíticas", icon: UsersIcon, module: AdminModules.analytics },
    { name: "Configuración", icon: CogIcon, module: AdminModules.config },
  ];
  const title = items.find((i) => i.module === currentModule)!.name;

  const onClickDrawerItem = (module: AdminModules) => {
    setCurrentModule(module);

    if (isSidebarOpen) setIsSidebarOpen(false);

    router.push(`/admin${module}`);
  };

  const onClickSidebar = (state: boolean) => setIsSidebarOpen(state);

  const props: DashboardProps<AdminModules> = {
    children,
    currentModule,
    isSidebarOpen,
    items,
    onClickDrawerItem,
    onClickSidebar,
    title,
  };

  return <Dashboard {...props} />;
}
