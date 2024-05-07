import { getCategories } from "@/services/categoriesServices";
import { getAllProducts } from "@/services/productServices";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import Shop from "./shop";

interface SearchPageProps {
  searchParams: {
    min_price: string;
    max_price: string;
    category: string;
    sortBy: string;
    page: string;
  };
}

export default async function ShopPage({ searchParams }: SearchPageProps) {
  const queryClient = new QueryClient();
  const minPrice = parseFloat(searchParams.min_price as string);
  const maxPrice = parseFloat(searchParams.max_price as string);
  const page = parseInt(searchParams.page as string);
  const category = searchParams.category;
  const sortBy = searchParams.sortBy;

  await queryClient.prefetchQuery({
    queryKey: ["get-all-categories", minPrice, maxPrice, category],
    queryFn: getCategories,
  });

  await queryClient.prefetchQuery({
    queryKey: ["all-products", minPrice, maxPrice, category, sortBy, page],
    queryFn: () => getAllProducts(minPrice, maxPrice, category, sortBy, page),
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Shop />
    </HydrationBoundary>
  );
}
