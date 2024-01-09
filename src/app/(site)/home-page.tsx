"use client";
import Footer from "@/components/layouts/Footer";
import Navbar from "@/components/layouts/Navbar";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";
import { useRef } from "react";
export default function HomePage() {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
  return (
    <main className="w-full h-screen flex flex-col">
      <Navbar />

      <Carousel
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        className="relative"
      >
        <CarouselContent className="h-[85vh] md:h-[78vh] gap-x-0">
          <CarouselItem>
            <div className="h-full bg-[url('/img1-min.jpg')] bg-cover bg-center bg-no-repeat"></div>
          </CarouselItem>
          <CarouselItem>
            <div className="h-full bg-[url('/img2-min.jpg')] bg-cover bg-center bg-no-repeat"></div>
          </CarouselItem>
          <CarouselItem>
            <div className="h-full bg-[url('/img4-min.jpg')] bg-cover bg-center bg-no-repeat"></div>
          </CarouselItem>
          <CarouselItem>
            <div className="h-full bg-[url('/img5-min.jpg')] bg-cover bg-center bg-no-repeat"></div>
          </CarouselItem>
        </CarouselContent>
        <Button
          className="absolute bg-black font-medium tracking-wide top-[70%] z-50 left-[50%] translate-x-[-50%] w-[1/2] px-20"
          size="lg"
          asChild
        >
          <Link href="/shop">Shop</Link>
        </Button>
      </Carousel>

      <Footer />
    </main>
  );
}
