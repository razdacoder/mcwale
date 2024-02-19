"use client";

import * as z from "zod";

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
import { Category } from "@/lib/types";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { getAllCategories } from "@/services/categoriesServices";
import { productSchema } from "@/schemas/formSchemas";
import { useForm } from "react-hook-form";
import { useQuery } from "@supabase-cache-helpers/postgrest-react-query";
import useSupabaseBrowser from "@/lib/supabase-client";
import { zodResolver } from "@hookform/resolvers/zod";

export default function ProductCreateEditForm() {
  const supabase = useSupabaseBrowser();
  const { data, isLoading } = useQuery(getAllCategories(supabase));
  const [seletedCategorySlug, setSelectedCategorySlug] = useState<
    string | null
  >(null);
  const categories = data as Category[];
  const form = useForm<z.infer<typeof productSchema>>({
    resolver: zodResolver(productSchema),
    defaultValues: {},
  });

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
                <FormDescription>Unique name for the product</FormDescription>
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
            <FormDescription>Select Category</FormDescription>
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
                  <Input type="number" {...field} />
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
                <Textarea className="resize-none" rows={3}></Textarea>
              </FormControl>
              <FormDescription>Description for the product</FormDescription>
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
            <FormDescription>Upload JPEG Images 16 x 9</FormDescription>
            <FormMessage />
          </FormItem>

          <FormField
            name="style"
            control={form.control}
            render={({ field }) => (
              <FormItem className="w-1/2">
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Select>
                    <SelectTrigger
                      disabled={!seletedCategorySlug}
                      className="w-full"
                    >
                      <SelectValue placeholder="Select a category" />
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
                <FormDescription>Style of the product</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button
          //   disabled={!isValid || isSubmitting || (!isEditMode && image === null)}
          type="submit"
          className="w-full flex items-center gap-x-3"
        >
          Hello
          {/* {isEditMode ? "Edit Category" : "Create Category"}{" "} */}
          {/* {isSubmitting && <Loader2 className="w-4 h-4 animate-spin" />} */}
        </Button>
      </form>
    </Form>
  );
}
