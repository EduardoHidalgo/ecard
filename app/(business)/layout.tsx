"use client";
import { ReactNode, useState } from "react";
import { useRouter } from "next/navigation";
import {
  ChartBarIcon,
  CogIcon,
  HomeIcon,
  UserIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import "../global.css";

import { BusinessModules } from "@/types/modules";
import { Dashboard, DashboardProps } from "@/components/dashboard";
import { montserrat, raleway } from "@/lib/fonts";

export interface BusinessRootLayoutProps {
  children: ReactNode;
}

export default function BusinessRootLayout({
  children,
}: BusinessRootLayoutProps) {
  const router = useRouter();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentModule, setCurrentModule] = useState<BusinessModules>(
    BusinessModules.home
  );

  const items = [
    { name: "Panel Principal", icon: HomeIcon, module: BusinessModules.home },
    { name: "Cuenta", icon: UserIcon, module: BusinessModules.account },
    { name: "Empleados", icon: UsersIcon, module: BusinessModules.employees },
    { name: "Métricas", icon: ChartBarIcon, module: BusinessModules.metrics },
    { name: "Configuración", icon: CogIcon, module: BusinessModules.config },
  ];
  const title = items.find((i) => i.module === currentModule)!.name;

  const onClickDrawerItem = (module: BusinessModules) => {
    setCurrentModule(module);

    if (isSidebarOpen) setIsSidebarOpen(false);

    router.push(`/dashboard${module}`);
  };

  const onClickSidebar = (state: boolean) => setIsSidebarOpen(state);

  const props: DashboardProps<BusinessModules> = {
    children,
    currentModule,
    isSidebarOpen,
    items,
    onClickDrawerItem,
    onClickSidebar,
    title,
  };

  return (
    <html lang="es" className={`${montserrat.variable} ${raleway.variable}`}>
      <body>
        <Dashboard {...props} />
      </body>
    </html>
  );
}
