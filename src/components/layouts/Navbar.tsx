"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import useAuth from "@/hooks/useAuth";
import useLogout from "@/hooks/useLogout";
import { cn } from "@/lib/utils";
import { LogOut, Menu, Search, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiOutlineShopping } from "react-icons/ai";
import Logo from "../ui/Logo";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
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
      name: "Appointment",
      link: "/appointment",
    },
  ];
  const shopLinks = [
    { name: "Agbada", link: "/shop/categories/agbda" },
    { name: "Kaftan", link: "/shop/categories/kaftan" },
    { name: "Senator Wears", link: "/shop/categories/senatot-wear" },
    { name: "Casuals", link: "/shop/categories/casuals" },
  ];
  const pathname = usePathname();
  const { logoutFn } = useLogout();
  const { isAuthenticated } = useAuth();
  return (
    <header className="border-b py-3">
      <nav className="w-full flex justify-between items-center lg:hidden px-4">
        <Sheet>
          <SheetTrigger className="px-0" asChild>
            <Menu
              strokeWidth={1.5}
              className="w-8 h-8 text-primary cursor-pointer"
            />
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
                <Search strokeWidth={1.5} />
              </form>
              <div className="uppercase font-light text-sm flex flex-col gap-y-4 mt-6">
                {navlinks.map((nav, index) => (
                  <>
                    {nav.link === "/shop" ? (
                      <Accordion type="single" collapsible>
                        <AccordionItem value="shop" className="border-none">
                          <AccordionTrigger className="uppercase flex justify-between hover:no-underline font-light tracking-widest py-0">
                            Shop
                          </AccordionTrigger>
                          <AccordionContent className="inline-flex flex-col gap-y-2 ml-1 mt-3">
                            {shopLinks.map((nav, index) => (
                              <Link
                                key={nav.name}
                                className={cn(
                                  "w-max tracking-widest py-0 relative after:block after:content-[''] after:w-0 after:border-b-[3px] after:border-black hover:after:w-full after:transition-all after:duration-300",
                                  pathname === nav.link && "after:w-full"
                                )}
                                href={nav.link}
                              >
                                {nav.name}
                              </Link>
                            ))}
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    ) : (
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
                    )}
                  </>
                ))}
              </div>
            </div>
          </SheetContent>
        </Sheet>
        <div className="lg:hidden flex-1 flex justify-center">
          <Logo />
        </div>
        <div className="flex gap-x-2 items-center">
          <Button
            asChild
            size="icon"
            className="bg-transparent p-0 hover:bg-transparent"
          >
            <Link href="/account">
              <User strokeWidth={1.5} className="text-primary" />
            </Link>
          </Button>
          <Button
            size="icon"
            className="bg-transparent p-0 hover:bg-transparent flex gap-1"
          >
            <AiOutlineShopping className="w-6 h-6 text-primary" />
            <span className="text-primary">0</span>
          </Button>
          {isAuthenticated && (
            <Button
              size="icon"
              className="bg-transparent p-0 hover:bg-transparent"
              onClick={() => logoutFn()}
            >
              <LogOut strokeWidth={1.5} className="w-6 h-6 text-primary" />
            </Button>
          )}
        </div>
      </nav>

      <div className="hidden lg:flex lg:justify-between px-4">
        <form className="flex gap-x-2 items-center border-b border-primary">
          <Input
            className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
            placeholder="Search..."
          />
          <Search strokeWidth={1.5} />
        </form>
        <div className="flex gap-x-2 items-center">
          <Button
            asChild
            size="icon"
            className="bg-transparent p-0 hover:bg-transparent"
          >
            <Link href="/account">
              <User strokeWidth={1.5} className="text-primary font-light" />
            </Link>
          </Button>
          <Button
            size="icon"
            className="bg-transparent p-0 hover:bg-transparent flex gap-1 items-center"
          >
            <AiOutlineShopping className="w-6 h-6 text-primary" />
            <span className="text-primary">0</span>
          </Button>
          {isAuthenticated && (
            <Button
              size="icon"
              className="bg-transparent p-0 hover:bg-transparent"
              onClick={() => logoutFn()}
            >
              <LogOut strokeWidth={1.5} className="w-6 h-6 text-primary" />
            </Button>
          )}
        </div>
      </div>
      <div className="w-full flex flex-col items-center gap-y-6">
        <div className="hidden lg:block">
          <Logo />
        </div>

        <div className="hidden uppercase lg:flex gap-x-6 font-light text-sm">
          {navlinks.map((nav, index) => (
            <>
              {nav.link === "/shop" ? (
                <div className="relative">
                  <span
                    className={cn(
                      "peer tracking-widest py-0 relative after:block after:content-[''] after:w-0 after:border-b-[3px] after:border-black hover:after:w-full after:transition-all after:duration-300 cursor-pointer",
                      pathname.startsWith("/shop") && "after:w-full"
                    )}
                  >
                    Shop
                  </span>
                  <div className="hidden peer-hover:inline-flex absolute pb-3 -left-6 px-6 hover:inline-flex gap-y-2 flex-col w-[250px] py-1 pt-6 bg-white z-50 shadow-md border">
                    {shopLinks.map((nav, index) => (
                      <Link
                        key={nav.name}
                        className={cn(
                          "inline-block w-max tracking-widest py-0 relative after:block after:content-[''] after:w-0 after:border-b-[3px] after:border-black hover:after:w-full after:transition-all after:duration-300",
                          pathname === nav.link && "after:w-full"
                        )}
                        href={nav.link}
                      >
                        {nav.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
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
              )}
            </>
          ))}
        </div>
      </div>
    </header>
  );
}
