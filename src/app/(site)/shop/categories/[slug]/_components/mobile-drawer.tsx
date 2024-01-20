"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { SlidersHorizontal } from "lucide-react";

export default function MobileDrawer() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="lg"
          className="py-6 w-[150px] md:w-[200px] px-8  border-primary flex gap-x-6 items-center"
        >
          <SlidersHorizontal className="w-4 h-4" />
          <span className="font-medium">Filter</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="w-3/4 lg:w-1/3 px-0 flex flex-col">
        <SheetHeader className="py-3 border-b px-6">
          <SheetTitle className="text-left tracking-wide">
            Filter (250 items)
          </SheetTitle>
        </SheetHeader>
        <Accordion
          type="single"
          collapsible
          className="w-full flex-1 px-6 space-y-2"
        >
          <AccordionItem className="border-none" value="item-1">
            <AccordionTrigger className="hover:no-underline border-none text-sm font-medium">
              Style
            </AccordionTrigger>
            <AccordionContent className="ml-1 flex gap-x-3">
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
                  className="border px-3 py-2 peer-checked:bg-primary peer-checked:text-white"
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
          <AccordionItem value="item-2" className="border-none">
            <AccordionTrigger className="hover:no-underline text-sm font-medium">
              Color
            </AccordionTrigger>
            <AccordionContent className="ml-1 flex gap-x-3">
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
          <AccordionItem value="item-3" className="border-none">
            <AccordionTrigger className="hover:no-underline text-sm font-medium">
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
        <SheetFooter className="flex px-6 flex-row w-full gap-x-3 items-center mt-6">
          <Button className="w-full py-3 px-12 font-bold" variant="outline">
            Clear
          </Button>
          <Button className="w-full py-3 px-12 font-bold">Show</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
