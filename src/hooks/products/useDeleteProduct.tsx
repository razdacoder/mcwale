"use client";

import { deleteProduct } from "@/services/actions";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export default function useDeleteProduct() {
  const queryClient = useQueryClient();
  const { mutate: deleteProductFn, isPending: deletingProduct } = useMutation({
    mutationFn: (slug: string) => deleteProduct(slug),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["admin-get-all-products"],
      });
      toast.success("Product Deleted");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  return { deleteProductFn, deletingProduct };
}
