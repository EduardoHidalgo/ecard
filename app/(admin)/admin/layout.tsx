"use client";
import { ReactNode, useState } from "react";
import { useRouter } from "next/navigation";
import { CogIcon, HomeIcon, UsersIcon } from "@heroicons/react/24/outline";
import "../../global.css";

import { Modules } from "@/types/modules";
import { Dashboard, DashboardProps } from "@/components/dashboard";

export interface AdminPageProps {
  children: ReactNode;
}

export default function AdminPage({ children }: AdminPageProps) {
  const router = useRouter();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentModule, setCurrentModule] = useState<Modules>(Modules.home);

  const items = [
    { name: "Panel Principal", icon: HomeIcon, module: Modules.home },
    { name: "Usuarios", icon: UsersIcon, module: Modules.users },
    { name: "Configuración", icon: CogIcon, module: Modules.config },
  ];
  const title = items.find((i) => i.module === currentModule)!.name;

  const onClickDrawerItem = (module: Modules) => {
    setCurrentModule(module);

    if (isSidebarOpen) setIsSidebarOpen(false);

    router.push(`/admin${module}`);
  };

  const onClickSidebar = (state: boolean) => setIsSidebarOpen(state);

  const props: DashboardProps = {
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
