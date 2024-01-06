import Image from "next/image";
import Link from "next/link";

// md:justify-between md:items-end pb-4 pt-16 px-8 md:px-16

export default function Navbar() {
  return (
    <header className="flex flex-col-reverse items-center justify-center gap-y-6 border-b h-[15vh] md:flex-row md:justify-between md:items-end md:pb-4 md:px-8">
      <nav className="w-full">
        <ul className="flex uppercase justify-between px-2 md:justify-start md:gap-x-8">
          <li className="font-medium">
            <Link
              className="font-semibold text-xs lg:text-base tracking-widest"
              href="#"
            >
              / Campaign
            </Link>
          </li>
          <li>
            <Link
              className="font-medium text-xs lg:text-base tracking-widest"
              href="#"
            >
              / Tailoring
            </Link>
          </li>
          <li>
            <Link
              className="font-medium text-xs lg:text-base tracking-widest"
              href="#"
            >
              / CASUALS
            </Link>
          </li>
          <li>
            <Link
              className="font-medium text-xs lg:text-base tracking-widest"
              href="#"
            >
              / Backstage
            </Link>
          </li>
        </ul>
      </nav>
      <div>
        <Image src="/next.svg" alt="Mcwale Logo" width={200} height={100} />
      </div>
    </header>
  );
}
