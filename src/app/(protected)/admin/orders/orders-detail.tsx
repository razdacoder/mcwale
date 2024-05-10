"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import useDeleteOrder from "@/hooks/orders/useDeleteOrder";
import useUpdateOrder from "@/hooks/orders/useUpdateOrder";
import { formatPriceToDollar } from "@/lib/utils";
import { getOrderById } from "@/services/paymentServices";
import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import { Check, Copy, Truck } from "lucide-react";
import { toast } from "sonner";

type Props = {
  selectedId: string;
  setSelectedId: (values: string | null) => void;
};

export default function OrderDetail({ selectedId, setSelectedId }: Props) {
  const { data: order, isLoading } = useQuery({
    queryKey: ["order-detail", selectedId],
    queryFn: () => getOrderById(selectedId),
  });

  const { updateStatusFn, updatingStatus } = useUpdateOrder({ id: selectedId });
  const { deleteOrderFn, deletingOrder } = useDeleteOrder();
  return (
    <div>
      <Card className="overflow-hidden" x-chunk="dashboard-05-chunk-4">
        <CardHeader className="flex flex-row items-start bg-muted/50">
          <div className="grid gap-0.5">
            <CardTitle className="group flex items-center gap-2 text-lg">
              {isLoading ? (
                <Skeleton className="w-24 h-6" />
              ) : (
                <>Order #{order?.order_number}</>
              )}

              <Button
                size="icon"
                variant="outline"
                onClick={() => {
                  window.navigator.clipboard.writeText(order?.order_number!);
                  toast.success("Copied");
                }}
                className="h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100"
              >
                <Copy className="h-3 w-3" />
                <span className="sr-only">Copy Order ID</span>
              </Button>
            </CardTitle>
            <CardDescription>
              {isLoading ? (
                <Skeleton className="h-2" />
              ) : (
                <> Date: {format(order?.created_at as Date, "MMMM d, yyyy")}</>
              )}
            </CardDescription>
          </div>
          <div className="ml-auto flex items-center gap-1">
            <Button size="sm" variant="outline" className="h-8 gap-1">
              <Truck className="h-3.5 w-3.5" />
              <span className="lg:sr-only xl:not-sr-only xl:whitespace-nowrap">
                Track Order
              </span>
            </Button>
          </div>
        </CardHeader>
        <CardContent className="p-6 text-sm">
          <div className="grid gap-3">
            <div className="font-semibold">Order Details</div>
            <ul className="grid gap-3">
              {order?.items.map((item) => (
                <li key={item.id} className="flex items-center justify-between">
                  <span className="text-muted-foreground">
                    {item.product.title} x <span>{item.quantity}</span>
                  </span>
                  <span>$250.00</span>
                </li>
              ))}
            </ul>
            <Separator className="my-2" />
            <ul className="grid gap-3">
              <li className="flex items-center justify-between font-semibold">
                <span className="text-muted-foreground">Total</span>
                <span>{formatPriceToDollar(order?.total as number)}</span>
              </li>
            </ul>
          </div>
          <Separator className="my-4" />
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-3">
              <div className="font-semibold">Shipping Information</div>
              <address className="grid gap-0.5 not-italic text-muted-foreground">
                <span>{order?.address_line_1}</span>
                <span>{order?.town}</span>
                <span>
                  {order?.state}, {order?.country} {order?.postal_code}
                </span>
              </address>
            </div>
            <div className="grid auto-rows-max gap-3">
              <div className="font-semibold">Billing Information</div>
              <div className="text-muted-foreground">
                Same as shipping address
              </div>
            </div>
          </div>
          <Separator className="my-4" />
          <div className="grid gap-3">
            <div className="font-semibold">Customer Information</div>
            <dl className="grid gap-3">
              <div className="flex items-center justify-between">
                <dt className="text-muted-foreground">Customer</dt>
                <dd>
                  {order?.first_name} {order?.last_name}
                </dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-muted-foreground">Email</dt>
                <dd>
                  <a href="mailto:">{order?.email}</a>
                </dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-muted-foreground">Phone</dt>
                <dd>
                  <a href="tel:">{order?.phone_number}</a>
                </dd>
              </div>
            </dl>
          </div>
        </CardContent>
        <CardFooter className="flex flex-row items-center border-t bg-muted/50 px-6 py-3">
          <div className="text-xs text-muted-foreground">
            {isLoading ? (
              <Skeleton className="h-2" />
            ) : (
              <> Updated: {format(order?.created_at as Date, "MMMM d, yyyy")}</>
            )}
          </div>
          <div className="ml-auto mr-0 w-auto space-x-3 flex items-center">
            {order?.status === "pending" ? (
              <Button
                disabled={updatingStatus}
                onClick={() => updateStatusFn("shipped")}
                size="sm"
                variant="outline"
                className="h-8 gap-1"
              >
                <span className="">Mark as shipped</span>
              </Button>
            ) : order?.status === "shipped" ? (
              <Button
                disabled={updatingStatus}
                onClick={() => updateStatusFn("delivered")}
                size="sm"
                variant="outline"
                className="h-8 gap-1"
              >
                <span className="">Mark as Delivered</span>
              </Button>
            ) : (
              <Badge className="h-8 rounded-none space-x-2">
                <Check className="size-4" />
                Delivered
              </Badge>
            )}

            <Button
              disabled={deletingOrder}
              onClick={() =>
                deleteOrderFn(selectedId, {
                  onSuccess: () => {
                    setSelectedId(null);
                  },
                })
              }
              size="sm"
              variant="destructive"
              className="h-8 gap-1"
            >
              <span className="">Delete</span>
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
