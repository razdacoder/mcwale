"use client";

import { Facebook, Instagram, Twitter } from "lucide-react";
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
    <footer className="pt-12 pb-6 bg-slate-100">
      <div className="px-3 lg:container">
        <div className="flex flex-col gap-y-6 md:flex-row md:justify-between my-6 uppercase">
          <div>
            <h4 className="mb-3">ABOUT US</h4>
            <div className="flex flex-col gap-y-2">
              <Link href="/about" className="flex gap-x-3 items-center">
                <span className="text-sm text-muted-foreground">About</span>
              </Link>
              <Link href="#" className="flex gap-x-3 items-center">
                <span className="text-sm text-muted-foreground">
                  Terms & Policy
                </span>
              </Link>
              <Link href="#" className="flex gap-x-3 items-center">
                <span className="text-sm text-muted-foreground">Magazine</span>
              </Link>
            </div>
          </div>

          <div>
            <h4 className="mb-3">HELP</h4>
            <div className="flex flex-col gap-y-2">
              <Link href="/faq" className="flex gap-x-3 items-center">
                <span className="text-sm text-muted-foreground">FAQ</span>
              </Link>
              <Link href="#" className="flex gap-x-3 items-center">
                <span className="text-sm text-muted-foreground">
                  Size Chart
                </span>
              </Link>
            </div>
          </div>

          <div>
            <h4 className="mb-3">CONTACT US</h4>
            <div className="flex flex-col gap-y-2">
              <Link href="/contact" className="flex gap-x-3 items-center">
                <span className="text-sm text-muted-foreground">Contact </span>
              </Link>
              <Link href="/appointment" className="flex gap-x-3 items-center">
                <span className="text-sm text-muted-foreground">
                  Appointment
                </span>
              </Link>
              <Link href="#" className="flex gap-x-3 items-center">
                <span className="text-sm text-muted-foreground">Map</span>
              </Link>
            </div>
          </div>
        </div>
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
            <Link href="#" className="flex gap-x-3 items-center">
              <Facebook className="w-4 h-4" />
              <span className="text-sm text-muted-foreground">Facebook</span>
            </Link>
            <Link href="#" className="flex gap-x-3 items-center">
              <Instagram className="w-4 h-4" />
              <span className="text-sm text-muted-foreground">Instagram</span>
            </Link>
            <Link href="#" className="flex gap-x-3 items-center">
              <Twitter className="w-4 h-4" />
              <span className="text-sm text-muted-foreground">Twitter</span>
            </Link>
          </div>
          <p className="mt-4 text-sm font-normal uppercase text-muted-foreground">
            &copy; {new Date().getFullYear()} Mcwale All Right Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
