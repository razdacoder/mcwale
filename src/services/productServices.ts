import { Product, TypedSupabaseClient } from "@/lib/types";

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

export const getNewArrivals = (client: TypedSupabaseClient) => {
  return client
    .from("products")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(4);
};

export const getFeaturedProducts = (client: TypedSupabaseClient) => {
  return client.from("products").select("*").eq("is_featured", true).limit(12);
};




// Your Orders -> 

export const getRelatedProducts = (
  client: TypedSupabaseClient,
  product: Product
) => {
  return client
    .from("products")
    .select("*, category!inner(*)")
    .eq("category.slug", product.category.slug)
    .neq("id", product.id)
    .limit(6)
    .throwOnError();
};
