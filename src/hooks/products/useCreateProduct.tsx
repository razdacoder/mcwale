import { productSchema } from "@/schemas/formSchemas";
import { createProduct } from "@/services/actions";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { z } from "zod";

export default function useCreateProduct() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { mutate: createProductFn, isPending: creatingProduct } = useMutation({
    mutationFn: (data: {
      values: z.infer<typeof productSchema>;
      category_id: string;
      images: string[];
    }) => createProduct(data.values, data.category_id, data.images),
    onSuccess: () => {
      toast.success("Product created successfully");
      queryClient.invalidateQueries({ queryKey: ["admin-get-all-products"] });
      router.push("/admin/products");
    },
  });
  return { createProductFn, creatingProduct };
}
