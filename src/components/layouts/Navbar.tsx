"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "../ui/Logo";

type NavbarProps = {
  className?: string;
};

export default function Navbar({ className }: NavbarProps) {
  const pathname = usePathname();
  return (
    <header
      className={`flex flex-col-reverse items-center justify-center gap-y-6 border-b h-[15vh] md:flex-row md:justify-between md:items-end md:pb-4 md:px-8 ${className}`}
    >
      <nav className="w-full">
        <ul className="flex uppercase justify-between px-2 md:justify-start md:gap-x-8 lg:gap-x-16">
          <li className="font-medium">
            <Link
              className={`text-xs lg:text-base tracking-widest ${
                pathname === "/campaign" ? "font-semibold" : "font-medium"
              }`}
              href="/campaign"
            >
              / Campaign
            </Link>
          </li>
          <li>
            <Link
              className={`text-xs lg:text-base tracking-widest ${
                pathname === "/tailoring" ? "font-semibold" : "font-medium"
              }`}
              href="/tailoring"
            >
              / Tailoring
            </Link>
          </li>
          <li>
            <Link
              className={`text-xs lg:text-base tracking-widest ${
                pathname === "/casuals" ? "font-semibold" : "font-medium"
              }`}
              href="/casuals"
            >
              / CASUALS
            </Link>
          </li>
          <li>
            <Link
              className={`text-xs lg:text-base tracking-widest ${
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
    </header>
  );
}
