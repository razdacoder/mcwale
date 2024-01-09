"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterCircle,
} from "react-icons/ai";
import Logo from "../ui/Logo";
import { Button } from "../ui/button";

type NavbarProps = {
  className?: string;
};

export default function Navbar({ className }: NavbarProps) {
  const pathname = usePathname();
  return (
    <header
      className={`flex px-3 items-center justify-between gap-y-6 border-b h-[15vh] md:items-end md:pb-4 md:px-8 ${className}`}
    >
      <nav className="w-full hidden md:block">
        <ul className="flex uppercase justify-between px-2 md:justify-start md:gap-x-8 lg:gap-x-16">
          <li className="font-medium">
            <Link
              className={`text-xs lg:text-base tracking-widest relative before:block before:content-[""] before:w-0 before:border-b-[3px] before:border-black before:py-2 before:transition-all before:duration-[0.5s] before:ease-in-out hover:before:w-full ${
                pathname === "/campaign" ? "font-semibold" : "font-medium"
              }`}
              href="/campaign"
            >
              / Campaign
            </Link>
          </li>
          <li>
            <Link
              className={`text-xs lg:text-base tracking-widest relative before:block before:content-[""] before:w-0 before:border-b-[3px] before:border-black before:py-2 before:transition-all before:duration-[0.5s] before:ease-in-out hover:before:w-full  ${
                pathname === "/tailoring" ? "font-semibold" : "font-medium"
              }`}
              href="/tailoring"
            >
              / Tailoring
            </Link>
          </li>
          <li>
            <Link
              className={`text-xs lg:text-base tracking-widest relative before:block before:content-[""] before:w-0 before:border-b-[3px] before:border-black before:py-2 before:transition-all before:duration-[0.5s] before:ease-in-out hover:before:w-full  ${
                pathname === "/casuals" ? "font-semibold" : "font-medium"
              }`}
              href="/casuals"
            >
              / CASUALS
            </Link>
          </li>
          <li>
            <Link
              className={`text-xs lg:text-base tracking-widest relative before:block before:content-[""] before:w-0 before:border-b-[3px] before:border-black before:py-2 before:transition-all before:duration-[0.5s] before:ease-in-out hover:before:w-full  ${
                pathname === "/backstage" ? "font-semibold" : "font-medium"
              }`}
              href="/backstage"
            >
              / Backstage
            </Link>
          </li>
        </ul>
      </nav>
      <div>
        <Logo />
      </div>
      <div>
        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" className="lg:hidden bg-transparent">
              <Menu className="w-8 h-8 text-primary" />
            </Button>
          </SheetTrigger>
          <SheetContent className="flex flex-col justify-between">
            <nav className="uppercase">
              <Link
                className={`text-xs lg:text-base tracking-widest relative before:block before:content-[""] before:w-0 before:border-b-[3px] before:border-black before:py-2 before:transition-all before:duration-[0.5s] before:ease-in-out hover:before:w-full ${
                  pathname === "/campaign" ? "font-semibold" : "font-medium"
                }`}
                href="/campaign"
              >
                / Campaign
              </Link>

              <Link
                className={`text-xs lg:text-base tracking-widest relative before:block before:content-[""] before:w-0 before:border-b-[3px] before:border-black before:py-2 before:transition-all before:duration-[0.5s] before:ease-in-out hover:before:w-full  ${
                  pathname === "/tailoring" ? "font-semibold" : "font-medium"
                }`}
                href="/tailoring"
              >
                / Tailoring
              </Link>

              <Link
                className={`text-xs lg:text-base tracking-widest relative before:block before:content-[""] before:w-0 before:border-b-[3px] before:border-black before:py-2 before:transition-all before:duration-[0.5s] before:ease-in-out hover:before:w-full  ${
                  pathname === "/casuals" ? "font-semibold" : "font-medium"
                }`}
                href="/casuals"
              >
                / CASUALS
              </Link>

              <Link
                className={`text-xs lg:text-base tracking-widest relative before:block before:content-[""] before:w-0 before:border-b-[3px] before:border-black before:py-2 before:transition-all before:duration-[0.5s] before:ease-in-out hover:before:w-full  ${
                  pathname === "/backstage" ? "font-semibold" : "font-medium"
                }`}
                href="/backstage"
              >
                / Backstage
              </Link>

              <Link
                className={`text-xs lg:text-base tracking-widest relative before:block before:content-[""] before:w-0 before:border-b-[3px] before:border-black before:py-2 before:transition-all before:duration-[0.5s] before:ease-in-out hover:before:w-full  ${
                  pathname === "/about" ? "font-semibold" : "font-medium"
                }`}
                href="#"
              >
                About us
              </Link>

              <Link
                className={`text-xs lg:text-base tracking-widest relative before:block before:content-[""] before:w-0 before:border-b-[3px] before:border-black before:py-2 before:transition-all before:duration-[0.5s] before:ease-in-out hover:before:w-full  ${
                  pathname === "/appointment" ? "font-semibold" : "font-medium"
                }`}
                href="/appointment"
              >
                Appointment
              </Link>

              <Link
                className={`text-xs lg:text-base tracking-widest relative before:block before:content-[""] before:w-0 before:border-b-[3px] before:border-black before:py-2 before:transition-all before:duration-[0.5s] before:ease-in-out hover:before:w-full  ${
                  pathname === "/contact" ? "font-semibold" : "font-medium"
                }`}
                href="/contact"
              >
                Contact
              </Link>

              <Link
                className={`text-xs lg:text-base tracking-widest relative before:block before:content-[""] before:w-0 before:border-b-[3px] before:border-black before:py-2 before:transition-all before:duration-[0.5s] before:ease-in-out hover:before:w-full  ${
                  pathname === "/policy" ? "font-semibold" : "font-medium"
                }`}
                href="#"
              >
                Policy
              </Link>

              <Link
                className={`text-xs lg:text-base tracking-widest relative before:block before:content-[""] before:w-0 before:border-b-[3px] before:border-black before:py-2 before:transition-all before:duration-[0.5s] before:ease-in-out hover:before:w-full  ${
                  pathname === "/newsletter" ? "font-semibold" : "font-medium"
                }`}
                href="#"
              >
                Newsletter
              </Link>

              <Link
                className="text-xs lg:text-base tracking-widest relative before:block before:content-[''] before:w-0 before:border-b-[3px] before:border-black before:py-2 before:transition-all before:duration-[0.5s] before:ease-in-out hover:before:w-full"
                href="#"
              >
                #Mcwalemen
              </Link>
            </nav>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-x-4">
                <Link href="#">
                  <AiFillFacebook className="w-6 h-6" />
                </Link>
                <Link href="#">
                  <AiFillTwitterCircle className="w-6 h-6" />
                </Link>
                <Link href="#">
                  <AiFillInstagram className="w-6 h-6" />
                </Link>
              </div>
              <p className="uppercase text-xs tracking-widest">
                &copy; Mcwale {new Date().getFullYear()}
              </p>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
