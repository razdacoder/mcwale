"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import useCreateProduct from "@/hooks/products/useCreateProduct";
import useEditProduct from "@/hooks/products/useEditProduct";
import { Product } from "@/lib/types";
import { productSchema } from "@/schemas/formSchemas";
import { getCategories } from "@/services/categoriesServices";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQuery } from "@tanstack/react-query";
import { ChevronLeft, Loader2, Upload } from "lucide-react";
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

type ProductFormProps = {
  product?: Product;
};

export default function ProductForm({ product }: ProductFormProps) {
  const { createProductFn, creatingProduct } = useCreateProduct();
  const { editProductFn, editingProduct } = useEditProduct();
  const { data: categories, isLoading: catLoading } = useQuery({
    queryKey: ["admin-get-all-categories"],
    queryFn: getCategories,
  });
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(
    null
  );
  const [productImages, setProductImages] = useState<string[]>(
    product ? product.images : []
  );
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof productSchema>>({
    resolver: zodResolver(productSchema),
    defaultValues: product
      ? {
          title: product.title,
          description: product.description,
          is_featured: product.is_featured,
          price: product.price,
          discount_percentage: product.discount_percentage,
          style: product.style,
        }
      : undefined,
  });

  const handleUpload = (result: any) => {
    setProductImages((images) => [...images, result.info.secure_url]);
  };

  const onSubmit = (values: z.infer<typeof productSchema>) => {
    product
      ? editProductFn({ slug: product.slug, values, images: productImages })
      : createProductFn({
          values,
          category_id: selectedCategoryId!,
          images: productImages,
        });
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto grid max-w-[59rem] flex-1 auto-rows-max gap-4"
      >
        <div className="flex items-center gap-4">
          <Button asChild variant="outline" size="icon" className="h-7 w-7">
            <Link href="/admin/products">
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Back</span>
            </Link>
          </Button>
          <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
            {product ? product.title : "New Product"}
          </h1>
          <Badge variant="outline" className="ml-auto sm:ml-0">
            {product ? product.category.title : "New"}
          </Badge>
          <div className="hidden items-center gap-2 md:ml-auto md:flex">
            <Button
              disabled={creatingProduct || editingProduct}
              type="submit"
              size="sm"
              className="flex gap-x-3 items-center"
            >
              {creatingProduct ||
                (editingProduct && <Loader2 className="size-4 animate-spin" />)}
              Save Product
            </Button>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
          <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
            <Card x-chunk="dashboard-07-chunk-0">
              <CardHeader>
                <CardTitle>Product Details</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6">
                  <div className="grid gap-3">
                    <Label htmlFor="name">Title</Label>
                    <Input
                      id="name"
                      type="text"
                      {...register("title")}
                      className="w-full"
                    />
                    {errors.title && (
                      <span className="text-red-500 text-xs">
                        {errors.title.message}
                      </span>
                    )}
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      {...register("description")}
                      className="min-h-32"
                    />
                    {errors.description && (
                      <span className="text-red-500 text-xs">
                        {errors.description.message}
                      </span>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card x-chunk="dashboard-07-chunk-1">
              <CardHeader>
                <CardTitle>Product Pricing</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between gap-x-6">
                  <div className="grid gap-3">
                    <Label htmlFor="name">Price</Label>
                    <div className="flex items-center">
                      <div className="px-5 bg-slate-300 h-10 flex items-center text-muted-foreground">
                        $
                      </div>
                      <Input
                        id="name"
                        type="number"
                        {...register("price", {
                          valueAsNumber: true,
                        })}
                        className="flex-1"
                      />
                    </div>
                    {errors.price && (
                      <span className="text-red-500 text-xs">
                        {errors.price.message}
                      </span>
                    )}
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="name">Discount Percentage</Label>
                    <div className="flex items-center">
                      <Input
                        id="name"
                        type="number"
                        className="flex-1"
                        {...register("discount_percentage", {
                          valueAsNumber: true,
                        })}
                      />
                      <div className="px-5 bg-slate-300 h-10 flex items-center text-muted-foreground">
                        %
                      </div>
                    </div>
                    {errors.discount_percentage && (
                      <span className="text-red-500 text-xs">
                        {errors.discount_percentage.message}
                      </span>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
            {!product && (
              <Card x-chunk="dashboard-07-chunk-2">
                <CardHeader>
                  <CardTitle>Product Category</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 sm:grid-cols-3">
                    <div className="grid gap-3">
                      <Label htmlFor="category">Category</Label>
                      <Select
                        onValueChange={(value) => setSelectedCategoryId(value)}
                      >
                        <SelectTrigger
                          disabled={catLoading}
                          id="category"
                          aria-label="Select category"
                        >
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          {categories?.map((category) => (
                            <SelectItem key={category.id} value={category.id}>
                              {category.title}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
          <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
            <Card x-chunk="dashboard-07-chunk-3">
              <CardHeader>
                <CardTitle>Product Style</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6">
                  <div className="grid gap-3">
                    <Label htmlFor="status">Style</Label>
                    <Select
                      defaultValue={product ? product.style : undefined}
                      onValueChange={(value) => setValue("style", value)}
                    >
                      <SelectTrigger
                        disabled={product ? false : selectedCategoryId == null}
                        id="status"
                        aria-label="Select style"
                      >
                        <SelectValue placeholder="Select style" />
                      </SelectTrigger>
                      <SelectContent>
                        {product
                          ? product?.category.styles.map((style) => (
                              <SelectItem key={style} value={style}>
                                {style}
                              </SelectItem>
                            ))
                          : categories
                              ?.find((cat) => cat.id === selectedCategoryId)
                              ?.styles.map((style) => (
                                <SelectItem key={style} value={style}>
                                  {style}
                                </SelectItem>
                              ))}
                      </SelectContent>
                    </Select>
                    {errors.style && (
                      <span className="text-red-500 text-xs">
                        {errors.style.message}
                      </span>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="overflow-hidden" x-chunk="dashboard-07-chunk-4">
              <CardHeader>
                <CardTitle>Product Images</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-2">
                  <div className="grid grid-cols-3 gap-2">
                    {productImages.map((image) => (
                      <Image
                        key={image}
                        alt="Product image"
                        className="aspect-square w-full rounded-md object-cover"
                        height="84"
                        src={image}
                        width="84"
                      />
                    ))}

                    <CldUploadWidget
                      onSuccess={handleUpload}
                      uploadPreset="mcwale_cloudinary_app"
                      options={{
                        maxFiles: 1,
                      }}
                    >
                      {({ open }) => {
                        return (
                          <button
                            type="button"
                            onClick={() => open?.()}
                            className="flex aspect-square w-full items-center justify-center rounded-md border border-dashed"
                          >
                            <Upload className="h-4 w-4 text-muted-foreground" />
                            <span className="sr-only">Upload</span>
                          </button>
                        );
                      }}
                    </CldUploadWidget>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="overflow-hidden" x-chunk="dashboard-07-chunk-4">
              <CardHeader>
                <CardTitle>Featured</CardTitle>
                <CardDescription>
                  This will allow the product to appear on the home page.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-2">
                  <div className="grid grid-cols-3 gap-2">
                    <Checkbox
                      defaultChecked={product ? product.is_featured : false}
                      onCheckedChange={(checked) =>
                        setValue("is_featured", Boolean(checked.valueOf()))
                      }
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="flex items-center justify-center gap-2 md:hidden">
          <Button type="submit" size="sm">
            Save Product
          </Button>
        </div>
      </form>
    </>
  );
}
