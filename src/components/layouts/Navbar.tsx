"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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
          <SheetContent side="left" className="flex flex-col justify-between">
            <div className="mt-6 overflow-y-scroll">
              <form className="flex gap-x-2 items-center border-b border-primary">
                <Input
                  autoFocus={false}
                  className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                  placeholder="Search..."
                />
                <Search />
              </form>
              <div className="uppercase font-light text-sm flex flex-col gap-y-3">
                <Link
                  className={cn(
                    "tracking-widest relative before:block before:content-[''] before:w-0 before:border-b-[3px] before:border-black before:py-2 before:transition-all before:duration-[0.5s] before:ease-in-out hover:before:w-full",
                    pathname === "/new-in" && "before:w-1/3"
                  )}
                  href="/new-in"
                >
                  new in
                </Link>
                <Accordion type="single" collapsible>
                  <AccordionItem
                    className="border-0 no-underline py-0 my-0"
                    value="item-1"
                  >
                    <AccordionTrigger className="hover:no-underline py-0">
                      <div className="tracking-widest py-0 relative after:block after:content-[''] after:w-0 after:border-b-[3px] after:border-black hover:after:w-full after:transition-all after:duration-300 font-light no-underline border-0">
                        SHOP
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="py-0 ml-4 flex flex-col gap-y-3">
                      <Link
                        className={cn(
                          "tracking-widest py-0 relative after:block after:content-[''] after:w-0 after:border-b-[3px] after:border-black hover:after:w-full after:transition-all after:duration-300",
                          pathname === "/new-in" && "before:w-1/3"
                        )}
                        href="/new-in"
                      >
                        KAFTAN
                      </Link>
                      <Link
                        className={cn(
                          "tracking-widest py-0 relative after:block after:content-[''] after:w-0 after:border-b-[3px] after:border-black hover:after:w-full after:transition-all after:duration-300",
                          pathname === "/new-in" && "before:w-1/3"
                        )}
                        href="/new-in"
                      >
                        AGBADA
                      </Link>
                      <Link
                        className={cn(
                          "tracking-widest py-0 relative after:block after:content-[''] after:w-0 after:border-b-[3px] after:border-black hover:after:w-full after:transition-all after:duration-300",
                          pathname === "/new-in" && "before:w-1/3"
                        )}
                        href="/new-in"
                      >
                        CASUALS
                      </Link>
                      <Link
                        className={cn(
                          "tracking-widest py-0 relative after:block after:content-[''] after:w-0 after:border-b-[3px] after:border-black hover:after:w-full after:transition-all after:duration-300",
                          pathname === "/new-in" && "before:w-1/3"
                        )}
                        href="/new-in"
                      >
                        ACCESSORIES AND KITS
                      </Link>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <Link
                  className={cn(
                    "tracking-widest py-0 relative after:block after:content-[''] after:w-0 after:border-b-[3px] after:border-black hover:after:w-full after:transition-all after:duration-300",
                    pathname === "/appointment" && "before:w-1/3"
                  )}
                  href="/appointment"
                >
                  Appointment
                </Link>

                <Link
                  className={cn(
                    "tracking-widest py-0 relative after:block after:content-[''] after:w-0 after:border-b-[3px] after:border-black hover:after:w-full after:transition-all after:duration-300",
                    pathname === "/about" && "before:w-1/3"
                  )}
                  href="#"
                >
                  About us
                </Link>
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
          <Link
            className={cn(
              "tracking-widest py-0 relative after:block after:content-[''] after:w-0 after:border-b-[3px] after:border-black hover:after:w-full after:transition-all after:duration-300",
              pathname === "/new-in" && "after:w-full"
            )}
            href="/new-in"
          >
            new in
          </Link>

          <div
            className={cn(
              "group tracking-widest cursor-pointer py-0 relative after:block after:content-[''] after:w-0 after:border-b-[3px] after:border-black hover:after:w-full after:transition-all after:duration-300",
              pathname === "/shop" && "after:w-full"
            )}
          >
            shop
            <div className="absolute hidden group-hover:block shadow-xl mt-1 z-50 bg-white px-6 py-4 w-56">
              <div className="flex flex-col gap-y-4">
                <Link
                  className={cn(
                    "tracking-widest py-0 relative after:block after:content-[''] after:w-0 after:border-b-[3px] after:border-black hover:after:w-full after:transition-all after:duration-300",
                    pathname === "/kaftan" && "after:w-full"
                  )}
                  href="/kaftan"
                >
                  kaftan
                </Link>

                <Link
                  className={cn(
                    "tracking-widest py-0 relative after:block after:content-[''] after:w-0 after:border-b-[3px] after:border-black hover:after:w-full after:transition-all after:duration-300",
                    pathname === "/agbada" && "after:w-full"
                  )}
                  href="/agbada"
                >
                  agbada
                </Link>

                <Link
                  className={cn(
                    "tracking-widest py-0 relative after:block after:content-[''] after:w-0 after:border-b-[3px] after:border-black hover:after:w-full after:transition-all after:duration-300",
                    pathname === "/casual" && "after:w-full"
                  )}
                  href="/casual"
                >
                  casual
                </Link>

                <Link
                  className={cn(
                    "tracking-widest py-0 relative after:block after:content-[''] after:w-0 after:border-b-[3px] after:border-black hover:after:w-full after:transition-all after:duration-300",
                    pathname === "/accsesories" && "after:w-full"
                  )}
                  href="/acessories"
                >
                  ACCESSORIES
                </Link>
              </div>
            </div>
          </div>

          <Link
            className={cn(
              "tracking-widest py-0 relative after:block after:content-[''] after:w-0 after:border-b-[3px] after:border-black hover:after:w-full after:transition-all after:duration-300",
              pathname === "/appointment" && "after:w-full"
            )}
            href="/appointment"
          >
            appointment
          </Link>
          <Link
            className={cn(
              "tracking-widest py-0 relative after:block after:content-[''] after:w-0 after:border-b-[3px] after:border-black hover:after:w-full after:transition-all after:duration-300",
              pathname === "/about" && "after:w-full"
            )}
            href="/about"
          >
            about us
          </Link>
        </div>
      </div>
    </header>
  );
}
