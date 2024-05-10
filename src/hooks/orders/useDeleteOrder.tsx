import { deleteOrder } from "@/services/actions";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export default function useDeleteOrder() {
  const queryClient = useQueryClient();
  const { mutate: deleteOrderFn, isPending: deletingOrder } = useMutation({
    mutationFn: (id: string) => deleteOrder(id),
    onSuccess: () => {
      toast.success("Order Deleted");
      queryClient.invalidateQueries({
        queryKey: ["admin-get-all-orders"],
      });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  return { deleteOrderFn, deletingOrder };
}
