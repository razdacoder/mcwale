"use client";

import Heading from "@/components/ui/Heading";
import useSupabaseBrowser from "@/lib/supabase-client";
import { Product } from "@/lib/types";
import { getNewArrivals } from "@/services/productServices";
import { useQuery } from "@tanstack/react-query";
import NewArrivalsCard from "./NewArrivalCard";

export default function NewArrivals() {
  const supabase = useSupabaseBrowser();
  const { data: products } = useQuery({
    queryKey: ["get-new-arrivals"],
    queryFn: getNewArrivals,
  });

  return (
    <section className="py-12 px-4 container border-b">
      <Heading className="text-xl normal-case text-left block">
        New Arrivals
      </Heading>
      <div className="mt-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {products?.map((product: Product) => (
          <NewArrivalsCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
