import { Button } from "@/components/ui/button";
import { formatPriceToNaira } from "@/lib/utils";
import { Minus, Plus, X } from "lucide-react";

export default function CartItem() {
  return (
    <div className=" flex gap-x-3  ">
      <div className="w-5/12 md:3/12 lg:w-1/4 h-[150px] md:h-[200px]">
        <img src="/img1-min.jpg" className="w-full h-full" />
      </div>
      <div className="w-6/12  lg:w-2/4 md:py-2">
        <h3 className="uppercase tracking-wider text-xs lg:text-lg font-light">
          Rolling Stone Spotted Logo Shirt
        </h3>
        <div className="mt-1 lg:mt-2 font-light flex gap-x-3 text-xs lg:text-sm">
          <span>Color: Black</span>
          <span>Size: XL</span>
        </div>
        <div className="mt-1 lg:mt-2 flex items-center gap-x-3">
          <span className="text-xs lg:text-sm font-light tracking-wider text-red-500">
            {formatPriceToNaira(75000)}
          </span>
          <span className="text-xs lg:text-sm font-light tracking-wider text-primary/90 line-through">
            {formatPriceToNaira(90000)}
          </span>
        </div>
        <div className="mt-1 lg:mt-2">
          <h4 className="text-xs lg:text-sm tracking-wider font-light">
            Quantity
          </h4>
          <div className="inline-flex items-center border mt-1">
            <Button variant="ghost" size="icon" className="py-0 ">
              <Minus className="w-4 h-4 text-gray-600" />
            </Button>
            <span className="w-4 text-xs lg:textsm text-center font-light">
              1
            </span>
            <Button variant="ghost" size="icon" className="py-0">
              <Plus className="w-4 h-4 text-gray-600" />
            </Button>
          </div>
        </div>
        <div className="text-sm mt-2 flex items-center gap-x-3">
          <span className="text-sm font-medium tracking-wider">TOTAL:</span>
          <span className=" font-light tracking-wider text-red-500">
            {formatPriceToNaira(75000)}
          </span>
          <span className=" font-light tracking-wider text-primary/90 line-through">
            {formatPriceToNaira(90000)}
          </span>
        </div>
      </div>
      <div className="w-1/12 lg:w-1/4">
        <Button variant="ghost">
          <X className="w-4 h-4" />
          <span className="hidden lg:inline">Remove</span>
        </Button>
      </div>
    </div>
  );
}
