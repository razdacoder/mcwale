import { getCategoryBySlug } from "@/services/categoriesServices";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import EditCategoryPage from "./edit-category-page";

type Props = {
  params: { slug: string };
};

export default async function AddCategory({ params }: Props) {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["get-categories", params.slug],
    queryFn: () => getCategoryBySlug(params.slug),
  });
  return (
    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
      <HydrationBoundary state={dehydrate(queryClient)}>
        <EditCategoryPage slug={params.slug} />
      </HydrationBoundary>
    </main>
  );
}
