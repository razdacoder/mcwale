"use client";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

interface AddToCartProps {
  addToCart: () => void;
  size: string | undefined;
  color: string | undefined;
}

export default function AddToCart({ size, color, addToCart }: AddToCartProps) {
  return (
    <Button
      onClick={addToCart}
      disabled={!size || !color}
      size="lg"
      className="flex items-center gap-x-3 py-5 capatalize"
    >
      <ShoppingCart className="w-4 h-4 text-white" />
      Add to cart
    </Button>
  );
}
