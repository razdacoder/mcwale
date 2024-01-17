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
import { reviewSchema } from "@/schemas/formSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { AiOutlineEdit } from "react-icons/ai";
import { MdStar } from "react-icons/md";
import * as z from "zod";

export default function ReviewForm() {
  const form = useForm<z.infer<typeof reviewSchema>>({
    resolver: zodResolver(reviewSchema),
    defaultValues: {
      stars: "",
      review: "",
      first_name: "",
      last_name: "",
      image: "",
    },
  });
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="lg" className="flex gap-x-3 items-center">
          <AiOutlineEdit className="w-4 h-4" />
          Add review
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <h4 className="font-light uppercase font-sm">Add Review</h4>
        <Form {...form}>
          <form className="mt-6 space-y-6">
            <FormField
              control={form.control}
              name="first_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Firstname</FormLabel>
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
                  <FormLabel>Lastname</FormLabel>
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
                      <SelectItem value="1">
                        <div className="flex flex-row gap-x-3 items-center">
                          <div className="flex gap-x-1">
                            <MdStar className="w-4 h-4" />
                            <MdStar className="w-4 h-4" />
                          </div>
                          <span>2 star</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="1">
                        <div className="flex gap-x-3 items-center">
                          <div className="flex gap-x-1">
                            <MdStar className="w-4 h-4" />
                            <MdStar className="w-4 h-4" />
                            <MdStar className="w-4 h-4" />
                          </div>
                          <span>3 star</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="1">
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
                    <Textarea className="resize-none"></Textarea>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="image"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Image</FormLabel>
                  <FormControl>
                    <Input type="file" accept="image/*" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-end">
              <Button type="submit">Submit</Button>
            </div>
          </form>
        </Form>
      </SheetContent>
    </Sheet>
  );
}
