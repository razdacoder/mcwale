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
import Spinner from "@/components/ui/spinner";
import useLogin from "@/hooks/useLogin";
import { loginSchema } from "@/schemas/formSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import * as z from "zod";

export default function LoginForm() {
  const { signIn, status } = useLogin();
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { isValid } = form.formState;
  function onSubmit(values: z.infer<typeof loginSchema>) {
    if (isValid) {
      signIn(values);
    }
    form.reset();
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mt-12 w-full md:w-2/3 xl:w-1/3 md:mx-auto space-y-8"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  disabled={status === "pending"}
                  type="email"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <div className="flex justify-end">
                <Link href="/account/reset-password" className="text-sm italic">
                  Forgot Passwrod?
                </Link>
              </div>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  disabled={status === "pending"}
                  type="password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex items-center justify-between">
          <Button
            disabled={!isValid || status === "pending"}
            type="submit"
            className="uppercase flex gap-x-3 items-center"
          >
            {status === "pending" && <Spinner />} Login
          </Button>
          <p className="text-sm">
            Not yet a customer?{" "}
            <Link className="underline font-semibold" href="/account/register">
              Register
            </Link>{" "}
          </p>
        </div>
      </form>
    </Form>
  );
}
