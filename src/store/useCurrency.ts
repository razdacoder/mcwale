import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CurrencyState {
  currency: "NGN" | "USD" | "GBP";
  setCurrency: (value: "NGN" | "USD" | "GBP") => void;
}

export const useCurrencyStore = create<CurrencyState>()(
  persist(
    (set) => ({
      currency: "USD",
      setCurrency: (value: "NGN" | "USD" | "GBP") => set({ currency: value }),
    }),
    {
      name: "currency-store",
    }
  )
);
