import { cn } from "@/lib/utils";
import Image from "next/image";

type LogoProps = {
  className?: string;
};
export default function Logo({ className }: LogoProps) {
  return (
    <Image
      src="/mcwale logo.svg"
      alt="Logo"
      width={100}
      height={30}
      className={cn(className)}
    />
  );
}
