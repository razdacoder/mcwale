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

export type Order = {
  id: string;
  order_number: string;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  address_line_1: string;
  address_line_2: string;
  town: string;
  state: string;
  country: string;
  postal_code: string;
  order_note: string;
  status: "pending" | "shipped" | "delivered";
  total: number;
  created_at: Date;
};

export type OrderDetail = {
  id: string;
  order_number: string;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  address_line_1: string;
  address_line_2: string;
  town: string;
  state: string;
  country: string;
  postal_code: string;
  order_note: string;
  status: "pending" | "shipped" | "delivered";
  total: number;
  created_at: Date;
  items: OrderItem[];
};

type OrderItem = {
  id: string;
  product: Product;
  size: string;
  color: string;
  quantity: number;
};

export type Appointment = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  address: string;
  date: Date;
  created_at: Date;
};
