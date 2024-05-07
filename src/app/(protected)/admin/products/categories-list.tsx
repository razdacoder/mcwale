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
import useDeleteCategory from "@/hooks/categories/useDeleteCategory";
import { getCategories } from "@/services/categoriesServices";
import { useQuery } from "@tanstack/react-query";
import { MoreHorizontal } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CategoriesList() {
  const { data: categories, isLoading: catLoading } = useQuery({
    queryKey: ["admin-get-all-categories"],
    queryFn: getCategories,
  });
  const { deleteCategoryFn, deletingCategory } = useDeleteCategory();
  return (
    <Card x-chunk="dashboard-06-chunk-0" className="w-1/3">
      <CardHeader>
        <CardTitle>Categories</CardTitle>
        <CardDescription>Manage your products categories.</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="hidden w-[100px] sm:table-cell">
                <span className="sr-only">Image</span>
              </TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Styles</TableHead>
              <TableHead>
                <span className="sr-only">Actions</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {catLoading &&
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
            {categories?.map((category) => (
              <TableRow key={category.id}>
                <TableCell className="hidden sm:table-cell">
                  <Image
                    alt={category.title}
                    className="aspect-square rounded-md object-cover"
                    height="64"
                    src={category.image}
                    width="64"
                  />
                </TableCell>
                <TableCell className="font-medium">{category.title}</TableCell>

                <TableCell className="hidden md:table-cell space-2">
                  <div className="flex flex-wrap gap-x-1 gap-y-2">
                    {category.styles.map((style) => (
                      <Badge
                        key={style}
                        variant="outline"
                        className="ml-auto sm:ml-0"
                      >
                        {style}
                      </Badge>
                    ))}
                  </div>
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
                          <Link
                            href={`/admin/products/categories/${category.slug}`}
                          >
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
                          disabled={deletingCategory}
                          onClick={() => deleteCategoryFn(category.slug)}
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
