"use client";
import { ReactNode, useState } from "react";
import { useRouter } from "next/navigation";
import {
  ChartBarIcon,
  CogIcon,
  HomeIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import "../global.css";

import { UserModules } from "@/types/modules";
import { Dashboard, DashboardProps } from "@/components/dashboard";
import { montserrat, raleway } from "@/lib/fonts";

export interface DashboardRootLayoutProps {
  children: ReactNode;
}

export default function DashboardRootLayout({
  children,
}: DashboardRootLayoutProps) {
  const router = useRouter();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentModule, setCurrentModule] = useState<UserModules>(
    UserModules.home
  );

  const items = [
    { name: "Panel Principal", icon: HomeIcon, module: UserModules.home },
    { name: "Perfil", icon: UserIcon, module: UserModules.profile },
    { name: "Configuración", icon: CogIcon, module: UserModules.config },
  ];
  const title = items.find((i) => i.module === currentModule)!.name;

  const onClickDrawerItem = (module: UserModules) => {
    setCurrentModule(module);

    if (isSidebarOpen) setIsSidebarOpen(false);

    router.push(`/dashboard${module}`);
  };

  const onClickSidebar = (state: boolean) => setIsSidebarOpen(state);

  const goToEcard = () => router.push("/eduardo");

  const props: DashboardProps<UserModules> = {
    children,
    currentModule,
    goToEcard,
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
