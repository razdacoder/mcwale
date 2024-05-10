import { validateRequest } from "@/services/actions";
import { getOrders } from "@/services/paymentServices";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import { redirect } from "next/navigation";
import OrderPage from "./order-page";

export default async function AdminOrdersPage() {
  const { isValid } = await validateRequest();
  if (!isValid) {
    return redirect("/auth/login");
  }
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["admin-get-all-orders"],
    queryFn: () => getOrders(),
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <OrderPage />;
    </HydrationBoundary>
  );
}
