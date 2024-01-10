"use client";
import { cn } from "@/lib/utils";
import { Menu, Search, ShoppingBagIcon, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "../ui/Logo";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

type NavbarProps = {
  className?: string;
};

export default function Navbar({ className }: NavbarProps) {
  const pathname = usePathname();
  return (
    <header>
      <nav className="w-full flex justify-between items-center xl:items-end py-6 px-1 xl:px-6">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              size="icon"
              className="bg-transparent p-0 active:bg-transparent xl:hidden"
            >
              <Menu className="w-8 h-8 text-primary" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="flex flex-col justify-between">
            <div className="mt-6">
              <form className="flex gap-x-2 items-center border-b border-primary">
                <Input
                  className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                  placeholder="Search..."
                />
                <Search />
              </form>
              <div className="uppercase font-semibold text-sm">
                <Link
                  className={cn(
                    "tracking-widest relative before:block before:content-[''] before:w-0 before:border-b-[3px] before:border-black before:py-2 before:transition-all before:duration-[0.5s] before:ease-in-out hover:before:w-full",
                    pathname === "/campaign" && "before:w-full"
                  )}
                  href="/campaign"
                >
                  campaigns
                </Link>

                <Link
                  className={cn(
                    "tracking-widest relative before:block before:content-[''] before:w-0 before:border-b-[3px] before:border-black before:py-2 before:transition-all before:duration-[0.5s] before:ease-in-out hover:before:w-full",
                    pathname === "/tailoring" && "before:w-full"
                  )}
                  href="/tailoring"
                >
                  NATIVEs
                </Link>

                <Link
                  className={cn(
                    "tracking-widest relative before:block before:content-[''] before:w-0 before:border-b-[3px] before:border-black before:py-2 before:transition-all before:duration-[0.5s] before:ease-in-out hover:before:w-full",
                    pathname === "/casuals" && "before:w-full"
                  )}
                  href="/casuals"
                >
                  casuals
                </Link>

                <Link
                  className={cn(
                    "tracking-widest relative before:block before:content-[''] before:w-0 before:border-b-[3px] before:border-black before:py-2 before:transition-all before:duration-[0.5s] before:ease-in-out hover:before:w-full",
                    pathname === "/backstage" && "before:w-full"
                  )}
                  href="/backstage"
                >
                  Backstage
                </Link>

                <Link
                  className={cn(
                    "tracking-widest relative before:block before:content-[''] before:w-0 before:border-b-[3px] before:border-black before:py-2 before:transition-all before:duration-[0.5s] before:ease-in-out hover:before:w-full",
                    pathname === "/about" && "before:w-full"
                  )}
                  href="#"
                >
                  About us
                </Link>

                <Link
                  className={cn(
                    "tracking-widest relative before:block before:content-[''] before:w-0 before:border-b-[3px] before:border-black before:py-2 before:transition-all before:duration-[0.5s] before:ease-in-out hover:before:w-full",
                    pathname === "/appointment" && "before:w-full"
                  )}
                  href="/appointment"
                >
                  Appointment
                </Link>

                <Link
                  className={cn(
                    "tracking-widest relative before:block before:content-[''] before:w-0 before:border-b-[3px] before:border-black before:py-2 before:transition-all before:duration-[0.5s] before:ease-in-out hover:before:w-full",
                    pathname === "/contact" && "before:w-full"
                  )}
                  href="/contact"
                >
                  Contact us
                </Link>
              </div>
            </div>
            <div>
              <Button className="w-full bg-transparent p-0 uppercase text-primary font-semibold text-sm flex gap-x-3 items-center">
                <ShoppingBagIcon className="text-primary" />
                <div className="flex justify-between items-center flex-1">
                  <span>Shopping cart</span>
                  <span className="bg-primary text-white rounded-full px-2 py-1">
                    0
                  </span>
                </div>
              </Button>
              <Button className="bg-transparent p-0 uppercase text-primary font-semibold text-sm flex gap-x-3 items-center">
                <User className="text-primary" />
                Login
              </Button>
            </div>
          </SheetContent>
        </Sheet>

        <div className="hidden uppercase xl:flex gap-x-6 font-semibold text-sm">
          <Link
            className={cn(
              "tracking-widest relative before:block before:content-[''] before:w-0 before:border-b-[3px] before:border-black before:py-2 before:transition-all before:duration-[0.5s] before:ease-in-out hover:before:w-full",
              pathname === "/tailoring" && "before:w-full"
            )}
            href="/tailoring"
          >
            NATIVEs
          </Link>

          <Link
            className={cn(
              "tracking-widest relative before:block before:content-[''] before:w-0 before:border-b-[3px] before:border-black before:py-2 before:transition-all before:duration-[0.5s] before:ease-in-out hover:before:w-full",
              pathname === "/casuals" && "before:w-full"
            )}
            href="/casuals"
          >
            casuals
          </Link>

          <Link
            className={cn(
              "tracking-widest relative before:block before:content-[''] before:w-0 before:border-b-[3px] before:border-black before:py-2 before:transition-all before:duration-[0.5s] before:ease-in-out hover:before:w-full",
              pathname === "/backstage" && "before:w-full"
            )}
            href="/backstage"
          >
            Backstage
          </Link>

          <Link
            className={cn(
              "tracking-widest relative before:block before:content-[''] before:w-0 before:border-b-[3px] before:border-black before:py-2 before:transition-all before:duration-[0.5s] before:ease-in-out hover:before:w-full",
              pathname === "/about" && "before:w-full"
            )}
            href="#"
          >
            About us
          </Link>

          <Link
            className={cn(
              "tracking-widest relative before:block before:content-[''] before:w-0 before:border-b-[3px] before:border-black before:py-2 before:transition-all before:duration-[0.5s] before:ease-in-out hover:before:w-full",
              pathname === "/appointment" && "before:w-full"
            )}
            href="/appointment"
          >
            Appointment
          </Link>

          <Link
            className={cn(
              "tracking-widest relative before:block before:content-[''] before:w-0 before:border-b-[3px] before:border-black before:py-2 before:transition-all before:duration-[0.5s] before:ease-in-out hover:before:w-full",
              pathname === "/contact" && "before:w-full"
            )}
            href="/contact"
          >
            Contact us
          </Link>
        </div>
        <div className="xl:flex-1 xl:ml-24">
          <Logo />
        </div>

        <div className="flex gap-x-2 items-center">
          <Button
            size="icon"
            className="bg-transparent p-0 hover:bg-transparent"
          >
            <User className="text-primary" />
          </Button>
          <Button
            size="icon"
            className="bg-transparent p-0 hover:bg-transparent"
          >
            <ShoppingBagIcon className="text-primary" />
          </Button>
        </div>
      </nav>
    </header>
  );
}
