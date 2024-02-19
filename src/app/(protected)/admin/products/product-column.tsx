"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import {
  Check,
  Edit3,
  Loader2,
  Minus,
  MoreVertical,
  Trash2,
  X,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { formatPriceToDollar, parseDate } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import { Product } from "@/lib/types";
import { deleteCategory } from "@/services/categoriesServices";
import toast from "react-hot-toast";
import { useState } from "react";
import useSupabaseBrowser from "@/lib/supabase-client";

export const columns: ColumnDef<Product>[] = [
  {
    accessorKey: "image",
    header: "Image",
    cell: ({ row }) => {
      const { images } = row.original;

      return (
        <Image src={images[0]} alt="Category Image" width={50} height={50} />
      );
    },
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    id: "category",
    accessorKey: "category.title",
    header: "Category",
    // cell: ({ row }) => {
    //   const { category } = row.original;
    //   return <span>{category.title}</span>;
    // },
  },
  {
    accessorKey: "style",
    header: "Style",
  },
  {
    accessorKey: "price",
    header: "price",
    cell: ({ row }) => {
      const { price } = row.original;
      return (
        <span className="text-green-500">{formatPriceToDollar(price)}</span>
      );
    },
  },
  {
    accessorKey: "discount_percentage",
    header: "Discount",
    cell: ({ row }) => {
      const { discount_percentage } = row.original;
      return (
        <span className="lowercase text-red-500">
          {discount_percentage === 0 ? (
            <Minus className="w-4 h-4 text-primary" />
          ) : (
            `${discount_percentage}% off`
          )}
        </span>
      );
    },
  },

  {
    accessorKey: "is_featured",
    header: "Featured",
    cell: ({ row }) => {
      const { is_featured } = row.original;
      return (
        <span>
          {is_featured ? (
            <Check className="w-4 h-4" />
          ) : (
            <X className="w-4 h-4" />
          )}
        </span>
      );
    },
  },
  {
    accessorKey: "created_at",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="flex items-center gap-x-3 px-0 hover:bg-transparent"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Created At
          <ArrowUpDown className="h-3 w-3" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const { created_at } = row.original;
      return <span>{parseDate(created_at)}</span>;
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const product = row.original;
      const [open, setOpen] = useState(false);
      const [alertOpen, setAlertOpen] = useState(false);
      const [deleting, setDeleting] = useState(false);
      const supabase = useSupabaseBrowser();

      async function deleteAction() {
        try {
          setDeleting(true);
          await deleteCategory(supabase, product.id);
          toast.success("Category Deleted");
        } catch (error: any) {
          toast.error(error.message);
        } finally {
          setDeleting(false);
          setAlertOpen(false);
        }
      }

      return (
        <Dialog open={open} onOpenChange={setOpen}>
          <AlertDialog open={alertOpen} onOpenChange={setAlertOpen}>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                  <span className="sr-only">Open menu</span>
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DialogTrigger asChild>
                  <DropdownMenuItem
                    className="flex gap-x-3 items-center cursor-pointer"
                    onClick={() => setOpen(true)}
                  >
                    <Edit3 className="w-4 h-4" />
                    Edit
                  </DropdownMenuItem>
                </DialogTrigger>

                <DropdownMenuSeparator />
                <AlertDialogTrigger asChild>
                  <DropdownMenuItem
                    className="flex gap-x-3 items-center cursor-pointer"
                    onClick={() => setAlertOpen(true)}
                  >
                    <Trash2 className="w-4 h-4" />
                    Delete
                  </DropdownMenuItem>
                </AlertDialogTrigger>
              </DropdownMenuContent>
            </DropdownMenu>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  Deleting this category will remove the category and assciated
                  products from the database.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction
                  className="flex items-center gap-x-3"
                  onClick={deleteAction}
                >
                  Continue{" "}
                  {deleting && <Loader2 className="w-4 h-4 animate-spin" />}
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Edit Category</DialogTitle>
              <DialogDescription>
                Edit this category infor for mcwale shop.
              </DialogDescription>
            </DialogHeader>
            {/* <CategoryForm
              setOpen={(value: boolean) => setOpen(value)}
              category={category}
            /> */}
          </DialogContent>
        </Dialog>
      );
    },
  },
];
