"use client";
import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";

export default function ProductQuantity() {
  return (
    <div className="inline-flex items-center border mt-3">
      <Button variant="ghost" size="icon">
        <Minus className="w-6 h-6 text-gray-600" />
      </Button>
      <span className="w-12 text-center font-light">1</span>
      <Button variant="ghost" size="icon">
        <Plus className="w-6 h-6 text-gray-600" />
      </Button>
    </div>
  );
}
