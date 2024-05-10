"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Order } from "@/lib/types";
import { formatPriceToDollar } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import { ArrowUpDown } from "lucide-react";

import { ChevronRight } from "lucide-react";

export const order_columns: ColumnDef<Order>[] = [
  {
    accessorKey: "order_number",
    header: "Order Number",
  },
  {
    accessorKey: "email",
    header: "Customer",
    cell: ({ row }) => {
      const { first_name, last_name, email } = row.original;
      return (
        <div>
          <h4>
            {first_name} {last_name}
          </h4>
          <span className="text-muted-foreground">{email}</span>
        </div>
      );
    },
  },

  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const { status } = row.original;
      return (
        <Badge
          className="text-xs capitalize"
          variant={
            status === "pending"
              ? "default"
              : status === "shipped"
              ? "outline"
              : "secondary"
          }
        >
          {status}
        </Badge>
      );
    },
  },
  {
    accessorKey: "created_at",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="px-0 hover:bg-transparent hover:text-muted-foreground"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Date
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const { created_at } = row.original;
      return <span>{format(created_at, "yyyy-MM-dd")}</span>;
    },
  },
  {
    accessorKey: "amount",
    header: "Amount",
    cell: ({ row }) => {
      const { total } = row.original;
      return <span>{formatPriceToDollar(total)}</span>;
    },
  },
  {
    id: "actions",
    cell: ({ row, table }) => {
      const { id } = row.original;

      return (
        <Button
          // @ts-ignore
          onClick={() => table.options?.meta?.setSelectedId(id)}
          variant="ghost"
          size="icon"
        >
          <ChevronRight className="size-4" />
        </Button>
      );
    },
  },
];
