import {
  getFeaturedProducts,
  getNewArrivals,
} from "@/services/productServices";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";

import { getCategories } from "@/services/categoriesServices";
import CarouselBanner from "./_components/carousel-banner";
import CategorySection from "./_components/categories";
import FeaturedProducts from "./_components/featured";
import NewArrivals from "./_components/new-arrivals";

export default async function Home() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["get-all-categories"],
    queryFn: getCategories,
  });

  await queryClient.prefetchQuery({
    queryKey: ["get-featured"],
    queryFn: getFeaturedProducts,
  });

  await queryClient.prefetchQuery({
    queryKey: ["get-new-arrivals"],
    queryFn: getNewArrivals,
  });

  // await prefetchQuery(queryClient, getAllCategories(supabase));

  return (
    <>
      <CarouselBanner />
      <HydrationBoundary state={dehydrate(queryClient)}>
        <CategorySection />
        <FeaturedProducts />
        <NewArrivals />
      </HydrationBoundary>
    </>
  );
}
