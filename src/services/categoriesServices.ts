import { TypedSupabaseClient } from "@/lib/types";

export const getAllCategories = (client: TypedSupabaseClient) => {
  return client.from("catgories").select("id, title, slug, image");
};

export const getCategoryById = (client: TypedSupabaseClient, id: string) => {
  return client.from("catgories").select("*").eq("id", id).single();
};

// TODO: Change Type Any
export const createCategories = (
  client: TypedSupabaseClient,
  category: any
) => {
  return client.from("categories").insert(category);
};

export const updateCategory = (client: TypedSupabaseClient, category: any) => {
  return client
    .from("categories")
    .update(category)
    .eq("id", category.id)
    .select()
    .single();
};

export const deleteCategory = (client: TypedSupabaseClient, id: string) => {
  return client.from("categories").delete().eq("id", id);
};
