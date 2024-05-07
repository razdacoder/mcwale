import { TypedSupabaseClient } from "@/lib/types";
import { billingSchema } from "@/schemas/formSchemas";
import { CartItem } from "@/store/useCart";
import { uid } from "uid";
import { z } from "zod";
import { api } from "./supabase";

const createOrderItem = async (client: TypedSupabaseClient, cart: CartItem) => {
  const { data, error } = await client
    .from("order_item")
    .insert([
      {
        product: cart.product.id,
        size: cart.size,
        color: cart.color,
        quantity: cart.quantity,
      },
    ])
    .select()
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data.id;
};

// export const createOrder = async (
//   client: TypedSupabaseClient,
//   values: z.infer<typeof billingSchema>,
//   cart: CartItem[],
//   price: number
// ) => {
//   const itemsIds: string[] = [];
//   for (let i = 0; i < cart.length; i++) {
//     const data = await createOrderItem(client, cart[i]);
//     itemsIds.push(data);
//   }
//   const { data, error } = await client
//     .from("orders")
//     .insert([
//       {
//         first_name: values.first_name,
//         last_name: values.last_name,
//         email: values.email,
//         phone_number: values.phoneNumber,
//         address1: values.address1,
//         address2: values.address2,
//         town: values.town,
//         state: values.state,
//         country: values.country,
//         postal_code: values.postal_code,
//         order_note: values.order_note,
//         items: itemsIds,
//         price: price,
//       },
//     ])
//     .select();

//   if (error) {
//     throw new Error(error.message);
//   }

//   return data;
// };

type CartItemOrder = {
  product_id: string;
  size: string;
  color: string;
  quantity: number;
};

const parseCart = (cart: CartItem[]): CartItemOrder[] => {
  const newCart = cart.map((cart) => {
    const cartItem: CartItemOrder = {
      product_id: cart.product.id,
      size: cart.size,
      color: cart.color,
      quantity: cart.quantity,
    };
    return cartItem;
  });

  return newCart;
};

export const createOrder = async (
  values: z.infer<typeof billingSchema>,
  cart: CartItem[],
  price: number
) => {
  const parsedCart = parseCart(cart);
  const orderNumber = uid();

  const order = {
    order_number: orderNumber,
    first_name: values.first_name,
    last_name: values.last_name,
    email: values.email,
    phone_number: values.phoneNumber,
    address_line_1: values.address1,
    address_line_2: values.address2,
    town: values.town,
    state: values.state,
    country: values.country,
    postal_code: values.postal_code,
    order_note: values.order_note,
    total: price,
    items: parsedCart,
  };

  const response = await api.post("/orders", order);
  if (response.status != 201) {
    throw new Error("Failed to create order");
  }

  return response.data as { order_number: string };
};
