import { getAllAppointments } from "@/services/appointmnet";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import AppointmentClientPage from "./appointmnet-page";

export default async function AppointmentsPage() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["get-all-appointments"],
    queryFn: () => getAllAppointments(),
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <AppointmentClientPage />
    </HydrationBoundary>
  );
}
