"use client";
import { Label } from "@/components/ui/label";

export default function ProductSize() {
  return (
    <div className="mt-3 flex items-center flex-wrap  gap-3">
      <div>
        <input
          className="peer hidden"
          type="radio"
          name="size"
          id="xs"
          value="xs"
        />
        <Label
          className="uppercase cursor-pointer w-12 h-12 flex justify-center items-center font-light border  peer-checked:border-black"
          htmlFor="xs"
        >
          xs
        </Label>
      </div>
      <div>
        <input
          className="peer hidden"
          type="radio"
          name="size"
          id="s"
          value="s"
        />
        <Label
          className="uppercase cursor-pointer w-12 h-12 flex justify-center items-center font-light border  peer-checked:border-black"
          htmlFor="s"
        >
          s
        </Label>
      </div>
      <div>
        <input
          className="peer hidden"
          type="radio"
          name="size"
          id="m"
          value="m"
        />
        <Label
          className="uppercase cursor-pointer w-12 h-12 flex justify-center items-center font-light border  peer-checked:border-black"
          htmlFor="m"
        >
          m
        </Label>
      </div>
      <div>
        <input
          className="peer hidden"
          type="radio"
          name="size"
          id="l"
          value="l"
        />
        <Label
          className="uppercase cursor-pointer w-12 h-12 flex justify-center items-center font-light border  peer-checked:border-black"
          htmlFor="l"
        >
          l
        </Label>
      </div>
      <div>
        <input
          className="peer hidden"
          type="radio"
          name="size"
          id="xl"
          value="xl"
        />
        <Label
          className="uppercase cursor-pointer w-12 h-12 flex justify-center items-center font-light border  peer-checked:border-black"
          htmlFor="xl"
        >
          xl
        </Label>
      </div>
      <div>
        <input
          className="peer hidden"
          type="radio"
          name="size"
          id="xxl"
          value="xxl"
        />
        <Label
          className="uppercase cursor-pointer w-12 h-12 flex justify-center items-center font-light border  peer-checked:border-black"
          htmlFor="xxl"
        >
          xxl
        </Label>
      </div>
      <div>
        <input
          className="peer hidden"
          type="radio"
          name="size"
          id="xxxl"
          value="xxxl"
        />
        <Label
          className="uppercase cursor-pointer w-12 h-12 flex justify-center items-center font-light border  peer-checked:border-black"
          htmlFor="xxxl"
        >
          xxxl
        </Label>
      </div>
    </div>
  );
}
