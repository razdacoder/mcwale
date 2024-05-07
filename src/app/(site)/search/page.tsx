import { searchProducts } from "@/services/productServices";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import SortBy from "../shop/sort";
import SearchResults from "./search-page";

interface SearchPageProps {
  searchParams: {
    q: string;
    sortBy: string;
    page: number;
  };
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const queryClient = new QueryClient();

  const { q, sortBy, page } = searchParams;
  await queryClient.prefetchQuery({
    queryKey: ["search", q, sortBy, page],
    queryFn: () => searchProducts(q, page, sortBy),
  });
  return (
    <main className="container px-4 my-12">
      <div className=" mb-6 flex justify-between items-center">
        Search results for &quot;{searchParams.q}&quot;
        <SortBy />
      </div>

      <HydrationBoundary state={dehydrate(queryClient)}>
        <SearchResults />
      </HydrationBoundary>
    </main>
  );
}
