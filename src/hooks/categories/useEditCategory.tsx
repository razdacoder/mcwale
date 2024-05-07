"use client";
import { updateCategory } from "@/services/actions";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { toast } from "sonner";

export default function useEditCategory() {
  const { slug } = useParams();
  const queryClient = useQueryClient();
  const { mutate: editCategoryFn, isPending: editingCategory } = useMutation({
    mutationFn: (values: { title: string; styles: string[]; image: string }) =>
      updateCategory(slug as string, values),
    onSuccess: () => {
      toast.success("Category Updated");
      queryClient.invalidateQueries({
        queryKey: ["admin-get-all-categories"],
      });
      queryClient.invalidateQueries({
        queryKey: ["get-categories", slug as string],
      });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  return { editCategoryFn, editingCategory };
}
