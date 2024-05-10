"use client";

import { Button } from "@/components/ui/button";
import { Appointment } from "@/lib/types";
import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import { ArrowUpDown } from "lucide-react";

import { ChevronRight } from "lucide-react";

export const app_columns: ColumnDef<Appointment>[] = [
  {
    id: "name",
    header: "Customer",
    cell: ({ row }) => {
      const { first_name, last_name } = row.original;
      return (
        <div>
          <h4>
            {first_name} {last_name}
          </h4>
        </div>
      );
    },
  },
  {
    accessorKey: "email",
    header: "Email",
  },

  {
    accessorKey: "phone_number",
    header: "Phone Number",
  },

  {
    accessorKey: "date",
    header: "Date",
    cell: ({ row }) => {
      const { date } = row.original;
      return <span>{format(date, "yyyy-MM-dd")}</span>;
    },
  },

  {
    accessorKey: "date",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="px-0 hover:bg-transparent hover:text-muted-foreground"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Booked Date
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
