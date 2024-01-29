"use client";
import { Product } from "@/lib/types";
import {
  calculateDiscountPrice,
  cn,
  formatPriceToDollar,
  formatPriceToNaira,
} from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";

type ProductCardProps = {
  height?: string;
  product: Product;
};

export default function ProductCard({ height, product }: ProductCardProps) {
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
          <span className="font-medium w-full capitalize tracking-wider">
            {product.name}
          </span>
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
              {formatPriceToNaira(product.price)}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
