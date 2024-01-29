import useSupabaseServer from "@/lib/supabase-server";
import { getProductsByCategory } from "@/services/productServices";
import { prefetchQuery } from "@supabase-cache-helpers/postgrest-react-query";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { cookies } from "next/headers";
import CategoryProducts from "./_components/products-category";

export default async function ShopCategoryPage({
  params,
}: {
  params: { slug: string };
}) {
  const queryClient = new QueryClient();
  const cookieStore = cookies();
  const supabase = useSupabaseServer(cookieStore);
  await prefetchQuery(
    queryClient,
    getProductsByCategory(supabase, params.slug)
  );
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <CategoryProducts slug={params.slug} />
    </HydrationBoundary>
  );
}
