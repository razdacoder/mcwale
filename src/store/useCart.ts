import { Product } from "@/lib/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface CartItem {
  product: Product;
  size: string;
  color: string;
  quantity: number;
}

interface CartState {
  cart: CartItem[];
  addItem: (value: CartItem) => void;
  removeItem: (value: CartItem) => void;
  clearItems: () => void;
}

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      cart: [],
      addItem: (value: CartItem) =>
        set((state) => ({ cart: [...state.cart, value] })),
      removeItem: (value: CartItem) =>
        set((state) => ({
          cart: state.cart.filter(
            (cartItem) => cartItem.product.id !== value.product.id
          ),
        })),
      clearItems: () => set({ cart: [] }),
    }),
    {
      name: "cart-store",
    }
  )
);
