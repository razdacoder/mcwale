"use client";
import ProductSkeleton from "@/components/ProductSkeleton";
import ProductCard from "@/components/layouts/ProductCard";
import { Product } from "@/lib/types";
import { searchProducts } from "@/services/productServices";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import Paginator from "../shop/paginator";

export default function SearchResults() {
  const searchParams = useSearchParams();
  const q = searchParams.get("q");
  const sortBy = searchParams.get("sortBy");
  const page = parseInt(searchParams.get("page") as string);
  const {
    data: products,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["search", q, sortBy, page],
    queryFn: () => searchProducts(q as string, page, sortBy),
  });

  return (
    <>
      {isLoading && (
        <section className="px-4 container py-3 mb-24">
          <div className=" grid grid-cols-2 md:grid-cols-3lg:grid-cols-4 xl:grid-cols-5 gap-x-3 gap-y-6 md:gap-6">
            {[...Array(5)].map((_, index) => (
              <ProductSkeleton key={`skeleton-shop-${index}`} />
            ))}
          </div>
        </section>
      )}

      {products?.results == 0 ? (
        <div className="px-4 container py-3 text-center my-24">
          <span>No products found</span>
        </div>
      ) : (
        <>
          <section className="px-4 container py-3 mb-24">
            <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-3 gap-y-6 md:gap-6">
              {products?.data?.map((product: Product) => (
                <ProductCard product={product} key={product.id} />
              ))}
            </div>
          </section>

          <Paginator
            results={products?.results as number}
            currentPage={products?.page as number}
            pages={products?.pages as number}
          />
        </>
      )}
    </>
  );
}
