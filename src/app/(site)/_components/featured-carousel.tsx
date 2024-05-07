"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Product } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";

interface FeaturedCarouselProps {
  products: Product[];
}

export default function FeaturedCarousel({ products }: FeaturedCarouselProps) {
  return (
    <Carousel className="w-full relative">
      <CarouselContent className="-ml-6 ">
        {products?.map((product, index) => (
          <CarouselItem
            key={product.id}
            className="pl-6 basis-full md:basis-1/2 lg:basis-1/4 xl:basis-1/5"
          >
            <Link
              href={`/shop/products/${product.slug}`}
              className="w-full h-[500px] lg:h-[380px]"
            >
              <div className=" relative h-[500px] lg:h-[380px] w-full">
                <Image src={product.images[0]} fill alt={product.title} />
              </div>
              <span className="block font-medium capitalize mt-3 text-primary text-sm">
                {product.title}
              </span>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="absolute -bottom-6 left-[50%] ">
        <CarouselPrevious />
        <CarouselNext />
      </div>
    </Carousel>
  );
}
