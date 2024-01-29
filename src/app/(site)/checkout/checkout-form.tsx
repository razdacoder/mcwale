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
import { formatPriceToNaira } from "@/lib/utils";
import { billingSchema } from "@/schemas/formSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { closePaymentModal, useFlutterwave } from "flutterwave-react-v3";
import { useForm } from "react-hook-form";
import * as z from "zod";

export default function CheckoutForm() {
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
  const config = {
    public_key: process.env.NEXT_PUBLIC_FLW_PUBLIC_KEY!,
    tx_ref: Date.now().toString(),
    amount: 100,
    currency: "NGN",
    payment_options: "card,banktransfer,ussd",
    customer: {
      email: "john@gmail.com",
      phone_number: "08024283327",
      name: "Ramon Rasheed",
    },
    customizations: {
      title: "McWale Checkout",
      description: "Payment for items in cart",
      logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
  };
  const handleFlutterPayment = useFlutterwave(config);
  function onSubmit(values: z.infer<typeof billingSchema>) {
    config.customer.email = values.email;
    config.customer.phone_number = values.phoneNumber;
    config.customer.name = `${values.first_name} ${values.last_name}`;
    handleFlutterPayment({
      callback: (response) => {
        console.log(response);
        closePaymentModal(); // this will close the modal programmatically
      },
      onClose: () => {},
    });
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col lg:flex-row gap-6"
      >
        <div className="space-y-4 lg:w-2/3">
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
        <div className="lg:w-1/3">
          <Heading className="text-left text-lg normal-case">
            Your Order <span className="text-sm">(1 item)</span>
          </Heading>
          <div className="grid grid-cols-5 text-sm font-medium py-3">
            <span>Product</span>
            <span>Size</span>
            <span>Color</span>
            <span>Quantity</span>
            <span>Total</span>
          </div>
          <div className="grid grid-cols-5 text-xs font-light py-3">
            <span>Agbada Dress</span>
            <span>XL</span>
            <span>White</span>
            <span>x 2</span>
            <span className="text-xs">{formatPriceToNaira(150000)}</span>
          </div>
          <div className="grid grid-cols-5 text-sm font-medium border-t py-3">
            <span>Subtotal</span>
            <span></span>
            <span></span>
            <span></span>
            <span className="text-xs">{formatPriceToNaira(150000)}</span>
          </div>
          <div className="grid grid-cols-5 text-xs font-medium border-t py-3">
            <span>Shipping</span>
            <span></span>
            <span></span>
            <span></span>
            <span className="text-xs">{formatPriceToNaira(2000)}</span>
          </div>
          <div className="grid grid-cols-5 text-sm font-medium border-t py-3">
            <span>Total</span>
            <span></span>
            <span></span>
            <span></span>
            <span className="text-xs">{formatPriceToNaira(152000)}</span>
          </div>

          <div className="mt-4 w-full">
            <Button size="lg" className="w-full">
              Pay
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
}
