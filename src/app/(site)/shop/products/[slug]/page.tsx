import {
  getProductBySlug,
  getRelatedProducts,
} from "@/services/productServices";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import ProductPage from "./_components/product-page";

export default async function ProductPageView({
  params,
}: {
  params: { slug: string };
}) {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["product", params.slug],
    queryFn: () => getProductBySlug(params.slug),
  });

  await queryClient.prefetchQuery({
    queryKey: ["related-products", params.slug],
    queryFn: () => getRelatedProducts(params.slug),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ProductPage slug={params.slug} />
    </HydrationBoundary>
  );
}
