"use client";

import { deleteCategory } from "@/services/actions";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export default function useDeleteCategory() {
  const queryClient = useQueryClient();
  const { mutate: deleteCategoryFn, isPending: deletingCategory } = useMutation(
    {
      mutationFn: (slug: string) => deleteCategory(slug),
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ["admin-get-all-categories"],
        });
        queryClient.invalidateQueries({ queryKey: ["admin-get-all-products"] });
        toast.success("Category Deleted");
      },
      onError: (error) => {
        toast.error(error.message);
      },
    }
  );
  return { deleteCategoryFn, deletingCategory };
}
