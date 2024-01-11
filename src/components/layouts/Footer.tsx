"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

type FooterProps = {
  className?: string;
};

export default function Footer({ className }: FooterProps) {
  const pathname = usePathname();
  return (
    <footer className="px-6 pt-12 pb-6 bg-slate-100">
      <div className="flex items-center flex-col gap-y-6">
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Newsletter
        </h3>
        <p>Get timely updates from your favourite products</p>
        <form
          className="w-full flex flex-col  md:flex-row md:w-1/2 md:gap-x-3 items-center gap-y-3"
          action=""
        >
          <Input className="py-3" placeholder="Enter your email address" />
          <Button className="uppercase" type="submit">
            Subscribe
          </Button>
        </form>
      </div>
      <div className="flex flex-col justify-center md:flex-row gap-y-3 items-center mt-6 md:justify-between md:items-center">
        <div className="uppercase font-medium tracking-wide text-sm flex flex-col items-center gap-y-3 md:flex-row md:gap-x-6">
          <Link href="#">Terms and Policy</Link>
          <Link href="#">About us</Link>
          <Link href="#">Magazine</Link>
          <Link href="#">#Mcwale</Link>
        </div>
        <p className="mt-4 font-normal uppercase text-muted-foreground">
          &copy; {new Date().getFullYear()} Mcwale
        </p>
      </div>
    </footer>
  );
}
