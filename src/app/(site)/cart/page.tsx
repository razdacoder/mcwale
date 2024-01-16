"use client";

import { Button } from "@/components/ui/button";
import { formatPriceToNaira } from "@/lib/utils";
import { Lock } from "lucide-react";
import Link from "next/link";
import CartItem from "./cart-item";

export default function CartPage() {
  return (
    <main className="px-3 lg:px-0 lg:container my-6 lg:my-24">
      <h2 className="scroll-m-20 text-lg lg:text-2xl uppercase font-serif font-light tracking-wide first:mt-0">
        shopping cart
      </h2>
      <section className="flex flex-col lg:flex-row gap-y-6 lg:gap-x-6 my-6">
        <div className="w-full lg:w-8/12 flex flex-col gap-y-6">
          {[...Array(3)].map((_, index) => (
            <CartItem key={index} />
          ))}
        </div>

        <div className="w-full lg:w-4/12 flex flex-col gap-y-3">
          <div className="uppercase font-light flex justify-between">
            <span>Subtotal</span>
            <span>{formatPriceToNaira(75000)}</span>
          </div>
          <div className="uppercase text-sm font-light flex justify-between text-red-500">
            <span>Total savings</span>
            <span>{formatPriceToNaira(15000)}</span>
          </div>
          <Button className="w-full flex items-center gap-x-6 uppercase">
            <Lock className="w-4 h-4 text-white" />
            checkout
          </Button>
          <Link
            href="#"
            className="text-center uppercase text-sm font-light tracking-wide"
          >
            Continue shopping
          </Link>
        </div>
      </section>
    </main>
  );
}
