"use client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowDownNarrowWide } from "lucide-react";

export default function SortBy() {
  return (
    <Select value="newest">
      <SelectTrigger className="py-6 border-primary flex w-[150px] md:w-[200px]">
        <ArrowDownNarrowWide className="w-4 h-4" />
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
  );
}
