import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin",
};

export interface AdminPageProps {}

export default function AdminPage({}: AdminPageProps) {
  return <h1>Admin Page</h1>;
}
