import { create } from "zustand";
import { persist } from "zustand/middleware";

interface RateState {
  rate: { NGN: number; GBP: number };

  setRate: (value: { NGN: number; GBP: number }) => void;
}

export const useRateStore = create<RateState>()(
  persist(
    (set) => ({
      rate: { NGN: 1420, GBP: 0.79 },
      setRate: (value: { NGN: number; GBP: number }) => set({ rate: value }),
    }),
    {
      name: "rate-store",
    }
  )
);
