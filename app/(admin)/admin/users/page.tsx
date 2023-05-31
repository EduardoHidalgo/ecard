import { Metadata } from "next";
import { AdminUsersTable } from "./table";
import { STUB_ADMIN_USERS_LIST } from "@/lib/stubs/users";

const metadata: Metadata = {
  title: "Admin Usuarios",
};

export default function AdminUsersPage() {
  const list = STUB_ADMIN_USERS_LIST;

  return (
    <>
      <AdminUsersTable list={list} />
    </>
  );
}
