import { CartItem } from "@/store/useCart";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { format } from "date-fns";
import { Product, Review } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getTotalRating(reviews: Review[]): number {
  if (reviews.length === 0) {
    return 0;
  }
  const totalStars = reviews.reduce((accumulator, review) => {
    return accumulator + review.stars;
  }, 0);
  const averageRating = totalStars / reviews.length;
  return averageRating;
}

export function parseDate(date: Date): string {
  return format(date, "dd/MM/yyyy");
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
  const formattedPrice = price?.toLocaleString("en-US", {
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

export function getRatePrice(
  currency: "NGN" | "USD" | "GBP",
  price: number,
  rate: number | null
): string {
  if (currency === "USD") return formatPriceToDollar(price);
  if (currency === "GBP") return formatPriceToGBP(price * rate!);
  return formatPriceToNaira(price * rate!);
}

export function getPrice(product: Product): number {
  if (product.discount_percentage == 0) return product.price;
  return calculateDiscountPrice(product.price, product.discount_percentage);
}

function calculateOriginalTotal(cart: CartItem[]): number {
  return cart.reduce(
    (total, item) => total + item.quantity * item.product.price,
    0
  );
}

function calculateDiscountedTotal(cart: CartItem[]): number {
  return cart.reduce(
    (total, item) =>
      total +
      item.quantity *
        calculateDiscountPrice(
          item.product.price,
          item.product.discount_percentage
        ),
    0
  );
}

export function calculateTotalSavings(cart: CartItem[]): number {
  const originalTotal = calculateOriginalTotal(cart);
  const discountedTotal = calculateDiscountedTotal(cart);
  const totalSavings = originalTotal - discountedTotal;
  return totalSavings;
}
export const calTotal = (cart: CartItem[]) => {
  return cart.reduce(
    (total, item) => total + item.quantity * getPrice(item.product),
    0
  );
};
