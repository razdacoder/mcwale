"use client";

import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ChevronDown, SlidersHorizontal } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { getRatePrice } from "@/lib/utils";
import { useCurrencyStore } from "@/store/useCurrency";
import { useRateStore } from "@/store/useRates";
import qs from "query-string";
import { useState } from "react";

interface FilterPanelProps {
  productLenght: number;
  styles: string[];
}

export default function MobileDrawer({
  productLenght,
  styles,
}: FilterPanelProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const { currency } = useCurrencyStore();
  const { rate } = useRateStore();
  const searchParams = useSearchParams();
  const [selectedStyle, setSelectedStyle] = useState<string | null>(
    searchParams.get("style")
  );

  const [minPrice, setMinPrice] = useState<number>(
    parseInt(searchParams.get("min_price") as string) || 0
  );
  const [maxPrice, setMaxPrice] = useState<number>(
    parseInt(searchParams.get("max_price") as string) || 1000
  );

  const initialValue = [minPrice, maxPrice];
  const [localValues, setLocalValues] = useState(initialValue);

  const handleValueChange = (newValues: number[]) => {
    setLocalValues(newValues);
  };

  const filter = () => {
    const newParams = new URLSearchParams(searchParams.toString());
    if (!selectedStyle) {
      newParams.delete("style");
    } else {
      newParams.set("style", selectedStyle);
    }

    if (minPrice <= 0) {
      newParams.delete("min_price");
    } else {
      newParams.set("min_price", localValues[0].toString());
    }

    if (maxPrice == 1000) {
      newParams.delete("max_price");
    } else {
      newParams.set("max_price", localValues[1].toString());
    }
    setOpen(false);
    router.push(`${pathname}?${newParams}`);
  };

  const clearFilter = () => {
    const url = qs.stringifyUrl({ url: pathname });
    setSelectedStyle(null);
    setMinPrice(50), setMaxPrice(1000);
    router.push(url);
    setOpen(false);
  };
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
          <ChevronDown className="w-4 h-4" />
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:w-[540px] px-3 flex flex-col">
        <SheetHeader className="py-3 border-b px-6">
          <SheetTitle className="text-left tracking-wide">
            Filter ({productLenght} items)
          </SheetTitle>
        </SheetHeader>
        <div className="space-y-6">
          <div>
            <h6 className="font-medium ">Style:</h6>
            {styles.map((style, index) => (
              <div key={style} className="flex items-center space-y-2 ">
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
                  className="border cursor-pointer px-3 py-3 peer-checked:bg-primary peer-checked:text-white w-full"
                >
                  {style}
                </Label>
              </div>
            ))}
          </div>
          <div>
            <h6 className="font-medium">Price:</h6>
            <div className="flex items-center space-x-2">
              <Slider
                min={0}
                max={1000}
                value={[localValues[0], localValues[1]]}
                minStepsBetweenThumbs={10}
                className="my-6 px-3"
                step={10}
                onValueChange={handleValueChange}
                formatLabel={(value) =>
                  getRatePrice(
                    currency,
                    value,
                    currency === "USD" ? null : rate[currency]
                  )
                }
              />
            </div>
          </div>
        </div>

        <SheetFooter className="flex px-6 flex-row w-full gap-x-3 items-center mt-6">
          <Button
            onClick={clearFilter}
            className="w-full py-3 px-12 font-bold"
            variant="outline"
          >
            Clear
          </Button>
          <Button onClick={filter} className="w-full py-3 px-12 font-bold">
            Show
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
