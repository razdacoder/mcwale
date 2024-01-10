"use client";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { formatPriceToNaira } from "@/lib/utils";
import Autoplay from "embla-carousel-autoplay";
import { Heart, ShoppingCart } from "lucide-react";
import { useRef } from "react";
export default function HomePage() {
  const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));
  return (
    <main className="w-full ">
      <Carousel
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        className="relative"
      >
        <CarouselContent className="h-[85vh] lg:h-[90vh] gap-x-0">
          <CarouselItem>
            <div className="h-full bg-[url('/img1-min.jpg')] bg-no-repeat bg-cover bg-center flex items-center px-8 lg:px-32">
              <div className="flex flex-col gap-y-6">
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-7xl text-white">
                  Classical Agbada Wears
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
      <section className="my-12 px-6">
        <h2 className="scroll-m-20 pb-2 relative text-3xl font-semibold tracking-tight before:block before:content-[''] before:absolute before:bottom-0 before:w-20 before:border-[3px] before:border-primary">
          Featured Products
        </h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
          <div className="w-full relative">
            <div className="absolute z-20 w-full top-0 left-0 px-3 py-2 flex justify-between items-center">
              <Button size="icon" className="rounded-full shadow-md">
                <ShoppingCart className="w-4 h-4" />
              </Button>
              <Button size="icon" className="rounded-full shadow-md">
                <Heart className="w-4 h-4" />
              </Button>
            </div>
            <div className="w-full h-[300px]">
              <Carousel>
                <CarouselContent className="h-[300px] gap-x-0">
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
            <div className="w-full flex items-center flex-col gap-y-2">
              <span className="font-semibold text-center text-sm w-full leading-6">
                A Cream White, peak lapel, Square Patterned jacquard jacket
              </span>
              <span className="font-semibold text-sm tracking-wide">
                {formatPriceToNaira(75000)}
              </span>
            </div>
          </div>
          <div className="w-full">
            <div className="w-full h-[300px] relative">
              <div className="absolute z-20 w-full top-0 left-0 px-3 py-2 flex justify-between items-center">
                <Button size="icon" className="rounded-full shadow-md">
                  <ShoppingCart className="w-4 h-4" />
                </Button>
                <Button size="icon" className="rounded-full shadow-md">
                  <Heart className="w-4 h-4" />
                </Button>
              </div>
              <Carousel>
                <CarouselContent className="h-[300px] gap-x-0">
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
            <div className="w-full flex items-center flex-col gap-y-2">
              <span className="font-semibold text-center text-sm w-full leading-6">
                A Cream White, peak lapel, Square Patterned jacquard jacket
              </span>
              <span className="font-semibold text-sm tracking-wide">
                {formatPriceToNaira(75000)}
              </span>
            </div>
          </div>
          <div className="w-full relative">
            <div className="absolute z-20 w-full top-0 left-0 px-3 py-2 flex justify-between items-center">
              <Button size="icon" className="rounded-full shadow-md">
                <ShoppingCart className="w-4 h-4" />
              </Button>
              <Button size="icon" className="rounded-full shadow-md">
                <Heart className="w-4 h-4" />
              </Button>
            </div>
            <div className="w-full h-[300px]">
              <Carousel>
                <CarouselContent className="h-[300px] gap-x-0">
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
            <div className="w-full flex items-center flex-col gap-y-2">
              <span className="font-semibold text-center text-sm w-full leading-6">
                A Cream White, peak lapel, Square Patterned jacquard jacket
              </span>
              <span className="font-semibold text-sm tracking-wide">
                {formatPriceToNaira(75000)}
              </span>
            </div>
          </div>
          <div className="w-full relative">
            <div className="absolute z-20 w-full top-0 left-0 px-3 py-2 flex justify-between items-center">
              <Button size="icon" className="rounded-full shadow-md">
                <ShoppingCart className="w-4 h-4" />
              </Button>
              <Button size="icon" className="rounded-full shadow-md">
                <Heart className="w-4 h-4" />
              </Button>
            </div>
            <div className="w-full h-[300px]">
              <Carousel>
                <CarouselContent className="h-[300px] gap-x-0">
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
            <div className="w-full flex items-center flex-col gap-y-2">
              <span className="font-semibold text-center text-sm w-full leading-6">
                A Cream White, peak lapel, Square Patterned jacquard jacket
              </span>
              <span className="font-semibold text-sm tracking-wide">
                {formatPriceToNaira(75000)}
              </span>
            </div>
          </div>
          <div className="w-full relative">
            <div className="absolute z-20 w-full top-0 left-0 px-3 py-2 flex justify-between items-center">
              <Button size="icon" className="rounded-full shadow-md">
                <ShoppingCart className="w-4 h-4" />
              </Button>
              <Button size="icon" className="rounded-full shadow-md">
                <Heart className="w-4 h-4" />
              </Button>
            </div>
            <div className="w-full h-[300px]">
              <Carousel>
                <CarouselContent className="h-[300px] gap-x-0">
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
            <div className="w-full flex items-center flex-col gap-y-2">
              <span className="font-semibold text-center text-sm w-full leading-6">
                A Cream White, peak lapel, Square Patterned jacquard jacket
              </span>
              <span className="font-semibold text-sm tracking-wide">
                {formatPriceToNaira(75000)}
              </span>
            </div>
          </div>
          <div className="w-full relative">
            <div className="absolute z-20 w-full top-0 left-0 px-3 py-2 flex justify-between items-center">
              <Button size="icon" className="rounded-full shadow-md">
                <ShoppingCart className="w-4 h-4" />
              </Button>
              <Button size="icon" className="rounded-full shadow-md">
                <Heart className="w-4 h-4" />
              </Button>
            </div>
            <div className="w-full h-[300px]">
              <Carousel>
                <CarouselContent className="h-[300px] gap-x-0">
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
            <div className="w-full flex items-center flex-col gap-y-2">
              <span className="font-semibold text-center text-sm w-full leading-6">
                A Cream White, peak lapel, Square Patterned jacquard jacket
              </span>
              <span className="font-semibold text-sm tracking-wide">
                {formatPriceToNaira(75000)}
              </span>
            </div>
          </div>
        </div>
        <div className="flex justify-center my-12">
          <Button size="lg">Load More</Button>
        </div>
      </section>
      <section className="my-12 px-6">
        <h2 className="scroll-m-20 pb-2 relative text-3xl font-semibold tracking-tight before:block before:content-[''] before:absolute before:bottom-0 before:w-20 before:border-[3px] before:border-primary">
          Trending Products
        </h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
          <div className="w-full relative">
            <div className="absolute z-20 w-full top-0 left-0 px-3 py-2 flex justify-between items-center">
              <Button size="icon" className="rounded-full shadow-md">
                <ShoppingCart className="w-4 h-4" />
              </Button>
              <Button size="icon" className="rounded-full shadow-md">
                <Heart className="w-4 h-4" />
              </Button>
            </div>
            <div className="w-full h-[300px]">
              <Carousel>
                <CarouselContent className="h-[300px] gap-x-0">
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
            <div className="w-full flex items-center flex-col gap-y-2">
              <span className="font-semibold text-center text-sm w-full leading-6">
                A Cream White, peak lapel, Square Patterned jacquard jacket
              </span>
              <span className="font-semibold text-sm tracking-wide">
                {formatPriceToNaira(75000)}
              </span>
            </div>
          </div>
          <div className="w-full">
            <div className="w-full h-[300px] relative">
              <div className="absolute z-20 w-full top-0 left-0 px-3 py-2 flex justify-between items-center">
                <Button size="icon" className="rounded-full shadow-md">
                  <ShoppingCart className="w-4 h-4" />
                </Button>
                <Button size="icon" className="rounded-full shadow-md">
                  <Heart className="w-4 h-4" />
                </Button>
              </div>
              <Carousel>
                <CarouselContent className="h-[300px] gap-x-0">
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
            <div className="w-full flex items-center flex-col gap-y-2">
              <span className="font-semibold text-center text-sm w-full leading-6">
                A Cream White, peak lapel, Square Patterned jacquard jacket
              </span>
              <span className="font-semibold text-sm tracking-wide">
                {formatPriceToNaira(75000)}
              </span>
            </div>
          </div>
          <div className="w-full relative">
            <div className="absolute z-20 w-full top-0 left-0 px-3 py-2 flex justify-between items-center">
              <Button size="icon" className="rounded-full shadow-md">
                <ShoppingCart className="w-4 h-4" />
              </Button>
              <Button size="icon" className="rounded-full shadow-md">
                <Heart className="w-4 h-4" />
              </Button>
            </div>
            <div className="w-full h-[300px]">
              <Carousel>
                <CarouselContent className="h-[300px] gap-x-0">
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
            <div className="w-full flex items-center flex-col gap-y-2">
              <span className="font-semibold text-center text-sm w-full leading-6">
                A Cream White, peak lapel, Square Patterned jacquard jacket
              </span>
              <span className="font-semibold text-sm tracking-wide">
                {formatPriceToNaira(75000)}
              </span>
            </div>
          </div>
          <div className="w-full relative">
            <div className="absolute z-20 w-full top-0 left-0 px-3 py-2 flex justify-between items-center">
              <Button size="icon" className="rounded-full shadow-md">
                <ShoppingCart className="w-4 h-4" />
              </Button>
              <Button size="icon" className="rounded-full shadow-md">
                <Heart className="w-4 h-4" />
              </Button>
            </div>
            <div className="w-full h-[300px]">
              <Carousel>
                <CarouselContent className="h-[300px] gap-x-0">
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
            <div className="w-full flex items-center flex-col gap-y-2">
              <span className="font-semibold text-center text-sm w-full leading-6">
                A Cream White, peak lapel, Square Patterned jacquard jacket
              </span>
              <span className="font-semibold text-sm tracking-wide">
                {formatPriceToNaira(75000)}
              </span>
            </div>
          </div>
          <div className="w-full relative">
            <div className="absolute z-20 w-full top-0 left-0 px-3 py-2 flex justify-between items-center">
              <Button size="icon" className="rounded-full shadow-md">
                <ShoppingCart className="w-4 h-4" />
              </Button>
              <Button size="icon" className="rounded-full shadow-md">
                <Heart className="w-4 h-4" />
              </Button>
            </div>
            <div className="w-full h-[300px]">
              <Carousel>
                <CarouselContent className="h-[300px] gap-x-0">
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
            <div className="w-full flex items-center flex-col gap-y-2">
              <span className="font-semibold text-center text-sm w-full leading-6">
                A Cream White, peak lapel, Square Patterned jacquard jacket
              </span>
              <span className="font-semibold text-sm tracking-wide">
                {formatPriceToNaira(75000)}
              </span>
            </div>
          </div>
          <div className="w-full relative">
            <div className="absolute z-20 w-full top-0 left-0 px-3 py-2 flex justify-between items-center">
              <Button size="icon" className="rounded-full shadow-md">
                <ShoppingCart className="w-4 h-4" />
              </Button>
              <Button size="icon" className="rounded-full shadow-md">
                <Heart className="w-4 h-4" />
              </Button>
            </div>
            <div className="w-full h-[300px]">
              <Carousel>
                <CarouselContent className="h-[300px] gap-x-0">
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
            <div className="w-full flex items-center flex-col gap-y-2">
              <span className="font-semibold text-center text-sm w-full leading-6">
                A Cream White, peak lapel, Square Patterned jacquard jacket
              </span>
              <span className="font-semibold text-sm tracking-wide">
                {formatPriceToNaira(75000)}
              </span>
            </div>
          </div>
        </div>
        <div className="flex justify-center my-12">
          <Button size="lg">Load More</Button>
        </div>
      </section>
      <section className="my-12 px-6">
        <h2 className="scroll-m-20 pb-2 relative text-3xl font-semibold tracking-tight before:block before:content-[''] before:absolute before:bottom-0 before:w-20 before:border-[3px] before:border-primary">
          Contact Us
        </h2>
        <div className="flex mt-12 gap-x-12 items-center">
          <div className="w-full lg:w-2/6">
            <form className="space-y-8">
              <div>
                <Label className="font-semibold" htmlFor="name">
                  Name
                </Label>
                <Input
                  className="border-[3px] border-primary"
                  id="name"
                  placeholder="Your name"
                />
              </div>
              <div>
                <Label className="font-semibold" htmlFor="email">
                  Email
                </Label>
                <Input
                  type="email"
                  className="border-[3px] border-primary"
                  id="email"
                  placeholder="Your email address"
                />
              </div>
              <div>
                <Label className="font-semibold" htmlFor="message">
                  Message
                </Label>
                <Textarea
                  className="border-[3px] border-primary resize-none"
                  rows={4}
                  id="message"
                ></Textarea>
              </div>
              <div className="flex justify-end">
                <Button size="lg">Submit</Button>
              </div>
            </form>
          </div>
          <div className="hidden lg:block w-4/6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63407.70778848787!2d3.3623882620029213!3d6.649184994961953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103beda11374314b%3A0xdbc726e7e78bd410!2sMcWale!5e0!3m2!1sen!2sng!4v1704905732361!5m2!1sen!2sng"
              width="100%"
              height="450"
              // style="border:0;"
              className="border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
}
