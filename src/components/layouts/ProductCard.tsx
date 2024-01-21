"use client";
import { cn, formatPriceToNaira } from "@/lib/utils";
import Link from "next/link";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";

type ProductCardProps = {
  height?: string;
};

export default function ProductCard({ height }: ProductCardProps) {
  return (
    <Link href="/shop/products/agbada">
      <div className="w-full">
        <div className={cn("h-[450px] w-full", height)}>
          <Carousel className="w-full">
            <CarouselContent className={cn("h-[450px] w-full -ml-0", height)}>
              <CarouselItem className="pl-0">
                <div className="h-full">
                  <img
                    src="/img1-min.jpg"
                    className="w-full h-full"
                    alt="Product Image"
                  />
                </div>
              </CarouselItem>
              <CarouselItem className="pl-0">
                <div className="h-full">
                  <img
                    src="/img2-min.jpg"
                    className="w-full h-full"
                    alt="Product Image"
                  />
                </div>
              </CarouselItem>
              <CarouselItem className="pl-0">
                <div className="h-full">
                  <img
                    src="/img4-min.jpg"
                    className="w-full h-full"
                    alt="Product Image"
                  />
                </div>
              </CarouselItem>
              <CarouselItem className="pl-0">
                <div className="h-full">
                  <img
                    src="/img5-min.jpg"
                    className="w-full h-full"
                    alt="Product Image"
                  />
                </div>
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </div>

        <div className="w-full flex items-center flex-col gap-y-1 mt-4">
          <span className="font-medium text-center text-sm w-full leading-5 uppercase tracking-wider">
            AGBADA DRESS
          </span>

          <span className="font-medium text-sm mb-3 tracking-wide">
            {formatPriceToNaira(75000)}
          </span>
        </div>
      </div>
    </Link>
  );
}
