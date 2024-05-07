"use client";

import ProductSkeleton from "@/components/ProductSkeleton";
import ProductCard from "@/components/layouts/ProductCard";
import { Product } from "@/lib/types";
import { getCategoryBySlug } from "@/services/categoriesServices";
import { getProductsByCategory } from "@/services/productServices";
import { useQuery } from "@tanstack/react-query";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Paginator from "../../../paginator";
import MobileDrawer from "./mobile-drawer";
import SortBy from "./sort";

export default function CategoryProducts({ slug }: { slug: string }) {
  const searchParams = useSearchParams();
  const style = searchParams.get("style");
  const sortBy = searchParams.get("sortBy");
  const minPrice = parseFloat(searchParams.get("min_price") as string);
  const maxPrice = parseFloat(searchParams.get("max_price") as string);
  const page = parseInt(searchParams.get("page") as string);

  const {
    data: products,
    isLoading,
    error,
  } = useQuery({
    queryKey: [
      "category-products",
      slug,
      style,
      minPrice,
      maxPrice,
      sortBy,
      page,
    ],
    queryFn: () =>
      getProductsByCategory(slug, style, minPrice, maxPrice, sortBy, page),
  });

  const { data: category } = useQuery({
    queryKey: ["category", slug, style],
    queryFn: () => getCategoryBySlug(slug),
  });

  return (
    <main className="relative">
      <section className="px-4 container py-3 ">
        <div className="lg:mb-3 flex flex-col gap-y-6">
          <span className="inline-flex text-muted-foreground text-sm  gap-x-3">
            <Link href="/">Home</Link>
            <ChevronRight className="w-4 h-4 " />
            <Link href="/shop">Shop</Link>
            <ChevronRight className="w-4 h-4 " />
            <span className="font-medium text-primary capitalize">
              {category?.title}
            </span>
          </span>
          <h2 className="block gap-x-3 scroll-m-20 capitalize font-medium tracking-wider text-lg ">
            {category?.title}
          </h2>
        </div>
      </section>
      <section className="bg-white py-3">
        <div className="px-4 container flex justify-between items-center">
          <span className="hidden lg:block text-sm lg:text-lg font-medium text-primary tracking-wider">
            ({products?.results} items)
          </span>

          <div className="flex items-center justify-end gap-x-3">
            <MobileDrawer
              productLenght={products?.results as number}
              styles={category?.styles as string[]}
            />
            <SortBy />
          </div>
        </div>
      </section>
      <br />
      {isLoading && (
        <section className="px-4 container py-3 mb-24">
          <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-3 gap-y-6 md:gap-6">
            {[...Array(5)].map((_, index) => (
              <ProductSkeleton key={`skeleton-shop-${index}`} />
            ))}
          </div>
        </section>
      )}
      {error ? (
        <section className="px-4 py-6 container grid place-items-center">
          <span className="">No products found</span>
        </section>
      ) : (
        <>
          <section className="px-4 container py-3">
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
    </main>
  );
}
