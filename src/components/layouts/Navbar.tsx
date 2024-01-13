"use client";
import useAuth from "@/hooks/useAuth";
import useLogout from "@/hooks/useLogout";
import { cn } from "@/lib/utils";
import { LogOut, Menu, Search, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdOutlineShoppingBag } from "react-icons/md";
import Logo from "../ui/Logo";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

type NavbarProps = {
  className?: string;
};

export default function Navbar({ className }: NavbarProps) {
  const pathname = usePathname();
  const { logoutFn } = useLogout();
  const { isAuthenticated } = useAuth();
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
            {/* <ScrollArea className=""> */}
            <div className="mt-6 overflow-y-scroll">
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
                    pathname === "/shop" && "before:w-1/3"
                  )}
                  href="/shop"
                >
                  shop
                </Link>

                <Link
                  className={cn(
                    "tracking-widest relative before:block before:content-[''] before:w-0 before:border-b-[3px] before:border-black before:py-2 before:transition-all before:duration-[0.5s] before:ease-in-out hover:before:w-full",
                    pathname === "/appointment" && "before:w-1/3"
                  )}
                  href="/appointment"
                >
                  Appointment
                </Link>

                <Link
                  className={cn(
                    "tracking-widest relative before:block before:content-[''] before:w-0 before:border-b-[3px] before:border-black before:py-2 before:transition-all before:duration-[0.5s] before:ease-in-out hover:before:w-full",
                    pathname === "/about" && "before:w-1/3"
                  )}
                  href="#"
                >
                  About us
                </Link>

                <Link
                  className={cn(
                    "tracking-widest relative before:block before:content-[''] before:w-0 before:border-b-[3px] before:border-black before:py-2 before:transition-all before:duration-[0.5s] before:ease-in-out hover:before:w-full",
                    pathname === "/contact" && "before:w-1/3"
                  )}
                  href="/#contact"
                >
                  Contact us
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>

        <div className="hidden uppercase xl:flex gap-x-6 font-semibold text-sm">
          <Link
            className={cn(
              "tracking-widest relative before:block before:content-[''] before:w-0 before:border-b-[3px] before:border-black before:py-2 before:transition-all before:duration-[0.5s] before:ease-in-out hover:before:w-full",
              pathname === "/shop" && "before:w-full"
            )}
            href="/shop"
          >
            shop
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
              pathname === "/about" && "before:w-full"
            )}
            href="#"
          >
            About us
          </Link>

          <Link
            className={cn(
              "tracking-widest relative before:block before:content-[''] before:w-0 before:border-b-[3px] before:border-black before:py-2 before:transition-all before:duration-[0.5s] before:ease-in-out hover:before:w-full",
              pathname === "/contact" && "before:w-full"
            )}
            href="/#contact"
          >
            Contact us
          </Link>
        </div>

        <div className="flex gap-x-2 items-center">
          <form className="hidden lg:flex gap-x-2 items-center border-b border-primary">
            <Input
              className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
              placeholder="Search..."
            />
            <Search />
          </form>
          <Button
            asChild
            size="icon"
            className="bg-transparent p-0 hover:bg-transparent"
          >
            <Link href="/account">
              <User className="text-primary" />
            </Link>
          </Button>
          <Button
            size="icon"
            className="bg-transparent p-0 hover:bg-transparent"
          >
            <MdOutlineShoppingBag className="w-6 h-6 text-primary" />
          </Button>
          {isAuthenticated && (
            <Button
              size="icon"
              className="bg-transparent p-0 hover:bg-transparent"
              onClick={() => logoutFn()}
            >
              <LogOut className="w-6 h-6 text-primary" />
            </Button>
          )}
        </div>
      </nav>
      <div className="w-full flex justify-center mt-2 mb-4">
        <Logo />
      </div>
    </header>
  );
}
