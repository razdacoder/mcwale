"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import useCreateCategory from "@/hooks/categories/useCreatecategory";
import useEditCategory from "@/hooks/categories/useEditCategory";
import { Category } from "@/lib/types";
import { slugify } from "@/lib/utils";
import { categorySchema } from "@/schemas/formSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronLeft, Loader2, Plus, Upload, X } from "lucide-react";
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

type Props = {
  category?: Category;
  //   setOpen: (value: boolean) => void;
};

export default function CategoryForm({ category }: Props) {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<z.infer<typeof categorySchema>>({
    resolver: zodResolver(categorySchema),
    defaultValues: category
      ? {
          title: category.title,
          styles: category.styles,
          image: category.image,
        }
      : { title: "", styles: [], image: "" },
  });
  const { createCategoryFn, creatingCategory } = useCreateCategory();
  const { editCategoryFn, editingCategory } = useEditCategory();
  const [styles, setStyles] = useState<string[]>(
    category ? category.styles : []
  );

  const [image, setImage] = useState(category ? category.image : null);
  const [style, setStyle] = useState("");
  const handleUpload = (result: any) => {
    setImage(result.info.secure_url);
  };

  const setNewStyle = () => {
    setStyles((styles) => [...styles, style]);
    setStyle("");
  };

  const removeStyle = (indexFilter: number) => {
    let newStyles = [...styles];
    newStyles = newStyles.filter((_, index) => index !== indexFilter);

    setStyles(newStyles);
  };

  async function onSubmit(values: z.infer<typeof categorySchema>) {
    category
      ? editCategoryFn({
          title: values.title,
          styles: styles,
          image: image!,
        })
      : createCategoryFn({
          title: values.title,
          styles: styles,
          slug: slugify(values.title),
          image: image!,
        });
  }
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto space-y-4 w-[59rem]"
      >
        <div className="flex items-center gap-4">
          <Button asChild variant="outline" size="icon" className="h-7 w-7">
            <Link href="/admin/products">
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Back</span>
            </Link>
          </Button>
          <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
            {category ? category.title : "New Category"}
          </h1>

          <div className="hidden items-center gap-2 md:ml-auto md:flex">
            <Button
              disabled={creatingCategory || editingCategory}
              type="submit"
              size="sm"
              className="flex gap-x-3 items-center"
            >
              {(creatingCategory || editingCategory) && (
                <Loader2 className="size-4 animate-spin" />
              )}
              Save Category
            </Button>
          </div>
        </div>
        <div className="">
          <div className="space-y-4">
            <Card x-chunk="dashboard-07-chunk-0">
              <CardHeader>
                <CardTitle>Category Details</CardTitle>
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
                    <Label htmlFor="description">Styles</Label>
                    <div className="flex gap-x-3 items-center">
                      <Input
                        id="name"
                        type="text"
                        value={style}
                        onChange={(e) => setStyle(e.target.value)}
                        className="w-full"
                      />
                      <Button
                        onClick={setNewStyle}
                        type="button"
                        className="flex items-center gap-x-3"
                      >
                        <Plus className="size-4" />
                        Add
                      </Button>
                    </div>

                    {errors.styles && (
                      <span className="text-red-500 text-xs">
                        {errors.styles.message}
                      </span>
                    )}
                  </div>
                  <div className="flex gap-x-2 items-center">
                    {styles.map((style, index) => (
                      <Badge
                        key={style}
                        variant="outline"
                        className="ml-auto sm:ml-0 flex gap-x-4"
                      >
                        {style}

                        <Button
                          type="button"
                          className="hover:no-underline h-6 px-0"
                          variant="link"
                          onClick={() => removeStyle(index)}
                        >
                          <X className="size-4" />
                        </Button>
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="overflow-hidden" x-chunk="dashboard-07-chunk-4">
              <CardHeader>
                <CardTitle>Image</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-2">
                  <div className="grid grid-cols-3 gap-2">
                    {image ? (
                      <div className="relative">
                        <Image
                          alt="Category image"
                          className="aspect-square w-full rounded-md object-cover"
                          height="300"
                          src={image}
                          width="300"
                        />
                        <Button
                          type="button"
                          onClick={() => setImage(null)}
                          className="absolute size-12 top-3 right-3 rounded-full"
                        >
                          <X className=" text-white" />
                        </Button>
                      </div>
                    ) : (
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
                              className="flex aspect-square w-[300px] items-center justify-center rounded-md border border-dashed flex-col gap-4"
                            >
                              <Upload className="size-8 text-muted-foreground" />
                              <span className="text-muted-foreground">
                                Click to upload
                              </span>
                              <span className="sr-only">Upload</span>
                            </button>
                          );
                        }}
                      </CldUploadWidget>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="flex items-center justify-center gap-2 md:hidden">
          <Button type="submit" size="sm">
            Save Category
          </Button>
        </div>
      </form>
    </>
  );
}
