"use client";

import { Category } from "@/lib/types";
import { getCategoryBySlug } from "@/services/categoriesServices";
import { useQuery } from "@tanstack/react-query";
import CategoryForm from "../../categories-form";

export default function EditCategoryPage({ slug }: { slug: string }) {
  const { data: category } = useQuery({
    queryKey: ["get-categories", slug],
    queryFn: () => getCategoryBySlug(slug),
  });
  return <CategoryForm category={category as Category} />;
}
