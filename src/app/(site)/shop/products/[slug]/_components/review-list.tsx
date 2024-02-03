"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ReviewStars from "@/components/ui/review-stars";
import { Review } from "@/lib/types";
import { parseDate } from "@/lib/utils";

interface ReviewListProps {
  reviews: Review[]
}

export default function ReviewsList({reviews}: ReviewListProps) {
  return (
    <Carousel className="relative">
      <CarouselContent className="-ml-4 ">
        {reviews.map((review, index) => (
          <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
            <div className="flex gap-x-3 border shadow-md py-8 px-6">
              <div className="w-8 h-8 rounded-full bg-black/90 text-white flex justify-center items-center text-sm">
                {review.first_name.at(0)}
              </div>
              <div className="flex flex-1 justify-between text-xs lg:text-sm">
                <div className="flex flex-col gap-y-6 justify-between">
                  <div>
                    <h6>{review.first_name} {review.last_name}</h6>
                    <ReviewStars rating={review.stars} className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col gap-y-3">
                    
                    <p className="leading-8">
                      {review.review}
                    </p>
                  </div>
                </div>
                <span>{parseDate(review.created_at)}</span>
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
