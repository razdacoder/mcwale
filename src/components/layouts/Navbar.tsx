"use client";
import { cn } from "@/lib/utils";
import { Menu, Search, User } from "lucide-react";
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
  const components: { title: string; href: string; description: string }[] = [
    {
      title: "Alert Dialog",
      href: "/docs/primitives/alert-dialog",
      description:
        "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
      title: "Hover Card",
      href: "/docs/primitives/hover-card",
      description:
        "For sighted users to preview content available behind a link.",
    },
    {
      title: "Progress",
      href: "/docs/primitives/progress",
      description:
        "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
    {
      title: "Scroll-area",
      href: "/docs/primitives/scroll-area",
      description: "Visually or semantically separates content.",
    },
    {
      title: "Tabs",
      href: "/docs/primitives/tabs",
      description:
        "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    },
    {
      title: "Tooltip",
      href: "/docs/primitives/tooltip",
      description:
        "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    },
  ];
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
        </div>
      </nav>
      <div className="w-full flex justify-center mt-2 mb-4">
        <Logo />
      </div>
    </header>
  );
}
