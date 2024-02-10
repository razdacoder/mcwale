"use client";
import { Category } from "@/lib/types";
import React, { ReactNode, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import * as z from "zod"
import { categorySchema } from "@/schemas/formSchemas";
import { zodResolver } from "@hookform/resolvers/zod";

interface CategoryFormProps {
  children: ReactNode;
  category?: Category;
}

export default function CategoryForm({
  children,
  category,
}: CategoryFormProps) {
  const isEditMode = Boolean(category);
  const form = useForm<z.infer<typeof categorySchema>>({
    resolver: zodResolver(categorySchema),
    defaultValues: isEditMode ? {
        title: category?.title,
        styles: category?.styles.join(","),
        image: ""
    } : {title: "", styles: "", image: ""}
  })

  function onSubmit(values: z.infer<typeof categorySchema>) {}
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {isEditMode ? "Edit Category" : "Create Category"}
          </DialogTitle>
        </DialogHeader>
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField name="title" control={form.control} render={({field}) => (
                    <FormItem>
                        <FormLabel>Title</FormLabel>
                        <FormControl>
                            <Input {...field}/>
                        </FormControl>
                        <FormDescription>Unique name for the category</FormDescription>
                        <FormMessage/>
                    </FormItem>
                )} />
                <FormField name="styles" control={form.control} render={({field}) => (
                    <FormItem>
                        <FormLabel>Styles</FormLabel>
                        <FormControl>
                            <Input {...field}/>
                        </FormControl>
                        <FormDescription>Note: Seperate the styles by comma.</FormDescription>
                        <FormMessage/>
                    </FormItem>
                )} />
                <FormField name="image" control={form.control} render={({field}) => (
                    <FormItem>
                        <FormLabel>Image</FormLabel>
                        <FormControl>
                            <Input type="file" accept="image/*" {...field}/>
                        </FormControl>
                        <FormDescription>Upload JPEG Images 16 x 9</FormDescription>
                        <FormMessage/>
                    </FormItem>
                )} />
                <Button className="w-full">{isEditMode ? "Edit Category" : "Create Category"}</Button>
            </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
