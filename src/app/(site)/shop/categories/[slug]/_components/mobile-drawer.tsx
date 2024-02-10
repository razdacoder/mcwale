"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import qs from "query-string";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { SlidersHorizontal } from "lucide-react";
import { useState } from "react";
import { 
  usePathname, 
  useRouter, 
  useSearchParams
} from "next/navigation";

interface FilterPanelProps {
  productLenght: number
  styles: string[]
}

export default function MobileDrawer({productLenght, styles}: FilterPanelProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false)
  const searchParams = useSearchParams();
  const styleParam = searchParams.get("style")
  const [selectedStyle, setSelectedStyle] = useState<string | null>(styleParam)
  const filter = () => {
    const url = qs.stringifyUrl({
      url: pathname,
      query: {
        style: selectedStyle,
      }
    }, { skipNull: true, skipEmptyString: true });

    router.push(url);
    setOpen(false)
  }

  const clearFilter = () => {
    const url = qs.stringifyUrl({url: pathname})
    router.push(url)
    setOpen(false)
  }
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="lg"
          onClick={() => setOpen(true)}
          className="py-6 w-[150px] md:w-[200px] px-3  border-primary flex justify-between gap-x-4 items-center"
        >
          <SlidersHorizontal className="w-4 h-4" />
          <span className="font-medium text-left text-sm">Filter</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="w-3/4 lg:w-1/3 px-0 flex flex-col">
        <SheetHeader className="py-3 border-b px-6">
          <SheetTitle className="text-left tracking-wide">
            Filter ({productLenght} items)
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
            <AccordionContent className="ml-1 flex gap-3 flex-wrap">
              {styles.map((style, index) => (
                <div key={style} className="flex items-center space-x-2">
                <input
                  type="radio"
                  className="peer hidden"
                  name="style"
                  value={style}
                  checked={style === selectedStyle}
                  onChange={(e) => setSelectedStyle(e.target.value)}
                  id={style}
                />
                <Label
                  htmlFor={style}
                  className="border cursor-pointer px-3 py-2 peer-checked:bg-primary peer-checked:text-white"
                >
                  {style}
                </Label>
              </div>
              ))}
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
          <Button onClick={clearFilter} className="w-full py-3 px-12 font-bold" variant="outline">
            Clear
          </Button>
          <Button onClick={filter} className="w-full py-3 px-12 font-bold">Show</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
