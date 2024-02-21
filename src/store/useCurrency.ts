import { create } from "zustand";

interface CurrencyState {
  currency: "NGN" | "USD" | "GBP";
  setCurrency: (value: "NGN" | "USD" | "GBP") => void;
}

const getInitailData = () => {
  const currency = localStorage.getItem("currency") || "USD";
  return currency;
};

export const useCurrencyStore = create<CurrencyState>()((set) => ({
  currency: getInitailData() as "NGN" | "USD" | "GBP",
  setCurrency: (value: "NGN" | "USD" | "GBP") => {
    set((state) => {
      localStorage.setItem("currency", value);
      return { currency: value };
    });
  },
}));
