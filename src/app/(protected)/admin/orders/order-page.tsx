"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Order } from "@/lib/types";
import { getOrders } from "@/services/paymentServices";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { order_columns } from "./order-columns";
import { DataTable } from "./order-table";
import OrderDetail from "./orders-detail";

export default function OrderPage() {
  const { data: orders } = useQuery({
    queryKey: ["admin-get-all-orders"],
    queryFn: () => getOrders(),
  });

  const [selectedId, setSelectedId] = useState<string | null>(null);
  return (
    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
      <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
        <Card x-chunk="dashboard-05-chunk-3">
          <CardHeader className="px-7">
            <CardTitle>Orders</CardTitle>
            <CardDescription>Recent orders from your store.</CardDescription>
          </CardHeader>
          <CardContent>
            <DataTable
              columns={order_columns}
              data={orders as Order[]}
              selectedId={selectedId}
              setId={(value) => setSelectedId(value)}
            />
          </CardContent>
        </Card>
      </div>
      {selectedId && (
        <OrderDetail
          selectedId={selectedId}
          setSelectedId={(value) => setSelectedId(value)}
        />
      )}
    </main>
  );
}
