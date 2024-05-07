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
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function SortBy() {
  const searchParams = useSearchParams();
  const sort = searchParams.get("sortBy") || "new_arrivals";
  const pathname = usePathname();
  const router = useRouter();

  const onSelect = (value: string) => {
    // now you got a read/write object
    const current = new URLSearchParams(searchParams.toString()); // -> has to use this form

    if (!value) {
      current.delete("sortBy");
    } else {
      current.set("sortBy", value);
    }
    router.push(`${pathname}?${current}`);
  };

  return (
    <Select value={sort} onValueChange={(value: string) => onSelect(value)}>
      <SelectTrigger className="py-6 border-primary flex w-[150px] md:w-[200px] focus:ring-0 focus:ring-offset-0 px-3">
        <ArrowDownNarrowWide className="w-4 h-4" />
        <SelectValue defaultValue={sort} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="new_arrivals">Newest Arrivals</SelectItem>
          <SelectItem value="price_low_to_high">Price: Low to High</SelectItem>
          <SelectItem value="price_high_to_low">Price: High to Low</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
