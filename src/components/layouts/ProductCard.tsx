"use client";
import { formatPriceToNaira } from "@/lib/utils";
import { Heart, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";

export default function ProductCard() {
  return (
    <div className="w-full relative">
      <div className="absolute z-20 w-full top-0 left-0 px-3 py-4 flex justify-between">
        <Button size="icon" className="rounded-full shadow-md">
          <ShoppingCart className="w-4 h-4" />
        </Button>
        <Button size="icon" className="rounded-full shadow-md">
          <Heart className="w-4 h-4" />
        </Button>
      </div>
      <div className="w-full h-[450px]">
        <Carousel>
          <CarouselContent className="h-[450px] gap-x-0">
            <CarouselItem>
              <div className="h-full bg-[url('/img1-min.jpg')] bg-no-repeat bg-cover bg-center flex items-center px-8 lg:px-32"></div>
            </CarouselItem>
            <CarouselItem>
              <div className="h-full bg-[url('/img2-min.jpg')] bg-no-repeat bg-cover bg-center flex items-center px-8 lg:px-32"></div>
            </CarouselItem>
            <CarouselItem>
              <div className="h-full bg-[url('/img4-min.jpg')] bg-no-repeat bg-cover bg-center flex items-center px-8 lg:px-32"></div>
            </CarouselItem>
            <CarouselItem>
              <div className="h-full bg-[url('/img5-min.jpg')] bg-no-repeat bg-cover bg-center flex items-center px-8 lg:px-32"></div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
      <Link href="#">
        <div className="w-5/6 mx-auto flex items-center flex-col gap-y-2 mt-4">
          <span className="font-semibold text-center text-sm w-full leading-5">
            A Cream White, peak lapel, Square Patterned jacquard jacket
          </span>
          <span className="font-semibold text-sm tracking-wide">
            {formatPriceToNaira(75000)}
          </span>
        </div>
      </Link>
    </div>
  );
}
