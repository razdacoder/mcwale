import { createCategory } from "@/services/actions";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function useCreateCategory() {
  const queryClient = useQueryClient();
  const router = useRouter();
  const { mutate: createCategoryFn, isPending: creatingCategory } = useMutation(
    {
      mutationFn: (values: {
        title: string;
        styles: string[];
        slug: string;
        image: string;
      }) => createCategory(values),
      onSuccess: () => {
        toast.success("Category Created");
        queryClient.invalidateQueries({
          queryKey: ["admin-get-all-categories"],
        });
        router.push("/admin/products");
      },
      onError: (error) => {
        toast.error(error.message);
      },
    }
  );
  return { createCategoryFn, creatingCategory };
}
