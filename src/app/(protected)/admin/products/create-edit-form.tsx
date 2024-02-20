"use client";

import * as z from "zod";

import { Category, Product } from "@/lib/types";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { getAllCategories } from "@/services/categoriesServices";
import { productSchema } from "@/schemas/formSchemas";
import { useForm } from "react-hook-form";
import { useQuery } from "@supabase-cache-helpers/postgrest-react-query";
import useSupabaseBrowser from "@/lib/supabase-client";
import { zodResolver } from "@hookform/resolvers/zod";

interface ProductCreateEditFormProps {
  product?: Product;
}

export default function ProductCreateEditForm({
  product,
}: ProductCreateEditFormProps) {
  const isEditMode = Boolean(product);
  const supabase = useSupabaseBrowser();
  const { data, isLoading } = useQuery(getAllCategories(supabase));
  const [seletedCategorySlug, setSelectedCategorySlug] = useState<
    string | undefined
  >(product?.category.slug);
  const [images, setImages] = useState<FileList | null>(null);
  const categories = data as Category[];
  const form = useForm<z.infer<typeof productSchema>>({
    resolver: zodResolver(productSchema),
    defaultValues: isEditMode
      ? {
          name: product?.name,
          price: product?.price,
          discount_percentage: product?.discount_percentage,
          description: product?.description,
          style: product?.style,
          is_featured: product?.is_featured,
        }
      : {
          name: "",
          price: 0,
          discount_percentage: 0,
          description: "",
          style: "",
          is_featured: false,
        },
  });

  const { isSubmitting, isValid } = form.formState;

  function onSubmit() {}
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="flex items-center gap-x-3">
          <FormField
            name="name"
            control={form.control}
            render={({ field }) => (
              <FormItem className="w-1/2">
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormItem className="w-1/2">
            <FormLabel>Category</FormLabel>
            <FormControl>
              <Select
                onValueChange={(value: string) =>
                  setSelectedCategorySlug(value)
                }
                defaultValue={product?.category.slug}
              >
                <SelectTrigger
                  disabled={isLoading}
                  className="w-full capitalize"
                >
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  {categories?.map((category, index) => (
                    <SelectItem
                      key={category.id}
                      value={category.slug}
                      className="capitalize"
                    >
                      {category.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormControl>
            <FormMessage />
          </FormItem>
        </div>

        <div className="flex items-center gap-x-3">
          <FormField
            name="price"
            control={form.control}
            render={({ field }) => (
              <FormItem className="w-1/2">
                <FormLabel>Price</FormLabel>
                <FormControl>
                  <Input type="number" {...field} />
                </FormControl>
                <FormDescription>
                  Price of the product in dollar
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            name="discount_percentage"
            control={form.control}
            render={({ field }) => (
              <FormItem className="w-1/2">
                <FormLabel>Discount Percentage</FormLabel>
                <FormControl>
                  <Input placeholder="" type="number" {...field} />
                </FormControl>
                <FormDescription>If no discount add 0</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          name="description"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  className="resize-none"
                  rows={3}
                  {...field}
                ></Textarea>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex items-center gap-x-3">
          <FormItem className="w-1/2">
            <FormLabel>Images</FormLabel>
            <FormControl>
              <Input
                //   onChange={(e) => setImage(e.target.files![0])}
                type="file"
                accept="image/*"
                multiple
              />
            </FormControl>
            <FormMessage />
          </FormItem>

          <FormField
            name="style"
            control={form.control}
            render={({ field }) => (
              <FormItem className="w-1/2">
                <FormLabel>Style</FormLabel>
                <FormControl>
                  <Select>
                    <SelectTrigger
                      disabled={!seletedCategorySlug}
                      className="w-full"
                    >
                      <SelectValue placeholder="Select a style for the product" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories
                        ?.find(
                          (category) => category.slug === seletedCategorySlug
                        )
                        ?.styles?.map((style) => (
                          <SelectItem key={style} value={style}>
                            {style}
                          </SelectItem>
                        ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          name="is_featured"
          control={form.control}
          render={({ field }) => (
            <FormItem className="flex items-center gap-x-3">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="flex flex-col gap-y-1">
                <FormLabel>Featured</FormLabel>
                <FormDescription>
                  Set Product to display on the featured section.
                </FormDescription>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          disabled={
            !isValid || isSubmitting || (!isEditMode && images === null)
          }
          type="submit"
          className="w-full flex items-center gap-x-3"
        >
          {isEditMode ? "Edit Category" : "Create Category"}{" "}
          {isSubmitting && <Loader2 className="w-4 h-4 animate-spin" />}
        </Button>
      </form>
    </Form>
  );
}
