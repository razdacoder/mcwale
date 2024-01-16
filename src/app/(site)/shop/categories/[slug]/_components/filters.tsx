"use client";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { X } from "lucide-react";

export default function Filters() {
  return (
    <>
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
    </>
  );
}
