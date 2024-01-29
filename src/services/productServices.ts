import { TypedSupabaseClient } from "@/lib/types";

export const getProductsByCategory = (
  client: TypedSupabaseClient,
  slug: string
) => {
  return client
    .from("products")
    .select("*, category(*)")
    .eq("category.slug", slug)
    .throwOnError();
};
