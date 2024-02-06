"use client";
import ProductCard from "@/components/layouts/ProductCard";
import useSupabaseBrowser from "@/lib/supabase-client";
import { Product } from "@/lib/types";
import { getCategoryBySlug } from "@/services/categoriesServices";
import { getProductsByCategory } from "@/services/productServices";
import { useQuery } from "@supabase-cache-helpers/postgrest-react-query";
import Link from "next/link";
import MobileDrawer from "./mobile-drawer";
import SortBy from "./sort";
import { ChevronRight } from "lucide-react";
export default function CategoryProducts({ slug }: { slug: string }) {
  const supabase = useSupabaseBrowser();
  const { data: products } = useQuery(getProductsByCategory(supabase, slug));
  const { data: category } = useQuery(getCategoryBySlug(supabase, slug));

  return (
    <main className="relative">
      <section className="px-4 container py-3 ">
        <div className="lg:mb-3 flex flex-col gap-y-6">
          <span className="inline-flex text-muted-foreground text-sm  gap-x-3">
            <Link href="/">Home</Link><ChevronRight className="w-4 h-4 "/><Link href="/shop">Shop</Link><ChevronRight className="w-4 h-4 "/>
            <span className="font-meidum text-primary capitalize">
              {category?.title}
            </span>
          </span>
          <h2 className="block gap-x-3 scroll-m-20 capitalize font-medium tracking-wider text-lg ">
            {category?.title}
          </h2>
        </div>
      </section>

      {products?.length == 0 ? (
        <section className="px-4 py-6 container grid place-items-center">
          <span className="capitalize">
            No Products For {category?.title} Found
          </span>
        </section>
      ) : (
        <>
          <section className="bg-white py-3">
            <div className="px-4 container flex justify-between items-center">
              <span className="hidden lg:block text-sm lg:text-lg font-medium text-primary tracking-wider">
                ({products?.length} items)
              </span>

              <div className="flex items-center justify-end gap-x-3">
                <MobileDrawer />
                <SortBy />
              </div>
            </div>
          </section>
          <br />
          <section className="px-4 container py-3">
            <div className=" grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12">
              {products?.map((product: Product, index) => (
                <ProductCard
                  product={product}
                  height="h-[250px] md:h-[450px] lg:h-[550px]"
                  key={product.id}
                />
              ))}
            </div>
          </section>
        </>
      )}
    </main>
  );
}
