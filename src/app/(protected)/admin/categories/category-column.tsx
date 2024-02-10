"use client";

import { Category } from "@/lib/types";
import { parseDate } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";
import { Edit2, Edit3, MoreVertical, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import CategoryForm from "./create-edit-form";

export const columns: ColumnDef<Category>[] = [
  {
    accessorKey: "image",
    header: "Image",
    cell: ({ row }) => {
      const imageUrl = row.getValue("image") as string;

      return (
        <Image src={imageUrl} alt="Category Image" width={50} height={50} />
      );
    },
  },
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "styles",
    header: "Styles",
    cell: ({ row }) => {
      const { styles } = row.original;
      return (
        <div>
          {styles?.map((style) => (
            <span className="p-2" key={style}>
              {style}
            </span>
          ))}
        </div>
      );
    },
  },
  {
    accessorKey: "created_at",
    header: "Created at",
    cell: ({ row }) => {
      const { created_at } = row.original;
      return <span>{parseDate(created_at)}</span>;
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const category = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreVertical className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <CategoryForm category={category}>
              <DropdownMenuItem
                className="flex gap-x-3 items-center cursor-pointer"
                //   onClick={() => navigator.clipboard.writeText(category.id)}
              >
                <Edit3 className="w-4 h-4" />
                Edit
              </DropdownMenuItem>
            </CategoryForm>

            <DropdownMenuSeparator />
            <DropdownMenuItem
              className="flex gap-x-3 items-center cursor-pointer"
              onClick={() => navigator.clipboard.writeText(category.id)}
            >
              <Trash2 className="w-4 h-4" />
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
