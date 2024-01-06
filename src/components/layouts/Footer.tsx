import Link from "next/link";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterCircle,
} from "react-icons/ai";

// px-16 py-4 flex justify-between items-center

export default function Footer() {
  return (
    <footer className="border-t h-[8vh] flex flex-col items-center md:flex-row md:justify-between md:px-8 lg:px-16">
      <nav className="hidden md:block">
        <ul className="md:flex md:gap-x-3 lg:gap-x-16 uppercase">
          <li className="font-medium">
            <Link
              className="font-medium text-xs lg:text-base tracking-widest"
              href="#"
            >
              About us
            </Link>
          </li>
          <li>
            <Link
              className="font-medium text-xs lg:text-base tracking-widest"
              href="#"
            >
              Appointment
            </Link>
          </li>
          <li>
            <Link
              className="font-medium text-xs lg:text-base tracking-widest"
              href="#"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              className="font-medium text-xs lg:text-base tracking-widest"
              href="#"
            >
              Policy
            </Link>
          </li>
          <li>
            <Link
              className="font-medium text-xs lg:text-base tracking-widest"
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
        <p className="uppercase text-xs">
          &copy; Mcwale {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
