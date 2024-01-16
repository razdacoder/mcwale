"use client";
import ProductCard from "@/components/layouts/ProductCard";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { X } from "lucide-react";
import Paginator from "./paginator";

export default function ShopPage() {
  return (
    <main>
      <section className="px-6 py-6 border-b">
        <div className="text-center mb-6">
          <h2 className="inline-block scroll-m-20 pb-2 uppercase text-center tracking-wider text-xl font-light ">
            Abgada dress
          </h2>
        </div>

        <Drawer>
          <DrawerTrigger className="lg:hidden border px-4 py-1">
            Filter
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Filters</DrawerTitle>
            </DrawerHeader>
            <Accordion type="single" collapsible className="w-full px-2">
              <AccordionItem value="item-1">
                <AccordionTrigger className="hover:no-underline uppercase font-light">
                  style
                </AccordionTrigger>
                <AccordionContent className="ml-3 flex gap-x-3">
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      className="peer hidden"
                      name="style"
                      value="option-one"
                      id="option-one"
                    />
                    <Label
                      htmlFor="option-one"
                      className="border px-2 py-2 peer-checked:bg-primary peer-checked:text-white"
                    >
                      Plane
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      className="peer hidden"
                      name="style"
                      value="option-two"
                      id="option-two"
                    />
                    <Label
                      className="border px-2 py-2 peer-checked:bg-primary peer-checked:text-white"
                      htmlFor="option-two"
                    >
                      Embrode
                    </Label>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="hover:no-underline uppercase font-light">
                  Color
                </AccordionTrigger>
                <AccordionContent className="ml-3 flex gap-x-3">
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      className="peer hidden"
                      name="color"
                      value="black"
                      id="black"
                    />
                    <Label
                      className="border w-6 h-6 rounded-full bg-black  peer-checked:border-black"
                      htmlFor="black"
                    ></Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      className="peer hidden"
                      name="color"
                      value="white"
                      id="white"
                    />
                    <Label
                      className="border w-6 h-6 rounded-full bg-white  peer-checked:border-black"
                      htmlFor="white"
                    ></Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      className="peer hidden"
                      name="color"
                      value="red"
                      id="red"
                    />
                    <Label
                      className="border w-6 h-6 rounded-full bg-red-500  peer-checked:border-black"
                      htmlFor="red"
                    ></Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      className="peer hidden"
                      name="color"
                      value="blue"
                      id="blue"
                    />
                    <Label
                      className="border w-6 h-6 rounded-full bg-blue-500  peer-checked:border-black"
                      htmlFor="blue"
                    ></Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      className="peer hidden"
                      name="color"
                      value="yellow"
                      id="yellow"
                    />
                    <Label
                      className="border w-6 h-6 rounded-full bg-yellow-500  peer-checked:border-black"
                      htmlFor="yellow"
                    ></Label>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="hover:no-underline uppercase font-light">
                  Price
                </AccordionTrigger>
                <AccordionContent className="flex gap-3 items-center flex-wrap">
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      className="peer hidden"
                      name="price"
                      value="10-20"
                      id="10-20"
                    />
                    <Label
                      htmlFor="10-20"
                      className="border px-2 py-2 peer-checked:bg-primary peer-checked:text-white"
                    >
                      10k - 20k
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      className="peer hidden"
                      name="price"
                      value="20-40"
                      id="20-40"
                    />
                    <Label
                      htmlFor="20-40"
                      className="border px-2 py-2 peer-checked:bg-primary peer-checked:text-white"
                    >
                      20k - 40k
                    </Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      className="peer hidden"
                      name="price"
                      value="40-60"
                      id="40-60"
                    />
                    <Label
                      htmlFor="40-60"
                      className="border px-2 py-2 peer-checked:bg-primary peer-checked:text-white"
                    >
                      40k - 60k
                    </Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      className="peer hidden"
                      name="price"
                      value="60-80"
                      id="60-80"
                    />
                    <Label
                      htmlFor="60-80"
                      className="border px-2 py-2 peer-checked:bg-primary peer-checked:text-white"
                    >
                      60k - 80k
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      className="peer hidden"
                      name="price"
                      value="80-100"
                      id="80-100"
                    />
                    <Label
                      htmlFor="80-100"
                      className="border px-2 py-2 peer-checked:bg-primary peer-checked:text-white"
                    >
                      80k - 100k
                    </Label>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <DrawerFooter className="flex flex-row w-full gap-x-3 items-center">
              <Button className="w-full" variant="outline">
                Clear
              </Button>
              <Button className="w-full">Show</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>

        <div className="hidden lg:flex justify-center my-4 gap-x-4 items-center">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select style" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="embri">Embryode</SelectItem>
                <SelectItem value="plane">Plane</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select color" />
            </SelectTrigger>
            <SelectContent className="bg-slate-200">
              <SelectGroup className="flex">
                <SelectItem value="black">
                  <div className="w-4 h-4 bg-black rounded-full"></div>
                </SelectItem>
                <SelectItem value="blue">
                  <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                </SelectItem>
                <SelectItem value="red">
                  <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                </SelectItem>
                <SelectItem value="white">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </SelectItem>
                <SelectItem value="wine">
                  <div className="w-4 h-4 bg-rose-900 rounded-full"></div>
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select price" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="10-20">10k - 20k</SelectItem>
                <SelectItem value="20-40">20k - 40k</SelectItem>
                <SelectItem value="40-60">40k - 60k</SelectItem>
                <SelectItem value="60-80">60k - 80k</SelectItem>
                <SelectItem value="80-100">80k - 100k</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-y-2">
            <span>20 results</span>
            <div className="hidden lg:flex gap-x-2">
              <span className="border text-sm pl-2 flex items-center gap-x-2">
                Plane
                <Button size="icon" className="p-0" variant="ghost">
                  <X className="w-4 h-4" />
                </Button>
              </span>
              <span className="border text-sm pl-2 flex items-center gap-x-2">
                Black
                <Button size="icon" className="p-0" variant="ghost">
                  <X className="w-4 h-4" />
                </Button>
              </span>
            </div>
          </div>
          <div>
            <Select value="newest">
              <SelectTrigger className="w-[180px]">
                <SelectValue
                  defaultValue="newest"
                  // placeholder="Filter by collection"
                />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="best">Best match</SelectItem>
                  <SelectItem value="price-l-h">Price: Low to High</SelectItem>
                  <SelectItem value="price-h-l">Price: High to Low</SelectItem>
                  <SelectItem value="newest">Newest Arrivals</SelectItem>
                  <SelectItem value="rating">Customer Rating</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>
      <section className="py-6 px-2 lg:px-6">
        <div className=" grid grid-cols-1 lg:grid-cols-4 gap-x-4 gap-y-6">
          {[...Array(20)].map((_, index) => (
            <ProductCard key={index} />
          ))}
        </div>

        <Paginator />
      </section>
    </main>
  );
}
