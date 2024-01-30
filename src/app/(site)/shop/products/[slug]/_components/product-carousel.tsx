"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

interface ProductCarouselProps {
  images: string[];
}

export default function ProductCarousel({ images }: ProductCarouselProps) {
  return (
    <Carousel className="w-full relative">
      <CarouselPrevious className="absolute top-[50%] left-2 z-10" />

      <CarouselNext className="absolute top-[50%] right-2 z-10" />

      <CarouselContent className="xl:h-[90vh] -ml-0 w-full">
        {images.map((image, index) => (
          <CarouselItem key={index} className="pl-0">
            <div className="relative h-full w-full flex items-center">
              <Image
                src={image}
                className="absolute"
                fill
                alt="Product Image"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
