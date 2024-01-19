import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";

export default function FeaturedCarousel() {
  return (
    <Carousel className="w-full relative">
      <CarouselContent className="-ml-2 ">
        {Array.from({ length: 12 }).map((_, index) => (
          <CarouselItem key={index} className="pl-2 md:basis-1/2 lg:basis-1/5">
            <Link href="#" className="w-full h-[500px] md:h-[450px]">
              <div className="h-[450px] md:h-[400px] w-full">
                <img
                  src="/img1-min.jpg"
                  alt="Featured Product"
                  className="w-full h-full"
                />
              </div>
              <span className="block font-semibold uppercase mt-3 text-primary text-sm text-center">
                Abgada Style
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
