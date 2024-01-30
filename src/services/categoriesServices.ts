import { TypedSupabaseClient } from "@/lib/types";

export const getAllCategories = (client: TypedSupabaseClient) => {
  return client.from("categories").select("*");
};

export const getCategoryBySlug = (
  client: TypedSupabaseClient,
  slug: string
) => {
  return client
    .from("categories")
    .select("*")
    .eq("slug", slug)
    .throwOnError()
    .single();
};

// TODO: Change Type Any
export const createCategories = (
  client: TypedSupabaseClient,
  category: any
) => {
  return client.from("categories").insert(category).throwOnError();
};

export const updateCategory = (client: TypedSupabaseClient, category: any) => {
  return client
    .from("categories")
    .update(category)
    .eq("id", category.id)
    .throwOnError()
    .select()
    .single();
};

export const deleteCategory = (client: TypedSupabaseClient, id: string) => {
  return client.from("categories").delete().eq("id", id).throwOnError();
};
