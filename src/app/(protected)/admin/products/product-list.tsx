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
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import useDeleteProduct from "@/hooks/products/useDeleteProduct";
import { formatPriceToDollar } from "@/lib/utils";
import { getAllProducts } from "@/services/productServices";
import { useQuery } from "@tanstack/react-query";
import { Check, MinusIcon, MoreHorizontal, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ProductList() {
  const { data, isLoading } = useQuery({
    queryKey: ["admin-get-all-products"],
    queryFn: () => getAllProducts(),
  });
  const { deleteProductFn, deletingProduct } = useDeleteProduct();
  return (
    <Card x-chunk="dashboard-06-chunk-0" className="w-2/3">
      <CardHeader>
        <CardTitle>Products</CardTitle>
        <CardDescription>
          Manage your products and view their sales performance.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="hidden w-[100px] sm:table-cell">
                <span className="sr-only">Image</span>
              </TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Category</TableHead>
              <TableHead className="hidden md:table-cell">Price</TableHead>
              <TableHead className="hidden md:table-cell">Discount</TableHead>
              <TableHead className="hidden md:table-cell">Style</TableHead>
              <TableHead className="hidden md:table-cell">Featured</TableHead>
              <TableHead>
                <span className="sr-only">Actions</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading &&
              [...Array(6)].map((_, index) => (
                <TableRow key={index}>
                  <TableCell className="hidden sm:table-cell">
                    <Skeleton className="w-[64px] h-8" />
                  </TableCell>
                  <TableCell className="font-medium">
                    <Skeleton className="h-8" />
                  </TableCell>
                  <TableCell className="font-medium">
                    <Skeleton className="h-8" />
                  </TableCell>

                  <TableCell className="hidden md:table-cell">
                    <Skeleton className="h-8" />
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    <Skeleton className="h-8" />
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    <Skeleton className="h-8" />
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    <Skeleton className="h-8" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="h-8" />
                  </TableCell>
                </TableRow>
              ))}
            {data?.data.map((product) => (
              <TableRow key={product.id}>
                <TableCell className="hidden sm:table-cell">
                  <Image
                    alt={product.title}
                    className="aspect-square rounded-md object-cover"
                    height="64"
                    src={product.images[0]}
                    width="64"
                  />
                </TableCell>
                <TableCell className="font-medium">{product.title}</TableCell>
                <TableCell className="font-medium">
                  {product.category.title}
                </TableCell>

                <TableCell className="hidden md:table-cell">
                  {formatPriceToDollar(product.price)}
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  {product.discount_percentage > 0 ? (
                    `${product.discount_percentage}%`
                  ) : (
                    <MinusIcon className="size-4" />
                  )}
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  {product.style}
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  {product.is_featured ? (
                    <Check className="size-4" />
                  ) : (
                    <X className="size-4" />
                  )}
                </TableCell>
                <TableCell>
                  <AlertDialog>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          aria-haspopup="true"
                          size="icon"
                          variant="ghost"
                        >
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Toggle menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem asChild>
                          <Link href={`/admin/products/${product.slug}`}>
                            Edit
                          </Link>
                        </DropdownMenuItem>

                        <AlertDialogTrigger asChild>
                          <DropdownMenuItem>Delete</DropdownMenuItem>
                        </AlertDialogTrigger>
                      </DropdownMenuContent>
                    </DropdownMenu>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>
                          Are you absolutely sure?
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                          This action cannot be undone. This will permanently
                          delete this product and will no longer appear on the
                          website.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction
                          className="bg-red-500 hover:bg-red-400"
                          disabled={deletingProduct}
                          onClick={() => deleteProductFn(product.slug)}
                        >
                          Continue
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}
