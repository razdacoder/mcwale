import useSupabaseServer from "@/lib/supabase-server";
import { cookies } from "next/headers";
import CarouselBanner from "./_components/carousel-banner";
import Category from "./_components/categories";

import { getAllCategories } from "@/services/categoriesServices";
import {
  getFeaturedProducts,
  getNewArrivals,
} from "@/services/productServices";
import { prefetchQuery } from "@supabase-cache-helpers/postgrest-react-query";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import FeaturedProducts from "./_components/featured";
import NewArrivals from "./_components/new-arrivals";

export default async function Home() {
  const queryClient = new QueryClient();
  const cookieStore = cookies();
  const supabase = useSupabaseServer(cookieStore);
  await prefetchQuery(queryClient, getNewArrivals(supabase));
  await prefetchQuery(queryClient, getFeaturedProducts(supabase));
  await prefetchQuery(queryClient, getAllCategories(supabase));

  return (
    <>
      <CarouselBanner />

      <HydrationBoundary state={dehydrate(queryClient)}>
        <Category />
        <FeaturedProducts />
        <NewArrivals />
      </HydrationBoundary>
    </>
  );
}
