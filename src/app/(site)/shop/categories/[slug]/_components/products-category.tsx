"use client";
import ProductCard from "@/components/layouts/ProductCard";
import useSupabaseBrowser from "@/lib/supabase-client";
import { Product } from "@/lib/types";
import { getProductsByCategory } from "@/services/productServices";
import { useQuery } from "@supabase-cache-helpers/postgrest-react-query";
import Link from "next/link";
import MobileDrawer from "./mobile-drawer";
import SortBy from "./sort";
export default function CategoryProducts({ slug }: { slug: string }) {
  const supabase = useSupabaseBrowser();
  const { data: products } = useQuery(getProductsByCategory(supabase, slug));

  return (
    <main className="relative">
      <section className="px-4 container py-3 ">
        <div className="lg:mb-3 flex flex-col gap-y-6">
          <span className="inline-flex text-muted-foreground text-sm  gap-x-3">
            <Link href="/">Home</Link>|<Link href="/shop">Shop</Link>|
            <span className="font-meidum text-primary capitalize">
              {products?.at(0).category.title}
            </span>
          </span>
          <h2 className="block gap-x-3 scroll-m-20 capitalize font-medium tracking-wider text-lg ">
            {products?.at(0).category.title}
          </h2>
        </div>
      </section>
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
        <div className=" grid grid-cols-2 lg:grid-cols-3 gap-2 md:gap-6">
          {products?.map((product: Product, index) => (
            <ProductCard
              product={product}
              height="h-[250px] md:h-[450px] lg:h-[550px]"
              key={product.id}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
