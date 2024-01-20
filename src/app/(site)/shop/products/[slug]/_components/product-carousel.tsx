"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function ProductCarousel() {
  return (
    <Carousel className="w-full relative">
      <CarouselPrevious className="absolute top-[50%] left-2 z-10" />

      <CarouselNext className="absolute top-[50%] right-2 z-10" />

      <CarouselContent className="xl:h-[90vh] -ml-0 w-full">
        <CarouselItem className="pl-0">
          <div className="h-full w-full flex items-center">
            <img
              src="/img1-min.jpg"
              className="w-full h-full"
              alt="Product Image"
            />
          </div>
        </CarouselItem>
        <CarouselItem className="pl-0">
          <div className="h-full ">
            <img
              src="/img2-min.jpg"
              className="w-full h-full"
              alt="Product Image"
            />
          </div>
        </CarouselItem>
        <CarouselItem className="pl-0">
          <div className="h-full ">
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
  );
}
