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
      <CarouselContent className="-ml-2 ">
        {products.map((product, index) => (
          <CarouselItem
            key={product.id}
            className="pl-2 basis-2/3 md:basis-1/3 lg:basis-1/5"
          >
            <Link href="#" className="w-full h-[300px] md:h-[350px]">
              <div className=" relative h-[280px] md:h-[330px] w-full">
                <Image src={product.images[0]} fill alt={product.name} />
              </div>
              <span className="block font-medium capitalize mt-3 text-primary text-sm">
                {product.name}
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
