"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
            <div className="relative flex items-center">
              <img src={image} className=" w-full h-full" alt="Product Image" />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
