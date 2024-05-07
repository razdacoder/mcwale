import { validateRequest } from "@/services/actions";
import { getCategories } from "@/services/categoriesServices";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import { redirect } from "next/navigation";
import ProductForm from "../ProductForm";

export default async function AddProductPage() {
  const { isValid } = await validateRequest();
  if (!isValid) {
    redirect("/auth/login");
  }
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["admin-get-all-categories"],
    queryFn: getCategories,
  });
  return (
    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
      <HydrationBoundary state={dehydrate(queryClient)}>
        <ProductForm />
      </HydrationBoundary>
    </main>
  );
}
