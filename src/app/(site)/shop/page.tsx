"use client";
import ProductCard from "@/components/layouts/ProductCard";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ShopPage() {
  return (
    <main>
      <section className="px-6 my-12">
        <div className="flex justify-between items-center">
          <h2 className="scroll-m-20 pb-2 relative text-3xl font-semibold tracking-tight before:block before:content-[''] before:absolute before:bottom-0 before:w-20 before:border-[3px] before:border-primary">
            Products
          </h2>
          <div>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by collection" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="agbada">Agbada</SelectItem>
                  <SelectItem value="danshiki">Danshiki</SelectItem>
                  <SelectItem value="senator-wears">Senator Wears</SelectItem>
                  <SelectItem value="casuals">Casuals</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="my-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-6">
          {[...Array(6)].map((_, index) => (
            <ProductCard key={index} />
          ))}
        </div>

        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </section>
    </main>
  );
}
