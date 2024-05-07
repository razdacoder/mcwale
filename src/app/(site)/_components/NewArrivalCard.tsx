"use client";
import { Product } from "@/lib/types";
import {
  calculateDiscountPrice,
  cn,
  formatPriceToDollar,
  getRatePrice,
} from "@/lib/utils";
import { useCurrencyStore } from "@/store/useCurrency";
import { useRateStore } from "@/store/useRates";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type ProductCardProps = {
  height?: string;
  product: Product;
};

export default function NewArrivalsCard({ height, product }: ProductCardProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  const { currency } = useCurrencyStore();
  const { rate } = useRateStore();

  return (
    <Link href={`/shop/products/${product.slug}`}>
      <div className="w-full">
        <div className={cn("h-[500px] lg:h-[380px] w-full", height)}>
          <div className="h-full relative overflow-hidden">
            <Image
              src={product.images[0]}
              fill
              alt={product.title}
              className="absolute hover:scale-150 transition-all duration-500"
              style={{
                objectFit: "cover",
              }}
            />
          </div>
        </div>

        <div className="w-full flex flex-col gap-y-2 mt-4">
          <span className="text-sm truncate lg:text-base font-light w-full capitalize tracking-wider">
            {product.title}
          </span>
          {isClient ? (
            <div className="flex gap-x-3">
              {product.discount_percentage > 0 && (
                <span className="font-medium text-sm mb-3 tracking-wide">
                  {getRatePrice(
                    currency,
                    calculateDiscountPrice(
                      product.price,
                      product.discount_percentage
                    ),
                    currency === "USD" ? null : rate[currency]
                  )}
                </span>
              )}
              <span
                className={cn(
                  "font-medium text-sm mb-3 tracking-wide",
                  product.discount_percentage > 0 && "line-through text-red-500"
                )}
              >
                {getRatePrice(
                  currency,
                  product.price,
                  currency === "USD" ? null : rate[currency]
                )}
              </span>
            </div>
          ) : (
            <div className="flex gap-x-3">
              {product.discount_percentage > 0 && (
                <span className="font-medium text-sm mb-3 tracking-wide">
                  {formatPriceToDollar(
                    calculateDiscountPrice(
                      product.price,
                      product.discount_percentage
                    )
                  )}
                </span>
              )}
              <span
                className={cn(
                  "font-medium text-sm mb-3 tracking-wide",
                  product.discount_percentage > 0 && "line-through text-red-500"
                )}
              >
                <span className="font-medium text-sm mb-3 tracking-wide">
                  {formatPriceToDollar(product.price)}
                </span>
              </span>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
