"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ReviewStars from "@/components/ui/review-stars";

export default function ReviewsList() {
  return (
    <Carousel className="relative">
      <CarouselContent className="-ml-2 ">
        {Array.from({ length: 12 }).map((_, index) => (
          <CarouselItem key={index} className="pl-2">
            <div className="flex gap-x-3 border shadow-md py-4 px-6">
              <div className="w-8 h-8 lg:w-12 lg:h-12 rounded-full bg-black/90 text-white flex justify-center items-center text-sm">
                A
              </div>
              <div className="flex flex-1 justify-between text-xs lg:text-sm">
                <div className="flex flex-col gap-y-6 justify-between">
                  <div>
                    <h6>Seth. K</h6>
                    <ReviewStars rating={5} className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col gap-y-3">
                    <h6>Great design and quality</h6>
                    <p>
                      Love the design and quality of the shirt. Fits true to
                      size. The easy care fabric is a bonus. Would buy again.
                    </p>
                  </div>
                </div>
                <span>01/10/2024</span>
              </div>
            </div>
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
