"use client";
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

export default function MobileDrawer() {
  return (
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
  );
}
