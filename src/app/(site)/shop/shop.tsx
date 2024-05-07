"use client";
import ProductSkeleton from "@/components/ProductSkeleton";
import ProductCard from "@/components/layouts/ProductCard";
import { Category, Product } from "@/lib/types";
import { getCategories } from "@/services/categoriesServices";
import { getAllProducts } from "@/services/productServices";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import ShopFilters from "./filters";
import Paginator from "./paginator";
import SortBy from "./sort";

export default function Shop() {
  const searchParams = useSearchParams();
  const minPrice = parseFloat(searchParams.get("min_price") as string);
  const maxPrice = parseFloat(searchParams.get("max_price") as string);
  const category = searchParams.get("category");
  const sortBy = searchParams.get("sortBy");
  const page = parseInt(searchParams.get("page") as string);
  const { data: products, isLoading } = useQuery({
    queryKey: ["all-products", minPrice, maxPrice, category, sortBy, page],
    queryFn: () => getAllProducts(minPrice, maxPrice, category, sortBy, page),
  });

  const { data: categories } = useQuery({
    queryKey: ["get-all-categories"],
    queryFn: getCategories,
  });
  return (
    <main>
      <section className="px-4 container py-3 ">
        <div className="lg:mb-3 flex flex-col gap-y-6">
          <span className="inline-flex text-muted-foreground text-sm  gap-x-3">
            <Link href="/">Home</Link>|
            <span className="font-medium text-primary">Shop</span>
          </span>
          <div className="flex justify-between items-center">
            <h2 className="block gap-x-3 scroll-m-20 font-medium tracking-wider text-lg ">
              All Products
            </h2>
            <div className="flex gap-x-6 items-center">
              <ShopFilters categories={categories as Category[]} />
              <SortBy />
            </div>
          </div>
        </div>
      </section>

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

      {/* <SonnerDemo /> */}
    </main>
  );
}
