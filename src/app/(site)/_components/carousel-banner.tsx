"use client";
import { Button } from "@/components/ui/button";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

export default function CarouselBanner() {
  const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));
  return (
    <Carousel
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      className="relative"
    >
      <CarouselContent className="h-[70vh] md:h-[100vh] gap-x-0">
        <CarouselItem>
          <div className="h-full bg-[url('/img1-min.jpg')] bg-no-repeat bg-cover bg-center flex items-end md:items-center px-8 lg:px-32">
            <div className="flex flex-col gap-y-6 mb-24 md:mb-0">
              <h1 className="scroll-m-20 text-5xl font-extrabold tracking-tight lg:text-7xl text-white">
                Classical Agbada
              </h1>
              <div>
                <Button
                  size="lg"
                  className="uppercase py-8 px-16 font-semibold tracking-wider"
                >
                  Shop now
                </Button>
              </div>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="h-full bg-[url('/img2-min.jpg')] bg-no-repeat bg-cover bg-center flex items-center px-8 lg:px-32">
            <div className="flex flex-col gap-y-6">
              <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-7xl text-white">
                Classical Kaftan Wears
              </h1>
              <div>
                <Button size="lg" className="uppercase">
                  Shop now
                </Button>
              </div>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="h-full bg-[url('/img4-min.jpg')] bg-no-repeat bg-cover bg-center flex items-center px-8 lg:px-32">
            <div className="flex flex-col gap-y-6">
              <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-7xl text-white">
                Classical Casuals Wears
              </h1>
              <div>
                <Button size="lg" className="uppercase">
                  Shop now
                </Button>
              </div>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="h-full bg-[url('/img5-min.jpg')] bg-no-repeat bg-cover bg-center flex items-center px-8 lg:px-32">
            <div className="flex flex-col gap-y-6">
              <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-7xl text-white">
                Classical Dress Kits
              </h1>
              <div>
                <Button size="lg" className="uppercase">
                  Shop now
                </Button>
              </div>
            </div>
          </div>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
}
