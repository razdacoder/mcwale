"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export default function ProductCarousel() {
  return (
    <Carousel className="w-full">
      <CarouselContent className="h-[60vh] lg:h-[90vh] -ml-0 w-full">
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
