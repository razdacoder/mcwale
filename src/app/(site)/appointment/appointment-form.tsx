"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { appointmentSchema } from "@/schemas/formSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

export default function AppointmentForm() {
  const form = useForm<z.infer<typeof appointmentSchema>>({
    resolver: zodResolver(appointmentSchema),
    defaultValues: {
      date: new Date(),
      first_name: "",
      last_name: "",
      address: "",
      email: "",
      phone_number: "",
      hh: "",
      mm: "",
    },
  });
  return (
    <Form {...form}>
      <form className="space-y-4 w-full md:pr-3 xl:w-9/12">
        <FormField
          control={form.control}
          name="first_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="uppercase text-sm font-semibold tracking-wider">
                first name
              </FormLabel>
              <FormControl>
                <Input
                  className="w-full px-1 outline-none border-[3px] border-black"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="last_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="uppercase text-sm font-semibold tracking-wider">
                last name
              </FormLabel>
              <FormControl>
                <Input
                  className="w-full px-1 outline-none border-[3px] border-black"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="uppercase text-sm font-semibold tracking-wider">
                address
              </FormLabel>
              <FormControl>
                <Input
                  className="w-full px-1 outline-none border-[3px] border-black"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="uppercase text-sm font-semibold tracking-wider">
                email
              </FormLabel>
              <FormControl>
                <Input
                  type="email"
                  className="w-full px-1 outline-none border-[3px] border-black"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <div className="flex gap-x-6">
          <div className="flex-1">
            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="uppercase text-sm font-semibold tracking-wider">
                    date
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="date"
                      className="w-full px-1 outline-none border-[3px] border-black"
                      value={new Date(field.value).toDateString()}
                      onChange={(e) => (field.value = e.target.value)}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>

          <div className="flex w-2/4 gap-x-1">
            <FormField
              control={form.control}
              name="hh"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="uppercase text-sm font-semibold tracking-wider">
                    time
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="w-full px-1 outline-none border-[3px] border-black"
                      {...field}
                    />
                  </FormControl>
                  <FormLabel className="uppercase text-sm font-semibold tracking-wider">
                    hh
                  </FormLabel>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="mm"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="uppercase text-sm font-semibold tracking-wider">
                    &nbsp;
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="w-full px-1 outline-none border-[3px] border-black"
                      {...field}
                    />
                  </FormControl>
                  <FormLabel className="uppercase text-sm font-semibold tracking-wider">
                    mm
                  </FormLabel>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="period"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="uppercase text-sm font-semibold tracking-wider">
                    &nbsp;
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="w-full px-1 outline-none border-[3px] border-black">
                        <SelectValue placeholder="Select period" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="am">AM</SelectItem>
                      <SelectItem value="pm">PM</SelectItem>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
          </div>
        </div>
        <FormField
          control={form.control}
          name="phone_number"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="uppercase text-sm font-semibold tracking-wider">
                phone number
              </FormLabel>
              <FormControl>
                <Input
                  className="w-full px-1 outline-none border-[3px] border-black"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <div className="flex justify-end">
          <Button size="lg" className="uppercase">
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
}
