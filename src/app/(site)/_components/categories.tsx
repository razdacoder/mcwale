"use client";
import Heading from "@/components/ui/Heading";
import { Button } from "@/components/ui/button";
import { Category } from "@/lib/types";
import { getCategories } from "@/services/categoriesServices";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";

export default function CategorySection() {
  const { data: categories } = useQuery({
    queryKey: ["get-all-categories"],
    queryFn: getCategories,
  });
  return (
    <section className="py-12 px-4 container my-6">
      <Heading className="text-xl normal-case text-left block">
        Shop by Category
      </Heading>
      <div className="mt-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {categories?.map((category: Category, index) => (
          <div
            key={category.id}
            className="h-[450px] md:h-[400px] lg:h-[380px] relative flex justify-center items-end pr-8 "
          >
            <Image
              src={category.image}
              alt={category.title}
              fill
              className=" z-10 peer"
            />
            <div className="flex justify-center flex-col absolute z-30 bottom-8 peer-hover:animate-pulse">
              <Button asChild className="px-12 py-6">
                <Link
                  href={`/shop/categories/${category.slug}`}
                  className="capitalize"
                >
                  Shop {category.title}
                </Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
