"use client";
import { Product } from "@/lib/types";
import {
  calculateDiscountPrice,
  cn,
  formatPriceToDollar,
  formatPriceToGBP,
  formatPriceToNaira,
} from "@/lib/utils";
import { useCurrencyStore } from "@/store/useCurrency";
import { useRateStore } from "@/store/useRates";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";

type ProductCardProps = {
  height?: string;
  product: Product;
};

export default function ProductCard({ height, product }: ProductCardProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  const { currency } = useCurrencyStore();
  const { rate } = useRateStore();
  const getDiscountPrices = () => {
    if (currency === "USD")
      return (
        <span className="font-medium text-sm mb-3 tracking-wide">
          {formatPriceToDollar(
            calculateDiscountPrice(product.price, product.discount_percentage)
          )}
        </span>
      );
    if (currency === "GBP")
      return (
        <span className="font-medium text-sm mb-3 tracking-wide">
          {formatPriceToGBP(
            calculateDiscountPrice(
              product.price * rate.GBP,
              product.discount_percentage
            )
          )}
        </span>
      );
    return (
      <span className="font-medium text-sm mb-3 tracking-wide">
        {formatPriceToNaira(
          calculateDiscountPrice(
            product.price * rate.NGN,
            product.discount_percentage
          )
        )}
      </span>
    );
  };
  const getPrices = () => {
    if (currency === "USD")
      return (
        <span className="font-medium text-sm mb-3 tracking-wide">
          {formatPriceToDollar(product.price)}
        </span>
      );
    if (currency === "GBP")
      return (
        <span className="font-medium text-sm mb-3 tracking-wide">
          {formatPriceToGBP(product.price * rate.GBP)}
        </span>
      );
    return (
      <span className="font-medium text-sm mb-3 tracking-wide">
        {formatPriceToNaira(product.price * rate.NGN)}
      </span>
    );
  };
  return (
    <Link href={`/shop/products/${product.slug}`}>
      <div className="w-full">
        <div className={cn("h-[450px] w-full", height)}>
          <Carousel className="w-full">
            <CarouselContent className={cn("h-[450px] w-full -ml-0", height)}>
              {product.images.map((image, index) => (
                <CarouselItem key={index} className="pl-0">
                  <div className="h-full relative">
                    <Image
                      src={image}
                      fill
                      alt={product.name}
                      className="absolute"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        <div className="w-full flex flex-col gap-y-2 mt-4">
          <span className="text-sm truncate lg:text-base font-medium w-full capitalize tracking-wider">
            {product.name}
          </span>
          {isClient ? (
            <div className="flex gap-x-3">
              {product.discount_percentage > 0 && getDiscountPrices()}
              <span
                className={cn(
                  "font-medium text-sm mb-3 tracking-wide",
                  product.discount_percentage > 0 && "line-through text-red-500"
                )}
              >
                {getPrices()}
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
