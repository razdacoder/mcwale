"use client";
import { productSchema } from "@/schemas/formSchemas";
import { updateProduct } from "@/services/actions";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { toast } from "sonner";
import { z } from "zod";

export default function useEditProduct() {
  const queryClient = useQueryClient();
  const { slug } = useParams();
  const { mutate: editProductFn, isPending: editingProduct } = useMutation({
    mutationFn: (data: {
      slug: string;
      values: z.infer<typeof productSchema>;
      images: string[];
    }) => updateProduct(data.slug, data.values, data.images),
    onSuccess: () => {
      toast.success("Product updated successfully");
      queryClient.invalidateQueries({
        queryKey: ["admin-product-detail", slug as string],
      });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  return { editProductFn, editingProduct };
}
