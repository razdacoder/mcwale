import { validateRequest } from "@/services/actions";
import { getProductBySlug } from "@/services/productServices";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import { redirect } from "next/navigation";
import ProductDetail from "./product-detail";

type Props = {
  params: {
    slug: string;
  };
};

export default async function AdminProductDetail({ params }: Props) {
  const { isValid } = await validateRequest();
  if (!isValid) {
    redirect("/auth/login");
  }
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["admin-product-detail", params.slug],
    queryFn: () => getProductBySlug(params.slug),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ProductDetail slug={params.slug} />
    </HydrationBoundary>
  );
}
