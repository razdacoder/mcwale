"use client";

import { Search } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

import useSupabaseBrowser from "@/lib/supabase-client";
import { Category } from "@/lib/types";
import { cn } from "@/lib/utils";
import { getCategories } from "@/services/categoriesServices";
import { getSetting } from "@/services/settingsServices";
import { useCartStore } from "@/store/useCart";
import { useCurrencyStore } from "@/store/useCurrency";
import { useRateStore } from "@/store/useRates";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";
import Logo from "../ui/Logo";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import MobileNav from "./MobileNav";

type NavbarProps = {
  className?: string;
};

export default function Navbar({ className }: NavbarProps) {
  const router = useRouter();
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
      link: "/info/about",
    },
    {
      name: "Appointment",
      link: "/info/appointment",
    },
  ];

  const pathname = usePathname();
  const { currency, setCurrency } = useCurrencyStore();
  const { cart } = useCartStore();
  const [isClient, setIsClient] = useState(false);
  const { setRate } = useRateStore();
  const [searchShow, setSearchShow] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const supabase = useSupabaseBrowser();
  const { data: categories, isLoading } = useQuery({
    queryKey: ["get-all-categories"],
    queryFn: getCategories,
  });
  // const { data: setting } = useQuery(getSetting(supabase));

  const search = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formdata = new FormData(e.target as HTMLFormElement);
    const query = formdata.get("query");
    router.push(`/search?q=${query}`);
  };

  useEffect(() => {
    const getRates = async () => {
      const data = await getSetting(supabase);
      setRate({ NGN: data?.ngn_rate, GBP: data?.gbp_rate });
    };

    getRates();
  }, []);

  return (
    <header className="border-b py-3 sticky top-0 z-20 w-full bg-white">
      <MobileNav navlinks={navlinks} categories={categories as Category[]} />

      <div className="hidden lg:flex lg:justify-between px-4">
        <form
          className="flex gap-x-2 items-center border-primary"
          onSubmit={(e) => search(e)}
        >
          <Input
            className={cn(
              "hidden border-0 focus-visible:ring-0 focus-visible:ring-offset-0 animate-in border-b",
              searchShow && "inline"
            )}
            onBlur={() => setSearchShow(false)}
            autoFocus
            name="query"
            placeholder="Search..."
          />
          <Search
            onClick={() => setSearchShow(true)}
            className="size-4"
            strokeWidth={1.5}
          />
        </form>
        <div className="flex gap-x-2 items-center">
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
      <div className="w-full flex flex-col items-center gap-y-8">
        <div className="hidden lg:block">
          <Logo />
        </div>

        <div className="hidden  lg:flex gap-x-6  text-sm">
          {navlinks.map((nav, index) => (
            <div key={index}>
              {nav.link === "/shop" ? (
                <div key={nav.name} className="relative">
                  <span
                    className={cn(
                      "peer tracking-widest py-0 relative after:block after:content-[''] after:w-0 after:border-b-[3px] after:border-black hover:after:w-full after:transition-all after:duration-300 cursor-pointer",
                      pathname.startsWith("/shop") && "after:w-full"
                    )}
                  >
                    Shop
                  </span>
                  <div className="hidden peer-hover:inline-flex absolute pb-3 -left-6 px-6 hover:inline-flex gap-y-2 flex-col w-[250px] py-1 pt-6 bg-white z-50 shadow-md border">
                    {categories?.map((category: Category, index) => (
                      <Link
                        prefetch={false}
                        key={category.title}
                        className={cn(
                          "inline-block capitalize w-max tracking-widest py-0 relative after:block after:content-[''] after:w-0 after:border-b-2 after:border-black hover:after:w-full after:transition-all after:duration-300",
                          pathname === `/shop/categories/${category.slug}` &&
                            "after:w-full"
                        )}
                        href={`/shop/categories/${category.slug}`}
                      >
                        {category.title}
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
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
