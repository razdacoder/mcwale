import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import Link from "next/link";

export default function ProductActions() {
  return (
    <div className="ml-auto flex items-center gap-2">
      <Button asChild size="sm" variant="outline" className="h-8 gap-1">
        <Link href="/admin/products/categories/add">
          <PlusCircle className="h-3.5 w-3.5" />
          <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
            New Category
          </span>
        </Link>
      </Button>

      <Button asChild size="sm" className="h-8">
        <Link href="/admin/products/add" className="gap-1 flex items-center">
          <PlusCircle className="h-3.5 w-3.5" />
          <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
            Add Product
          </span>
        </Link>
      </Button>
    </div>
  );
}
