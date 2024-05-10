import { updateOrderStatus } from "@/services/actions";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

type Props = {
  id: string;
};

export default function useUpdateOrder({ id }: Props) {
  const queryClient = useQueryClient();
  const { mutate: updateStatusFn, isPending: updatingStatus } = useMutation({
    mutationFn: (status: string) => updateOrderStatus(id, status),
    onSuccess: () => {
      toast.success("Order Status Updated");
      queryClient.invalidateQueries({
        queryKey: ["order-detail", id],
      });
      queryClient.invalidateQueries({
        queryKey: ["admin-get-all-orders"],
      });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  return { updateStatusFn, updatingStatus };
}
