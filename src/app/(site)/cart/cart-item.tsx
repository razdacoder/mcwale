import { Button } from "@/components/ui/button";
import { formatPriceToNaira } from "@/lib/utils";
import { Minus, Plus, X } from "lucide-react";

export default function CartItem() {
  return (
    <div className=" flex gap-x-6 border p-2 h-[150px] md:h-[250px] ">
      <div className="w-5/12 md:w-3/12">
        <img src="/img1-min.jpg" className="w-full h-full" />
      </div>
      <div className="w-6/12 md:w-8/12 flex flex-col justify-center">
        <h3 className="uppercase tracking-wider text-xs lg:text-lg font-medium">
          Rolling Stone Spotted Logo Shirt
        </h3>
        <div className="hidden mt-1 lg:mt-2 md:flex md:flex-col gap-2 text-xs lg:text-sm">
          <span>Color: Black</span>
          <span>Size: XL</span>
          <span>Price: {formatPriceToNaira(90000)}</span>
        </div>

        <div className="mt-1 lg:mt-2">
          <h4 className="text-xs lg:text-sm tracking-wider ">Quantity</h4>
          <div className="inline-flex items-center border mt-1 h-8">
            <Button variant="ghost" size="icon" className="py-0 ">
              <Minus className="w-4 h-4 text-gray-600" />
            </Button>
            <span className="w-4 text-xs lg:textsm text-center ">1</span>
            <Button variant="ghost" size="icon" className="py-0">
              <Plus className="w-4 h-4 text-gray-600" />
            </Button>
          </div>
        </div>
        <div className="text-sm mt-2 flex items-center gap-x-3">
          <span className="text-sm font-medium tracking-wider">TOTAL:</span>

          <span className="  tracking-wider text-primary/90">
            {formatPriceToNaira(90000)}
          </span>
        </div>
      </div>
      <div className="w-1/12 flex justify-end">
        <Button variant="ghost">
          <X className="w-4 h-4" />
          <span className="hidden md:inline">Remove</span>
        </Button>
      </div>
    </div>
  );
}
