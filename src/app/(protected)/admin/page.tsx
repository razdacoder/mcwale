import { validateRequest } from "@/services/actions";
import { redirect } from "next/navigation";
import DashboardPage from "./dashboard-page";

export default async function AdminDashboard() {
  const { isValid } = await validateRequest();
  if (!isValid) {
    redirect("/auth/login");
  }
  return <DashboardPage />;
}
