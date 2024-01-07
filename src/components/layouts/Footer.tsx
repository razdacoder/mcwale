"use client";
import Link from "next/link";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterCircle,
} from "react-icons/ai";

import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  return (
    <footer className="border-t h-[8vh] flex flex-col items-center md:flex-row md:justify-between md:px-8 lg:px-16">
      <nav className="hidden md:block">
        <ul className="md:flex md:gap-x-3 lg:gap-x-16 uppercase">
          <li className="font-medium">
            <Link
              className={`text-xs lg:text-base tracking-widest ${
                pathname === "/about" ? "font-semibold" : "font-medium"
              }`}
              href="#"
            >
              About us
            </Link>
          </li>
          <li>
            <Link
              className={`text-xs lg:text-base tracking-widest ${
                pathname === "/appointment" ? "font-semibold" : "font-medium"
              }`}
              href="/appointment"
            >
              Appointment
            </Link>
          </li>
          <li>
            <Link
              className={`text-xs lg:text-base tracking-widest ${
                pathname === "/contact" ? "font-semibold" : "font-medium"
              }`}
              href="/contact"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              className={`text-xs lg:text-base tracking-widest ${
                pathname === "/policy" ? "font-semibold" : "font-medium"
              }`}
              href="#"
            >
              Policy
            </Link>
          </li>
          <li>
            <Link
              className={`text-xs lg:text-base tracking-widest ${
                pathname === "/newsletter" ? "font-semibold" : "font-medium"
              }`}
              href="#"
            >
              Newsletter
            </Link>
          </li>
          <li>
            <Link
              className="font-medium text-xs lg:text-base tracking-widest"
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
