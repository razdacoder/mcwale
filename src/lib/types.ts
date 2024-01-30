import { SupabaseClient } from "@supabase/supabase-js";
// import type { Database } from "@/utils/database.types";

export type TypedSupabaseClient = SupabaseClient;

export type Category = {
  id: string;
  title: string;
  slug: string;
  created_at: Date;
  styles: string[];
};

export type Product = {
  id: string;
  name: string;
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
