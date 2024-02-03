"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Textarea } from "@/components/ui/textarea";
import useSupabaseBrowser from "@/lib/supabase-client";
import { reviewSchema } from "@/schemas/formSchemas";
import { createProductReview } from "@/services/productServices";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineEdit } from "react-icons/ai";
import { useRouter } from "next/navigation";
import { MdStar } from "react-icons/md";
import * as z from "zod";

interface ReviewFormProps {
  product: string;
}

export default function ReviewForm({ product }: ReviewFormProps) {
  const supabase = useSupabaseBrowser();
  const router = useRouter()
  const form = useForm<z.infer<typeof reviewSchema>>({
    resolver: zodResolver(reviewSchema),
    defaultValues: {
      stars: "",
      review: "",
      first_name: "",
      last_name: "",
    },
  });
  const { isSubmitting, isValid } = form.formState;
  const [err, setErr] = useState<string | null>(null)
  const [open, setOpen] = useState(false)
  async function onSumbit(values: z.infer<typeof reviewSchema>) {
    if (isValid) {
      const {data, error} = await createProductReview(supabase, {
        first_name: values.first_name,
        last_name: values.last_name,
        review: values.review,
        product,
        stars: parseInt(values.stars),
      });

      if (error) {
        setErr(error.message)
        return
      }

      form.reset()
      setOpen(false)
      router.refresh()

    }
  }
  // open={open} onOpenChange={() => setOpen(prev => !prev)}
  const onOpenChange = (value: boolean) => {
    form.reset()
    setOpen(value)
  }
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetTrigger asChild>
        <Button onClick={() => setOpen(true)} size="lg" className="flex gap-x-3 items-center">
          <AiOutlineEdit className="w-4 h-4" />
          Add review
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <h4 className="font-light uppercase font-sm">Add Review</h4>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSumbit)} className="mt-6 space-y-6">
           {err && <p className="text-red-500 capitalize">{err}</p>}
            <FormField
              control={form.control}
              name="first_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your firstname" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="last_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your lastname" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="stars"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Stars</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select number of stars" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="1">
                        <div className="flex gap-x-3 items-center">
                          <div className="flex gap-x-1">
                            <MdStar className="w-4 h-4" />
                          </div>
                          <span>1 star</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="2">
                        <div className="flex flex-row gap-x-3 items-center">
                          <div className="flex gap-x-1">
                            <MdStar className="w-4 h-4" />
                            <MdStar className="w-4 h-4" />
                          </div>
                          <span>2 star</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="3">
                        <div className="flex gap-x-3 items-center">
                          <div className="flex gap-x-1">
                            <MdStar className="w-4 h-4" />
                            <MdStar className="w-4 h-4" />
                            <MdStar className="w-4 h-4" />
                          </div>
                          <span>3 star</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="4">
                        <div className="flex gap-x-3 items-center">
                          <div className="flex gap-x-1">
                            <MdStar className="w-4 h-4" />
                            <MdStar className="w-4 h-4" />
                            <MdStar className="w-4 h-4" />
                            <MdStar className="w-4 h-4" />
                          </div>
                          <span>4 star</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="5">
                        <div className="flex gap-x-3 items-center">
                          <div className="flex gap-x-1">
                            <MdStar className="w-4 h-4" />
                            <MdStar className="w-4 h-4" />
                            <MdStar className="w-4 h-4" />
                            <MdStar className="w-4 h-4" />
                            <MdStar className="w-4 h-4" />
                          </div>

                          <span>5 star</span>
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="review"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Review</FormLabel>
                  <FormControl>
                    <Textarea {...field} className="resize-none"></Textarea>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-end">
              <Button className="flex items-center gap-x-3" disabled={!isValid || isSubmitting} type="submit">
                Submit{" "}
                {isSubmitting && <Loader2 className="w-4 h-4 animate-spin" />}
              </Button>
            </div>
          </form>
        </Form>
      </SheetContent>
    </Sheet>
  );
}
