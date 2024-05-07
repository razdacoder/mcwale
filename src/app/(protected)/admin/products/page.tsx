import { validateRequest } from "@/services/actions";
import { getCategories } from "@/services/categoriesServices";
import { getAllProducts } from "@/services/productServices";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import { redirect } from "next/navigation";
import CategoriesList from "./categories-list";
import ProductActions from "./product-actions";
import ProductList from "./product-list";

export default async function AdminProductPage() {
  const { isValid } = await validateRequest();
  if (!isValid) {
    redirect("/auth/login");
  }
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["admin-get-all-products"],
    queryFn: () => getAllProducts(),
  });

  await queryClient.prefetchQuery({
    queryKey: ["admin-get-all-categories"],
    queryFn: getCategories,
  });
  return (
    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
      <div className="flex items-center">
        <ProductActions />
      </div>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <div className="flex gap-x-12">
          <ProductList />
          <CategoriesList />
        </div>
      </HydrationBoundary>
    </main>
  );
}
