import { SupabaseClient } from "@supabase/supabase-js";
// import type { Database } from "@/utils/database.types";

export type TypedSupabaseClient = SupabaseClient;

export type Category = {
  id: string;
  title: string;
  slug: string;
  image: string;
  styles: string[];
};

export type Product = {
  id: string;
  title: string;
  slug: string;
  price: number;
  description: string;
  discount_percentage: number;
  images: string[];
  is_featured: boolean;
  style: string;
  category: Category;
  created_at: Date;
};

export type Review = {
  id: string;
  stars: number;
  review: string;
  created_at: Date;
  first_name: string;
  last_name: string;
  product: {
    slug: string;
  };
};

export type PaginatedProducts = {
  data: Product[];
  page: number;
  results: number;
  pages: number;
};
