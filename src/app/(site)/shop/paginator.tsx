"use client";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { usePathname } from "next/navigation";

type Props = {
  results: number;
  currentPage: number;
  pages: number;
};

export default function Paginator({ pages, currentPage }: Props) {
  const pathname = usePathname();
  return (
    <div className="my-12">
      <Pagination>
        <PaginationContent>
          {currentPage > 1 && (
            <PaginationItem>
              <PaginationPrevious
                href={`${pathname}?page=${currentPage - 1}`}
              />
            </PaginationItem>
          )}

          {[...Array(pages)].map((_, index) => (
            <PaginationItem key={`page-${index}`}>
              <PaginationLink
                href={`${pathname}?page=${currentPage}`}
                isActive={currentPage == index + 1}
              >
                {currentPage}
              </PaginationLink>
            </PaginationItem>
          ))}

          {/* <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem> */}

          {currentPage < pages && (
            <PaginationItem>
              <PaginationNext href={`${pathname}?page=${currentPage + 1}`} />
            </PaginationItem>
          )}
        </PaginationContent>
      </Pagination>
    </div>
  );
}
