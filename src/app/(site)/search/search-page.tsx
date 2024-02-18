"use client";
import ProductCard from "@/components/layouts/ProductCard";
import useSupabaseBrowser from "@/lib/supabase-client";
import { Product } from "@/lib/types";
import { searchProducts } from "@/services/productServices";
import { useQuery } from "@supabase-cache-helpers/postgrest-react-query";
import { useSearchParams } from "next/navigation";
import React from "react";

export default function SearchResults() {
  const supabase = useSupabaseBrowser();
  const searchParams = useSearchParams();
  const query = searchParams.get("q");
  const { data: searchResults } = useQuery(
    searchProducts(supabase, query as string)
  );
  const res = searchResults as Product[];
  return (
    <>
      {" "}
      {res?.length == 0 ? (
        <section className="px-4 py-6 container grid place-items-center">
          <span className="capitalize">
            No Products For {query}
            Found
          </span>
        </section>
      ) : (
        <section className="px-4 container py-3">
          <div className=" grid grid-cols-2 lg:grid-cols-4 gap-x-3 gap-y-6 md:gap-6">
            {res?.map((product: Product, index) => (
              <ProductCard
                product={product}
                height="h-[250px] md:h-[450px] lg:h-[550px]"
                key={product.id}
              />
            ))}
          </div>
        </section>
      )}
    </>
  );
}
