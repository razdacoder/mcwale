import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPriceToNaira(price: number): string {
  const formattedPrice = price.toLocaleString("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 2,
  });

  return formattedPrice;
}

export function formatPriceToDollar(price: number): string {
  const formattedPrice = price.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });

  return formattedPrice;
}

export function formatPriceToGBP(price: number): string {
  const formattedPrice = price.toLocaleString("en-GB", {
    style: "currency",
    currency: "GBP",
    minimumFractionDigits: 2,
  });

  return formattedPrice;
}

// Function to calculate discount price
export function calculateDiscountPrice(
  originalPrice: number,
  discountPercentage: number
): number {
  return originalPrice - (originalPrice * discountPercentage) / 100;
}
