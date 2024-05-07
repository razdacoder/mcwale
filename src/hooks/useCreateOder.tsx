"use client";

import { billingSchema } from "@/schemas/formSchemas";
import { createOrder } from "@/services/paymentServices";
import { useCartStore } from "@/store/useCart";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { z } from "zod";

export default function useCreateOder() {
  const { cart, clearItems } = useCartStore();
  const router = useRouter();
  const { mutate: createOrderFn } = useMutation({
    mutationFn: (data: {
      values: z.infer<typeof billingSchema>;
      total: number;
    }) => createOrder(data.values, cart, data.total),
    onSuccess: (data) => {
      toast.success("Order Created", {
        description: `Your order number is ${data.order_number}`,
        action: {
          label: "Copy",
          onClick: () =>
            window.navigator.clipboard.writeText(data.order_number),
        },
      });
      clearItems();
      router.replace("/");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  return { createOrderFn };
}
