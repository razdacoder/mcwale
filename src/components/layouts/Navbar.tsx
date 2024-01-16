"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
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

type NavbarProps = {
  className?: string;
};

export default function Navbar({ className }: NavbarProps) {
  const navlinks = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Shop",
      link: "/shop",
    },
    {
      name: "About us",
      link: "/about",
    },
    {
      name: "Contact us",
      link: "/contact",
    },
  ];
  const pathname = usePathname();
  const { logoutFn } = useLogout();
  const { isAuthenticated } = useAuth();
  return (
    <header className="border-b">
      <nav className="w-full flex justify-between items-center lg:hidden px-3 py-2">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              size="icon"
              className="bg-transparent p-0 active:bg-transparent xl:hidden"
            >
              <Menu className="w-8 h-8 text-primary" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="left"
            className="flex flex-col justify-between gap-y-6"
          >
            <div className="mt-6 overflow-y-scroll">
              <form
                autoFocus={false}
                className="flex gap-x-2 items-center border-b border-primary"
              >
                <Input
                  autoFocus={false}
                  className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                  placeholder="Search..."
                />
                <Search />
              </form>
              <div className="uppercase font-light text-sm flex flex-col gap-y-4 mt-6">
                {navlinks.map((nav, index) => (
                  <Link
                    key={index}
                    className={cn(
                      "tracking-widest py-0 relative after:block after:content-[''] after:w-0 after:border-b-[3px] after:border-black hover:after:w-full after:transition-all after:duration-300",
                      pathname === nav.link && "before:w-full"
                    )}
                    href={nav.link}
                  >
                    {nav.name}
                  </Link>
                ))}
              </div>
            </div>
          </SheetContent>
        </Sheet>
        <div className="flex gap-x-2 items-center">
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
            className="bg-transparent p-0 hover:bg-transparent flex gap-1"
          >
            <MdOutlineShoppingBag className="w-6 h-6 text-primary" />
            <span className="text-primary">0</span>
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
      <div className="hidden lg:flex lg:justify-between px-6 py-3">
        <form className="flex gap-x-2 items-center border-b border-primary">
          <Input
            className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
            placeholder="Search..."
          />
          <Search />
        </form>
        <div className="flex gap-x-2 items-center">
          <Button
            asChild
            size="icon"
            className="bg-transparent p-0 hover:bg-transparent"
          >
            <Link href="/account">
              <User className="text-primary font-light" />
            </Link>
          </Button>
          <Button
            size="icon"
            className="bg-transparent p-0 hover:bg-transparent flex gap-1 items-center"
          >
            <MdOutlineShoppingBag className="w-6 h-6 text-primary" />
            <span className="text-primary">0</span>
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
      </div>
      <div className="w-full flex flex-col items-center gap-y-6 mt-2 mb-4">
        <Logo />
        <div className="hidden uppercase xl:flex gap-x-6 font-light text-sm">
          {navlinks.map((nav, index) => (
            <Link
              key={index}
              className={cn(
                "tracking-widest py-0 relative after:block after:content-[''] after:w-0 after:border-b-[3px] after:border-black hover:after:w-full after:transition-all after:duration-300",
                pathname === nav.link && "after:w-full"
              )}
              href={nav.link}
            >
              {nav.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
