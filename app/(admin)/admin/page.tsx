"use client";
import { Metadata } from "next";

import { MainStatistics } from "@/components/mainStatistics";
import { SubAlertsList } from "@/components/subAlertsList";
import {
  STUB_ADMIN_MAIN_STATISTICS,
  STUB_ADMIN_MAIN_SUB_ALERTS,
} from "@/lib/stubs/stats";
import { Button } from "@/components/button";
import { useState } from "react";
import { SubAlert } from "@/types/models";

const metadata: Metadata = {
  title: "Admin",
};

export interface AdminPageProps {}

export default function AdminPage({}: AdminPageProps) {
  const [subAlerts, setSubAlerts] = useState<Array<SubAlert>>(
    STUB_ADMIN_MAIN_SUB_ALERTS
  );

  const onClickEmptySubAlerts = () => {
    setSubAlerts([]);
  };

  return (
    <div className="flex w-full flex-col gap-6">
      <MainStatistics
        intervalLabel="Últimos 30 días"
        stats={STUB_ADMIN_MAIN_STATISTICS}
      />
      <SubAlertsList subAlerts={subAlerts} />
      <Button label="vaciar lista (test)" onClick={onClickEmptySubAlerts} />
    </div>
  );
}
