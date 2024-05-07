import { PaginatedProducts, Product } from "@/lib/types";

import { api } from "./supabase";

// export const getProductsByCategory = (
//   client: TypedSupabaseClient,
//   slug: string,
//   style: string | null,
//   minPrice: string | null,
//   maxPrice: string | null,
//   currency: string | null,
//   rate: string | null,
//   sortBy: string | null
// ) => {
//   let query = client
//     .from("products")
//     .select("*, category!inner(*)")
//     .eq("category.slug", slug);

//   if (!sortBy || sortBy === "newest") {
//     query.order("created_at", { ascending: false });
//   } else if (sortBy === "price-l-h") {
//     query.order("price", { ascending: true });
//   } else {
//     query.order("price", { ascending: false });
//   }

//   if (style) {
//     query.eq("style", style);
//   }

//   if (minPrice) {
//     if (currency === "USD") {
//       query.gte("price", parseFloat(minPrice));
//     } else {
//       query.gte("price", parseFloat(minPrice) / parseFloat(rate!));
//     }
//   }

//   if (maxPrice) {
//     if (currency === "USD") {
//       query.lte("price", parseFloat(maxPrice));
//     } else {
//       query.lte("price", parseFloat(maxPrice) / parseFloat(rate!));
//     }
//   }
//   return query.throwOnError();
// };

export const getProductsByCategory = async (
  slug: string,
  style: string | null,
  minPrice: number | null,
  maxPrice: number | null,
  sortBy: string | null,
  page: number | null
) => {
  const url = `/products/category/${slug}`;

  const params = new URLSearchParams();

  if (style) {
    params.append("style", style);
  }

  if (minPrice) {
    params.append("min_price", minPrice.toString());
  }

  if (maxPrice) {
    params.append("max_price", maxPrice.toString());
  }

  if (sortBy) {
    params.append("sortBy", sortBy);
  }

  if (page) {
    params.append("page", page.toString());
  }

  const response = await api.get(`${url}?${params.toString()}`);
  if (response.status != 200) {
    throw new Error("Failed to fetch products");
  }

  return response.data as PaginatedProducts;
};

export const getProductBySlug = async (slug: string) => {
  const response = await api.get(`/products/${slug}`);
  if (response.status != 200) {
    throw new Error("Failed to fetch product info");
  }

  return response.data as Product;
};

export const getRelatedProducts = async (slug: string) => {
  const response = await api.get(`/products/related/${slug}`);
  if (response.status != 200) {
    throw new Error("Failed to fetch related products");
  }

  return response.data as Product[];
};

// export const getNewArrivals = (client: TypedSupabaseClient) => {
//   return client
//     .from("products")
//     .select("*")
//     .order("created_at", { ascending: false })
//     .limit(4);
// };

export const getNewArrivals = async () => {
  const response = await api.get("/products/recent");
  if (response.status != 200) {
    throw new Error("Failed to fetch recent products");
  }

  return response.data as Product[];
};

// export const getFeaturedProducts = (client: TypedSupabaseClient) => {
//   return client.from("products").select("*").eq("is_featured", true).limit(12);
// };

export const getFeaturedProducts = async () => {
  const response = await api.get("/products/featured");
  if (response.status != 200) {
    throw new Error("Failed to fetch featured products");
  }

  return response.data as Product[];
};

export const searchProducts = async (
  query: string,
  page: number | null,
  sortBy: string | null
) => {
  const url = `/products/search`;

  const params = new URLSearchParams();
  params.append("q", query);
  if (sortBy) {
    params.append("sortBy", sortBy);
  }

  if (page) {
    params.append("page", page.toString());
  }
  const response = await api.get(`${url}?${params.toString()}`);
  if (response.status != 200) {
    throw new Error("Failed to search for products");
  }

  return response.data as PaginatedProducts;
};

// Your Orders ->

export const getAllProducts = async (
  minPrice?: number | null,
  maxPrice?: number | null,
  category_slug?: string | null,
  sortBy?: string | null,
  page?: number | null
) => {
  const url = `/products`;

  const params = new URLSearchParams();

  if (minPrice) {
    params.append("min_price", minPrice.toString());
  }

  if (maxPrice) {
    params.append("max_price", maxPrice.toString());
  }

  if (category_slug) {
    params.append("category", category_slug);
  }

  if (sortBy) {
    params.append("sortBy", sortBy);
  }

  if (page) {
    params.append("page", page.toString());
  }

  const response = await api.get(`${url}?${params.toString()}`);
  if (response.status != 200) {
    throw new Error("Failed to fetch products");
  }

  return response.data as PaginatedProducts;
};
