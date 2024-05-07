"use client";
import { getProductBySlug } from "@/services/productServices";
import { useQuery } from "@tanstack/react-query";
import ProductForm from "../ProductForm";

type Props = {
  slug: string;
};
export default function ProductDetail({ slug }: Props) {
  const { data: product } = useQuery({
    queryKey: ["admin-product-detail", slug],
    queryFn: () => getProductBySlug(slug),
  });

  return (
    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
      <ProductForm product={product} />
    </main>
  );
}
