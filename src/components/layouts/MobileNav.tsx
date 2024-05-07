"use client";
import { Category } from "@/lib/types";
import { cn } from "@/lib/utils";
import { useCartStore } from "@/store/useCart";
import { useCurrencyStore } from "@/store/useCurrency";
import { Menu, Search } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

type NavLink = {
  name: string;
  link: string;
};

type Props = {
  navlinks: NavLink[];
  categories: Category[];
};

export default function MobileNav({ navlinks, categories }: Props) {
  const pathname = usePathname();
  const [isClient, setIsClient] = useState(false);
  const { currency, setCurrency } = useCurrencyStore();
  const { cart } = useCartStore();

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <nav className="w-full flex items-center lg:hidden px-4">
      <div className="md:w-1/2 flex justify-start">
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
                // onSubmit={(e) => search(e)}
              >
                <Input
                  autoFocus={false}
                  className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                  placeholder="Search..."
                  name="query"
                />
                <Search strokeWidth={1.5} />
              </form>
              <div className="  text-sm flex flex-col gap-y-4 mt-6">
                {navlinks.map((nav, index) => (
                  <div key={index}>
                    {nav.link === "/shop" ? (
                      <Accordion type="single" collapsible>
                        <AccordionItem value="shop" className="border-none">
                          <AccordionTrigger className=" flex justify-between hover:no-underline  tracking-widest py-0">
                            Shop
                          </AccordionTrigger>
                          <AccordionContent className="inline-flex flex-col gap-y-4 mt-4">
                            {categories?.map((category: Category, index) => (
                              <Link
                                key={category.id}
                                className={cn(
                                  "w-max capitalize tracking-widest py-0 relative after:block after:content-[''] after:w-0 after:border-b-2 after:border-black hover:after:w-full after:transition-all after:duration-300",
                                  pathname ===
                                    `/shop/categories/${category.slug}` &&
                                    "after:w-full"
                                )}
                                href={`/shop/categories/${category.slug}`}
                              >
                                {category.title}
                              </Link>
                            ))}
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    ) : (
                      <Link
                        key={index}
                        className={cn(
                          "tracking-widest inline-block py-0 relative after:block after:content-[''] after:w-0 after:border-b-2 after:border-black hover:after:w-full after:transition-all after:duration-300",
                          pathname === nav.link && "after:w-full"
                        )}
                        href={nav.link}
                      >
                        {nav.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
      <div className="flex-1 ml-3 md:flex-none lg:hidden">
        <Logo />
      </div>
      <div className="md:w-1/2 flex md:justify-end ">
        <div className="flex gap-x-3 items-center w-32">
          <Button
            size="icon"
            className="bg-transparent p-0 hover:bg-transparent flex gap-1"
            asChild
          >
            <Link href="/cart" className="flex items-center">
              <AiOutlineShopping className="w-6 h-6 text-primary" />
              {isClient ? (
                <span className="text-primary">{cart.length}</span>
              ) : null}
            </Link>
          </Button>
          <Select
            onValueChange={(value: "NGN" | "USD" | "GBP") => setCurrency(value)}
            defaultValue={currency}
          >
            <SelectTrigger className="w-full px-1 outline-none border-none focus:ring-0 focus:ring-offset-0">
              <SelectValue defaultValue={currency} />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="NGN">🇳🇬 NGN</SelectItem>
              <SelectItem value="GBP">🇬🇧 GBP</SelectItem>
              <SelectItem value="USD">🇺🇸 USD</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </nav>
  );
}
