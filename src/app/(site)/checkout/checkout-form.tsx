"use client";
import Heading from "@/components/ui/Heading";
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
import { Textarea } from "@/components/ui/textarea";
import {
  calTotal,
  formatPriceToDollar,
  getPrice,
  getRatePrice,
} from "@/lib/utils";
import { billingSchema } from "@/schemas/formSchemas";
import { getPaymentLink } from "@/services/paymentServices";
import { useCartStore } from "@/store/useCart";
import { useCurrencyStore } from "@/store/useCurrency";
import { useRateStore } from "@/store/useRates";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

export default function CheckoutForm() {
  const { currency } = useCurrencyStore();
  const { cart } = useCartStore();
  const [isClient, setIsClient] = useState(false);
  const { rate } = useRateStore();
  useEffect(() => {
    setIsClient(true);
  }, []);
  const form = useForm<z.infer<typeof billingSchema>>({
    resolver: zodResolver(billingSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      phoneNumber: "",
      address1: "",
      address2: "",
      town: "",
      state: "",
      country: "",
      postal_code: "",
      order_note: "",
    },
  });

  const { isSubmitting } = form.formState;

  async function onSubmit(values: z.infer<typeof billingSchema>) {
    const data = await getPaymentLink(
      30000,
      currency,
      `${values.first_name} ${values.last_name}`,
      values.email,
      values.phoneNumber
    );
    return redirect(data.data.link);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col lg:flex-row gap-12"
      >
        <div className="space-y-4 lg:w-3/6">
          <FormField
            control={form.control}
            name="first_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input {...field} />
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
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input type="tel" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="address1"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Adreess Line 1</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="address2"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Adreess Line 2</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            <FormField
              control={form.control}
              name="town"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Town</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="state"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>State</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Country</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="postal_code"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Postal Code</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="order_note"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Order Note</FormLabel>
                <FormControl>
                  <Textarea
                    rows={2}
                    className="resize-none"
                    {...field}
                  ></Textarea>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="lg:w-3/6">
          {isClient ? (
            <>
              <Heading className="text-left text-lg normal-case">
                Your Order{" "}
                <span className="text-sm">
                  ({isClient ? cart.length : 0} item)
                </span>
              </Heading>
              <div className="grid grid-cols-5 text-sm uppercase font-medium py-3 gap-x-3">
                <span>Product</span>
                <span>Size</span>
                <span>Color</span>
                <span>Quantity</span>
                <span className="text-right">Total</span>
              </div>
              {cart.map((item, index) => (
                <div
                  key={item.product.id}
                  className="grid grid-cols-5 text-sm py-3 gap-x-3"
                >
                  <span className="truncate">{item.product.name}</span>
                  <span>{item.size}</span>
                  <span>{item.color}</span>
                  <span>x {item.quantity}</span>
                  <span className="text-right">
                    {isClient
                      ? getRatePrice(
                          currency,
                          getPrice(item.product) * item.quantity,
                          currency === "USD" ? null : rate[currency]
                        )
                      : formatPriceToDollar(
                          getPrice(item.product) * item.quantity
                        )}
                  </span>
                </div>
              ))}
              <div className="grid grid-cols-5 text-sm uppercase font-medium border-t py-3">
                <span>Subtotal</span>
                <span></span>
                <span></span>
                <span></span>
                <span className="text-right">
                  {isClient
                    ? getRatePrice(
                        currency,
                        calTotal(cart),
                        currency === "USD" ? null : rate[currency]
                      )
                    : formatPriceToDollar(0)}
                </span>
              </div>
              <div className="grid grid-cols-5 text-sm uppercase font-medium border-t py-3">
                <span>Shipping</span>
                <span></span>
                <span></span>
                <span></span>
                <span className="text-right">
                  {getRatePrice(
                    currency,
                    2,
                    currency === "USD" ? null : rate[currency]
                  )}
                </span>
              </div>
              <div className="grid grid-cols-5 text-sm uppercase font-medium border-t py-3">
                <span>Total</span>
                <span></span>
                <span></span>
                <span></span>
                <span className="text-right">
                  {isClient
                    ? getRatePrice(
                        currency,
                        calTotal(cart) + 2,
                        currency === "USD" ? null : rate[currency]
                      )
                    : formatPriceToDollar(0)}
                </span>
              </div>
            </>
          ) : null}

          <div className="mt-4 w-full">
            <Button size="lg" className="w-full flex gap-x-3 items-center">
              Pay {isSubmitting && <Loader2 className="w-4 h-4 animate-spin" />}
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
}
