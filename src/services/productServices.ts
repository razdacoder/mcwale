import { TypedSupabaseClient } from "@/lib/types";

export const getProductsByCategory = (
  client: TypedSupabaseClient,
  slug: string
) => {
  return client
    .from("products")
    .select("*, category!inner(*)")
    .eq("category.slug", slug)
    .throwOnError();
};

export const getProductBySlug = (client: TypedSupabaseClient, slug: string) => {
  return client
    .from("products")
    .select("*, category!inner(*)")
    .eq("slug", slug)
    .throwOnError()
    .single();
};
