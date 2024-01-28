import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Category() {
  return (
    <div className="h-[200px] bg-[url('/img1-min.jpg')] bg-no-repeat bg-cover bg-center flex justify-end items-center pr-8">
      {/* <img src="/img1-min.jpg" alt="Image" className="w-full h-full" /> */}
      <div className="flex justify-center flex-col">
        <h3 className="text-white">McWale Agbada</h3>
        <Button asChild>
          <Link href="/shop/categories/agbada" className="">
            Shop
          </Link>
        </Button>
      </div>
    </div>
  );
}
