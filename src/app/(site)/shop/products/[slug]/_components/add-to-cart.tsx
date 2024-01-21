"use client";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

export default function AddToCart() {
  return (
    <Button className="flex items-center gap-x-3 py-6 uppercase">
      <ShoppingCart className="w-6 h-6 text-white" />
      Add to cart
    </Button>
  );
}
