"use client";
import Link from "next/link";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterCircle,
} from "react-icons/ai";

import { usePathname } from "next/navigation";

type FooterProps = {
  className?: string;
};

export default function Footer({ className }: FooterProps) {
  const pathname = usePathname();
  return (
    <footer
      className={`hidden border-t h-[8vh] md:flex md:items-center md:flex-row md:justify-between md:px-8 lg:px-16 ${className}`}
    >
      <nav className="hidden md:block">
        <ul className="md:flex md:gap-x-3 lg:gap-x-16 uppercase">
          <li className="font-medium">
            <Link
              className={`text-xs lg:text-base tracking-widest relative before:block before:content-[""] before:w-0 before:border-b-[3px] before:border-black before:py-2 before:transition-all before:duration-[0.5s] before:ease-in-out hover:before:w-full  ${
                pathname === "/about" ? "font-semibold" : "font-medium"
              }`}
              href="#"
            >
              About us
            </Link>
          </li>
          <li>
            <Link
              className={`text-xs lg:text-base tracking-widest relative before:block before:content-[""] before:w-0 before:border-b-[3px] before:border-black before:py-2 before:transition-all before:duration-[0.5s] before:ease-in-out hover:before:w-full  ${
                pathname === "/appointment" ? "font-semibold" : "font-medium"
              }`}
              href="/appointment"
            >
              Appointment
            </Link>
          </li>
          <li>
            <Link
              className={`text-xs lg:text-base tracking-widest relative before:block before:content-[""] before:w-0 before:border-b-[3px] before:border-black before:py-2 before:transition-all before:duration-[0.5s] before:ease-in-out hover:before:w-full  ${
                pathname === "/contact" ? "font-semibold" : "font-medium"
              }`}
              href="/contact"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              className={`text-xs lg:text-base tracking-widest relative before:block before:content-[""] before:w-0 before:border-b-[3px] before:border-black before:py-2 before:transition-all before:duration-[0.5s] before:ease-in-out hover:before:w-full  ${
                pathname === "/policy" ? "font-semibold" : "font-medium"
              }`}
              href="#"
            >
              Policy
            </Link>
          </li>
          <li>
            <Link
              className={`text-xs lg:text-base tracking-widest relative before:block before:content-[""] before:w-0 before:border-b-[3px] before:border-black before:py-2 before:transition-all before:duration-[0.5s] before:ease-in-out hover:before:w-full  ${
                pathname === "/newsletter" ? "font-semibold" : "font-medium"
              }`}
              href="#"
            >
              Newsletter
            </Link>
          </li>
          <li>
            <Link
              className="text-xs lg:text-base tracking-widest relative before:block before:content-[''] before:w-0 before:border-b-[3px] before:border-black before:py-2 before:transition-all before:duration-[0.5s] before:ease-in-out hover:before:w-full"
              href="#"
            >
              #Mcwalemen
            </Link>
          </li>
        </ul>
      </nav>
      <div className="flex flex-col justify-center py-2 items-center ">
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
    </footer>
  );
}
