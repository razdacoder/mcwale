import { getCategoryBySlug } from "@/services/categoriesServices";
import { getProductsByCategory } from "@/services/productServices";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import CategoryProducts from "./_components/products-category";

interface SearchPageProps {
  params: { slug: string };
  searchParams: {
    style: string;
    min_price: string;
    max_price: string;
    sortBy: string;
    page: string;
  };
}

export default async function ShopCategoryPage({
  params,
  searchParams,
}: SearchPageProps) {
  const queryClient = new QueryClient();

  const style = searchParams.style;
  const minPrice = parseFloat(searchParams.min_price as string);
  const maxPrice = parseFloat(searchParams.max_price as string);
  const page = parseInt(searchParams.page as string);
  const sortBy = searchParams.sortBy;

  await queryClient.prefetchQuery({
    queryKey: ["category", params.slug, style],
    queryFn: () => getCategoryBySlug(params.slug),
  });

  await queryClient.prefetchQuery({
    queryKey: [
      "category-products",
      params.slug,
      style,
      minPrice,
      maxPrice,
      sortBy,
      page,
    ],
    queryFn: () =>
      getProductsByCategory(
        params.slug,
        style,
        minPrice,
        maxPrice,
        sortBy,
        page
      ),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <CategoryProducts slug={params.slug} />
    </HydrationBoundary>
  );
}
