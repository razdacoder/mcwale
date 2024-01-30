"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Category() {
  const categories = [
    { name: "Agbada", link: "/shop/categories/agbada", image: "/agbada.jpg" },
    {
      name: "Senator Wears",
      link: "/shop/categories/senator-wears",
      image: "/senator.jpg",
    },
    { name: "Kaftan", link: "/shop/categories/kaftan", image: "/kaftan.jpg" },
    { name: "Casuals", link: "/shop/categories/casuals", image: "/casual.jpg" },
  ];
  return (
    <div className="mt-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
      {categories?.map((category, index) => (
        <div
          key={category.name}
          className="h-[420px] relative flex justify-center items-end pr-8"
        >
          <Image
            src={category.image}
            alt={category.name}
            fill
            className="absolute z-10"
          />
          <div className="flex justify-center flex-col absolute z-30 animate-bounce">
            <Button asChild>
              <Link href={category.link} className="">
                Shop {category.name}
              </Link>
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}
